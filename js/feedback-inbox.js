import { auth, db, googleProvider } from './firebase-client.js';
import { signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { collection, getDocs, limit, orderBy, query, updateDoc, doc } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';

const ownerEmail = 'mjhmbrur@gmail.com';
const signInButton = document.getElementById('inbox-sign-in');
const signOutButton = document.getElementById('inbox-sign-out');
const inboxContent = document.getElementById('inbox-content');
const inboxStatus = document.getElementById('inbox-status');
const inboxList = document.getElementById('inbox-list');
const inboxSearch = document.getElementById('inbox-search');
const inboxCategory = document.getElementById('inbox-category');
const inboxCount = document.getElementById('inbox-count');
let feedbackItems = [];

function setStatus(message, isError = false) {
    inboxStatus.textContent = message;
    inboxStatus.hidden = !message;
    inboxStatus.classList.toggle('is-error', isError);
}

function dateLabel(timestamp) {
    if (!timestamp || typeof timestamp.toDate !== 'function') return 'Just now';
    return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(timestamp.toDate());
}

function renderFeedback() {
    const search = inboxSearch.value.trim().toLowerCase();
    const category = inboxCategory.value;
    const filtered = feedbackItems.filter(({ data }) => {
        const matchesCategory = category === 'all' || data.category === category;
        const haystack = `${data.message || ''} ${data.email || ''} ${data.displayName || ''}`.toLowerCase();
        return matchesCategory && haystack.includes(search);
    });

    inboxList.replaceChildren();
    inboxCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'message' : 'messages'}`;
    if (!filtered.length) {
        const empty = document.createElement('p');
        empty.className = 'inbox-empty';
        empty.textContent = feedbackItems.length ? 'No feedback matches these filters.' : 'No feedback has been submitted yet.';
        inboxList.appendChild(empty);
        return;
    }

    filtered.forEach(({ id, data }) => {
        const card = document.createElement('article');
        card.className = 'inbox-card';
        const header = document.createElement('div');
        header.className = 'inbox-card-header';
        const categoryLabel = document.createElement('span');
        categoryLabel.className = 'inbox-category-label';
        categoryLabel.textContent = data.category || 'Feedback';
        const statusLabel = document.createElement('span');
        statusLabel.className = `inbox-status ${data.status === 'reviewed' ? 'is-reviewed' : ''}`;
        statusLabel.textContent = data.status === 'reviewed' ? 'Reviewed' : 'New';
        header.append(categoryLabel, statusLabel);

        const message = document.createElement('p');
        message.className = 'inbox-message';
        message.textContent = data.message || '';
        const meta = document.createElement('p');
        meta.className = 'inbox-meta';
        meta.textContent = `${data.displayName || 'Google user'}${data.email ? ` · ${data.email}` : ''} · ${dateLabel(data.createdAt)}`;
        card.append(header, message, meta);

        if (data.page) {
            try {
                const pageUrl = new URL(data.page);
                if (pageUrl.protocol === 'https:' || pageUrl.protocol === 'http:') {
                    const page = document.createElement('a');
                    page.className = 'inbox-page-link';
                    page.href = pageUrl.href;
                    page.target = '_blank';
                    page.rel = 'noopener noreferrer';
                    page.textContent = 'Submitted from this page';
                    card.appendChild(page);
                }
            } catch (error) {
                console.warn('Ignoring an invalid feedback page URL.', error);
            }
        }

        const action = document.createElement('button');
        action.className = 'inbox-review-button';
        action.type = 'button';
        action.textContent = data.status === 'reviewed' ? 'Mark as new' : 'Mark as reviewed';
        action.addEventListener('click', async () => {
            action.disabled = true;
            try {
                const nextStatus = data.status === 'reviewed' ? 'new' : 'reviewed';
                await updateDoc(doc(db, 'feedback', id), { status: nextStatus });
                data.status = nextStatus;
                renderFeedback();
            } catch (error) {
                console.error('Unable to update feedback status.', error);
                setStatus('Could not update this message. Check the Firestore rules and try again.', true);
                action.disabled = false;
            }
        });
        card.appendChild(action);
        inboxList.appendChild(card);
    });
}

async function loadFeedback() {
    setStatus('Loading feedback…');
    inboxContent.hidden = true;
    try {
        const feedbackQuery = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'), limit(200));
        const snapshot = await getDocs(feedbackQuery);
        feedbackItems = snapshot.docs.map((item) => ({ id: item.id, data: item.data() }));
        renderFeedback();
        inboxContent.hidden = false;
        setStatus('');
    } catch (error) {
        console.error('Unable to load the feedback inbox.', error);
        setStatus(error.code === 'permission-denied'
            ? 'Access denied. Sign in with the Google account authorized to view this inbox.'
            : 'Could not load feedback. Check that Firestore is enabled and its security rules are published.', true);
    }
}

signInButton.addEventListener('click', async () => {
    signInButton.disabled = true;
    setStatus('Signing in with Google…');
    try {
        if (auth.currentUser) await signOut(auth);
        const { user } = await signInWithPopup(auth, googleProvider);
        if (user.email?.toLowerCase() !== ownerEmail) {
            await signOut(auth);
            setStatus(`Access is restricted to ${ownerEmail}. Please choose that Google account.`, true);
            return;
        }
        signInButton.hidden = true;
        signOutButton.hidden = false;
        await loadFeedback();
    } catch (error) {
        console.error('Unable to sign in to the feedback inbox.', error);
        const message = error.code === 'auth/unauthorized-domain'
            ? 'This domain is not authorized for Google sign-in. Add it in Firebase Authentication settings.'
            : (error.code === 'auth/popup-blocked'
                ? 'Your browser blocked the Google sign-in window. Allow pop-ups for this site and try again.'
                : (error.code === 'auth/operation-not-allowed'
                    ? 'Google sign-in is not enabled for this Firebase project yet.'
                    : 'Google sign-in failed. Please try again.'));
        setStatus(message, true);
    } finally {
        signInButton.disabled = false;
    }
});

signOutButton.addEventListener('click', async () => {
    try {
        await signOut(auth);
        feedbackItems = [];
        inboxList.replaceChildren();
        inboxContent.hidden = true;
        signOutButton.hidden = true;
        signInButton.hidden = false;
        setStatus('You are signed out.');
    } catch (error) {
        console.error('Unable to sign out of the feedback inbox.', error);
        setStatus('Could not sign out. Please try again.', true);
    }
});

inboxSearch.addEventListener('input', renderFeedback);
inboxCategory.addEventListener('change', renderFeedback);
