# Mizan Arabic — صرف ونحو

An offline-first app for learning classical Arabic **morphology (الصرف)** and
**syntax (النحو)** from real classical texts — the Qurʾan, the Muʿallaqāt, and
the great grammarians. It runs three ways from **one codebase**:

- **Web app** — open it in any browser.
- **Desktop / mobile PWA** — installable, works fully offline after first load.
- **Android APK** — generated from the PWA (see [Building the Android APK](#building-the-android-apk)).

The app lives in [`arabic/`](arabic/). It is dependency-free vanilla
HTML/CSS/JS — no build step, no framework, no network needed to study.

---

## What it teaches

The curriculum is original text, but its **sequence follows the public-domain
classical primers**: [Al-Ājurrūmiyyah](https://ar.wikisource.org/wiki/متن_الآجرومية)
for naḥw, and Bināʾ al-Afʿāl / al-Maqṣūd for ṣarf. Every concept is illustrated
with **examples from classical sources** — Qurʾanic āyāt, the Muʿallaqāt of
Imruʾ al-Qays / Ṭarafa / Labīd, al-Mutanabbī, and others — never invented
sentences.

| Track | Units | Covers |
|-------|-------|--------|
| **النحو — Naḥw (Syntax)** | 7 units, 22 lessons | Parts of speech, iʿrāb & its signs, the nominal sentence (kāna / inna & sisters), the verbal sentence (fāʿil, objects, passive), iḍāfa, the followers (naʿt/ʿaṭf/tawkīd/badal), and special constructions (ḥāl, tamyīz, istithnāʾ, nidāʾ). |
| **الصرف — Ṣarf (Morphology)** | 4 units, 13 lessons | The root system & morphological scale (الميزان), full past/present/command conjugation, governed verbs, the ten derived forms (II–X), the derived nouns (maṣdar, participles, tafḍīl, place/time/instrument), and weak-root changes (الإعلال). |

**35 lessons · 105 sourced examples · 140 quiz questions.**

## Core features (all requested)

- **Skip by proving knowledge.** Three ways to test out of material you already
  know — never gated by time or lesson count:
  - **Test out** a single lesson (score ≥ 85% on its quiz).
  - **Challenge** a whole unit (≥ 80% on a mixed quiz drawn from every lesson).
  - **Placement test** on first launch (or any time) that skips every unit you
    can prove, in order, and drops you exactly where your knowledge ends.
- **Progress tracking for every category.** A mastery score (0–100%) is tracked
  per unit/category with an exponential moving average, shown as strength/weakness
  bars in **Stats**. Daily activity, accuracy, and streaks are logged too.
- **Never-forget spaced repetition.** Every completed lesson enters an
  **FSRS-inspired** scheduler (stability / difficulty / due date). Good recall
  pushes reviews further out; lapses bring them back. A 7-day forecast and a live
  review queue live in **Review**.
- **Adaptive timeline.** The **Timeline** tab projects your completion date from
  your *actual* measured pace over the trailing 21 days. Study more days per week
  and the finish date pulls in; slow down and it honestly drifts out. Per-unit
  milestone dates recompute on every visit.
- **Mandatory weekly review.** 15 minutes of review must be logged every 7 days
  (short review sessions count toward it). Once a week passes without it, opening
  a new lesson or unit challenge offers the review instead; you can skip **3
  times**, after which new lessons are **locked** until the 15 minutes are done.
  The review runs on a clock, not a question count, and leaving early keeps the
  minutes you logged.
- **AI tutor that listens and corrects.** The **Tutor** tab takes speech (Web
  Speech API, Arabic) or typing, and returns the wrong form, the right form fully
  vowelled, and the rule — then the next thing to practise. Each mistake is filed
  under its curriculum category and lowers that category's mastery. It runs on the
  Claude API with **your own Anthropic API key** (billed to your account, stored
  only on the device, never in backups), or through a proxy URL you host. Speech
  recognition needs Chrome/Edge/Android; elsewhere you type. The tutor corrects
  grammar, not pronunciation.
- **Offline-first** service worker; **local-only** data (localStorage) with
  JSON **export/import** backup.

## Running it locally

No build step. Serve the folder over HTTP (a service worker needs a real origin,
not `file://`):

```bash
cd arabic
python3 -m http.server 8000
# open http://localhost:8000
```

Or use any static host. The whole app is `arabic/index.html` + `app.js` + `tutor.js` +
`data-*.js` + `sw.js` + `manifest.json` + icons.

## Installing as a PWA (desktop & mobile)

Open the served URL in Chrome/Edge/Safari and choose **Install app** /
**Add to Home Screen**. After the first load it runs completely offline.

## Building the Android APK

The PWA is packaged into a Trusted Web Activity (TWA) with
[Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) — the same
one-codebase path recommended in `docs/`. First deploy `arabic/` to a public
HTTPS URL (the included GitHub Pages workflow does this on push to `main`), then:

```bash
# 1. Install the CLI (needs Node 18+ and a JDK)
npm install -g @bubblewrap/cli

# 2. Initialize from the deployed manifest
bubblewrap init --manifest https://<your-pages-url>/arabic/manifest.json

# 3. Build the signed APK / AAB
bubblewrap build
# -> app-release-signed.apk  (sideload / testing)
# -> app-release-bundle.aab  (Play Store upload)
```

Alternatively, upload the deployed URL to [PWABuilder](https://www.pwabuilder.com)
and download a ready-to-sign Android package. The manifest already ships
maskable 192/512 icons, `display: standalone`, scope, and an offline service
worker — the PWABuilder checklist passes.

> To make TWA run without the browser address bar, host a Digital Asset Links
> file at `/.well-known/assetlinks.json` with your signing-key fingerprint
> (Bubblewrap prints it during `build`).

## Data & privacy

All progress is stored locally in your browser (`localStorage`, key
`mizanArabicV1`). Nothing leaves the device except what you say or type to the
AI tutor, which goes to the Claude API. Use **Stats → Export backup** to move
progress between devices.

## Sources & licensing

App code is MIT. Lesson prose is original. The teaching *sequence* follows
public-domain classical primers; Qurʾan quotations use the Uthmani text and
poetry comes from public-domain dīwāns. The in-app **Resources** tab links every
source (Quranic Arabic Corpus, al-Maktaba al-Shamela, Arabic Wikisource, Tatoeba,
Kaikki/Wiktionary, Hans Wehr, and more) with its license.

---

*ميزان — "the scale," for the الميزان الصرفي by which every Arabic word is weighed.*
