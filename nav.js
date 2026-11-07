const drawer = document.getElementById('site-drawer');
const drawerToggle = document.querySelector('.menu-toggle');
const drawerClose = document.querySelector('.drawer-close');
const drawerOverlay = document.querySelector('.drawer-overlay');
const bottomNav = document.querySelector('.bottom-nav');
const tickerTrack = document.getElementById('announcementTrack');
const tickerViewport = document.querySelector('.ticker-viewport');
const siteSearch = document.querySelector('.site-search');
const welcomeStorageKey = 'roadToCaWelcomeDismissed';
const announcements = [
    { text: 'New chapter quizzes are now available for Assurance.', href: 'assurance.html' },
    { text: 'Download the latest Certificate Level syllabus.', href: 'syllabus.html' },
    { text: 'Explore subject-wise Certificate Level mock tests.', href: 'mock-test.html' }
];

function showFirstVisitWelcome() {
    let hasVisited = false;
    try {
        hasVisited = window.localStorage.getItem(welcomeStorageKey) === 'true';
    } catch (error) {
        console.warn('Unable to check whether the welcome message was previously dismissed.', error);
    }

    if (hasVisited || typeof HTMLDialogElement === 'undefined') return;

    const welcomeDialog = document.createElement('dialog');
    welcomeDialog.className = 'welcome-dialog';
    welcomeDialog.setAttribute('aria-labelledby', 'welcome-title');
    welcomeDialog.setAttribute('aria-describedby', 'welcome-message');
    welcomeDialog.innerHTML = `
        <div class="welcome-sparkle" aria-hidden="true">✨</div>
        <p class="welcome-eyebrow">WELCOME TO ROAD TO CA</p>
        <h2 id="welcome-title">Hey, Future Chartered Accountant!</h2>
        <p class="welcome-message" id="welcome-message">Your ultimate partner in the CA journey is here! 🚀</p>
        <form method="dialog" class="welcome-actions">
            <button type="submit" class="welcome-action">Let’s get started <span aria-hidden="true">→</span></button>
        </form>
        <button type="button" class="welcome-close" aria-label="Close welcome message">&times;</button>
    `;

    welcomeDialog.querySelector('.welcome-close').addEventListener('click', () => welcomeDialog.close());
    welcomeDialog.addEventListener('close', () => {
        try {
            window.localStorage.setItem(welcomeStorageKey, 'true');
        } catch (error) {
            console.warn('Unable to remember that the welcome message was dismissed.', error);
        }
        welcomeDialog.remove();
    }, { once: true });

    document.body.appendChild(welcomeDialog);
    welcomeDialog.showModal();
    welcomeDialog.querySelector('.welcome-action').focus();
}

showFirstVisitWelcome();

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

import('./js/feedback.js').catch((error) => {
    console.error('Unable to load the feedback form.', error);
    const unavailableNotice = document.createElement('div');
    unavailableNotice.className = 'feedback-launcher feedback-unavailable';
    unavailableNotice.setAttribute('role', 'status');
    unavailableNotice.textContent = 'Feedback is temporarily unavailable';
    document.body.appendChild(unavailableNotice);
});

document.addEventListener('click', (event) => {
    const upcomingLink = event.target.closest('[data-upcoming]');
    if (!upcomingLink) return;
    event.preventDefault();
    window.alert('Only BTF and Assurance are available right now, Others are upcoming');
});

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
        { href: 'resources.html', terms: ['resource', 'firm', 'question', 'bank', 'routine', 'download'] },
        { href: 'courses.html', terms: ['course', 'courses', 'accounting', 'assurance', 'tax', 'business', 'technology', 'finance', 'management', 'information', 'law'] },
        { href: 'syllabus.html', terms: ['syllabus', 'curriculum', 'icab', 'subject'] },
        { href: 'mock-test.html', terms: ['mock', 'exam', 'test', 'practice', 'simulation'] },
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
