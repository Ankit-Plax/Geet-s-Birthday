function openGift() {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("background-music").play();

    document.querySelector(".hero-section").style.display = "block";
    document.getElementById("love-quiz-section").style.display = "block";
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
        setTimeout(() => {
            document.getElementById("love-quiz-section").style.display = "none";
            document.getElementById("puzzles").style.display = "block";
        }, 1500);
    } else {
        response.textContent = "That's not allowed! 😡";
    }
}

function puzzleAnswer(el, isCorrect) {
    if (isCorrect) {
        el.style.background = "#c6ffc1";
        el.textContent = "Exactly! That smile is everything 😊";

        setTimeout(() => {
            document.getElementById("puzzles").style.display = "none";
            document.getElementById("pre-letter").style.display = "block";

            const fullMessage = `Hey Geet,\n\nI know we live far apart, and I couldn’t do all the things I wish I could for your birthday...\n\nBut I poured all my love into something that means the world to me — this letter, just for you.`;
            const typeTarget = document.getElementById("typewriter-text");
            let i = 0;

            function typeWriter() {
                if (i < fullMessage.length) {
                    typeTarget.textContent += fullMessage.charAt(i);
                    i++;
                    setTimeout(typeWriter, 40);
                } else {
                    setTimeout(() => {
                        document.getElementById("pre-letter").style.display = "none";
                        document.getElementById("final-section").style.display = "block";
                    }, 4000);
                }
            }

            typeTarget.textContent = "";
            typeWriter();

        }, 1500);
    } else {
        el.style.background = "#ffd6d6";
        el.textContent = "Aww close, but try again!";
    }
}

function openFinalGift() {
    document.getElementById("final-section").style.display = "none";
    document.getElementById("love-letter").style.display = "block";
}

// Floating bubbles
const bubbleImages = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Replace with real image paths
const bubbleContainer = document.getElementById("bubbles");

for (let i = 0; i < 20; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const img = document.createElement("img");
    img.src = bubbleImages[i % bubbleImages.length];

    bubble.appendChild(img);
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.top = 100 + Math.random() * 50 + "vh";
    bubble.style.animationDuration = 20 + Math.random() * 15 + "s";

    bubbleContainer.appendChild(bubble);
}
