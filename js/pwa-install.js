const VISITS_KEY = 'road-to-ca-visits';
const VISIT_SESSION_KEY = 'road-to-ca-visit-counted';
const OFFER_SESSION_KEY = 'road-to-ca-install-offer-shown';
const DISMISSED_VISIT_KEY = 'road-to-ca-install-dismissed-at';
const INSTALLED_KEY = 'road-to-ca-installed';
const VISIT_THRESHOLD = 3;

let deferredInstallPrompt = null;
let visitCount = 0;
let installDialog;
let installButton;
let installLauncher;
let isIosInstallGuide = false;

function isMobileDevice() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
        || window.matchMedia('(max-width: 768px)').matches;
}

function isIosDevice() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isAppInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches
        || navigator.standalone === true
        || readStorage(INSTALLED_KEY) === 'true';
}

function readStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.warn('Unable to read app installation preferences.', error);
        return null;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.warn('Unable to save app installation preferences.', error);
    }
}

function recordVisit() {
    try {
        if (sessionStorage.getItem(VISIT_SESSION_KEY)) {
            return Number(readStorage(VISITS_KEY)) || 0;
        }

        const nextCount = (Number(readStorage(VISITS_KEY)) || 0) + 1;
        writeStorage(VISITS_KEY, String(nextCount));
        sessionStorage.setItem(VISIT_SESSION_KEY, 'true');
        return nextCount;
    } catch (error) {
        console.warn('Unable to track visits for the app install offer.', error);
        return 0;
    }
}

function wasRecentlyDismissed() {
    const dismissedAtVisit = Number(readStorage(DISMISSED_VISIT_KEY)) || 0;
    return dismissedAtVisit > 0 && visitCount < dismissedAtVisit + 5;
}

function wasOfferShownThisSession() {
    try {
        return sessionStorage.getItem(OFFER_SESSION_KEY) === 'true';
    } catch (error) {
        console.warn('Unable to check whether the app install offer was shown.', error);
        return false;
    }
}

function markOfferShownThisSession() {
    try {
        sessionStorage.setItem(OFFER_SESSION_KEY, 'true');
    } catch (error) {
        console.warn('Unable to remember that the app install offer was shown.', error);
    }
}

function createDialog() {
    const dialog = document.createElement('dialog');
    dialog.className = 'pwa-install-dialog';
    dialog.setAttribute('aria-labelledby', 'pwa-install-title');

    const closeButton = document.createElement('button');
    closeButton.className = 'pwa-install-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close install message');
    closeButton.textContent = '\u00d7';
    closeButton.addEventListener('click', dismissDialog);

    const eyebrow = document.createElement('span');
    eyebrow.className = 'pwa-install-eyebrow';
    eyebrow.textContent = 'STUDY ON THE GO';

    const title = document.createElement('h2');
    title.id = 'pwa-install-title';
    title.textContent = 'Install Road to CA';

    const message = document.createElement('p');
    message.className = 'pwa-install-message';
    message.textContent = isIosInstallGuide
        ? 'Add Road to CA to your Home Screen for quick access to study resources and practice.'
        : 'Install Road to CA for quick access to study resources and practice.';

    const actions = document.createElement('div');
    actions.className = 'pwa-install-actions';

    const laterButton = document.createElement('button');
    laterButton.className = 'pwa-install-later';
    laterButton.type = 'button';
    laterButton.textContent = 'Not now';
    laterButton.addEventListener('click', dismissDialog);

    installButton = document.createElement('button');
    installButton.className = 'pwa-install-action';
    installButton.type = 'button';
    const showManualInstructions = isIosInstallGuide || !deferredInstallPrompt;
    installButton.textContent = showManualInstructions ? 'Got it' : 'Install app';
    installButton.addEventListener('click', handleInstallAction);

    if (showManualInstructions) {
        const instructions = document.createElement('ol');
        instructions.className = 'pwa-install-steps';
        const steps = isIosInstallGuide
            ? [
                'Tap the Share button in your browser.',
                'Choose “Add to Home Screen”.',
                'Tap “Add” to finish.'
            ]
            : [
                'Open your browser menu.',
                'Choose “Install app” or “Add to Home Screen”.',
                'Follow the prompt to finish.'
            ];
        steps.forEach((step) => {
            const item = document.createElement('li');
            item.textContent = step;
            instructions.appendChild(item);
        });
        dialog.append(closeButton, eyebrow, title, message, instructions, actions);
    } else {
        dialog.append(closeButton, eyebrow, title, message, actions);
    }

    actions.append(laterButton, installButton);
    dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        dismissDialog();
    });
    dialog.addEventListener('close', () => {
        document.body.classList.remove('pwa-install-open');
    });
    document.body.appendChild(dialog);
    return dialog;
}

function canShowInstallOffer() {
    if (!isMobileDevice()
        || isAppInstalled()
        || (visitCount !== 1 && visitCount < VISIT_THRESHOLD)
        || wasRecentlyDismissed()
        || wasOfferShownThisSession()) {
        return false;
    }
    return isIosInstallGuide || Boolean(deferredInstallPrompt) || visitCount === 1;
}

function showInstallOffer() {
    if (!canShowInstallOffer()) return;

    showInstallDialog();
    markOfferShownThisSession();
}

function showInstallDialog() {
    if (isAppInstalled()) return;
    if (!installDialog) installDialog = createDialog();
    if (!installDialog.open) {
        installDialog.showModal();
        document.body.classList.add('pwa-install-open');
    }
}

function createInstallLauncher() {
    installLauncher = document.createElement('button');
    installLauncher.className = 'pwa-install-launcher';
    installLauncher.type = 'button';
    installLauncher.textContent = 'Install mobile app';
    installLauncher.setAttribute('aria-label', 'Install Road to CA mobile app');
    installLauncher.addEventListener('click', showInstallDialog);
    installLauncher.hidden = isAppInstalled();
    document.body.appendChild(installLauncher);
}

function dismissDialog() {
    writeStorage(DISMISSED_VISIT_KEY, String(visitCount));
    if (installDialog?.open) installDialog.close();
}

async function handleInstallAction() {
    if (isIosInstallGuide || !deferredInstallPrompt) {
        dismissDialog();
        return;
    }

    installButton.disabled = true;
    try {
        await deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === 'accepted') {
            writeStorage(INSTALLED_KEY, 'true');
            installDialog.close();
            installLauncher.hidden = true;
        } else {
            dismissDialog();
        }
    } catch (error) {
        console.error('Unable to start the app installation prompt.', error);
        installDialog.close();
    } finally {
        deferredInstallPrompt = null;
        installButton.disabled = false;
    }
}

if ('serviceWorker' in navigator) {
    const hadServiceWorkerController = Boolean(navigator.serviceWorker.controller);

    if (hadServiceWorkerController) {
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            let notice = document.getElementById('pwa-update-notice');
            if (!notice) {
                notice = document.createElement('div');
                notice.id = 'pwa-update-notice';
                notice.className = 'pwa-update-notice';
                notice.setAttribute('role', 'status');
                notice.setAttribute('aria-live', 'polite');

                const message = document.createElement('span');
                message.textContent = 'A new version of Road to CA is ready.';
                const refreshButton = document.createElement('button');
                refreshButton.type = 'button';
                refreshButton.textContent = 'Refresh app';
                refreshButton.addEventListener('click', () => window.location.reload());
                notice.append(message, refreshButton);
                document.body.appendChild(notice);
            }
        });
    }

    navigator.serviceWorker.register('./service-worker.js', { updateViaCache: 'none' })
        .then((registration) => registration.update().catch((error) => {
            console.warn('Unable to check for app updates right now.', error);
        }))
        .catch((error) => {
            console.error('Unable to register the offline app support.', error);
        });
}

createInstallLauncher();

if (isMobileDevice()) {
    isIosInstallGuide = isIosDevice();
    visitCount = recordVisit();

    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        deferredInstallPrompt = event;
        if (installButton && !isIosInstallGuide) {
            installButton.textContent = 'Install app';
            installDialog?.querySelector('.pwa-install-steps')?.remove();
        }
        window.setTimeout(showInstallOffer, 1500);
    });

    window.addEventListener('appinstalled', () => {
        writeStorage(INSTALLED_KEY, 'true');
        deferredInstallPrompt = null;
        if (installLauncher) installLauncher.hidden = true;
        if (installDialog?.open) installDialog.close();
    });

    if (isIosInstallGuide || visitCount === 1) {
        window.setTimeout(showInstallOffer, 1500);
    }
}
