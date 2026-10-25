import { auth, db } from './firebase-client.js';
import { addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const subjects = {
    assurance: 'Assurance',
    btf: 'Business, Technology and Finance'
};

export async function saveQuizActivity({ subjectId, activityName, score, totalQuestions }) {
    const user = auth.currentUser;
    if (!user) return false;

    if (!Object.hasOwn(subjects, subjectId)
        || typeof activityName !== 'string'
        || !activityName.trim()
        || activityName.length > 160
        || !Number.isInteger(score)
        || !Number.isInteger(totalQuestions)
        || score < 0
        || totalQuestions < 1
        || score > totalQuestions) {
        throw new TypeError('Invalid quiz activity.');
    }

    await addDoc(collection(db, 'users', user.uid, 'testResults'), {
        subjectId,
        subjectName: subjects[subjectId],
        testName: activityName.trim(),
        score,
        totalQuestions,
        completedAt: serverTimestamp()
    });
    return true;
}
