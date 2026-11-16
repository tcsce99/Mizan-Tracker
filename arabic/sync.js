/* Mizan Arabic — automatic sync.
   Progress lives in localStorage and, when signed in, in one Firestore
   document per user. It uses the same Firebase project and accounts as the
   Mizan daily tracker. Every change is merged (see mergeState in app.js),
   never overwritten, so two devices can both make progress offline. */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore, doc, setDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const app = initializeApp({
  apiKey: 'AIzaSyDk9fvt0dELOXARMfOttl9b_g0wwuKEDs4',
  authDomain: 'mizan-tracker-78805.firebaseapp.com',
  projectId: 'mizan-tracker-78805',
  storageBucket: 'mizan-tracker-78805.firebasestorage.app',
  messagingSenderId: '467094864502',
  appId: '1:467094864502:web:0df86475e9aff6c1489557'
});
const auth = getAuth(app), db = getFirestore(app);

let ref = null, stop = null, timer = null, lastSent = '';
const status = t => { window.syncStatus = t; window.refreshSyncCard && window.refreshSyncCard(); };

async function upload() {
  if (!ref) return;
  const json = JSON.stringify(window.localState());
  if (json === lastSent) return;
  lastSent = json;
  try { await setDoc(ref, { state: json, updatedAt: Date.now() }); status('Up to date · ' + new Date().toLocaleTimeString()); }
  catch (e) { lastSent = ''; status('Could not reach the cloud — will retry on the next change'); }
}
window.syncPush = () => { if (!ref) return; clearTimeout(timer); timer = setTimeout(upload, 1500); };

window.syncSignIn = (mode, email, pass) =>
  mode === 'google' ? signInWithPopup(auth, new GoogleAuthProvider())
  : mode === 'signup' ? createUserWithEmailAndPassword(auth, email, pass)
  : signInWithEmailAndPassword(auth, email, pass);
window.syncSignOut = () => signOut(auth);

onAuthStateChanged(auth, user => {
  if (stop) { stop(); stop = null; }
  if (!user) { ref = null; window.syncUser = null; status(''); return; }
  window.syncUser = user.email || user.displayName || 'your account';
  ref = doc(db, 'users', user.uid, 'meta', 'arabic');
  status('Connecting…');
  stop = onSnapshot(ref, snap => {
    if (snap.metadata.hasPendingWrites) return; // our own write echoing back
    let remote = null;
    try { remote = snap.exists() ? JSON.parse(snap.data().state) : null; } catch (e) {}
    if (remote) lastSent = JSON.stringify(remote);
    window.applyRemote(remote);
    upload(); // sends only if merging added something the cloud lacks
  }, () => status('Sync is blocked — this account cannot read its Arabic progress yet'));
});
