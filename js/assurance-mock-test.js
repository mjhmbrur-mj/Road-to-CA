const testNumber = Number(new URLSearchParams(window.location.search).get('test'));
const test = window.assuranceMockTests?.find((mock) => mock.id === testNumber);
const title = document.getElementById('testTitle');
const description = document.getElementById('testDescription');
const loadError = document.getElementById('loadError');
const startPanel = document.getElementById('startPanel');
const examPanel = document.getElementById('examPanel');
const questionList = document.getElementById('questionList');
const timerDisplay = document.getElementById('timerDisplay');
const submitButton = document.getElementById('submitTest');
const result = document.getElementById('examResult');
let timerInterval = null;
let remainingSeconds = 90 * 60;
let submitted = false;

function showLoadError(message) {
    loadError.textContent = message;
    loadError.hidden = false;
    startPanel.hidden = true;
    examPanel.hidden = true;
}

if (!test) {
    title.textContent = 'Mock test not found';
    description.textContent = '';
    showLoadError('Choose one of the five Assurance mock tests from the mock-test hub.');
} else if (test.questions.length !== 50 || test.questions.some((question) =>
    !Array.isArray(question.options)
    || question.options.length !== 4
    || !Number.isInteger(question.answer)
    || question.answer < 0
    || question.answer > 3
    || typeof question.q !== 'string'
    || typeof question.explanation !== 'string'
)) {
    title.textContent = test.title;
    description.textContent = '';
    showLoadError('This mock test could not be loaded because its question data is incomplete.');
    console.error(`Assurance ${test.title} has invalid question data.`);
} else {
    title.textContent = `Assurance ${test.title}`;
    description.textContent = 'Full-length ICAB Certificate Level practice paper.';
    startPanel.hidden = false;

    document.getElementById('beginTest').addEventListener('click', () => {
        startPanel.hidden = true;
        examPanel.hidden = false;

        test.questions.forEach((question, index) => {
            const card = document.createElement('article');
            card.className = 'question-card';
            const questionHeading = document.createElement('h2');
            questionHeading.textContent = `${index + 1}. ${question.q}`;
            const options = document.createElement('div');
            options.className = 'options';

            question.options.forEach((option, optionIndex) => {
                const label = document.createElement('label');
                label.className = 'option';
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question-${index}`;
                input.value = String(optionIndex);
                const letter = document.createElement('strong');
                letter.className = 'option-letter';
                letter.textContent = `${String.fromCharCode(65 + optionIndex)})`;
                const text = document.createElement('span');
                text.textContent = option;
                label.append(input, letter, text);
                options.appendChild(label);
            });

            const feedback = document.createElement('p');
            feedback.className = 'question-feedback';
            feedback.hidden = true;
            card.append(questionHeading, options, feedback);
            questionList.appendChild(card);
        });

        const submitTest = async () => {
            if (submitted) return;
            submitted = true;
            clearInterval(timerInterval);
            submitButton.disabled = true;

            let correctCount = 0;
            const inputs = questionList.querySelectorAll('input');
            inputs.forEach((input) => { input.disabled = true; });

            test.questions.forEach((question, index) => {
                const selected = questionList.querySelector(`input[name="question-${index}"]:checked`);
                const isCorrect = selected && Number(selected.value) === question.answer;
                const card = questionList.children[index];
                const feedback = card.querySelector('.question-feedback');
                if (isCorrect) {
                    correctCount += 1;
                    card.classList.add('question-correct');
                } else {
                    card.classList.add('question-incorrect');
                    feedback.textContent = `Correct answer: ${String.fromCharCode(65 + question.answer)}) ${question.options[question.answer]}\n${question.explanation}`;
                    feedback.hidden = false;
                }
            });

            const score = correctCount * 2;
            const totalMarks = test.questions.length * 2;
            const heading = document.createElement('h2');
            heading.textContent = `Your score: ${score} / ${totalMarks} marks`;
            const scoreDetails = document.createElement('p');
            scoreDetails.textContent = `${correctCount} correct out of ${test.questions.length} (${Math.round(score / totalMarks * 100)}%).`;
            const passDetails = document.createElement('p');
            passDetails.textContent = score >= 50
                ? 'You met the 50-mark pass benchmark.'
                : 'Review the explanations for incorrect or unanswered questions.';
            const saveStatus = document.createElement('p');
            saveStatus.setAttribute('role', 'status');
            saveStatus.textContent = 'Saving your result...';
            result.replaceChildren(heading, scoreDetails, passDetails, saveStatus);
            result.hidden = false;

            try {
                const { saveQuizActivity } = await import('./activity-tracker.js');
                const saved = await saveQuizActivity({
                    subjectId: 'assurance',
                    activityName: `Assurance ${test.title}`,
                    score,
                    totalQuestions: totalMarks
                });
                saveStatus.textContent = saved
                    ? 'Result saved to your student dashboard.'
                    : 'Sign in with Google before the test to save results to your dashboard.';
            } catch (error) {
                console.error('Unable to save the Assurance mock-test activity.', error);
                saveStatus.textContent = 'Your result is available, but it could not be saved to your dashboard.';
            }
        };

        submitButton.addEventListener('click', submitTest);
        timerInterval = setInterval(() => {
            remainingSeconds -= 1;
            const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
            const seconds = String(remainingSeconds % 60).padStart(2, '0');
            timerDisplay.textContent = `${minutes}:${seconds}`;
            if (remainingSeconds <= 0) submitTest();
        }, 1000);
    }, { once: true });
}
