# Fuṣḥā — Classical Arabic

An app for learning to read and speak Classical (Qur'anic) Arabic, with the end
goal of reading any Arabic text without diacritics. It lives beside the Mizan
tracker in this repository and does not touch it.

## What is in it

- **54 lessons in 8 tracks**: script, vocabulary, morphology (ṣarf), grammar
  (naḥw), Qur'anic reading, poetry and prose, reading without tashkīl, speaking.
  Examples come from the Qur'an, hadith, proverbs, the Alfiyya, al-Mutanabbī
  and the Muʿallaqāt.
- **Test out**: any lesson, including locked ones, can be skipped by scoring 80%
  on its questions.
- **Reader**: 16 texts with a tashkīl on/off switch, tap-a-word glosses, and a
  read-aloud check that listens and marks the words it did not hear.
- **AI tutor**: speak or type; it shows your sentence corrected with full
  tashkīl, explains each error, and replies in fuṣḥā.
- **Vocabulary review**: 142 high-frequency words on a spaced-repetition schedule.
- **Weekly review**: a mixed session of at most 15 minutes, due each week once
  you have material from earlier weeks. It can be skipped 3 times a week (each
  skip lasts that day); after that, new lessons and test-outs are locked until
  it is done.
- **Timeline**: nine reading milestones with dates projected from your pace
  over the last two weeks, plus progress for every track.

## Running it

**Web / desktop**: serve the `fusha/` folder over HTTP(S), for example with
GitHub Pages, and open `fusha/index.html`. Chrome and Edge offer "Install app".
Locally: `npx http-server fusha`.

**Android APK**: the `Build Fusha APK` GitHub Actions workflow builds it on
every push that touches `fusha/`; download `fusha.apk` from the run's
`fusha-apk` artifact. To build locally with the Android SDK installed:

    cd fusha/android && ./gradlew assembleRelease

The APK is signed with the debug key, so it installs directly but is not ready
for the Play Store.

## AI tutor setup

The app has no server. The tutor calls the Claude API directly with your own
key: open the tutor, tap **Setup**, and paste a key from console.anthropic.com.
The key stays on the device and is sent only to api.anthropic.com; usage is
billed to your Anthropic account.

Limits worth knowing: speech recognition returns text without vowels, so the
tutor corrects word choice, forms and syntax, not your spoken case endings or
pronunciation. Speech recognition needs Chrome or Edge on the web (not Firefox),
and an internet connection on most devices.

## Data

Progress is stored in the browser or app on the device only. Timeline → Settings
has Export and Reset.
