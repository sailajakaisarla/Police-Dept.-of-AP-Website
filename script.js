function toggleSearch() {
    const searchBox = document.getElementById('searchBox');
    if (searchBox.style.display === 'block') {
        searchBox.style.display = 'none';
    } else {
        searchBox.style.display = 'block';
    }
}

const videos = document.querySelectorAll('.video-slide');
let currentVideoIndex = 0;

function showNextVideo() {
    videos[currentVideoIndex].classList.remove('active');
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videos[currentVideoIndex].classList.add('active');
}

videos[currentVideoIndex].classList.add('active');
setInterval(showNextVideo, 100000); // Change video every 5 seconds

document.addEventListener("DOMContentLoaded", function () {
    console.log("Image grid loaded successfully!");
});

document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");

    const openLoginBtn = document.getElementById("openLoginBtn");

    const closeLogin = document.getElementById("closeLogin");
    const closeSignup = document.getElementById("closeSignup");

    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    openLoginBtn.addEventListener("click", () => {
        loginModal.style.display = "flex";
    });


    // CLOSE LOGIN MODAL
    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
    });


    // CLOSE SIGNUP MODAL
    closeSignup.addEventListener("click", () => {
        signupModal.style.display = "none";
    });


    // SWITCH TO SIGNUP
    switchToSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.style.display = "none";
        signupModal.style.display = "flex";
    });


    // SWITCH TO LOGIN
    switchToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        signupModal.style.display = "none";
        loginModal.style.display = "flex";
    });


    // CLOSE MODAL WHEN CLICKING OUTSIDE MODAL
    window.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = "none";
        }

        if (e.target === signupModal) {
            signupModal.style.display = "none";
        }
    });


    // PREVENT FORM REFRESH
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login Successful (Demo)");
        loginModal.style.display = "none";
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Signup Successful (Demo)");
        signupModal.style.display = "none";
    });

});
