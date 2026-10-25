import { auth, db, googleProvider } from './firebase-client.js';
import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';

document.body.insertAdjacentHTML('beforeend', `
    <button class="feedback-launcher" id="feedback-launcher" type="button" aria-haspopup="dialog" aria-controls="site-feedback-dialog">
        <i class="fa-solid fa-comment-dots" aria-hidden="true"></i><span>Feedback</span>
    </button>
    <dialog class="feedback-dialog" id="site-feedback-dialog" aria-labelledby="feedback-title">
        <form class="feedback-form" id="feedback-form">
            <div class="feedback-header">
                <div><span class="feedback-eyebrow">HELP US IMPROVE</span><h2 id="feedback-title">Share your feedback</h2></div>
                <button class="feedback-close" type="button" aria-label="Close feedback form">&times;</button>
            </div>
            <p class="feedback-intro">Found a problem or have an idea? Tell us and help make Road to CA better.</p>
            <label class="feedback-label" for="feedback-category">What would you like to share?</label>
            <select class="feedback-control" id="feedback-category" name="category">
                <option>Report a problem</option>
                <option>Suggest an improvement</option>
                <option>Ask a question</option>
                <option>Other feedback</option>
            </select>
            <label class="feedback-label" for="feedback-message">Your message</label>
            <textarea class="feedback-control feedback-message" id="feedback-message" name="message" rows="5" maxlength="2000" placeholder="Describe the issue or share your suggestion..." required></textarea>
            <div class="feedback-meta"><span>Your page and Google account name/email will be included.</span><span id="feedback-counter" aria-live="polite">0 / 2000</span></div>
            <p class="feedback-notice"><i class="fa-solid fa-lock" aria-hidden="true"></i> Feedback is stored privately. Only the site owner can view submissions. Please do not include passwords or other sensitive information.</p>
            <p class="feedback-status" id="feedback-status" role="status" aria-live="polite" hidden></p>
            <div class="feedback-actions">
                <button class="feedback-cancel" type="button">Cancel</button>
                <button class="feedback-submit" type="submit"><i class="fa-brands fa-google" aria-hidden="true"></i> Sign in with Google &amp; Send</button>
            </div>
        </form>
    </dialog>
`);

const feedbackLauncher = document.getElementById('feedback-launcher');
const feedbackDialog = document.getElementById('site-feedback-dialog');
const feedbackForm = document.getElementById('feedback-form');
const feedbackCategory = document.getElementById('feedback-category');
const feedbackMessage = document.getElementById('feedback-message');
const feedbackCounter = document.getElementById('feedback-counter');
const feedbackStatus = document.getElementById('feedback-status');
const submitButton = feedbackForm.querySelector('.feedback-submit');

function closeFeedbackDialog() {
    feedbackDialog.close();
}

function showFeedbackStatus(message, isError = false) {
    feedbackStatus.textContent = message;
    feedbackStatus.hidden = false;
    feedbackStatus.classList.toggle('is-error', isError);
}

function getFeedbackErrorMessage(error) {
    if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        return 'Google sign-in was cancelled. Your feedback has not been sent.';
    }
    if (error.code === 'auth/unauthorized-domain') {
        return 'This website domain is not authorized for Google sign-in yet. Add it in Firebase Authentication settings.';
    }
    if (error.code === 'auth/popup-blocked') {
        return 'Your browser blocked the Google sign-in window. Allow pop-ups for this site and try again.';
    }
    if (error.code === 'auth/operation-not-allowed') {
        return 'Google sign-in is not enabled for this Firebase project yet.';
    }
    if (error.code === 'permission-denied' || error.code === 'firestore/permission-denied') {
        return 'Feedback could not be saved. Check that the Firestore security rules have been published.';
    }
    return 'We could not send your feedback. Please try again in a moment.';
}

feedbackLauncher.addEventListener('click', () => {
    feedbackStatus.hidden = true;
    feedbackDialog.showModal();
    feedbackMessage.focus();
});
feedbackDialog.querySelector('.feedback-close').addEventListener('click', closeFeedbackDialog);
feedbackDialog.querySelector('.feedback-cancel').addEventListener('click', closeFeedbackDialog);
feedbackDialog.addEventListener('click', (event) => {
    if (event.target === feedbackDialog) closeFeedbackDialog();
});
feedbackDialog.addEventListener('close', () => feedbackLauncher.focus());
feedbackMessage.addEventListener('input', () => {
    feedbackMessage.setCustomValidity(feedbackMessage.value.trim() ? '' : 'Please enter a message before continuing.');
    feedbackCounter.textContent = `${feedbackMessage.value.length} / 2000`;
});
feedbackForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = feedbackMessage.value.trim();
    if (!message) {
        feedbackMessage.setCustomValidity('Please enter a message before continuing.');
        feedbackMessage.reportValidity();
        return;
    }

    submitButton.disabled = true;
    showFeedbackStatus('Connecting to Google…');
    try {
        const credential = auth.currentUser
            ? { user: auth.currentUser }
            : await signInWithPopup(auth, googleProvider);
        showFeedbackStatus('Sending your feedback securely…');
        await addDoc(collection(db, 'feedback'), {
            category: feedbackCategory.value,
            message,
            page: window.location.href,
            uid: credential.user.uid,
            email: credential.user.email || '',
            displayName: credential.user.displayName || '',
            status: 'new',
            createdAt: serverTimestamp()
        });
        feedbackForm.reset();
        feedbackCounter.textContent = '0 / 2000';
        showFeedbackStatus('Thank you! Your feedback was sent privately to the site owner.');
    } catch (error) {
        console.error('Unable to submit feedback.', error);
        showFeedbackStatus(getFeedbackErrorMessage(error), true);
    } finally {
        submitButton.disabled = false;
    }
});
