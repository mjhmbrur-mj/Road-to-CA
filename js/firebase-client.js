import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: 'AIzaSyAvtTMQVHamqjViMu3tpYovUvhaLGdq2Fo',
    authDomain: 'feedback-for-road-to-ca.firebaseapp.com',
    projectId: 'feedback-for-road-to-ca',
    storageBucket: 'feedback-for-road-to-ca.firebasestorage.app',
    messagingSenderId: '1022929828810',
    appId: '1:1022929828810:web:a53a0d0f6517f65ef32d33',
    measurementId: 'G-DNHCCQYQYZ'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export { auth, db, googleProvider };
