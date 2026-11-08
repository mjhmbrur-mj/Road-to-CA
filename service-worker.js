const CACHE_NAME = 'road-to-ca-site-shell-v3';
const APP_SHELL = [
    'index.html',
    'assurance.html',
    'course-chapters.html',
    'courses.html',
    'mock-test.html',
    'profile.html',
    'resources.html',
    'syllabus.html',
    'manifest.webmanifest',
    'nav.css',
    'nav.js',
    'js/pwa-install.js',
    'js/profile.js',
    'js/topic-analysis.js',
    'js/activity-tracker.js',
    'js/firebase-client.js',
    'logo.png',
    'icons/road-to-ca-180.png',
    'icons/road-to-ca-192.png',
    'icons/road-to-ca-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL.map((path) => new URL(path, self.registration.scope).href)))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName.startsWith('road-to-ca-site-') && cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const requestUrl = new URL(request.url);
    if (request.method !== 'GET' || requestUrl.origin !== self.location.origin) return;
    if (request.headers.has('range') || /\.(mp4|webm|ogg)$/i.test(requestUrl.pathname)) return;

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response.ok) {
                        const copy = response.clone();
                        return caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).then(() => response);
                    }
                    return response;
                })
                .catch(async () => (await caches.match(request)) || caches.match(new URL('index.html', self.registration.scope).href))
        );
        return;
    }

    event.respondWith(
        fetch(request)
            .then((response) => {
                if (response.ok) {
                    const copy = response.clone();
                    return caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).then(() => response);
                }
                return response;
            })
            .catch(async () => caches.match(request))
    );
});
