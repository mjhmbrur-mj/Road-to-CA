import { auth, db, googleProvider } from './firebase-client.js';
import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { collection, doc, getDocs, orderBy, query, serverTimestamp, setDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const signInButton = document.getElementById('dashboard-sign-in');
const signInView = document.getElementById('sign-in-view');
const signOutButton = document.getElementById('dashboard-sign-out');
const dashboardContent = document.getElementById('dashboard-content');
const dashboardStatus = document.getElementById('dashboard-status');
const activityList = document.getElementById('activity-list');
const accountAvatar = document.getElementById('account-avatar');
const accountAvatarFallback = document.getElementById('account-avatar-fallback');
let authChangeVersion = 0;

function setStatus(message = '', isError = false) {
    dashboardStatus.textContent = message;
    dashboardStatus.hidden = !message;
    dashboardStatus.classList.toggle('is-error', isError);
}

function formatDate(timestamp) {
    if (!timestamp || typeof timestamp.toDate !== 'function') return 'Date unavailable';
    return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(timestamp.toDate());
}

function renderAccount(user) {
    document.getElementById('account-name').textContent = user.displayName || 'Student';
    document.getElementById('account-email').textContent = user.email || '';
    if (user.photoURL) {
        accountAvatar.src = user.photoURL;
        accountAvatar.hidden = false;
        accountAvatarFallback.hidden = true;
    } else {
        accountAvatar.removeAttribute('src');
        accountAvatar.hidden = true;
        accountAvatarFallback.hidden = false;
    }
}

function renderActivities(activities) {
    activityList.replaceChildren();
    document.getElementById('stat-attempts').textContent = String(activities.length);
    document.getElementById('stat-subjects').textContent = '7';
    if (!activities.length) {
        document.getElementById('stat-average').textContent = '—';
        const empty = document.createElement('div');
        empty.className = 'empty-state rounded-xl border border-dashed border-slate-200';
        empty.innerHTML = '<i class="fa-regular fa-clipboard" aria-hidden="true"></i><strong>No quiz attempts yet</strong><p>Complete a quiz while signed in and your result will appear here.</p>';
        activityList.appendChild(empty);
        return;
    }

    const percentages = activities.map(({ data }) => (data.score / data.totalQuestions) * 100);
    document.getElementById('stat-average').textContent = `${Math.round(percentages.reduce((total, percentage) => total + percentage, 0) / percentages.length)}%`;

    activities.forEach(({ data }) => {
        const item = document.createElement('article');
        item.className = 'activity-item';
        const icon = document.createElement('span');
        icon.className = 'activity-icon';
        icon.innerHTML = '<i class="fa-solid fa-clipboard-check" aria-hidden="true"></i>';
        const detail = document.createElement('div');
        detail.className = 'activity-detail';
        const title = document.createElement('h3');
        title.className = 'font-semibold text-slate-900';
        title.textContent = `${data.subjectName} · ${data.testName || data.activityName || 'Completed test'}`;
        const date = document.createElement('p');
        date.className = 'mt-1 text-sm text-slate-500';
        date.textContent = formatDate(data.completedAt);
        const score = document.createElement('strong');
        const percentage = (data.score / data.totalQuestions) * 100;
        const passed = percentage >= 70;
        score.className = `activity-score ${passed ? 'is-pass' : 'is-fail'}`;
        score.textContent = `${data.score}/${data.totalQuestions} · ${Math.round(percentage)}% · ${passed ? 'Pass' : 'Fail'}`;
        detail.append(title, date);
        item.append(icon, detail, score);
        activityList.appendChild(item);
    });
}

async function loadDashboard(user, version) {
    setStatus('Loading your dashboard…');
    dashboardContent.hidden = true;
    try {
        await setDoc(doc(db, 'users', user.uid), {
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
            updatedAt: serverTimestamp()
        }, { merge: true });
        const [resultsSnapshot, legacySnapshot] = await Promise.all([
            getDocs(query(
                collection(db, 'users', user.uid, 'testResults'),
                orderBy('completedAt', 'desc')
            )),
            getDocs(query(
                collection(db, 'users', user.uid, 'activities'),
                orderBy('completedAt', 'desc')
            ))
        ]);
        if (version !== authChangeVersion || auth.currentUser?.uid !== user.uid) return;
        const activities = [
            ...resultsSnapshot.docs.map((item) => ({ id: item.id, data: item.data() })),
            ...legacySnapshot.docs.map((item) => ({ id: item.id, data: item.data() }))
        ].sort((left, right) => (right.data.completedAt?.toMillis?.() || 0) - (left.data.completedAt?.toMillis?.() || 0));
        renderActivities(activities);
        signInView.hidden = true;
        renderAccount(user);
        dashboardContent.hidden = false;
        signInButton.hidden = true;
        setStatus();
    } catch (error) {
        console.error('Unable to load the student dashboard.', error);
        if (version !== authChangeVersion) return;
        renderAccount(user);
        document.getElementById('stat-attempts').textContent = '—';
        document.getElementById('stat-average').textContent = '—';
        document.getElementById('stat-subjects').textContent = '7';
        activityList.replaceChildren();
        const unavailable = document.createElement('p');
        unavailable.className = 'empty-state';
        unavailable.textContent = 'Test history is unavailable until your profile and Firestore rules are configured.';
        activityList.appendChild(unavailable);
        signInView.hidden = true;
        signInButton.hidden = true;
        dashboardContent.hidden = false;
        setStatus(error.code === 'permission-denied'
            ? 'Your profile or test results could not be loaded. Publish the updated Firestore security rules and try again.'
            : 'Your dashboard could not be loaded. Check your connection and try again.', true);
    }
}

signInButton.addEventListener('click', async () => {
    signInButton.disabled = true;
    setStatus('Signing in with Google…');
    try {
        await setPersistence(auth, browserLocalPersistence);
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error('Unable to sign in to the student dashboard.', error);
        const message = error.code === 'auth/unauthorized-domain'
            ? 'This domain is not authorized for Google sign-in. Add it in Firebase Authentication settings.'
            : (error.code === 'auth/popup-blocked'
                ? 'Your browser blocked the Google sign-in window. Allow pop-ups and try again.'
                : (error.code === 'auth/operation-not-allowed'
                    ? 'Google sign-in is not enabled for this Firebase project.'
                    : (error.code === 'auth/popup-closed-by-user'
                        ? 'Google sign-in was cancelled.'
                        : 'Google sign-in failed. Please try again.')));
        setStatus(message, true);
    } finally {
        signInButton.disabled = false;
    }
});

signOutButton.addEventListener('click', async () => {
    signOutButton.disabled = true;
    try {
        await signOut(auth);
        setStatus('You are signed out.');
    } catch (error) {
        console.error('Unable to sign out of the student dashboard.', error);
        setStatus('Could not sign out. Please try again.', true);
    } finally {
        signOutButton.disabled = false;
    }
});

onAuthStateChanged(auth, (user) => {
    const version = ++authChangeVersion;
    if (user) {
        signInButton.hidden = true;
        signInView.hidden = true;
        void loadDashboard(user, version);
    } else {
        dashboardContent.hidden = true;
        signInView.hidden = false;
        signInButton.hidden = false;
        activityList.replaceChildren();
        setStatus('Sign in with Google to view and save your quiz activity.');
    }
});
