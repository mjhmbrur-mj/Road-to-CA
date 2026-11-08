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
                || topicReport.topics.length < 1
                || topicReport.topics.length > 30
                || !Number.isInteger(topicReport.score)
                || !Number.isInteger(topicReport.totalMarks)
                || !Number.isInteger(topicReport.percentage)
                || typeof topicReport.passed !== 'boolean'
                || !Number.isInteger(topicReport.questionCount)
                || topicReport.questionCount < 1
                || topicReport.questionCount > 100
                || !Number.isInteger(topicReport.correctCount)
                || topicReport.correctCount < 0
                || topicReport.correctCount > topicReport.questionCount
                || topicReport.marksPerQuestion !== 2
                || topicReport.totalMarks !== topicReport.questionCount * topicReport.marksPerQuestion
                || topicReport.score !== topicReport.correctCount * topicReport.marksPerQuestion
                || topicReport.percentage !== Math.round(topicReport.score / topicReport.totalMarks * 100)
                || topicReport.passed !== (topicReport.percentage >= 45)
                || typeof topicReport.candidateName !== 'string'
                || topicReport.candidateName.length > 120
                || typeof topicReport.candidatePhotoURL !== 'string'
                || topicReport.candidatePhotoURL.length > 2048))) {
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
