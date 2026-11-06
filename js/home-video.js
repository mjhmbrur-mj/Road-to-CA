const homeVideo = document.querySelector('.home-video video');
const videoLoopEnd = 35;

homeVideo.addEventListener('timeupdate', () => {
    if (homeVideo.currentTime >= videoLoopEnd) {
        homeVideo.currentTime = 0;
        if (!homeVideo.paused) {
            homeVideo.play().catch((error) => {
                console.error('Unable to resume the homepage video.', error);
            });
        }
    }
});
