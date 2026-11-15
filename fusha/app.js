/* ============================================================
   FUSHA — app.js — application logic
   State, spaced repetition, weekly review, adaptive timeline,
   speech input, AI tutor, rendering
   ============================================================ */
'use strict';
const F = window.FUSHA;

/* ---------- persistence ---------- */
const KEY = 'fusha.v1';
const KEY_API = 'fusha.apikey';   // kept apart from progress so exports never contain it
const DAY = 86400000;
const now = () => Date.now();
function dayStr(d){ d = d || new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
const todayStr = () => dayStr();

const defaultState = () => ({
  created: now(),
  lessons: {},              // id -> {done:true, score, ts}
  vocab: {},                // ar -> card {ease,interval,due,reps,lapses}
  activity: {},             // 'YYYY-MM-DD' -> {xp, lessons, reviews, secs}
  streak: 0, lastActive: null,
  settings: { tashkil: true, dailyGoal: 30, model: 'claude-opus-5-5' },
  seenDecks: {},
  weekly: { week:null, done:false, skips:0, skippedOn:null }
});

let S;
function load(){
  try { S = JSON.parse(localStorage.getItem(KEY)) || defaultState(); }
  catch(e){ S = defaultState(); }
  const d = defaultState();
  for (const k in d) if (!(k in S)) S[k] = d[k];
  for (const k in d.settings) if (!(k in S.settings)) S.settings[k] = d.settings[k];
}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }

/* ---------- activity / streak ---------- */
function bump(field, n){
  const t = todayStr();
  const a = S.activity[t] || (S.activity[t] = { xp:0, lessons:0, reviews:0, secs:0 });
  a[field] = (a[field]||0) + n;
  if (S.lastActive !== t){
    const y = dayStr(new Date(Date.now()-DAY));
    S.streak = (S.lastActive === y) ? S.streak+1 : 1;
    S.lastActive = t;
  }
  save();
}
let sessionStart = now();
function flushTime(){
  const secs = Math.round((now()-sessionStart)/1000);
  if (secs>=5 && secs<3600 && !document.hidden) bump('secs', secs);
  sessionStart = now();
}
setInterval(flushTime, 30000);
document.addEventListener('visibilitychange', ()=>{ if(document.hidden){ const s=Math.round((now()-sessionStart)/1000); if(s>=5&&s<3600) bump('secs',s); } sessionStart=now(); });

/* ---------- progress math ---------- */
function lessonById(id){ return F.lessons.find(l=>l.id===id); }
function lessonsOf(track){ return F.lessons.filter(l=>l.track===track).sort((a,b)=>a.order-b.order); }
function isDone(id){ return !!(S.lessons[id] && S.lessons[id].done); }
function totalXP(){ return F.lessons.reduce((x,L)=>x+(isDone(L.id)?L.xp:0),0); }
function trackProgress(track){
  const ls = lessonsOf(track); if(!ls.length) return 0;
  return ls.filter(l=>isDone(l.id)).length / ls.length;
}
function trackName(t){ const x=F.tracks.find(x=>x.id===t); return x?x.name:t; }
function prereqMet(L){ return (L.prereq||[]).every(isDone); }

function completeLesson(id, score){
  const prev = S.lessons[id];
  S.lessons[id] = { done:true, score:score, ts: prev&&prev.done ? prev.ts : now() };
  const L = lessonById(id);
  if (L && !(prev&&prev.done)){
    bump('xp', L.xp); bump('lessons', 1);
    if (L.deck && !S.seenDecks[L.deck]) introduceDeck(L.deck);
  }
  save();
}

/* ---------- spaced repetition (SM-2 style) ---------- */
function introduceDeck(deck){
  S.seenDecks[deck] = true;
  F.vocab.filter(v=>v.deck===deck).forEach(v=>{
    if(!S.vocab[v.ar]) S.vocab[v.ar] = { ease:2.3, interval:0, due:now(), reps:0, lapses:0 };
  });
  save();
}
function dueCards(){ const t=now(); return F.vocab.filter(v=> S.vocab[v.ar] && S.vocab[v.ar].due <= t); }
function reviewCard(ar, grade){ // 0 again, 1 hard, 2 good, 3 easy
  const c = S.vocab[ar]; if(!c) return;
  if (grade===0){
    c.lapses++; c.reps=0; c.interval=0; c.ease=Math.max(1.3,c.ease-0.2);
    c.due = now() + 60000;
  } else {
    c.reps++;
    if (c.reps===1) c.interval = grade===3?4:1;
    else if (c.reps===2) c.interval = 6;
    else c.interval = Math.round(c.interval * c.ease);
    if (grade===1){ c.ease=Math.max(1.3,c.ease-0.15); c.interval=Math.max(1,Math.round(c.interval*0.6)); }
    if (grade===3) c.ease+=0.15;
    c.due = now() + c.interval*DAY;
  }
  bump('reviews',1);
}
function vocabStats(){
  let seen=0, mature=0, due=0; const t=now();
  for(const ar in S.vocab){ const c=S.vocab[ar]; seen++; if(c.interval>=21) mature++; if(c.due<=t) due++; }
  return { seen, mature, due, total:F.vocab.length };
}

/* ---------- adaptive timeline ---------- */
/* XP per calendar day over the last 14 days (or since you started, if
   that is more recent). Days you skip count as zero, so studying more
   often pulls every projected date earlier and gaps push them back. */
function recentXPPerDay(){
  const days = Object.keys(S.activity).filter(d=>S.activity[d].xp>0).sort();
  if(!days.length) return 0;
  const today = new Date(todayStr()).getTime();
  const first = new Date(days[0]).getTime();
  const span = Math.max(3, Math.min(14, Math.round((today-first)/DAY)+1));
  const cutoff = today - (span-1)*DAY;
  let xp=0;
  days.forEach(d=>{ if(new Date(d).getTime()>=cutoff) xp+=S.activity[d].xp; });
  return xp/span;
}
function activeDays14(){
  const cutoff = new Date(todayStr()).getTime()-13*DAY;
  return Object.keys(S.activity).filter(d=>S.activity[d].xp>0 && new Date(d).getTime()>=cutoff).length;
}
function milestoneStatus(m){
  const need=[];
  for (const tr in m.reqTracks) if (trackProgress(tr) < m.reqTracks[tr]-0.001) need.push(tr);
  return { reached: totalXP()>=m.xpNeeded && !need.length, need };
}
function etaFor(m){
  if (milestoneStatus(m).reached) return { reached:true };
  let trackGap = 0;
  for (const tr in m.reqTracks){
    const ls = lessonsOf(tr);
    const needCount = Math.ceil(m.reqTracks[tr]*ls.length - 0.001);
    const have = ls.filter(l=>isDone(l.id)).length;
    trackGap += ls.filter(l=>!isDone(l.id)).slice(0, Math.max(0,needCount-have)).reduce((s,l)=>s+l.xp,0);
  }
  const gap = Math.max(m.xpNeeded-totalXP(), trackGap, 1);
  const rate = recentXPPerDay();
  if (rate<=0) return { reached:false, days:null, gap };
  const days = Math.ceil(gap/rate);
  return { reached:false, days, gap, date:new Date(Date.now()+days*DAY) };
}

/* ---------- weekly review (15 min at most, 3 skips per week) ---------- */
function weekStart(){ const x=new Date(); x.setHours(0,0,0,0); x.setDate(x.getDate()-((x.getDay()+6)%7)); return x; }
function weekly(){
  const k = dayStr(weekStart());
  if(!S.weekly || S.weekly.week!==k){ S.weekly={ week:k, done:false, skips:0, skippedOn:null }; save(); }
  return S.weekly;
}
/* due once there is material learned before this week and it is not yet done */
function weeklyDue(){
  const w=weekly(); if(w.done) return false;
  const ws=weekStart().getTime();
  return Object.values(S.lessons).some(l=>l.done && l.ts<ws);
}
/* true when new lessons are locked: review due and no skip in effect today */
function weeklyBlocks(){ return weeklyDue() && weekly().skippedOn!==todayStr(); }

/* ---------- DOM helpers ---------- */
const $ = (s,r)=>(r||document).querySelector(s);
function el(tag, cls, html){ const e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; }
function tx(tag, cls, text){ const e=el(tag,cls); e.textContent=text; return e; }
function btn(label,cls,fn){ const b=el('button','btn '+(cls||''),label); b.onclick=fn; return b; }
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function fmtDate(d){ return d.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}); }
function relDays(days){
  if(days==null) return 'finish a lesson to get a date';
  if(days<=1) return 'about a day away';
  if(days<14) return `~${days} days away`;
  if(days<60) return `~${Math.round(days/7)} weeks away`;
  return `~${Math.round(days/30)} months away`;
}
function modal(wide){
  const back=el('div','modal-back');
  const box=el('div','modal'+(wide?' wide':''));
  const close=el('button','modal-x','✕'); close.setAttribute('aria-label','Close'); close.onclick=()=>api.close();
  box.appendChild(close);
  const slot=el('div','modal-slot'); box.appendChild(slot);
  back.appendChild(box);
  back.onclick=e=>{ if(e.target===back) api.close(); };
  document.body.appendChild(back); document.body.style.overflow='hidden';
  const api={ onclose:null,
    set:(node)=>{ slot.innerHTML=''; slot.appendChild(node); box.scrollTop=0; },
    close:()=>{ back.remove(); if(!$('.modal-back')) document.body.style.overflow=''; if(api.onclose) api.onclose(); } };
  return api;
}

/* ---------- shell & nav ---------- */
const TABS = [['home','Home','◈'],['learn','Learn','ا'],['review','Review','↻'],['read','Reader','ق'],['speak','Speak','م'],['timeline','Timeline','◷']];
let current = 'home';
function render(){
  const app = $('#app'); app.innerHTML='';
  app.appendChild(topbar());
  const main = el('main','main');
  main.appendChild(({home:viewHome,learn:viewLearn,review:viewReview,read:viewRead,speak:viewSpeak,timeline:viewTimeline})[current]());
  app.appendChild(main);
  app.appendChild(navbar());
}
function go(tab){ current=tab; render(); window.scrollTo(0,0); }
function topbar(){
  const bar = el('div','topbar');
  bar.appendChild(el('div','brand',`<span class="brand-char">ف</span><div><div class="brand-name">Fuṣḥā</div><div class="brand-sub">Classical Arabic</div></div>`));
  const right = el('div','tb-right');
  right.appendChild(el('div','chip',`🔥 ${S.streak}d`));
  right.appendChild(el('div','chip',`✦ ${totalXP()} XP`));
  bar.appendChild(right);
  return bar;
}
function navbar(){
  const nav = el('nav','nav');
  TABS.forEach(([id,label,icon])=>{
    const b = el('button','nav-btn'+(current===id?' active':''),`<span class="nav-ic">${icon}</span><span class="nav-lb">${label}</span>`);
    if(id==='review'){ const n=dueCards().length+(weeklyDue()?1:0); if(n) b.appendChild(el('span','nav-badge',n)); }
    b.onclick=()=>go(id);
    nav.appendChild(b);
  });
  return nav;
}

/* ---------- HOME ---------- */
function weeklyCard(){
  const w=weekly(); const left=3-w.skips;
  const c=el('div','card action');
  c.innerHTML=`<div class="ac-lbl">Weekly review · 15 min at most</div>
    <div class="ac-title">${weeklyBlocks()&&left<=0?'Required before your next lesson':'Due this week'}</div>
    <div class="ac-sub">${left>0?left+' of 3 skips left this week':'No skips left this week'}</div>`;
  c.appendChild(btn('Start weekly review','gold',()=>startWeekly()));
  return c;
}
function viewHome(){
  const v = el('div','view');
  const a=S.activity[todayStr()]||{xp:0,lessons:0,reviews:0,secs:0};
  const goal=S.settings.dailyGoal; const pct=Math.min(100,Math.round((a.xp/goal)*100));
  const hero = el('div','card hero');
  hero.appendChild(el('div','hero-h','السَّلَامُ عَلَيْكُمْ'));
  hero.appendChild(el('div','hero-sub','Your goal: read any Arabic without tashkīl, and speak fuṣḥā fluently.'));
  const ring = el('div','goal-ring');
  ring.style.background=`conic-gradient(var(--gold) ${pct*3.6}deg, var(--bg3) 0deg)`;
  ring.appendChild(el('div','goal-inner',`<b>${a.xp}</b><span>/${goal} XP</span>`));
  const gw=el('div','goal-wrap'); gw.appendChild(ring);
  gw.appendChild(el('div','goal-txt',`<div><b>${a.lessons}</b> lessons</div><div><b>${a.reviews}</b> reviews</div><div><b>${Math.round((a.secs||0)/60)}</b> min today</div>`));
  hero.appendChild(gw);
  v.appendChild(hero);

  if(weeklyDue()) v.appendChild(weeklyCard());

  const next = nextLesson();
  const cont=el('div','card action');
  if(next){
    cont.innerHTML=`<div class="ac-lbl">Continue learning</div><div class="ac-title">${next.title}</div><div class="ac-ar">${next.ar}</div>`;
    cont.appendChild(btn('Start →','primary',()=>openLesson(next.id)));
  } else {
    cont.innerHTML=`<div class="ac-lbl">ما شاء الله</div><div class="ac-title">All lessons complete</div>`;
    cont.appendChild(btn('Open the Reader','primary',()=>go('read')));
  }
  v.appendChild(cont);

  const dn=dueCards().length;
  if(dn){
    const r=el('div','card action');
    r.innerHTML=`<div class="ac-lbl">Vocabulary</div><div class="ac-title">${dn} word${dn>1?'s':''} due</div>`;
    r.appendChild(btn('Review now ↻','gold',()=>go('review')));
    v.appendChild(r);
  }

  const nm = F.milestones.find(m=>!milestoneStatus(m).reached);
  if(nm){
    const e=etaFor(nm);
    const m=el('div','card action');
    m.innerHTML=`<div class="ac-lbl">Next milestone</div><div class="ac-title">${nm.title}</div><div class="ac-ar">${nm.ar}</div>
      <div class="ac-sub"><b>${relDays(e.days)}</b>${e.date?' · '+fmtDate(e.date):''}</div>`;
    m.appendChild(btn('See full timeline','ghost',()=>go('timeline')));
    v.appendChild(m);
  }

  v.appendChild(el('div','sec-h','Your tracks'));
  const grid=el('div','track-grid');
  F.tracks.forEach(tr=>{
    const p=Math.round(trackProgress(tr.id)*100);
    const c=el('button','track-mini');
    c.style.setProperty('--tc',tr.color);
    c.innerHTML=`<span class="tm-ic">${tr.icon}</span><span class="tm-nm">${tr.name}</span>
      <span class="tm-bar"><span style="width:${p}%"></span></span><span class="tm-pct">${p}%</span>`;
    c.onclick=()=>{ go('learn'); setTimeout(()=>{ const e=document.getElementById('track-'+tr.id); if(e) e.scrollIntoView({block:'start'}); },30); };
    grid.appendChild(c);
  });
  v.appendChild(grid);
  return v;
}
function nextLesson(){
  for(const tr of F.tracks) for(const L of lessonsOf(tr.id)) if(!isDone(L.id) && prereqMet(L)) return L;
  return null;
}

/* ---------- LEARN ---------- */
function viewLearn(){
  const v=el('div','view');
  v.appendChild(el('div','sec-h','Curriculum'));
  v.appendChild(el('div','hint','Study a lesson, or tap <b>Test out</b> to skip it by proving you already know it (80% to pass). Testing out works on locked lessons too.'));
  if(weeklyDue()) v.appendChild(weeklyCard());
  F.tracks.forEach(tr=>{
    const sec=el('div','track-sec'); sec.id='track-'+tr.id;
    const head=el('div','track-head');
    head.innerHTML=`<span class="th-ic" style="color:${tr.color}">${tr.icon}</span>
      <div class="th-txt"><div class="th-nm">${tr.name} <span class="th-ar">${tr.ar}</span></div><div class="th-desc">${tr.desc}</div></div>
      <div class="th-pct">${Math.round(trackProgress(tr.id)*100)}%</div>`;
    sec.appendChild(head);
    const list=el('div','lesson-list');
    lessonsOf(tr.id).forEach(L=>{
      const done=isDone(L.id), open=prereqMet(L);
      const row=el('div','lesson-row'+(done?' done':'')+(open||done?'':' locked'));
      row.innerHTML=`<span class="lr-dot">${done?'✓':open?'○':'🔒'}</span>
        <div class="lr-txt"><div class="lr-title">${L.title}</div>
        <div class="lr-ar">${L.xp} XP${done&&S.lessons[L.id].score!=null?' · '+S.lessons[L.id].score+'%':''}${!open&&!done?' · needs '+L.prereq.filter(p=>!isDone(p)).map(p=>lessonById(p).title).join(', '):''}</div></div>`;
      const acts=el('div','lr-acts');
      if(done) acts.appendChild(btn('Review','mini ghost',()=>openLesson(L.id)));
      else {
        if(open) acts.appendChild(btn('Study','mini',()=>openLesson(L.id)));
        acts.appendChild(btn('Test out','mini ghost',()=>openSkipTest(L.id)));
      }
      row.appendChild(acts);
      list.appendChild(row);
    });
    sec.appendChild(list);
    v.appendChild(sec);
  });
  return v;
}

/* ---------- LESSON / QUIZ ---------- */
function openLesson(id){
  const L=lessonById(id); if(!L) return;
  if(!isDone(id) && weeklyBlocks()) return openWeeklyGate(()=>openLesson(id));
  const m=modal();
  const body=el('div','lesson-view');
  body.appendChild(el('div','lv-eyebrow',trackName(L.track)+' · '+L.xp+' XP'));
  body.appendChild(el('div','lv-title',L.title+' <span class="lv-ar">'+L.ar+'</span>'));
  body.appendChild(el('div','lv-content',L.content));
  if(L.examples&&L.examples.length){
    body.appendChild(el('div','lv-sec','Examples'));
    L.examples.forEach(ex=>{
      body.appendChild(el('div','ex-card',`<div class="ex-ar">${ex.ar.replace(/\n/g,'<br>')}</div><div class="ex-en">${ex.en}</div>`+(ex.src?`<div class="ex-src">— ${ex.src}</div>`:'')));
    });
  }
  body.appendChild(btn(isDone(id)?'Retake the quiz →':'Take the quiz →','primary wide',()=>{ m.close(); openQuiz(id,false); }));
  m.set(body);
}
function openSkipTest(id){
  const L=lessonById(id);
  if(weeklyBlocks()) return openWeeklyGate(()=>openSkipTest(id));
  const m=modal(); const b=el('div','skip-intro');
  b.innerHTML=`<div class="si-ic">⏭</div><div class="si-h">Test out of this lesson</div>
    <div class="si-p">Answer the questions for <b>${L.title}</b>. Score <b>80% or more</b> and it is marked complete: you keep the XP and unlock what depends on it.</div>`;
  b.appendChild(btn('Begin test-out','primary',()=>{ m.close(); openQuiz(id,true); }));
  b.appendChild(btn('Cancel','ghost',()=>m.close()));
  m.set(b);
}
/* one multiple-choice question; calls done(correct) after the learner answers and taps Next */
function drawMC(body, q, nextLabel, done){
  body.appendChild(el('div','qz-q',q.q));
  const opts=el('div','qz-opts'); let answered=false;
  const order=shuffle(q.c.map((c,idx)=>({c,idx})));
  const nb=btn(nextLabel,'primary wide',()=>done(ok)); nb.style.display='none';
  let ok=false;
  order.forEach(o=>{
    const b=el('button','qz-opt',o.c);
    b.onclick=()=>{
      if(answered) return; answered=true; ok=o.idx===q.a;
      b.classList.add(ok?'right':'wrong');
      [...opts.children].forEach((cb,ci)=>{ cb.disabled=true; if(order[ci].idx===q.a) cb.classList.add('right'); });
      body.insertBefore(el('div','qz-ex'+(ok?' ok':' no'),(ok?'✓ ':'✗ ')+(q.x||'')),nb);
      nb.style.display='block';
    };
    opts.appendChild(b);
  });
  body.appendChild(opts); body.appendChild(nb);
}
function openQuiz(id, isSkip){
  const L=lessonById(id); if(!L) return;
  const qs=shuffle(L.quiz.slice());
  const pass=Math.ceil(qs.length*(isSkip?0.8:0.6));
  let i=0, correct=0;
  const m=modal();
  function draw(){
    const body=el('div','quiz-view');
    body.appendChild(el('div','qz-top',`<span>${isSkip?'Test-out':'Quiz'} · ${L.title}</span><span>${i+1}/${qs.length}</span>`));
    const bar=el('div','qz-prog'); bar.appendChild(el('span')).style.width=Math.round(i/qs.length*100)+'%'; body.appendChild(bar);
    drawMC(body, qs[i], i<qs.length-1?'Next →':'See result', ok=>{ if(ok) correct++; i++; if(i<qs.length) draw(); else finish(); });
    m.set(body);
  }
  function finish(){
    const score=Math.round(correct/qs.length*100), passed=correct>=pass;
    const body=el('div','quiz-result');
    body.appendChild(el('div','qr-emoji',passed?'✓':'↻'));
    body.appendChild(el('div','qr-score',score+'%'));
    body.appendChild(el('div','qr-sub',`${correct}/${qs.length} correct · ${pass} needed`));
    if(passed){
      const first=!isDone(id);
      completeLesson(id,score);
      body.appendChild(el('div','qr-msg',(isSkip?`Tested out of <b>${L.title}</b>.`:'Lesson complete.')+(first?` +${L.xp} XP.`:'')+(first&&L.deck?' Its vocabulary is now in your review queue.':'')));
      body.appendChild(btn('Continue','primary wide',()=>{ m.close(); render(); }));
    } else {
      body.appendChild(el('div','qr-msg',isSkip?'Not enough to skip yet. Study the lesson, then try again.':'Read the lesson again and retake the quiz.'));
      if(prereqMet(L)) body.appendChild(btn('Study lesson','ghost wide',()=>{ m.close(); openLesson(id); }));
      body.appendChild(btn('Retry','primary wide',()=>{ i=0; correct=0; shuffle(qs); draw(); }));
    }
    m.set(body); render();
  }
  draw();
}

/* ---------- WEEKLY REVIEW UI ---------- */
function openWeeklyGate(proceed){
  const w=weekly(); const left=3-w.skips;
  const m=modal(); const b=el('div','skip-intro');
  b.innerHTML=`<div class="si-ic">↻</div><div class="si-h">Weekly review ${left>0?'is due':'is required'}</div>
    <div class="si-p">${left>0
      ? `A mixed review of everything you have learned, <b>15 minutes at most</b>. You can skip it <b>${left}</b> more time${left>1?'s':''} this week; each skip lasts for today.`
      : `You have used all <b>3 skips</b> this week. Finish the review (15 minutes at most) to unlock new lessons.`}</div>`;
  b.appendChild(btn('Start review','primary',()=>{ m.close(); startWeekly(proceed); }));
  if(left>0) b.appendChild(btn(`Skip for today (${left} left)`,'ghost',()=>{
    w.skips++; w.skippedOn=todayStr(); save(); m.close(); render(); if(proceed) proceed();
  }));
  m.set(b);
}
function buildWeekly(){
  const items=[];
  const due=dueCards();
  const rest=F.vocab.filter(v=>S.vocab[v.ar] && !due.includes(v));
  shuffle(due.slice()).concat(shuffle(rest)).slice(0,14).forEach(v=>items.push({t:'v',v}));
  const qs=[];
  F.lessons.filter(l=>isDone(l.id)).forEach(L=>L.quiz.forEach(q=>qs.push({t:'q',q,L})));
  shuffle(qs).slice(0,16).forEach(x=>items.push(x));
  return shuffle(items);
}
function startWeekly(after){
  const LIMIT=15*60*1000;
  const items=buildWeekly();
  if(!items.length){ if(after) after(); return; }
  const m=modal(); const t0=now();
  let i=0, right=0, seen=0, ended=false, clock=null; const weak={};
  const fmt=ms=>{ const s=Math.max(0,Math.ceil(ms/1000)); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); };
  const timer=setInterval(()=>{
    const left=LIMIT-(now()-t0);
    if(clock) clock.textContent=fmt(left);
    if(left<=0) finish();
  },1000);
  m.onclose=()=>clearInterval(timer);
  function next(){ i++; if(i<items.length) draw(); else finish(); }
  function draw(){
    const it=items[i]; const body=el('div','quiz-view');
    const top=el('div','qz-top',`<span>Weekly review · ${i+1}/${items.length}</span>`);
    clock=el('span','wk-clock',fmt(LIMIT-(now()-t0))); top.appendChild(clock); body.appendChild(top);
    const pr=el('div','qz-prog'); pr.appendChild(el('span')).style.width=Math.round(i/items.length*100)+'%'; body.appendChild(pr);
    if(it.t==='v') drawCard(body, it.v, g=>{ seen++; if(g>=2) right++; next(); });
    else {
      body.appendChild(el('div','wk-from',it.L.title));
      drawMC(body, it.q, 'Next →', ok=>{ seen++; if(ok) right++; else weak[it.L.id]=it.L.title; next(); });
    }
    m.set(body);
  }
  function finish(){
    if(ended) return; ended=true; clearInterval(timer);
    const w=weekly(); w.done=true; w.doneAt=now(); save();
    const body=el('div','quiz-result');
    body.appendChild(el('div','qr-emoji','✓'));
    body.appendChild(el('div','qr-score',seen?Math.round(right/seen*100)+'%':'Done'));
    body.appendChild(el('div','qr-sub',`${right}/${seen} recalled · ${fmt(now()-t0)} spent`));
    const ids=Object.keys(weak);
    body.appendChild(el('div','qr-msg',ids.length?'Weekly review complete. Worth another look:':'Weekly review complete. Nothing slipped; new lessons are unlocked.'));
    ids.slice(0,5).forEach(id=>body.appendChild(btn(weak[id],'ghost wide',()=>{ m.close(); openLesson(id); })));
    body.appendChild(btn('Continue','primary wide',()=>{ m.close(); render(); if(after) after(); }));
    m.set(body); render();
  }
  draw();
}

/* ---------- VOCAB REVIEW ---------- */
function drawCard(body, v, graded){
  const card=el('div','sr-card'); card.innerHTML=`<div class="sr-front">${v.ar}</div>`;
  const tap=el('div','sr-tap','tap the card to reveal');
  const grades=el('div','sr-grades'); grades.style.display='none';
  [['Again',0,'g-again'],['Hard',1,'g-hard'],['Good',2,'g-good'],['Easy',3,'g-easy']].forEach(([lb,g,cl])=>{
    grades.appendChild(btn(lb,'sr-grade '+cl,()=>{ reviewCard(v.ar,g); graded(g); }));
  });
  card.onclick=()=>{ card.innerHTML=`<div class="sr-front small">${v.ar}</div><div class="sr-back">${v.en}</div>`; grades.style.display='flex'; tap.style.display='none'; };
  body.appendChild(card); body.appendChild(tap); body.appendChild(grades);
}
function viewReview(){
  const v=el('div','view');
  v.appendChild(el('div','sec-h','Review'));
  if(weeklyDue()) v.appendChild(weeklyCard());
  else if(weekly().done) v.appendChild(el('div','hint','✓ This week\'s review is done.'));
  const st=vocabStats();
  v.appendChild(el('div','card sr-stats',`<div><b>${st.due}</b><span>due now</span></div><div><b>${st.seen}</b><span>learning</span></div><div><b>${st.mature}</b><span>mastered</span></div><div><b>${st.total}</b><span>total</span></div>`));
  if(!st.seen){
    v.appendChild(el('div','empty','Complete a vocabulary lesson to start your review deck. Each word then comes back just before you would forget it.'));
    return v;
  }
  const due=dueCards();
  if(due.length) v.appendChild(btn(`Review ${due.length} due word${due.length>1?'s':''} ↻`,'primary wide',()=>startReview(due)));
  else {
    v.appendChild(el('div','empty','✓ No words due right now.'));
    v.appendChild(btn('Practice 10 anyway','ghost wide',()=>startReview(shuffle(F.vocab.filter(x=>S.vocab[x.ar])).slice(0,10))));
  }
  return v;
}
function startReview(cards){
  cards=shuffle(cards.slice()); let i=0; const m=modal();
  function draw(){
    if(i>=cards.length){
      const body=el('div','quiz-result');
      body.appendChild(el('div','qr-emoji','✓'));
      body.appendChild(el('div','qr-score',cards.length+' reviewed'));
      body.appendChild(btn('Done','primary wide',()=>{ m.close(); render(); }));
      m.set(body); render(); return;
    }
    const body=el('div','quiz-view');
    body.appendChild(el('div','qz-top',`<span>Vocabulary</span><span>${i+1}/${cards.length}</span>`));
    drawCard(body, cards[i], ()=>{ i++; draw(); });
    m.set(body);
  }
  draw();
}

/* ---------- READER ---------- */
let readFilter='all';
function stripTashkil(s){
  return s.replace(/[ً-ْٰـۖ-ۜ]/g,'').replace(/ٱ/g,'ا').replace(/ {2,}/g,' ');
}
/* for comparing heard speech with text: no marks, unified letter variants */
function norm(s){
  return stripTashkil(s).replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^ء-ي\s]/g,'').trim();
}
function viewRead(){
  const v=el('div','view');
  v.appendChild(el('div','sec-h','Reader'));
  v.appendChild(el('div','hint','Switch tashkīl off to train unvocalized reading. Tap a word for its meaning. Use <b>Read aloud</b> to have the app listen to you.'));
  const filt=el('div','filter-row');
  [['all','All'],['quran','Qur\'an'],['prose','Prose'],['poetry','Poetry']].forEach(([k,lb])=>{
    const b=el('button','filter-chip'+(readFilter===k?' on':''),lb);
    b.onclick=()=>{ readFilter=k; render(); };
    filt.appendChild(b);
  });
  v.appendChild(filt);
  const list=el('div','text-list');
  F.texts.filter(t=>readFilter==='all'||t.kind===readFilter).sort((a,b)=>a.level-b.level).forEach(t=>{
    const c=el('button','text-card');
    c.innerHTML=`<div class="tc-lvl lvl${t.level}">L${t.level}</div><div class="tc-main"><div class="tc-title">${t.title}</div><div class="tc-ar">${t.ar_title}</div><div class="tc-src">${t.src}</div></div><div class="tc-go">→</div>`;
    c.onclick=()=>openText(t.id);
    list.appendChild(c);
  });
  v.appendChild(list);
  return v;
}
function openText(id){
  const t=F.texts.find(x=>x.id===id); if(!t) return;
  const m=modal(true);
  let showT=S.settings.tashkil;
  const glossMap={}; (t.gloss||[]).forEach(g=>{ glossMap[stripTashkil(g[0])]=g[1]; });
  function draw(){
    const body=el('div','reader-view');
    const head=el('div','rv-head');
    head.innerHTML=`<div><div class="rv-title">${t.title}</div><div class="rv-src">${t.src}</div></div>`;
    const tog=el('button','tashkil-tog'+(showT?' on':''),showT?'Tashkīl: on':'Tashkīl: off');
    tog.onclick=()=>{ showT=!showT; S.settings.tashkil=showT; save(); draw(); };
    head.appendChild(tog);
    body.appendChild(head);

    const txt=el('div','rv-text'); const words=[];
    const pop=el('div','gloss-pop','Tap a word for its meaning.');
    t.ar.split('\n').forEach((line,li)=>{
      if(li) txt.appendChild(el('br'));
      line.split(/\s+/).filter(Boolean).forEach(tok=>{
        if(/^[﴿﴾٠-٩۝ۖ-ۜ]+$/.test(tok)){
          if(showT || /[﴿۝]/.test(tok)) { txt.appendChild(tx('span','verse-mark',tok)); txt.appendChild(document.createTextNode(' ')); }
          return;
        }
        const clean=tok.replace(/[،.:؟]/g,'');
        const w=tx('span','rv-word',showT?tok:stripTashkil(tok));
        const g=glossMap[stripTashkil(clean)];
        w.onclick=()=>{
          txt.querySelectorAll('.sel').forEach(x=>x.classList.remove('sel'));
          w.classList.add('sel'); pop.classList.add('show'); pop.textContent='';
          pop.appendChild(tx('b',null,clean)); pop.appendChild(document.createTextNode(g?' — '+g:' — no gloss for this word yet'));
        };
        txt.appendChild(w); txt.appendChild(document.createTextNode(' '));
        words.push({el:w,key:norm(tok)});
      });
    });
    body.appendChild(txt);
    body.appendChild(pop);
    if(speechAvailable()) body.appendChild(btn('🎙 Read aloud & check','gold wide',()=>{
      pop.classList.add('show'); pop.textContent='Listening… read aloud from the beginning.';
      listen().then(heard=>gradeReading(words,heard,pop)).catch(e=>{ pop.textContent=speechErr(e); });
    }));
    else body.appendChild(el('div','hint','Read-aloud checking needs speech recognition (Chrome, Edge, or the Android app).'));
    body.appendChild(el('div','rv-tip', showT
      ? 'Read it aloud, then switch tashkīl off and read it again.'
      : 'Reconstruct every vowel from pattern and grammar, read aloud, then switch tashkīl on to check.'));
    m.set(body);
  }
  draw();
}
/* align what was heard to the text (longest common subsequence of words) */
function gradeReading(words, heardText, out){
  const a=words.map(w=>w.key), b=norm(heardText).split(/\s+/).filter(Boolean);
  const n=a.length, k=b.length;
  const dp=Array.from({length:n+1},()=>new Array(k+1).fill(0));
  for(let i=n-1;i>=0;i--) for(let j=k-1;j>=0;j--)
    dp[i][j]= a[i]&&a[i]===b[j] ? dp[i+1][j+1]+1 : Math.max(dp[i+1][j],dp[i][j+1]);
  const hit=new Set(); let i=0,j=0;
  while(i<n&&j<k){
    if(a[i]&&a[i]===b[j]){ hit.add(i); i++; j++; }
    else if(dp[i+1][j]>=dp[i][j+1]) i++; else j++;
  }
  const last=hit.size?Math.max(...hit):-1;
  words.forEach((w,idx)=>{
    w.el.classList.remove('heard','missed');
    if(hit.has(idx)) w.el.classList.add('heard');
    else if(idx<last && w.key) w.el.classList.add('missed');
  });
  const reached=words.slice(0,last+1).filter(w=>w.key).length;
  out.textContent='';
  out.appendChild(el('div',null,reached
    ? `Heard <b>${hit.size}</b> of the first <b>${reached}</b> words. Words in red were not recognised: read them again.`
    : 'None of the text was recognised. Read from the beginning and try again.'));
  out.appendChild(tx('div','heard-raw','Heard: '+heardText));
  bump('reviews',1);
}

/* ---------- SPEECH INPUT (browser API, or the native bridge in the APK) ---------- */
function speechAvailable(){ return !!(window.FushaNative || window.SpeechRecognition || window.webkitSpeechRecognition); }
function listen(){
  return new Promise((res,rej)=>{
    if(window.FushaNative){
      const guard=setTimeout(()=>rej(new Error('no-speech')),30000);
      window.__fushaSpeech=(text,err)=>{ clearTimeout(guard); if(err) rej(new Error(err)); else res(text); };
      window.FushaNative.startListening('ar-SA'); return;
    }
    const R=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!R) return rej(new Error('unsupported'));
    const r=new R(); r.lang='ar-SA'; r.interimResults=false; r.maxAlternatives=1;
    let settled=false;
    const fail=c=>{ if(settled) return; settled=true; clearTimeout(guard); rej(new Error(c)); };
    const guard=setTimeout(()=>{ try{ r.abort(); }catch(e){} fail('no-speech'); },20000);
    r.onresult=e=>{ if(settled) return; settled=true; clearTimeout(guard); res(e.results[0][0].transcript); };
    r.onerror=e=>fail(e.error||'error');
    r.onend=()=>fail('no-speech');
    try{ r.start(); }catch(e){ fail('error'); }
  });
}
function speechErr(e){
  const c=(e&&e.message)||'';
  if(c==='unsupported') return 'Speech recognition is not available here. Type instead, or use Chrome, Edge, or the Android app.';
  if(c==='permission'||c==='not-allowed'||c==='service-not-allowed') return 'Microphone permission is needed. Allow it, then tap the microphone again.';
  if(c==='no-speech') return 'Nothing was heard. Tap the microphone and try again.';
  if(c==='network') return 'Speech recognition needs an internet connection.';
  return 'Could not listen ('+c+'). Try again, or type instead.';
}

/* ---------- AI TUTOR (Claude API with the learner's own key) ---------- */
const TUTOR_MODELS=[['claude-opus-5-5','Opus 5.5 — most capable'],['claude-sonnet-5-5','Sonnet 5.5 — balanced'],['claude-haiku-5-5','Haiku 5.5 — fastest, cheapest']];
const TUTOR_SYS=`You are a patient, exacting tutor of Classical Arabic (the fuṣḥā of the Qur'an, hadith and classical poetry). Never use Modern Standard journalese or any dialect; prefer classical vocabulary and idiom.
The learner speaks or types to you. Spoken input reaches you as an unvocalized speech-recognition transcript: it may contain recognition slips and it carries no case endings. Judge word choice, morphology, agreement, syntax and classical idiom. Do not fault missing vowel marks, and do not fault what is plainly a recognition slip.
Reply with ONLY a JSON object and no other text:
{"ok": true if the learner's sentence was correct classical Arabic, otherwise false,
 "corrected": "the learner's sentence in correct classical Arabic, fully vocalized with all case endings",
 "notes": ["at most 3 short English notes, each naming one error and the rule behind it; empty when ok"],
 "reply": "your next turn in the conversation: 1-2 short sentences of fully vocalized classical Arabic at the learner's level, ending with a question that keeps them speaking",
 "reply_en": "English translation of reply"}
If the learner writes in English, set ok to true, put the classical Arabic for what they tried to say in "corrected", and continue.`;

async function callTutor(history, scenario){
  const key=localStorage.getItem(KEY_API);
  if(!key) throw new Error('nokey');
  let sys=TUTOR_SYS+'\nLearner\'s course progress: '+F.tracks.map(t=>`${t.name} ${Math.round(trackProgress(t.id)*100)}%`).join('; ')+'. Pitch your Arabic to that level.';
  if(scenario) sys+=`\nThe learner is doing this speaking drill: "${scenario.title}": ${scenario.prompt} Keep the conversation on the drill.`;
  const r=await fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{ 'content-type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true' },
    body:JSON.stringify({ model:S.settings.model, max_tokens:800, system:sys, messages:history })
  });
  if(!r.ok){
    let msg='HTTP '+r.status;
    try{ const j=await r.json(); if(j.error&&j.error.message) msg=j.error.message; }catch(e){}
    throw new Error(msg);
  }
  const j=await r.json();
  const text=(j.content||[]).filter(c=>c.type==='text').map(c=>c.text).join('');
  let data;
  try{ data=JSON.parse(text.slice(text.indexOf('{'),text.lastIndexOf('}')+1)); }
  catch(e){ data={ ok:true, corrected:'', notes:[], reply:text, reply_en:'' }; }
  return { raw:text, data };
}
function openTutor(scenario){
  const m=modal(true); const history=[]; let busy=false;
  const box=el('div','tutor-view');
  const head=el('div','rv-head');
  head.innerHTML=`<div><div class="rv-title">AI tutor</div><div class="rv-src">${scenario?scenario.title:'Free conversation in fuṣḥā'}</div></div>`;
  const gear=el('button','tashkil-tog','⚙ Setup'); head.appendChild(gear);
  box.appendChild(head);

  const setup=el('div','tutor-setup');
  setup.appendChild(el('div','ts-p','The tutor runs on the Claude API with <b>your own API key</b> (create one at console.anthropic.com; usage is billed to your Anthropic account). The key is stored only on this device and is sent only to api.anthropic.com.'));
  const keyIn=el('input','ts-in'); keyIn.type='password'; keyIn.placeholder='sk-ant-…'; keyIn.autocomplete='off';
  keyIn.value=localStorage.getItem(KEY_API)||'';
  const sel=el('select','set-sel');
  TUTOR_MODELS.forEach(([id,lb])=>{ const o=el('option',null,lb); o.value=id; if(id===S.settings.model) o.selected=true; sel.appendChild(o); });
  const row=el('div','ts-row'); row.appendChild(sel);
  row.appendChild(btn('Save','mini',()=>{
    const k=keyIn.value.trim();
    if(k) localStorage.setItem(KEY_API,k); else localStorage.removeItem(KEY_API);
    S.settings.model=sel.value; save(); setup.style.display='none';
    status.textContent=k?'Saved. Speak or type in Arabic.':'No key saved: the tutor can hear you but cannot correct you.';
  }));
  setup.appendChild(keyIn); setup.appendChild(row);
  setup.style.display=localStorage.getItem(KEY_API)?'none':'block';
  gear.onclick=()=>{ setup.style.display=setup.style.display==='none'?'block':'none'; };
  box.appendChild(setup);

  const log=el('div','tutor-log');
  log.appendChild(tx('div','tb tutor', scenario? scenario.prompt : 'Speak or type a sentence in classical Arabic. I will correct it and answer you.'));
  box.appendChild(log);
  const status=el('div','tutor-status', speechAvailable()?'Tap the microphone and speak.':'Speech recognition is not available here: type your Arabic instead.');
  box.appendChild(status);

  const bar=el('div','tutor-bar');
  const mic=el('button','tutor-mic','🎙'); mic.setAttribute('aria-label','Speak');
  const inp=el('input','tutor-in'); inp.dir='auto'; inp.placeholder='اكتب هنا…';
  if(speechAvailable()) bar.appendChild(mic);
  bar.appendChild(inp); bar.appendChild(btn('Send','mini',()=>send(inp.value)));
  box.appendChild(bar);
  inp.onkeydown=e=>{ if(e.key==='Enter') send(inp.value); };
  mic.onclick=()=>{
    if(busy) return;
    mic.classList.add('on'); status.textContent='Listening… speak in Arabic.';
    listen().then(t=>{ mic.classList.remove('on'); send(t); })
            .catch(e=>{ mic.classList.remove('on'); status.textContent=speechErr(e); });
  };

  async function send(text){
    text=(text||'').trim(); if(!text||busy) return;
    inp.value=''; busy=true; status.textContent='';
    log.appendChild(tx('div','tb me',text));
    history.push({ role:'user', content:text });
    const wait=tx('div','tb tutor wait','…'); log.appendChild(wait); wait.scrollIntoView({block:'end'});
    try{
      const { raw, data }=await callTutor(history, scenario);
      history.push({ role:'assistant', content:raw });
      wait.remove();
      const b=el('div','tb tutor');
      if(data.corrected){
        b.appendChild(tx('div','tt-lbl', data.ok?'✓ Correct':'✎ Corrected'));
        b.appendChild(tx('div','tt-ar'+(data.ok?' ok':' fix'), data.corrected));
      }
      (data.notes||[]).forEach(n=>b.appendChild(tx('div','tt-note','• '+n)));
      if(data.reply) b.appendChild(tx('div','tt-ar reply', data.reply));
      if(data.reply_en) b.appendChild(tx('div','tt-en', data.reply_en));
      log.appendChild(b); b.scrollIntoView({block:'end'});
      bump('reviews',1);
    }catch(e){
      wait.remove(); history.pop();
      if(e.message==='nokey'){ setup.style.display='block'; status.textContent='Heard: “'+text+'”. Add an API key above to get corrections.'; }
      else status.textContent='Tutor error: '+e.message;
    }
    busy=false;
  }
  m.set(box);
}

/* ---------- SPEAK ---------- */
function viewSpeak(){
  const v=el('div','view');
  v.appendChild(el('div','sec-h','Speak & express'));
  const tc=el('div','card action');
  tc.innerHTML=`<div class="ac-lbl">AI tutor</div><div class="ac-title">Speak, and be corrected</div>
    <div class="ac-sub">It listens, shows your sentence corrected with full tashkīl, explains each error, and answers you in fuṣḥā.</div>`;
  tc.appendChild(btn('🎙 Open conversation','primary',()=>openTutor()));
  v.appendChild(tc);
  v.appendChild(el('div','sec-h','Drills'));
  F.speakPrompts.forEach(p=>{
    const c=el('div','speak-card');
    c.innerHTML=`<div class="sp-h"><div class="sp-title">${p.title}</div><div class="sp-ar">${p.ar}</div></div><div class="sp-prompt">${p.prompt}</div>`;
    if(!isDone(p.lesson)) c.appendChild(el('div','sp-lock','Taught in: '+lessonById(p.lesson).title));
    const rev=el('details','sp-model');
    rev.appendChild(el('summary',null,'Show a model answer'));
    rev.appendChild(el('div','sp-model-ar',p.model));
    c.appendChild(rev);
    c.appendChild(btn('🎙 Practice with tutor','mini ghost',()=>openTutor(p)));
    v.appendChild(c);
  });
  return v;
}

/* ---------- TIMELINE ---------- */
function readiness(){
  const tp=trackProgress, cl=x=>Math.max(0,Math.min(1,x));
  return [
    ['Vocalized Qur\'an & readers', tp('r')],
    ['Short sūras, with understanding', cl(tp('r')*0.3+tp('v')*0.3+tp('n')*0.2+tp('q')*0.2)],
    ['Didactic poetry (Alfiyya)', cl(tp('s')*0.4+tp('n')*0.35+tp('p')*0.25)],
    ['Classical prose (hadith, fables)', cl(tp('v')*0.25+tp('s')*0.25+tp('n')*0.3+tp('p')*0.2)],
    ['Abbasid poetry (al-Mutanabbī)', cl(tp('p')*0.5+tp('n')*0.25+tp('s')*0.25)],
    ['Unvocalized prose', cl(tp('u')*0.6+tp('v')*0.2+tp('n')*0.2)],
    ['Pre-Islamic odes (Muʿallaqāt)', cl(tp('p')*0.5+tp('u')*0.5)]
  ];
}
function viewTimeline(){
  const v=el('div','view');
  v.appendChild(el('div','sec-h','Your timeline'));
  const rate=recentXPPerDay();
  v.appendChild(el('div','card tl-info',`<div class="tl-rate"><b>${rate?rate.toFixed(1):'0'}</b><span>XP / day</span></div>
    <div class="tl-rate"><b>${activeDays14()}</b><span>active days of last 14</span></div>
    <div class="tl-rate"><b>${S.streak}</b><span>day streak</span></div>`));
  v.appendChild(el('div','hint','Dates are projected from your pace over the last two weeks, counting the days you missed. Study more often and every date moves earlier. They are estimates of when you finish the course material for each stage; real fluency also needs reading volume.'));

  const line=el('div','timeline');
  F.milestones.forEach((mst,i)=>{
    const e=etaFor(mst), st=milestoneStatus(mst);
    const node=el('div','tl-node'+(st.reached?' reached':''));
    node.innerHTML=`<div class="tl-dot">${st.reached?'✓':i+1}</div>
      <div class="tl-body">
        <div class="tl-title">${mst.title} <span class="tl-arh">${mst.ar}</span></div>
        <div class="tl-desc">${mst.desc}</div>
        <div class="tl-meta">${st.reached?'<span class="tl-badge done">Reached ✓</span>'
          : `<span class="tl-badge">${relDays(e.days)}</span>`+(e.date?`<span class="tl-date">${fmtDate(e.date)}</span>`:'')+`<span class="tl-gap">${Math.round(e.gap)} XP to go</span>`}</div>
        ${!st.reached&&st.need.length?`<div class="tl-need">Needs more of: ${st.need.map(trackName).join(', ')}</div>`:''}
        <div class="tl-progbar"><span style="width:${st.reached?100:Math.min(100,Math.round(totalXP()/mst.xpNeeded*100))}%"></span></div>
      </div>`;
    line.appendChild(node);
  });
  v.appendChild(line);

  v.appendChild(el('div','sec-h','What you can read now'));
  const pr=el('div','card');
  readiness().forEach(([lb,val])=>{
    pr.appendChild(el('div','rr-row',`<span class="rr-lb">${lb}</span><span class="rr-bar"><span style="width:${Math.round(val*100)}%"></span></span><span class="rr-pct">${Math.round(val*100)}%</span>`));
  });
  v.appendChild(pr);

  v.appendChild(el('div','sec-h','Free resources'));
  const res=el('div','res-list');
  F.resources.forEach(r=>{
    const a=el('a','res-card'); a.href=r.url; a.target='_blank'; a.rel='noopener';
    a.innerHTML=`<div class="res-nm">${r.name} ↗</div><div class="res-desc">${r.desc}</div>`;
    res.appendChild(a);
  });
  v.appendChild(res);

  v.appendChild(el('div','sec-h','Settings'));
  const set=el('div','card settings');
  const goalRow=el('div','set-row','<span>Daily XP goal</span>');
  const gsel=el('select','set-sel');
  [15,30,50,80,120].forEach(g=>{ const o=el('option',null,g+' XP'); o.value=g; if(g==S.settings.dailyGoal) o.selected=true; gsel.appendChild(o); });
  gsel.onchange=()=>{ S.settings.dailyGoal=+gsel.value; save(); };
  goalRow.appendChild(gsel); set.appendChild(goalRow);
  const tr=el('div','set-row','<span>AI tutor key & model</span>'); tr.appendChild(btn('Set up','mini ghost',()=>openTutor())); set.appendChild(tr);
  const dr=el('div','set-row','<span>Progress (stored on this device)</span>');
  const wrap=el('div','set-btns'); wrap.appendChild(btn('Export','mini ghost',exportData)); wrap.appendChild(btn('Reset','mini ghost',resetData));
  dr.appendChild(wrap); set.appendChild(dr);
  v.appendChild(set);
  return v;
}
function exportData(){
  const url=URL.createObjectURL(new Blob([JSON.stringify(S,null,2)],{type:'application/json'}));
  const a=document.createElement('a'); a.href=url; a.download='fusha-progress.json'; a.click();
  URL.revokeObjectURL(url);
}
function resetData(){
  const m=modal(); const b=el('div','skip-intro');
  b.innerHTML=`<div class="si-ic">⚠︎</div><div class="si-h">Reset all progress?</div><div class="si-p">This erases lessons, XP, streak and review schedule on this device. Your tutor key is kept.</div>`;
  b.appendChild(btn('Yes, reset everything','danger',()=>{ localStorage.removeItem(KEY); load(); m.close(); go('home'); }));
  b.appendChild(btn('Cancel','ghost',()=>m.close()));
  m.set(b);
}

/* ---------- boot ---------- */
load(); render();
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
