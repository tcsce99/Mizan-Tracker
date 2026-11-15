/* ═══════════════════════════════════════════════════════════
   Mizan Arabic — app engine
   State, mastery model, FSRS-inspired scheduler, quiz flows,
   test-out / placement skipping, adaptive timeline.
   ═══════════════════════════════════════════════════════════ */
'use strict';

const KEY = 'mizanArabicV1';
const PASS_LESSON = 0.7;    // complete a lesson by quiz
const PASS_TESTOUT = 0.85;  // skip a single lesson
const PASS_CHALLENGE = 0.8; // skip a whole unit
const PASS_PLACEMENT = 0.75;// per-unit pass in placement
const DAY = 86400000;

/* ── state ── */
let S = load();
function load() {
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) return s; } catch (e) {}
  return { onboarded: false, lessons: {}, units: {}, srs: {}, mastery: {}, activity: {}, created: Date.now() };
}
function save() { localStorage.setItem(KEY, JSON.stringify(S)); }
function ymd(t) { const d = t ? new Date(t) : new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function today() { return ymd(); }

/* ── curriculum helpers ── */
const TRACKS = window.MIZAN.tracks;
function allUnits() { return TRACKS.flatMap(t => t.units.map(u => ({ ...u, track: t }))); }
function allLessons() { return allUnits().flatMap(u => u.lessons.map(l => ({ ...l, unit: u, track: u.track }))); }
function findLesson(id) { return allLessons().find(l => l.id === id); }
function findUnit(id) { return allUnits().find(u => u.id === id); }
function lessonState(id) { return S.lessons[id] || null; }
function lessonDone(id) { const st = lessonState(id); return !!(st && (st.status === 'done' || st.status === 'tested')); }
function unitLessonsDone(u) { return u.lessons.filter(l => lessonDone(l.id)).length; }
function unitComplete(u) { return unitLessonsDone(u) === u.lessons.length; }
function unitUnlocked(u) {
  const t = u.track || TRACKS.find(tr => tr.units.includes(u));
  const idx = t.units.findIndex(x => x.id === u.id);
  if (idx <= 0) return true;
  return unitComplete(t.units[idx - 1]);
}
function trackOf(u) { return u.track || TRACKS.find(tr => tr.units.some(x => x.id === u.id)); }

/* ── mastery model (per unit = per category) ──
   Exponential moving average toward each quiz result. */
function mastery(unitId) { return (S.mastery[unitId] && S.mastery[unitId].score) || 0; }
function updateMastery(unitId, frac, weight) {
  const m = S.mastery[unitId] || { score: 0, n: 0 };
  const k = weight || 0.35;
  m.score = Math.max(0, Math.min(1, m.score + k * (frac - m.score)));
  m.n++;
  S.mastery[unitId] = m;
}

/* ── FSRS-inspired scheduler ──
   Each completed lesson becomes a review item with
   stability (days), difficulty (1–10), and a due date.
   Simplified from the FSRS algorithm (open source, ts-fsrs):
   good reviews multiply stability, lapses halve it. */
function srsInit(id, frac) {
  const good = frac >= 0.7;
  S.srs[id] = { s: good ? (frac >= 0.9 ? 4 : 2) : 1, d: good ? 5 : 7, due: Date.now() + (good ? (frac >= 0.9 ? 4 : 2) : 1) * DAY, reps: 1, lapses: 0, last: Date.now() };
}
function srsReview(id, frac) {
  const it = S.srs[id]; if (!it) return srsInit(id, frac);
  it.reps++; it.last = Date.now();
  if (frac < 0.6) { // lapse
    it.lapses++; it.d = Math.min(10, it.d + 1);
    it.s = Math.max(0.5, it.s * 0.5);
  } else {
    const rating = frac >= 0.9 ? 3 : frac >= 0.75 ? 2 : 1; // easy/good/hard
    const mult = (1 + [0.35, 0.9, 1.6][rating - 1] * ((11 - it.d) / 6));
    it.s = Math.min(365, it.s * mult);
    it.d = Math.max(1, Math.min(10, it.d + (rating === 3 ? -0.4 : rating === 1 ? 0.6 : -0.1)));
  }
  it.due = Date.now() + it.s * DAY;
}
function dueItems() { return Object.keys(S.srs).filter(id => S.srs[id].due <= Date.now() && findLesson(id)); }

/* ── activity log & streak ── */
function logActivity(fn) {
  const d = today();
  const a = S.activity[d] || { l: 0, q: 0, c: 0, r: 0 };
  fn(a); S.activity[d] = a; save();
}
function streak() {
  let n = 0, t = Date.now();
  if (!S.activity[ymd(t)]) t -= DAY; // today not yet active → count from yesterday
  while (S.activity[ymd(t)]) { n++; t -= DAY; }
  return n;
}

/* ── weekly review rule ──
   15 minutes of review must be logged every 7 days. When a week passes
   without it, opening a new lesson offers the review; it can be skipped
   3 times, after which new lessons stay locked until the 15 minutes are done. */
const WEEK = 7 * DAY, REVIEW_SECS = 15 * 60, MAX_SKIPS = 3, Q_CAP_SECS = 60;
function wk() { if (!S.weekly) S.weekly = { last: null, secs: 0, skips: 0, pass: null }; return S.weekly; }
function anyDone() { return allLessons().some(l => lessonDone(l.id)); }
function cycleStart() {
  const w = wk(); if (w.last) return w.last;
  const ats = Object.values(S.lessons).map(x => x.at).filter(Boolean);
  return ats.length ? Math.min(...ats) : null;
}
function weeklyDue() { const c = cycleStart(); return anyDone() && c !== null && Date.now() - c >= WEEK; }
function weeklyLocked() { return weeklyDue() && wk().skips >= MAX_SKIPS; }
function reviewSecsLeft() { return Math.max(0, REVIEW_SECS - wk().secs); }
function addReviewTime(sec) { // returns true when the weekly 15 minutes are complete
  const w = wk(); w.secs += sec;
  if (w.secs < REVIEW_SECS) { save(); return false; }
  w.last = Date.now(); w.secs = 0; w.skips = 0; w.pass = null; save();
  return true;
}
function mmss(sec) { sec = Math.max(0, Math.ceil(sec)); return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0'); }
function gateOk(passKey) { return !weeklyDue() || wk().pass === passKey; }
let gateProceed = null;
function showGate(passKey, proceed) {
  const w = wk(), left = MAX_SKIPS - w.skips, locked = left <= 0;
  gateProceed = () => { w.skips++; w.pass = passKey; save(); closeGate(); proceed(); };
  $('#gateBox').innerHTML = `
    <div style="font-size:40px">${locked ? '🔒' : '⏳'}</div>
    <div class="ob-title">${locked ? 'Review required' : 'Weekly review is due'}</div>
    <div class="ob-sub">${locked
      ? `A week has passed and all ${MAX_SKIPS} skips are used. New lessons unlock after <b>${mmss(reviewSecsLeft())}</b> more minutes of review.`
      : `It has been over a week since your last full review. Do ${mmss(reviewSecsLeft())} of review now, or skip — <b>${left} skip${left > 1 ? 's' : ''} left</b> before lessons lock.`}</div>
    <div class="btn-row" style="justify-content:center">
      <button class="btn" onclick="closeGate();closeLesson();startTimedReview()">Start review (${mmss(reviewSecsLeft())})</button>
      ${locked ? '' : `<button class="btn ghost" onclick="gateProceed()">Skip this time</button>`}
      <button class="btn ghost" onclick="closeGate()">Cancel</button>
    </div>`;
  $('#gateOverlay').classList.add('open');
}
function closeGate() { $('#gateOverlay').classList.remove('open'); }

/* ── velocity & adaptive timeline ──
   Lessons/day measured over the trailing 21 days (or since first
   activity if sooner). The projection re-computes on every render,
   so the timeline tightens when you study more and relaxes when
   you slow down. */
function velocity() {
  const days = 21;
  let lessons = 0, activeDays = 0, span = 0;
  const first = firstActivityTs();
  for (let i = 0; i < days; i++) {
    const t = Date.now() - i * DAY;
    if (first && t < first - DAY) break;
    span++;
    const a = S.activity[ymd(t)];
    if (a) { lessons += a.l; if (a.l || a.q) activeDays++; }
  }
  if (!span || !lessons) return { perDay: 0, activeDays, span };
  return { perDay: lessons / span, activeDays, span };
}
function firstActivityTs() {
  const keys = Object.keys(S.activity).sort();
  return keys.length ? new Date(keys[0] + 'T12:00').getTime() : null;
}
function remainingLessons(track) {
  const units = track ? track.units : allUnits();
  return units.flatMap(u => u.lessons).filter(l => !lessonDone(l.id)).length;
}
const FALLBACK_PER_DAY = 3 / 7; // assume 3 lessons/week until real data exists
function etaDays(remaining) {
  const v = velocity();
  const rate = v.perDay > 0 ? v.perDay : FALLBACK_PER_DAY;
  return { days: Math.ceil(remaining / rate), rate, measured: v.perDay > 0 };
}
function fmtDate(ts) { return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }); }

/* ═════════ UI plumbing ═════════ */
const $ = s => document.querySelector(s);
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600);
}
document.querySelectorAll('.nav-tab').forEach(b => b.addEventListener('click', () => showView(b.dataset.view)));
function showView(v) {
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  document.querySelectorAll('.view').forEach(x => x.classList.remove('active'));
  $('#view-' + v).classList.add('active');
  render();
  window.scrollTo(0, 0);
}
function activeView() { const b = document.querySelector('.nav-tab.active'); return b ? b.dataset.view : 'home'; }

function render() {
  $('#streakChip').textContent = '🔥 ' + streak();
  const due = dueItems().length;
  const badge = $('#dueBadge');
  badge.style.display = due ? 'inline-block' : 'none';
  badge.textContent = due;
  const v = activeView();
  if (v === 'home') renderHome();
  if (v === 'learn') renderLearn();
  if (v === 'review') renderReview();
  if (v === 'tutor') renderTutor();
  if (v === 'timeline') renderTimeline();
  if (v === 'stats') renderStats();
  if (v === 'resources') renderResources();
}

/* ═════════ HOME ═════════ */
function nextLesson() {
  for (const t of TRACKS) for (const u of t.units) {
    if (!unitUnlocked(u)) continue;
    for (const l of u.lessons) if (!lessonDone(l.id)) return { ...l, unit: u, track: t };
  }
  return null;
}
function weakestUnit() {
  // among units with some progress, lowest mastery below 0.75
  let worst = null;
  for (const u of allUnits()) {
    if (!unitLessonsDone(u)) continue;
    const m = mastery(u.id);
    if (m < 0.75 && (!worst || m < mastery(worst.id))) worst = u;
  }
  return worst;
}
function overallPct() {
  const all = allLessons();
  return Math.round(100 * all.filter(l => lessonDone(l.id)).length / all.length);
}
function renderHome() {
  const el = $('#view-home');
  const due = dueItems().length;
  const nl = nextLesson();
  const weak = weakestUnit();
  const rem = remainingLessons(null);
  const eta = etaDays(rem);
  const a = S.activity[today()] || { l: 0, q: 0, c: 0, r: 0 };

  let plan = '';
  if (due) plan += planRow('📥', `Review ${due} due item${due > 1 ? 's' : ''}`, 'Spaced repetition keeps everything you\'ve learned alive.', `startReviewSession()`);
  if (weak) plan += planRow('🎯', `Strengthen: ${esc(weak.en)} <span class="ar">${weak.ar}</span>`, `Mastery ${Math.round(mastery(weak.id) * 100)}% — a short practice round targets your weakest category.`, `startWeakPractice('${weak.id}')`);
  if (nl) plan += planRow('📖', `New lesson: ${esc(nl.en)} <span class="ar">${nl.ar}</span>`, `${esc(nl.track.en)} · ${esc(nl.unit.en)}`, `openLesson('${nl.id}')`);
  if (!plan) plan = `<div class="card"><b>All caught up!</b><div class="muted">No reviews due and every lesson is complete. ما شاء الله.</div></div>`;

  el.innerHTML = `
    <div class="summary-strip">
      <div class="sum-card"><div class="sum-val gold">${overallPct()}%</div><div class="sum-lbl">Course</div></div>
      <div class="sum-card"><div class="sum-val blue">${due}</div><div class="sum-lbl">Due reviews</div></div>
      <div class="sum-card"><div class="sum-val green">${a.l}</div><div class="sum-lbl">Lessons today</div></div>
    </div>
    <div class="card" style="border-color:rgba(201,168,76,.3)">
      <div class="tiny" style="text-transform:uppercase;letter-spacing:.6px">Projected finish</div>
      <div style="font-size:20px;font-weight:800;color:var(--gold)">${rem ? fmtDate(Date.now() + eta.days * DAY) : 'Complete 🎉'}</div>
      <div class="tiny">${rem ? (eta.measured ? `at your measured pace of ${(eta.rate * 7).toFixed(1)} lessons/week` : 'assumed 3 lessons/week — updates as you study') : ''}</div>
    </div>
    ${weeklyCard()}
    <div class="sec-head"><div class="sec-title">Today's plan</div></div>
    ${plan}
    ${trackSummaryCards()}
    ${S.onboarded ? '' : `<div class="card"><b>Know some of this already?</b><div class="muted" style="margin:4px 0 10px">Take the placement test to skip everything you can prove.</div><button class="btn small" onclick="startPlacementFlow()">Placement test</button></div>`}
  `;
}
function weeklyCard() {
  if (!anyDone()) return '';
  const w = wk(), due = weeklyDue(), locked = weeklyLocked();
  const daysLeft = Math.max(0, Math.ceil((cycleStart() + WEEK - Date.now()) / DAY));
  const status = locked ? 'New lessons are locked until the review is done'
    : due ? `Due now — ${MAX_SKIPS - w.skips} skip${MAX_SKIPS - w.skips === 1 ? '' : 's'} left before lessons lock`
    : `Due in ${daysLeft} day${daysLeft === 1 ? '' : 's'}`;
  return `<div class="card" style="border-color:${due ? 'rgba(248,81,73,.45)' : 'var(--border)'}">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
      <div style="min-width:0"><b style="font-size:14px">${locked ? '🔒' : due ? '⏳' : '🗓'} Weekly review</b>
        <div class="tiny" style="color:${due ? 'var(--red)' : 'var(--text3)'}">${status} · ${mmss(w.secs)} of 15:00 logged</div></div>
      <button class="btn small ${due ? '' : 'ghost'}" onclick="startTimedReview()">Review</button>
    </div>
    <div class="progress-track" style="margin-top:10px"><div class="progress-fill green" style="width:${Math.min(100, 100 * w.secs / REVIEW_SECS)}%"></div></div>
  </div>`;
}
function planRow(icon, title, sub, action) {
  return `<div class="card" style="display:flex;gap:12px;align-items:center;cursor:pointer" onclick="${action}">
    <div style="font-size:22px">${icon}</div>
    <div style="flex:1;min-width:0"><b style="font-size:14px">${title}</b><div class="tiny">${sub}</div></div>
    <div style="color:var(--gold)">›</div></div>`;
}
function trackSummaryCards() {
  return `<div class="sec-head"><div class="sec-title">Tracks</div></div>` + TRACKS.map(t => {
    const total = t.units.flatMap(u => u.lessons).length;
    const done = t.units.flatMap(u => u.lessons).filter(l => lessonDone(l.id)).length;
    const pct = Math.round(100 * done / total);
    return `<div class="card" style="cursor:pointer" onclick="showView('learn')">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px">
        <b>${esc(t.en)} <span class="ar" style="color:var(--gold)">${t.ar}</span></b>
        <span class="tiny">${done}/${total} lessons</span>
      </div>
      <div class="progress-track"><div class="progress-fill ${t.id === 'sarf' ? 'purple' : 'blue'}" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

/* ═════════ LEARN ═════════ */
const openUnits = new Set();
function renderLearn() {
  const el = $('#view-learn');
  el.innerHTML = TRACKS.map(t => `
    <div class="track-head">
      <div class="track-title">${esc(t.en)}<span class="ar">${t.ar}</span></div>
      <button class="btn ghost small" onclick="startPlacement('${t.id}')">Placement</button>
    </div>
    <div class="tiny" style="padding-bottom:8px">${esc(t.desc)}</div>
    ${t.units.map((u, i) => unitCard(u, i, t)).join('')}
  `).join('');
}
function unitCard(u, i, t) {
  const unlocked = unitUnlocked({ ...u, track: t });
  const done = unitLessonsDone(u), total = u.lessons.length;
  const m = Math.round(mastery(u.id) * 100);
  const mcls = m >= 75 ? 'hi' : m >= 40 ? 'mid' : '';
  const open = openUnits.has(u.id);
  return `<div class="unit ${unlocked ? '' : 'locked'} ${done === total ? 'complete' : ''} ${open ? 'open' : ''}" id="unit-${u.id}">
    <div class="unit-head" onclick="toggleUnit('${u.id}')">
      <div class="unit-num">${done === total ? '✓' : (i + 1)}</div>
      <div class="unit-name">
        <b>${esc(u.en)}</b> <span class="ar">${u.ar}</span>
        <div class="unit-meta"><span>${done}/${total} lessons</span><span class="mastery-pill ${mcls}">mastery ${m}%</span>${unlocked ? '' : '<span>🔒 finish previous unit — or pass the challenge</span>'}</div>
      </div>
      <div style="color:var(--text3)">${open ? '▾' : '▸'}</div>
    </div>
    <div class="unit-body">
      ${u.lessons.map(l => {
        const st = lessonState(l.id);
        const cls = st ? (st.status === 'tested' ? 'tested' : 'done') : '';
        return `<div class="lesson-row ${cls}" onclick="openLesson('${l.id}')">
          <div class="lesson-check">${st ? (st.status === 'tested' ? '»' : '✓') : ''}</div>
          <div class="lesson-title">${esc(l.en)}<span class="ar">${l.ar}</span></div>
          <div class="lesson-score">${st && st.best != null ? Math.round(st.best * 100) + '%' : ''}</div>
        </div>`;
      }).join('')}
      <div class="unit-actions">
        <button class="btn ghost small" onclick="startChallenge('${u.id}')">⚡ Challenge — test out of this unit</button>
      </div>
    </div>
  </div>`;
}
function toggleUnit(id) { openUnits.has(id) ? openUnits.delete(id) : openUnits.add(id); renderLearn(); }

/* ── lesson reader ── */
let currentLesson = null;
function openLesson(id, gated) {
  const l = findLesson(id); if (!l) return;
  if (!unitUnlocked(l.unit)) { toast('Unit locked — pass the previous unit or its challenge first'); return; }
  if (!lessonDone(id) && !gated && !gateOk(id)) return showGate(id, () => openLesson(id, true));
  currentLesson = l;
  $('#lessonOverlayTitle').innerHTML = `${esc(l.track.en)} · ${esc(l.unit.en)}`;
  $('#lessonOverlayBody').innerHTML = `
    <div class="lesson-body">
      <h2>${esc(l.en)} <span class="ar">${l.ar}</span></h2>
      ${l.body}
      <div class="sec-head"><div class="sec-title">Examples from the sources</div></div>
      ${l.examples.map(e => `<div class="example-card">
        <div class="example-ar">${e.ar}</div>
        <div class="example-src">${esc(e.src)}</div>
        ${e.note ? `<div class="example-note">${e.note}</div>` : ''}
      </div>`).join('')}
      <div class="btn-row" style="padding:16px 0">
        <button class="btn" onclick="startLessonQuiz('${l.id}', false)">Take the quiz (pass ≥ ${PASS_LESSON * 100}%)</button>
        ${lessonDone(l.id) ? '' : `<button class="btn ghost" onclick="startLessonQuiz('${l.id}', true)">I already know this — test out (≥ ${PASS_TESTOUT * 100}%)</button>`}
      </div>
    </div>`;
  $('#lessonOverlay').classList.add('open');
  window.scrollTo(0, 0);
}
function closeLesson() { $('#lessonOverlay').classList.remove('open'); render(); }

/* ═════════ QUIZ ENGINE ═════════ */
let Q = null; // {title, items:[{q,ar,opts,a,exp,lessonId}], i, correct, perLesson:{}, onDone, review, timed, refill}
let quizTick = null;
function startQuiz(title, items, onDone, opts) {
  Q = { title, items, i: 0, correct: 0, perLesson: {}, onDone, ...(opts || {}) };
  window.Q = Q;
  clearInterval(quizTick);
  if (Q.timed) quizTick = setInterval(tickTimer, 1000);
  $('#quizOverlayTitle').textContent = title;
  $('#quizOverlay').classList.add('open');
  renderQuestion();
}
function abortQuiz() {
  // leaving a timed review early keeps the minutes and schedules what was answered
  if (Q && Q.timed && !Q.finished && Q.items.some(x => x._r !== undefined)) { Q.finished = true; Q.onDone(0, Q); save(); }
  clearInterval(quizTick);
  Q = null; $('#quizOverlay').classList.remove('open'); render();
}
function tickTimer() {
  const el = $('#quizTimer'); if (!el || !Q) return;
  const cur = Q.answered ? 0 : Math.min(Q_CAP_SECS, (Date.now() - Q.t0) / 1000);
  const left = Q.timedDone ? 0 : Math.max(0, reviewSecsLeft() - cur);
  el.textContent = mmss(left) + ' of review left';
  const bar = $('#quizTimeBar'); if (bar) bar.style.width = Math.min(100, 100 * (1 - left / REVIEW_SECS)) + '%';
}
function nextQ() { Q.i++; if (Q.timed && Q.timedDone) return quizDone(); renderQuestion(); }
function renderQuestion() {
  const b = $('#quizOverlayBody');
  if (Q.i >= Q.items.length && Q.refill) Q.items.push(...Q.refill());
  if (Q.i >= Q.items.length) return quizDone();
  const it = Q.items[Q.i];
  Q.t0 = Date.now(); Q.answered = false;
  b.innerHTML = `
    ${Q.timed
      ? `<div style="padding:16px 0 4px"><div class="tiny" id="quizTimer" style="font-family:var(--mono);color:var(--gold);padding-bottom:5px"></div><div class="progress-track"><div class="progress-fill" id="quizTimeBar" style="width:0%"></div></div></div>`
      : `<div class="quiz-progress">${Q.items.map((x, j) => `<div class="qdot ${j < Q.i ? (x._r ? 'right' : 'wrong') : j === Q.i ? 'cur' : ''}"></div>`).join('')}</div>`}
    <div class="quiz-q">${esc(it.q)}</div>
    ${it.ar ? `<div class="quiz-ar">${it.ar}</div>` : ''}
    <div class="quiz-opts">${it.opts.map((o, j) => `<button class="quiz-opt" data-j="${j}" onclick="answer(${j})"><span class="ar">${o}</span></button>`).join('')}</div>
    <div class="quiz-exp" id="quizExp"></div>
    <div class="quiz-next" id="quizNext"></div>`;
  if (Q.timed) tickTimer();
  window.scrollTo(0, 0);
}
function answer(j) {
  const it = Q.items[Q.i];
  const right = j === it.a;
  it._r = right;
  Q.answered = true;
  if (right) Q.correct++;
  if (Q.review) {
    const done = addReviewTime(Math.min(Q_CAP_SECS, (Date.now() - Q.t0) / 1000));
    if (done) { Q.timedDone = true; if (!Q.timed) toast('Weekly review complete ✓'); }
  }
  if (it.lessonId) {
    const pl = Q.perLesson[it.lessonId] || { n: 0, c: 0 };
    pl.n++; if (right) pl.c++;
    Q.perLesson[it.lessonId] = pl;
  }
  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.disabled = true;
    const k = +btn.dataset.j;
    if (k === j) btn.classList.add(right ? 'sel-right' : 'sel-wrong');
    if (!right && k === it.a) btn.classList.add('reveal');
  });
  const ex = $('#quizExp');
  ex.innerHTML = (right ? '✅ ' : '❌ ') + (it.exp || '');
  ex.classList.add('show');
  $('#quizNext').innerHTML = `<button class="btn" onclick="nextQ()">${(Q.timed ? Q.timedDone : Q.i + 1 >= Q.items.length) ? 'See result' : 'Next →'}</button>`;
  if (Q.timed) tickTimer();
  logActivity(a => { a.q++; if (right) a.c++; });
}
function quizDone() {
  clearInterval(quizTick);
  const n = Q.items.filter(x => x._r !== undefined).length;
  const frac = n ? Q.correct / n : 0;
  Q.finished = true;
  const res = Q.onDone(frac, Q) || {};
  const pct = Math.round(frac * 100);
  $('#quizOverlayBody').innerHTML = `
    <div class="quiz-result">
      <div class="pct ${res.pass ? 'pass' : 'fail'}">${pct}%</div>
      <div class="verdict">${esc(res.msg || '')}</div>
      <div class="muted">${Q.correct}/${n} correct</div>
      <div class="btn-row" style="justify-content:center;padding-top:18px">
        ${res.retry ? `<button class="btn ghost" onclick="${res.retry}">Try again</button>` : ''}
        <button class="btn" onclick="abortQuiz();closeLesson()">Continue</button>
      </div>
    </div>`;
  save(); render();
}
function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function qItems(lesson) { return lesson.quiz.map(q => ({ ...q, lessonId: lesson.id })); }

/* ── lesson quiz / test-out ── */
function startLessonQuiz(id, testOut) {
  const l = findLesson(id); if (!l) return;
  const need = testOut ? PASS_TESTOUT : PASS_LESSON;
  startQuiz((testOut ? 'Test out: ' : 'Quiz: ') + l.en, shuffle(qItems(l)), (frac) => {
    const st = S.lessons[id] || { attempts: 0 };
    st.attempts++;
    st.best = Math.max(st.best || 0, frac);
    const passed = frac >= need;
    if (passed) {
      const first = !lessonDone(id);
      st.status = testOut ? 'tested' : 'done';
      st.at = Date.now();
      if (first) { logActivity(a => a.l++); srsInit(id, frac); }
      else srsReview(id, frac);
    } else if (S.srs[id]) srsReview(id, frac);
    S.lessons[id] = st;
    updateMastery(l.unit.id, frac, testOut ? 0.5 : 0.35);
    save();
    return {
      pass: passed,
      msg: passed ? (testOut ? 'Proven — lesson skipped ✓' : 'Lesson complete ✓') : `Need ${Math.round(need * 100)}% — review the examples and retry`,
      retry: passed ? null : `startLessonQuiz('${id}', ${testOut})`
    };
  });
}

/* ── unit challenge (skip a whole unit) ── */
function startChallenge(unitId, gated) {
  const u = findUnit(unitId); if (!u) return;
  if (!unitComplete(u) && !gated && !gateOk('unit:' + unitId)) return showGate('unit:' + unitId, () => startChallenge(unitId, true));
  let pool = shuffle(u.lessons.flatMap(l => shuffle(qItems(l)).slice(0, 3)));
  pool = pool.slice(0, Math.min(10, pool.length));
  startQuiz('Challenge: ' + u.en, pool, (frac, q) => {
    const passed = frac >= PASS_CHALLENGE;
    if (passed) {
      let newly = 0;
      u.lessons.forEach(l => {
        if (!lessonDone(l.id)) { newly++; srsInit(l.id, frac); }
        S.lessons[l.id] = { ...(S.lessons[l.id] || {}), status: lessonState(l.id) && lessonState(l.id).status === 'done' ? 'done' : 'tested', best: Math.max((lessonState(l.id) || {}).best || 0, frac), attempts: ((lessonState(l.id) || {}).attempts || 0) + 1, at: Date.now() };
      });
      S.units[unitId] = { tested: true, at: Date.now() };
      if (newly) logActivity(a => a.l += newly);
      updateMastery(unitId, frac, 0.6);
    } else updateMastery(unitId, frac, 0.25);
    save();
    return {
      pass: passed,
      msg: passed ? `Unit proven — ${u.lessons.length} lessons skipped ⚡` : `Need ${PASS_CHALLENGE * 100}% to skip the unit`,
      retry: passed ? null : `startChallenge('${unitId}')`
    };
  });
}

/* ── placement test (per track, sequential by unit) ── */
function startPlacementFlow() {
  $('#obOverlay').classList.remove('open');
  S.onboarded = true; save();
  startPlacement(TRACKS[0].id, () => startPlacement(TRACKS[1].id));
}
function skipOnboarding() { S.onboarded = true; save(); $('#obOverlay').classList.remove('open'); render(); }
function startPlacement(trackId, andThen) {
  const t = TRACKS.find(x => x.id === trackId); if (!t) return;
  // 4 questions per unit, in curriculum order; stop at first failed unit
  const items = t.units.flatMap(u => shuffle(u.lessons.flatMap(l => qItems(l))).slice(0, 4).map(q => ({ ...q, unitId: u.id })));
  startQuiz('Placement: ' + t.en, items, (frac, q) => {
    // grade per unit
    const per = {};
    q.items.forEach(it => {
      if (it._r === undefined) return;
      const p = per[it.unitId] || { n: 0, c: 0 };
      p.n++; if (it._r) p.c++;
      per[it.unitId] = p;
    });
    let skipped = 0, stopped = false;
    for (const u of t.units) {
      const p = per[u.id];
      if (!p || stopped) break;
      if (p.c / p.n >= PASS_PLACEMENT) {
        u.lessons.forEach(l => { if (!lessonDone(l.id)) { skipped++; srsInit(l.id, p.c / p.n); S.lessons[l.id] = { status: 'tested', best: p.c / p.n, attempts: 1, at: Date.now() }; } });
        S.units[u.id] = { tested: true, at: Date.now() };
        updateMastery(u.id, p.c / p.n, 0.7);
      } else { updateMastery(u.id, p.c / p.n, 0.3); stopped = true; }
    }
    if (skipped) logActivity(a => a.l += skipped);
    save();
    if (andThen) setTimeout(andThen, 400);
    return { pass: skipped > 0, msg: skipped ? `Placed! ${skipped} lesson${skipped > 1 ? 's' : ''} skipped in ${t.en}` : `Starting ${t.en} from the beginning — solid foundations matter` };
  });
}

/* ── weak-category practice & review session ── */
function startWeakPractice(unitId) {
  const u = findUnit(unitId); if (!u) return;
  const doneLessons = u.lessons.filter(l => lessonDone(l.id));
  const pool = shuffle(doneLessons.flatMap(l => qItems(l))).slice(0, 8);
  if (!pool.length) return toast('Nothing to practice here yet');
  startQuiz('Practice: ' + u.en, pool, (frac, q) => {
    Object.keys(q.perLesson).forEach(id => srsReview(id, q.perLesson[id].c / q.perLesson[id].n));
    updateMastery(unitId, frac, 0.3);
    logActivity(a => a.r++);
    save();
    return { pass: frac >= 0.75, msg: frac >= 0.75 ? 'Category strengthened 💪' : 'Keep at it — mastery updated' };
  }, { review: true });
}
function startReviewSession() {
  const due = dueItems();
  if (!due.length) return toast('No reviews due');
  // interleave: shuffle lessons, 2 questions each, cap 16
  const items = shuffle(due).slice(0, 8).flatMap(id => { const l = findLesson(id); return shuffle(qItems(l)).slice(0, 2); });
  startQuiz(`Review — ${due.length} due`, shuffle(items), (frac, q) => {
    Object.keys(q.perLesson).forEach(id => {
      const p = q.perLesson[id];
      srsReview(id, p.c / p.n);
      const l = findLesson(id);
      if (l) updateMastery(l.unit.id, p.c / p.n, 0.2);
    });
    logActivity(a => a.r++);
    save();
    return { pass: frac >= 0.6, msg: frac >= 0.6 ? 'Reviews scheduled forward ✓' : 'Lapsed items will return sooner' };
  }, { review: true });
}
/* ── the 15-minute weekly review: runs on the clock, not a question count.
   Due items come first, then the weakest categories, then everything else. */
function reviewPool() {
  const due = new Set(dueItems());
  const done = allLessons().filter(l => lessonDone(l.id));
  const rank = l => (due.has(l.id) ? 0 : 1) + mastery(l.unit.id);
  return done.sort((a, b) => rank(a) - rank(b)).flatMap(l => shuffle(qItems(l)));
}
function startTimedReview() {
  if (!anyDone()) return toast('Complete a lesson first — then there is something to review');
  const fresh = () => reviewPool().map(q => ({ ...q }));
  startQuiz('Weekly review', fresh(), (frac, q) => {
    Object.keys(q.perLesson).forEach(id => {
      const p = q.perLesson[id];
      srsReview(id, p.c / p.n);
      const l = findLesson(id);
      if (l) updateMastery(l.unit.id, p.c / p.n, 0.2);
    });
    logActivity(a => a.r++);
    save();
    return q.timedDone
      ? { pass: true, msg: 'Weekly review complete — lessons unlocked for another week ✓' }
      : { pass: false, msg: `Time logged. ${mmss(reviewSecsLeft())} of review still to go this week.` };
  }, { review: true, timed: true, refill: fresh });
}
function renderReview() {
  const el = $('#view-review');
  const due = dueItems();
  const upcoming = Object.keys(S.srs).filter(id => findLesson(id)).map(id => ({ id, ...S.srs[id] })).sort((a, b) => a.due - b.due);
  const next7 = [0, 1, 2, 3, 4, 5, 6].map(i => upcoming.filter(u => ymd(u.due) === ymd(Date.now() + i * DAY) && u.due > Date.now()).length);
  el.innerHTML = `
    ${weeklyCard()}
    <div class="sec-head"><div class="sec-title">Spaced repetition — never forget</div></div>
    <div class="card" style="text-align:center">
      <div style="font-size:40px;font-weight:800;color:${due.length ? 'var(--red)' : 'var(--green)'}">${due.length}</div>
      <div class="muted" style="margin-bottom:12px">item${due.length === 1 ? '' : 's'} due now</div>
      <button class="btn" ${due.length ? '' : 'disabled'} onclick="startReviewSession()">Start review session</button>
      <div class="tiny" style="margin-top:10px">Every lesson you complete is scheduled forever with an FSRS-style algorithm. Good recall pushes it further out; lapses bring it back.</div>
    </div>
    <div class="sec-head"><div class="sec-title">Forecast — next 7 days</div></div>
    <div class="card"><div class="week-bars">${next7.map((n, i) => {
      const max = Math.max(...next7, 1);
      return `<div class="wbar"><div class="bar" style="height:${Math.max(2, n / max * 70)}px"></div><div class="lbl">${i === 0 ? 'tod' : new Date(Date.now() + i * DAY).toLocaleDateString(undefined, { weekday: 'short' }).slice(0, 2)}</div></div>`;
    }).join('')}</div>
    <div class="tiny" style="text-align:center">${upcoming.length} items in the review system</div></div>
    ${upcoming.length ? `<div class="sec-head"><div class="sec-title">Queue</div></div>` + upcoming.slice(0, 15).map(u => {
      const l = findLesson(u.id);
      const overdue = u.due <= Date.now();
      return `<div class="card" style="display:flex;justify-content:space-between;align-items:center;padding:10px 15px">
        <div style="min-width:0"><b style="font-size:13px">${esc(l.en)}</b> <span class="ar" style="color:var(--text2);font-size:13px">${l.ar}</span></div>
        <span class="tiny" style="color:${overdue ? 'var(--red)' : 'var(--text3)'};white-space:nowrap">${overdue ? 'due now' : fmtDate(u.due)}</span></div>`;
    }).join('') : ''}`;
}

/* ═════════ TIMELINE ═════════ */
function renderTimeline() {
  const el = $('#view-timeline');
  const v = velocity();
  const remAll = remainingLessons(null);
  const eta = etaDays(remAll);
  const finish = remAll ? Date.now() + eta.days * DAY : null;
  const ratePerWeek = eta.rate * 7;

  // project unit completion dates cumulatively
  let cursor = Date.now();
  const rows = [];
  for (const t of TRACKS) {
    rows.push({ type: 'track', t });
    for (const u of t.units) {
      const rem = u.lessons.filter(l => !lessonDone(l.id)).length;
      if (!rem) { rows.push({ type: 'unit', u, t, done: true }); continue; }
      cursor += (rem / eta.rate) * DAY;
      rows.push({ type: 'unit', u, t, done: false, eta: cursor, next: !rows.some(r => r.type === 'unit' && !r.done) });
    }
  }
  el.innerHTML = `
    <div class="sec-head"><div class="sec-title">Adaptive timeline</div></div>
    <div class="eta-hero">
      <div class="tiny" style="text-transform:uppercase;letter-spacing:.6px">Projected completion</div>
      <div class="eta-date">${finish ? fmtDate(finish) : 'Done! 🎉'}</div>
      <div class="eta-sub">${remAll} lessons remaining · ${eta.measured ? `measured pace ${ratePerWeek.toFixed(1)} lessons/week (last ${v.span} days, ${v.activeDays} active)` : 'assumed pace 3 lessons/week — study to personalize'}</div>
    </div>
    <div class="card"><div class="pace-row">
      <span>This timeline recalculates from your actual behavior: study more days per week and the finish date pulls in; slow down and it honestly drifts out.</span>
    </div>
    ${remAll ? `<div class="pace-row" style="margin-top:8px;gap:14px">
      <span>· At <b>+1 lesson/day</b>: <b style="color:var(--gold)">${fmtDate(Date.now() + Math.ceil(remAll / (eta.rate + 1)) * DAY)}</b></span>
      <span>· At <b>half pace</b>: ${fmtDate(Date.now() + Math.ceil(remAll / (eta.rate / 2)) * DAY)}</span>
    </div>` : ''}</div>
    <div class="sec-head"><div class="sec-title">Milestones</div></div>
    <div style="padding:4px 0">${rows.map(r => {
      if (r.type === 'track') return `<div style="font-size:13px;font-weight:700;color:var(--text2);padding:10px 0 8px">${esc(r.t.en)} <span class="ar" style="color:var(--gold)">${r.t.ar}</span></div>`;
      return `<div class="tl-item ${r.done ? 'done' : ''} ${r.next ? 'next' : ''}">
        <div class="tl-rail"><div class="tl-dot"></div><div class="tl-line"></div></div>
        <div class="tl-content">
          <div class="tl-title">${esc(r.u.en)} <span class="ar">${r.u.ar}</span></div>
          <div class="tl-date">${r.done ? '✓ complete' : '≈ ' + fmtDate(r.eta)}</div>
        </div></div>`;
    }).join('')}</div>`;
}

/* ═════════ STATS ═════════ */
function renderStats() {
  const el = $('#view-stats');
  const allA = Object.values(S.activity);
  const totQ = allA.reduce((s, a) => s + a.q, 0);
  const totC = allA.reduce((s, a) => s + a.c, 0);
  const acc = totQ ? Math.round(100 * totC / totQ) : 0;
  // last 8 weeks activity
  const weeks = [];
  for (let w = 7; w >= 0; w--) {
    let n = 0;
    for (let d = 0; d < 7; d++) { const a = S.activity[ymd(Date.now() - (w * 7 + d) * DAY)]; if (a) n += a.q; }
    weeks.push(n);
  }
  const maxW = Math.max(...weeks, 1);
  el.innerHTML = `
    <div class="summary-strip">
      <div class="sum-card"><div class="sum-val gold">${streak()}</div><div class="sum-lbl">Day streak</div></div>
      <div class="sum-card"><div class="sum-val blue">${totQ}</div><div class="sum-lbl">Questions</div></div>
      <div class="sum-card"><div class="sum-val ${acc >= 75 ? 'green' : 'purple'}">${acc}%</div><div class="sum-lbl">Accuracy</div></div>
    </div>
    <div class="sec-head"><div class="sec-title">Mastery by category</div></div>
    ${TRACKS.map(t => `<div class="card">
      <b style="font-size:13px">${esc(t.en)}</b>
      ${t.units.map(u => {
        const m = Math.round(mastery(u.id) * 100);
        const col = m >= 75 ? 'var(--green)' : m >= 40 ? 'var(--gold)' : 'var(--red)';
        return `<div class="cat-row">
          <div class="cat-name">${esc(u.en)} <span class="ar">${u.ar}</span></div>
          <div class="cat-bar"><div class="cat-fill" style="width:${m}%;background:${col}"></div></div>
          <div class="cat-val">${m}%</div></div>`;
      }).join('')}</div>`).join('')}
    <div class="sec-head"><div class="sec-title">Weekly activity (questions answered)</div></div>
    <div class="card"><div class="week-bars">${weeks.map((n, i) => `<div class="wbar"><div class="bar" style="height:${Math.max(2, n / maxW * 70)}px"></div><div class="lbl">${i === 7 ? 'now' : (7 - i) + 'w'}</div></div>`).join('')}</div></div>
    <div class="sec-head"><div class="sec-title">Data</div></div>
    <div class="card"><div class="btn-row">
      <button class="btn ghost small" onclick="exportData()">Export backup</button>
      <button class="btn ghost small" onclick="importData()">Import</button>
      <button class="btn danger small" onclick="resetData()">Reset all progress</button>
    </div><div class="tiny" style="margin-top:8px">Everything is stored locally on this device (localStorage). Export regularly if you switch devices.</div></div>`;
}
function exportData() {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'mizan-arabic-backup-' + today() + '.json';
  a.click();
}
function importData() {
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = '.json';
  inp.onchange = () => {
    const f = inp.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try { const d = JSON.parse(r.result); if (!d.lessons) throw 0; S = d; save(); render(); toast('Backup restored ✓'); }
      catch (e) { toast('Invalid backup file'); }
    };
    r.readAsText(f);
  };
  inp.click();
}
function resetData() {
  if (!confirm('Erase ALL progress? This cannot be undone.')) return;
  localStorage.removeItem(KEY);
  S = load(); render(); toast('Progress reset');
}

/* ═════════ RESOURCES ═════════ */
const RESOURCES = [
  { n: 'Matn al-Ājurrūmiyyah', u: 'https://ar.wikisource.org/wiki/متن_الآجرومية', d: 'The classical naḥw primer this course\'s syntax track follows. Memorized by students for 700 years.', l: 'Public domain' },
  { n: 'Alfiyyat Ibn Mālik', u: 'https://ar.wikisource.org/wiki/ألفية_ابن_مالك', d: '1,000 verses covering all of naḥw and ṣarf — the next step after this course.', l: 'Public domain' },
  { n: 'Quranic Arabic Corpus', u: 'https://corpus.quran.com', d: 'Word-by-word grammar (iʿrāb), morphology, and dependency graphs for the entire Qurʾan. The best free tool for seeing this course\'s concepts in the wild.', l: 'GNU / free' },
  { n: 'Al-Maktaba al-Shamela', u: 'https://shamela.ws', d: 'Thousands of classical Arabic texts — grammar, poetry, tafsīr — searchable and free.', l: 'Free access' },
  { n: 'Arabic Wikisource', u: 'https://ar.wikisource.org', d: 'Public-domain classical texts including the Muʿallaqāt poems quoted in the lessons.', l: 'Public domain / CC' },
  { n: 'Madinah Arabic Books (LQToronto)', u: 'https://www.lqtoronto.com', d: 'Dr. V. Abdur Rahim\'s 3-book course with free videos — excellent parallel study for naḥw.', l: 'Free' },
  { n: 'Wikibooks — Arabic', u: 'https://en.wikibooks.org/wiki/Arabic', d: 'Openly licensed grammar explanations to cross-reference.', l: 'CC-BY-SA' },
  { n: 'Hans Wehr Dictionary (4th ed.)', u: 'https://archive.org/details/HansWehrEnglishArabicDctionarySearchableFormat', d: 'The standard Arabic–English dictionary, organized by root — apply your ṣarf skills to use it.', l: 'Archive.org' },
  { n: 'Tatoeba (Arabic)', u: 'https://tatoeba.org/en/sentences/show_all_in/ara/none', d: 'Openly licensed example sentences with translations.', l: 'CC-BY 2.0 FR' },
  { n: 'Kaikki.org Arabic dictionary', u: 'https://kaikki.org/dictionary/Arabic/', d: 'Machine-readable Wiktionary extract: inflection tables and root data.', l: 'CC-BY-SA' },
];
function renderResources() {
  $('#view-resources').innerHTML = `
    <div class="sec-head"><div class="sec-title">Free &amp; open resources</div></div>
    <div class="tiny" style="padding-bottom:10px">Lesson texts are original; the sequence follows the public-domain classical primers (al-Ājurrūmiyyah for naḥw; Bināʾ al-Afʿāl / al-Maqṣūd for ṣarf). Qurʾan quotations are from the Uthmani text; poetry from public-domain dīwāns. These sources take you further:</div>
    ${RESOURCES.map(r => `<div class="res-card">
      <div class="res-name"><a href="${r.u}" target="_blank" rel="noopener">${esc(r.n)} ↗</a></div>
      <div class="res-desc">${esc(r.d)}</div>
      <div class="res-lic">${esc(r.l)}</div></div>`).join('')}`;
}

/* ═════════ boot ═════════ */
if (!S.onboarded) $('#obOverlay').classList.add('open');
render();
