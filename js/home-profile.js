import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { auth } from './firebase-client.js';

const profileAvatar = document.getElementById('home-profile-avatar');
const profileIcon = document.querySelector('.profile-link i');

function showProfileIcon() {
    profileAvatar.hidden = true;
    profileAvatar.removeAttribute('src');
    profileIcon.hidden = false;
}

onAuthStateChanged(auth, (user) => {
    showProfileIcon();
    if (!user?.photoURL) return;

    const photoURL = user.photoURL;
    profileAvatar.onload = () => {
        if (profileAvatar.src !== photoURL) return;
        profileAvatar.hidden = false;
        profileIcon.hidden = true;
    };
    profileAvatar.onerror = () => {
        if (profileAvatar.src !== photoURL) return;
        console.error('Unable to load the signed-in user profile image.');
        showProfileIcon();
    };
    profileAvatar.src = photoURL;
}, (error) => {
    console.error('Unable to read the signed-in user profile.', error);
    showProfileIcon();
});
