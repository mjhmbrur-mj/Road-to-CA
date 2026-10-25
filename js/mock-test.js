const mockTestData = [
    {
        subjectId: 'assurance',
        subjectName: 'Assurance',
        tests: [
            { id: 'ass-1', title: 'Mock Test 1', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'ass-2', title: 'Mock Test 2', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'ass-3', title: 'Mock Test 3', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'ass-4', title: 'Mock Test 4', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'ass-5', title: 'Mock Test 5', questions: 50, duration: '50 mins', status: 'Coming Soon' }
        ]
    },
    {
        subjectId: 'btf',
        subjectName: 'Business, Technology and Finance (BTF)',
        tests: [
            { id: 'btf-1', title: 'Mock Test 1', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'btf-2', title: 'Mock Test 2', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'btf-3', title: 'Mock Test 3', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'btf-4', title: 'Mock Test 4', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'btf-5', title: 'Mock Test 5', questions: 50, duration: '50 mins', status: 'Coming Soon' }
        ]
    },
    {
        subjectId: 'financial-accounting',
        subjectName: 'Financial Accounting (FA)',
        tests: [
            { id: 'fa-1', title: 'Mock Test 1', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'fa-2', title: 'Mock Test 2', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'fa-3', title: 'Mock Test 3', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'fa-4', title: 'Mock Test 4', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'fa-5', title: 'Mock Test 5', questions: 50, duration: '50 mins', status: 'Coming Soon' }
        ]
    },
    {
        subjectId: 'management-information',
        subjectName: 'Management Information (MI)',
        tests: [
            { id: 'mi-1', title: 'Mock Test 1', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'mi-2', title: 'Mock Test 2', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'mi-3', title: 'Mock Test 3', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'mi-4', title: 'Mock Test 4', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'mi-5', title: 'Mock Test 5', questions: 50, duration: '50 mins', status: 'Coming Soon' }
        ]
    },
    {
        subjectId: 'principles-of-taxation',
        subjectName: 'Principles of Taxation (PT)',
        tests: [
            { id: 'pt-1', title: 'Mock Test 1', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'pt-2', title: 'Mock Test 2', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'pt-3', title: 'Mock Test 3', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'pt-4', title: 'Mock Test 4', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'pt-5', title: 'Mock Test 5', questions: 50, duration: '50 mins', status: 'Coming Soon' }
        ]
    },
    {
        subjectId: 'business-laws',
        subjectName: 'Business Laws (BL)',
        tests: [
            { id: 'bl-1', title: 'Mock Test 1', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'bl-2', title: 'Mock Test 2', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'bl-3', title: 'Mock Test 3', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'bl-4', title: 'Mock Test 4', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'bl-5', title: 'Mock Test 5', questions: 50, duration: '50 mins', status: 'Coming Soon' }
        ]
    },
    {
        subjectId: 'information-technology',
        subjectName: 'Information Technology (IT)',
        tests: [
            { id: 'it-1', title: 'Mock Test 1', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'it-2', title: 'Mock Test 2', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'it-3', title: 'Mock Test 3', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'it-4', title: 'Mock Test 4', questions: 50, duration: '50 mins', status: 'Coming Soon' },
            { id: 'it-5', title: 'Mock Test 5', questions: 50, duration: '50 mins', status: 'Coming Soon' }
        ]
    }
];

const searchInput = document.getElementById('mock-search');
const subjectFilters = document.getElementById('subject-filters');
const subjectSections = document.getElementById('subject-sections');
const hubSummary = document.getElementById('hub-summary');
const noResults = document.getElementById('no-results');
let selectedSubject = null;

function createTestCard(subject, test) {
    const isReady = test.status === 'Ready';
    const article = document.createElement('article');
    article.className = 'test-card';

    const badge = document.createElement('span');
    badge.className = `status-badge ${isReady ? 'status-ready' : 'status-soon'}`;
    badge.textContent = test.status;

    const title = document.createElement('h3');
    title.textContent = test.title.replace(/(\d+)$/, (number) => number.padStart(2, '0'));

    const details = document.createElement('div');
    details.className = 'test-details';
    details.innerHTML = `<span><i class="fa-regular fa-circle-question" aria-hidden="true"></i>${test.questions} MCQs</span><span><i class="fa-regular fa-clock" aria-hidden="true"></i>${test.duration}</span>`;

    article.append(badge, title, details);
    if (isReady && test.link) {
        const action = document.createElement('a');
        action.className = 'test-action';
        action.href = test.link;
        action.innerHTML = 'Start Test <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
        article.append(action);
    } else {
        const action = document.createElement('button');
        action.className = 'test-action';
        action.type = 'button';
        action.disabled = true;
        action.textContent = 'Coming Soon';
        article.append(action);
    }
    return article;
}

function renderHub() {
    const queryTokens = searchInput.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const matchingSubjects = mockTestData.filter((subject) => {
        const searchableText = `${subject.subjectName} ${subject.tests.map((test) => `${test.title} ${test.id}`).join(' ')}`.toLowerCase();
        return queryTokens.every((token) => searchableText.includes(token));
    });
    const activeSubject = mockTestData.find(({ subjectId }) => subjectId === selectedSubject);
    const matchingTests = activeSubject?.tests.filter((test) => {
        const searchableText = `${activeSubject.subjectName} ${test.title} ${test.id}`.toLowerCase();
        return queryTokens.every((token) => searchableText.includes(token));
    }) || [];

    subjectFilters.replaceChildren();
    subjectSections.replaceChildren();
    matchingSubjects.forEach((subject) => {
        const button = document.createElement('button');
        button.className = 'subject-filter';
        button.type = 'button';
        button.setAttribute('aria-expanded', String(subject.subjectId === selectedSubject));
        button.setAttribute('aria-controls', 'subject-sections');
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-book-open';
        icon.setAttribute('aria-hidden', 'true');
        const name = document.createElement('span');
        name.textContent = subject.subjectName;
        button.append(icon, name);
        button.addEventListener('click', () => {
            selectedSubject = subject.subjectId;
            renderHub();
            document.getElementById('subject-sections').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        subjectFilters.append(button);
    });

    if (activeSubject) {
        const section = document.createElement('section');
        section.className = 'subject-section';

        const heading = document.createElement('div');
        heading.className = 'subject-heading';
        const titleGroup = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = activeSubject.subjectName;
        const count = document.createElement('span');
        count.textContent = `${matchingTests.length} of ${activeSubject.tests.length} mock tests`;
        titleGroup.append(title, count);
        const backButton = document.createElement('button');
        backButton.className = 'subject-back';
        backButton.type = 'button';
        backButton.textContent = 'All Subjects';
        backButton.addEventListener('click', () => {
            selectedSubject = null;
            renderHub();
            subjectFilters.querySelector('button')?.focus();
        });
        heading.append(titleGroup, backButton);

        const grid = document.createElement('div');
        grid.className = 'test-grid';
        matchingTests.forEach((test) => grid.append(createTestCard(activeSubject, test)));
        section.append(heading, grid);
        subjectSections.append(section);
    }

    hubSummary.textContent = activeSubject
        ? `Showing ${matchingTests.length} of ${activeSubject.tests.length} mock tests for this subject.`
        : `Choose a subject to view its five full-syllabus mock tests (${mockTestData.length} subjects available).`;
    noResults.hidden = matchingSubjects.length > 0;
}

searchInput.addEventListener('input', renderHub);
renderHub();
