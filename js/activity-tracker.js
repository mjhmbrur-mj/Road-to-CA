import { auth, db } from './firebase-client.js';
import { addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const subjects = {
    assurance: 'Assurance',
    btf: 'Business, Technology and Finance'
};

export async function saveQuizActivity({ subjectId, activityName, score, totalQuestions, topicReport }) {
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
        || score > totalQuestions
        || (topicReport !== undefined
            && (!topicReport
                || topicReport.version !== 1
                || !Array.isArray(topicReport.topics)
                || !Array.isArray(topicReport.responses)
                || topicReport.topics.length < 1
                || topicReport.topics.length > 30
                || topicReport.responses.length < 1
                || topicReport.responses.length > 100))) {
        throw new TypeError('Invalid quiz activity.');
    }

    const activity = {
        subjectId,
        subjectName: subjects[subjectId],
        testName: activityName.trim(),
        score,
        totalQuestions,
        completedAt: serverTimestamp()
    };
    if (topicReport !== undefined) activity.topicReport = topicReport;

    await addDoc(collection(db, 'users', user.uid, 'testResults'), activity);
    return true;
}
