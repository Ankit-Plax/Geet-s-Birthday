function openGift() {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("background-music").play();

    // Start with just hero and quiz
    document.querySelector(".hero-section").style.display = "block";
    document.getElementById("love-quiz-section").style.display = "block";
}

// Music toggle
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

// LOVE answer
function loveAnswer(isYes) {
    const response = document.getElementById("love-response");
    if (isYes) {
        response.textContent = "I knew it! I love you more 💖";
        setTimeout(() => {
            document.getElementById("love-quiz-section").style.display = "none";
            document.getElementById("puzzles").style.display = "block";
        }, 1500);
    } else {
        response.textContent = "That's not allowed! 😡";
    }
}

// Puzzle answer logic
function puzzleAnswer(el, isCorrect) {
    if (isCorrect) {
        el.style.background = "#c6ffc1";
        el.textContent = "Exactly! That smile is everything 😊";

        setTimeout(() => {
            document.getElementById("puzzles").style.display = "none";
            document.getElementById("memories").style.display = "block";
        }, 1500);
    } else {
        el.style.background = "#ffd6d6";
        el.textContent = "Aww close, but try again!";
    }
}

// Final gift
function openFinalGift() {
    document.getElementById("final-section").style.display = "none";
    document.getElementById("love-letter").style.display = "block";
}

// Slideshow logic
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
