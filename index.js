// Phát hiện thiết bị có cảm ứng
function detectMobile() {
    const deviceInfor = document.getElementById('device-infor');

    let hasTouchScreen = false;
    if ('maxTouchPoints' in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } else {
        const mQ = window.matchMedia?.('(pointer:coarse)');

        if (mQ?.media === '(pointer:coarse)') {
            hasTouchScreen = !!mQ.matches;
        } else if ('orientation' in window) {
            hasTouchScreen = true;
        } else {
            const UA = navigator.userAgent;
            hasTouchScreen =
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
    }

    deviceInfor.textContent = hasTouchScreen
        ? "This device likely has a touchscreen."
        : "This device does not appear to have a touchscreen.";
}

detectMobile();

// Gắn sự kiện cho tất cả các video
const videos = document.querySelectorAll('#full video');

videos.forEach(video => {
    // Khi trỏ chuột vào video
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    // Khi rời chuột khỏi video
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Quay lại đầu video
    });
    // Tự động lặp lại video khi kết thúc
    video.addEventListener('ended', () => {
        video.play();
    });
});


//Ghim thanh tabar
// Lấy phần tử navigation
const stickyNav = document.querySelector('.sticky-nav');

// Lắng nghe sự kiện cuộn
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        stickyNav.classList.add('scrolled');
    } else {
        stickyNav.classList.remove('scrolled');
    }
});

