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
let selectedSubject = 'all';

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
    const visibleCount = { tests: 0, subjects: 0 };
    subjectSections.replaceChildren();

    mockTestData.forEach((subject) => {
        const matchingTests = subject.tests.filter((test) => {
            const matchesSubject = selectedSubject === 'all' || subject.subjectId === selectedSubject;
            const searchableText = `${subject.subjectName} ${test.title} ${test.id}`.toLowerCase();
            return matchesSubject && queryTokens.every((token) => searchableText.includes(token));
        });
        if (!matchingTests.length) return;

        visibleCount.tests += matchingTests.length;
        visibleCount.subjects += 1;
        const section = document.createElement('section');
        section.className = 'subject-section';

        const heading = document.createElement('div');
        heading.className = 'subject-heading';
        const title = document.createElement('h2');
        title.textContent = subject.subjectName;
        const count = document.createElement('span');
        count.textContent = `${matchingTests.length} ${matchingTests.length === 1 ? 'test' : 'tests'}`;
        heading.append(title, count);

        const grid = document.createElement('div');
        grid.className = 'test-grid';
        matchingTests.forEach((test) => grid.append(createTestCard(subject, test)));
        section.append(heading, grid);
        subjectSections.append(section);
    });

    hubSummary.textContent = `Showing ${visibleCount.tests} of 35 mock tests across ${visibleCount.subjects} subjects.`;
    noResults.hidden = visibleCount.tests > 0;
}

function renderSubjectFilters() {
    const filters = [{ id: 'all', name: 'All Subjects' }, ...mockTestData.map(({ subjectId, subjectName }) => ({ id: subjectId, name: subjectName }))];
    filters.forEach(({ id, name }) => {
        const button = document.createElement('button');
        button.className = 'subject-filter';
        button.type = 'button';
        button.textContent = name;
        button.setAttribute('aria-pressed', String(id === selectedSubject));
        button.addEventListener('click', () => {
            selectedSubject = id;
            subjectFilters.querySelectorAll('.subject-filter').forEach((filter) => {
                filter.setAttribute('aria-pressed', String(filter === button));
            });
            renderHub();
        });
        subjectFilters.append(button);
    });
}

searchInput.addEventListener('input', renderHub);
renderSubjectFilters();
renderHub();
