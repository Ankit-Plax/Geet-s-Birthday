
function openGift() {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("background-music").play();
}

function toggleMusic() {
    const music = document.getElementById("background-music");
    const btn = document.getElementById("music-btn");
    if (music.paused) {
        music.play();
        btn.textContent = "🔊";
    } else {
        music.pause();
        btn.textContent = "🔇";
    }
}

function loveAnswer(isYes) {
    const response = document.getElementById("love-response");
    if (isYes) {
        response.textContent = "I knew it! I love you more 💖";
    } else {
        response.textContent = "That's not allowed! 😡";
    }
}

function puzzleAnswer(el, isCorrect) {
    if (isCorrect) {
        el.style.background = "#c6ffc1";
        el.textContent = "Exactly! That smile is everything 😊";
    } else {
        el.style.background = "#ffd6d6";
        el.textContent = "Aww close, but try again!";
    }
}

function openFinalGift() {
    document.getElementById("love-letter").style.display = "block";
}

let currentSlide = 0;
const slides = document.querySelectorAll(".memory-slide");
if (slides.length > 0) {
    slides[currentSlide].classList.add("active");
    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 4000);
}
