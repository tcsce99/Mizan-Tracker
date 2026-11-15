/* ═══════════════════════════════════════════════════════════
   Mizan Arabic — AI tutor
   Listens (Web Speech API, Arabic) or reads what you type, then
   corrects your Arabic through Claude and files each mistake under
   the curriculum category it belongs to.

   Raw fetch rather than the Anthropic SDK: this app is a static,
   build-less PWA with no package manager. The API key is supplied
   by the learner and kept only on this device; a proxy URL can be
   used instead so no key ever reaches the browser.
   ═══════════════════════════════════════════════════════════ */
'use strict';

const TUTOR_KEY = 'mizanArabicTutor'; // kept apart from progress so backups never contain the key
const API_URL = 'https://api.anthropic.com/v1/messages';
const TUTOR_MODELS = [
  { id: 'claude-opus-5-5', name: 'Claude Opus 5.5 (default — most accurate)' },
  { id: 'claude-sonnet-5-5', name: 'Claude Sonnet 5.5 (faster, cheaper)' },
  { id: 'claude-haiku-5-5', name: 'Claude Haiku 5.5 (fastest, cheapest)' }
];
const MAX_TURNS = 30; // a fresh session starts after this many exchanges

let TC = (() => { try { return JSON.parse(localStorage.getItem(TUTOR_KEY)) || {}; } catch (e) { return {}; } })();
function saveTutorCfg() { localStorage.setItem(TUTOR_KEY, JSON.stringify(TC)); }
function tutorReady() { return !!(TC.key || TC.proxy); }

const T = { system: null, msgs: [], view: [], busy: false, rec: null, listening: false, showCfg: false };

const TUTOR_STARTERS = [
  { label: 'Parse a sentence (إعراب)', text: 'Give me one short classical Arabic sentence, fully vowelled, and ask me to give its إعراب word by word. Wait for my answer, then correct it.' },
  { label: 'Speak with me in Arabic', text: 'Let us have a simple conversation in فصحى. Ask me one question in Arabic at my level and correct whatever I answer.' },
  { label: 'Drill my weakest topic', text: 'Pick my weakest category from my progress and drill me on it, one question at a time.' },
  { label: 'Conjugation drill (تصريف)', text: 'Give me a verb and a person/tense to conjugate, one at a time, and correct my answer.' }
];

function tutorSchema() {
  return {
    type: 'object',
    properties: {
      reply: { type: 'string', description: 'What the tutor says to the learner: brief feedback in English, with Arabic where useful.' },
      corrected: { type: 'string', description: 'The learner\'s Arabic rewritten correctly and fully vowelled. Empty string when the learner wrote no Arabic or it was already correct.' },
      errors: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            wrong: { type: 'string', description: 'The learner\'s mistaken word or phrase, as they gave it.' },
            right: { type: 'string', description: 'The correct form, vowelled.' },
            explanation: { type: 'string', description: 'One or two sentences naming the rule.' },
            category: { type: 'string', enum: [...allUnits().map(u => u.id), 'other'] }
          },
          required: ['wrong', 'right', 'explanation', 'category'],
          additionalProperties: false
        }
      },
      next_prompt: { type: 'string', description: 'The next question or task for the learner, so practice continues. Empty string if none.' }
    },
    required: ['reply', 'corrected', 'errors', 'next_prompt'],
    additionalProperties: false
  };
}

function tutorSystem() {
  const cats = allUnits().map(u => {
    const done = unitLessonsDone(u);
    return `- ${u.id}: ${u.en} (${u.ar}) — ${trackOf(u).en}; ${done}/${u.lessons.length} lessons done, mastery ${Math.round(mastery(u.id) * 100)}%`;
  }).join('\n');
  return `You are the tutor inside Mizan Arabic, an app that teaches classical Arabic syntax (نحو) and morphology (صرف) to an English-speaking learner. The learner talks to you by voice or by typing, in Arabic, English, or a mix, and wants to be corrected.

How their words reach you: spoken input passes through the device's speech recognition before you see it, so it usually arrives without vowel marks and may contain recognition slips (a wrong but similar-sounding word). Missing harakat are therefore not the learner's mistake. Judge what the text can actually show: word choice, word order, agreement in gender and number, verb form and conjugation, case where it is visible in the letters (ـون/ـين, ـان/ـين, أبو/أبا/أبي, a dropped nūn or weak letter), and the correctness of any grammatical analysis they state. If a word looks like a recognition slip rather than a learner error, say so instead of marking it wrong.

What a good turn looks like: tell the learner plainly whether they were right. For each real mistake, show what they said, the correct form with full vowelling, and the rule in a sentence or two, the way a patient teacher would at the board. Give the whole corrected sentence fully vowelled so they can see the case endings. Then give them the next thing to do, so the practice keeps moving. Keep replies short; this is a spoken back-and-forth, not a lecture. Explain in English and write all Arabic in Arabic script.

Examples and sentences you supply should come from classical usage — the Qur'an, well-known poetry, or sentences in that register — and be pitched at the learner's level shown below. Do not offer pronunciation coaching; the app is about grammar.

Each mistake carries a category so the app can track weak areas. Use the unit id whose topic the mistake belongs to, or "other" if none fits. The curriculum and the learner's current progress:
${cats}

Lean your questions toward the categories with low mastery among the ones they have started, and do not test material from units they have not reached unless they ask.`;
}

/* ── API call ── */
async function tutorCall() {
  const model = TC.model || TUTOR_MODELS[0].id;
  const headers = { 'content-type': 'application/json', 'anthropic-version': '2026-10-21' };
  const body = {
    model, max_tokens: 16000, system: T.system, messages: T.msgs,
    output_config: { format: { type: 'json_schema', schema: tutorSchema() } }
  };
  // If a safety classifier declines a turn, let the API retry it on its default fallback model.
  if (model !== 'claude-haiku-5-5') { headers['anthropic-beta'] = 'server-side-fallback-2026-07-01'; body.fallbacks = 'default'; }
  if (!TC.proxy) { headers['x-api-key'] = TC.key; headers['anthropic-dangerous-direct-browser-access'] = 'true'; }

  let res;
  try { res = await fetch(TC.proxy || API_URL, { method: 'POST', headers, body: JSON.stringify(body) }); }
  catch (e) { throw new Error('No connection — the tutor needs the internet. Lessons and reviews still work offline.'); }
  let data = null;
  try { data = await res.json(); } catch (e) {}
  if (!res.ok) {
    const detail = data && data.error && data.error.message ? ' (' + data.error.message + ')' : '';
    if (res.status === 401 || res.status === 403) throw new Error('The API key was rejected. Check it in tutor settings.' + detail);
    if (res.status === 429) throw new Error('Rate limited — wait a moment and send again.' + detail);
    if (res.status >= 500) throw new Error('The API is having trouble right now. Try again shortly.' + detail);
    throw new Error('Request failed with status ' + res.status + '.' + detail);
  }
  if (data.stop_reason === 'refusal') throw new Error('The model declined to answer that. Try rephrasing.');
  if (data.stop_reason === 'max_tokens') throw new Error('The reply was cut off. Try a shorter message.');
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  let out;
  try { out = JSON.parse(text); } catch (e) { throw new Error('The tutor\'s reply could not be read. Send again.'); }
  return { out, content: data.content };
}

async function tutorSend(text) {
  text = (text || '').trim();
  if (!text || T.busy) return;
  if (!tutorReady()) { T.showCfg = true; renderTutor(); return toast('Add an API key first'); }
  if (T.msgs.length >= MAX_TURNS * 2) tutorReset(true);
  if (!T.system) T.system = tutorSystem();
  T.msgs.push({ role: 'user', content: text });
  T.view.push({ who: 'me', text });
  T.busy = true; renderTutorLog();
  try {
    const { out, content } = await tutorCall();
    T.msgs.push({ role: 'assistant', content }); // returned unchanged, as the API expects
    T.view.push({ who: 'tutor', out });
    const cats = new Set();
    (out.errors || []).forEach(e => { if (findUnit(e.category)) cats.add(e.category); });
    cats.forEach(id => updateMastery(id, 0, 0.12)); // a spoken mistake nudges that category down
    logActivity(a => { a.q++; if (!out.errors || !out.errors.length) a.c++; });
    save();
  } catch (e) {
    T.msgs.pop();
    T.view.push({ who: 'err', text: e.message });
  }
  T.busy = false; renderTutorLog();
}
function tutorReset(silent) {
  T.system = null; T.msgs = []; T.view = silent ? [{ who: 'note', text: 'Started a fresh session to keep replies quick.' }] : [];
  if (!silent) renderTutor();
}

/* ── listening ── */
function speechSupported() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); }
function toggleMic() {
  if (T.listening) { T.rec && T.rec.stop(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return toast('This browser cannot listen — type instead, or use Chrome');
  const rec = new SR();
  rec.lang = TC.lang || 'ar-SA';
  rec.interimResults = true; rec.continuous = false;
  const box = $('#tutorInput'); const base = box.value ? box.value.trim() + ' ' : '';
  rec.onresult = ev => { box.value = base + Array.from(ev.results).map(r => r[0].transcript).join(''); };
  rec.onerror = ev => { if (ev.error === 'not-allowed') toast('Microphone permission is blocked'); else if (ev.error !== 'no-speech' && ev.error !== 'aborted') toast('Could not hear that — try again'); };
  rec.onend = () => { T.listening = false; T.rec = null; micUi(); };
  T.rec = rec; T.listening = true; micUi();
  try { rec.start(); } catch (e) { T.listening = false; micUi(); }
}
function micUi() {
  const b = $('#micBtn'); if (!b) return;
  b.classList.toggle('live', T.listening);
  b.textContent = T.listening ? '■' : '🎤';
  const h = $('#micHint'); if (h) h.textContent = T.listening ? 'Listening… speak, then check the text and send.' : '';
}
function setMicLang(v) { TC.lang = v; saveTutorCfg(); }

/* ── view ── */
function renderTutor() {
  const el = $('#view-tutor');
  const cfgOpen = T.showCfg || !tutorReady();
  el.innerHTML = `
    <div class="sec-head"><div class="sec-title">AI tutor — speak or type, get corrected</div>
      <div class="btn-row"><button class="btn ghost small" onclick="tutorReset()">New session</button>
      <button class="btn ghost small" onclick="T.showCfg=!T.showCfg;renderTutor()">⚙</button></div></div>
    ${cfgOpen ? `<div class="card">
      <b style="font-size:13px">Tutor settings</b>
      <div class="tiny" style="margin:4px 0 10px">The tutor runs on the Claude API, which is billed to your own Anthropic account. Your key is stored only on this device, is never included in backups, and is sent only to api.anthropic.com. Everything else in the app works without it.</div>
      <label class="fld">Anthropic API key<input id="cfgKey" type="password" autocomplete="off" placeholder="sk-ant-…" value="${esc(TC.key || '')}"></label>
      <label class="fld">Model<select id="cfgModel">${TUTOR_MODELS.map(m => `<option value="${m.id}" ${(TC.model || TUTOR_MODELS[0].id) === m.id ? 'selected' : ''}>${esc(m.name)}</option>`).join('')}</select></label>
      <label class="fld">Proxy URL (optional — use your own server instead of a key on this device)<input id="cfgProxy" type="url" placeholder="https://…" value="${esc(TC.proxy || '')}"></label>
      <div class="btn-row"><button class="btn small" onclick="saveTutorSettings()">Save</button>
      ${TC.key ? `<button class="btn danger small" onclick="TC.key='';saveTutorCfg();renderTutor()">Remove key</button>` : ''}</div>
    </div>` : ''}
    <div class="chips">${TUTOR_STARTERS.map((s, i) => `<button class="chip" onclick="tutorSend(TUTOR_STARTERS[${i}].text)">${esc(s.label)}</button>`).join('')}</div>
    <div id="tutorLog"></div>
    <div class="tutor-bar">
      <div class="tiny" id="micHint" style="min-height:16px;color:var(--gold)"></div>
      <div class="tutor-row">
        <button class="mic" id="micBtn" onclick="toggleMic()" title="Speak">🎤</button>
        <textarea id="tutorInput" rows="2" dir="auto" placeholder="${speechSupported() ? 'Tap the mic and speak Arabic, or type here…' : 'Type here (this browser has no speech recognition — Chrome has it)…'}"></textarea>
        <button class="btn" onclick="sendFromBox()">Send</button>
      </div>
      <div class="tiny" style="padding-top:5px">Listening in
        <select onchange="setMicLang(this.value)" style="background:var(--bg2);color:var(--text2);border:1px solid var(--border);border-radius:5px;font-size:11px;padding:1px 4px">
          ${[['ar-SA', 'Arabic'], ['en-US', 'English']].map(([v, n]) => `<option value="${v}" ${(TC.lang || 'ar-SA') === v ? 'selected' : ''}>${n}</option>`).join('')}
        </select></div>
    </div>`;
  renderTutorLog();
}
function saveTutorSettings() {
  TC.key = $('#cfgKey').value.trim(); TC.model = $('#cfgModel').value; TC.proxy = $('#cfgProxy').value.trim();
  saveTutorCfg(); T.showCfg = false; renderTutor(); toast('Tutor settings saved');
}
function sendFromBox() {
  const box = $('#tutorInput'); const v = box.value;
  if (T.listening && T.rec) T.rec.stop();
  if (!v.trim()) return;
  box.value = ''; tutorSend(v);
}
function nl(s) { return esc(s).replace(/\n/g, '<br>'); }
function renderTutorLog() {
  const el = $('#tutorLog'); if (!el) return;
  if (!T.view.length) {
    el.innerHTML = `<div class="card muted">Say or type anything in Arabic and the tutor will correct it: the wrong form, the right form with full vowelling, and the rule. Or start with one of the drills above. Mistakes are filed under the matching category in Stats.</div>`;
    return;
  }
  el.innerHTML = T.view.map(m => {
    if (m.who === 'me') return `<div class="bubble me" dir="auto">${nl(m.text)}</div>`;
    if (m.who === 'err') return `<div class="bubble err">${nl(m.text)}</div>`;
    if (m.who === 'note') return `<div class="tiny" style="text-align:center;padding:6px">${esc(m.text)}</div>`;
    const o = m.out;
    return `<div class="bubble tutor">
      <div dir="auto">${nl(o.reply)}</div>
      ${o.corrected ? `<div class="fix"><div class="tiny">Corrected</div><div class="example-ar">${esc(o.corrected)}</div></div>` : ''}
      ${(o.errors || []).map(e => {
        const u = findUnit(e.category);
        return `<div class="err-item">
          <div><span class="ar wrong">${esc(e.wrong)}</span> → <span class="ar right">${esc(e.right)}</span></div>
          <div class="tiny" style="color:var(--text2)">${nl(e.explanation)}</div>
          ${u ? `<div class="res-lic" style="color:var(--gold);background:var(--gold-dim);border-color:rgba(201,168,76,.3)">${esc(u.en)}</div>` : ''}
        </div>`;
      }).join('')}
      ${o.next_prompt ? `<div class="next" dir="auto">${nl(o.next_prompt)}</div>` : ''}
    </div>`;
  }).join('') + (T.busy ? `<div class="bubble tutor muted">Thinking…</div>` : '');
  const last = el.lastElementChild; if (last) last.scrollIntoView({ block: 'nearest' });
}
