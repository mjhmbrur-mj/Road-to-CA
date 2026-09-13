const drawer = document.getElementById('site-drawer');
const drawerToggle = document.querySelector('.menu-toggle');
const drawerClose = document.querySelector('.drawer-close');
const drawerOverlay = document.querySelector('.drawer-overlay');
const bottomNav = document.querySelector('.bottom-nav');
const tickerTrack = document.getElementById('announcementTrack');
const tickerViewport = document.querySelector('.ticker-viewport');
const siteSearch = document.querySelector('.site-search');
const announcements = [
    { text: 'New chapter quizzes are now available for Assurance.', href: 'assurance.html' },
    { text: 'Download the latest Certificate Level syllabus.', href: 'syllabus.html' },
    { text: 'Test your readiness with a timed mock exam.', href: 'mock-test.html' }
];

function renderAnnouncements() {
    if (!tickerTrack) return;

    const items = announcements.map(({ text, href }) => {
        const item = document.createElement('span');
        item.className = 'ticker-item';
        const link = document.createElement('a');
        link.className = 'ticker-link';
        link.href = href;
        link.textContent = text;
        item.appendChild(link);
        return item;
    });

    items.forEach((item) => tickerTrack.appendChild(item));
    items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelector('a').tabIndex = -1;
        tickerTrack.appendChild(clone);
    });
}

renderAnnouncements();

if (tickerViewport) {
    let pauseTimeout;
    tickerViewport.addEventListener('pointerdown', () => {
        tickerViewport.classList.add('is-paused');
        clearTimeout(pauseTimeout);
        pauseTimeout = setTimeout(() => tickerViewport.classList.remove('is-paused'), 2500);
    });
}

if (siteSearch) {
    const searchPages = [
        { href: 'courses.html', terms: ['course', 'courses', 'accounting', 'assurance', 'tax', 'business', 'technology', 'finance', 'management', 'information', 'law'] },
        { href: 'syllabus.html', terms: ['syllabus', 'curriculum', 'icab', 'subject'] },
        { href: 'mock-exams.html', terms: ['mock', 'exam', 'test', 'practice', 'simulation'] },
    ];

    siteSearch.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = siteSearch.querySelector('input').value.trim().toLowerCase();
        if (!query) return;
        const match = searchPages.find(({ terms }) => terms.some((term) => query.includes(term)));
        window.location.href = match ? match.href : 'courses.html';
    });
}

function setDrawerOpen(isOpen) {
    drawer.classList.toggle('is-open', isOpen);
    drawerOverlay.classList.toggle('is-visible', isOpen);
    drawer.setAttribute('aria-hidden', String(!isOpen));
    drawerToggle.setAttribute('aria-expanded', String(isOpen));
    drawerToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

drawerToggle.addEventListener('click', () => setDrawerOpen(!drawer.classList.contains('is-open')));
drawerClose.addEventListener('click', () => setDrawerOpen(false));
drawerOverlay.addEventListener('click', () => setDrawerOpen(false));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setDrawerOpen(false);
});

const currentFile = window.location.pathname.split('/').pop() || 'index.html';
const pageAliases = {
    'index.html': 'home',
    'assurance.html': 'courses',
    'syllabus.html': 'courses',
    'mock-exams.html': 'mock-test'
};
const activePage = pageAliases[currentFile] || currentFile.replace('.html', '');
document.querySelectorAll('[data-page]').forEach((link) => {
    const isActive = link.dataset.page === activePage;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
});

