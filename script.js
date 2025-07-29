// MUSIC TOGGLE
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

// OPEN GIFT FUNCTION
function openGift() {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("background-music").play();
    document.querySelector(".hero-section").style.display = "block";
    document.getElementById("love-quiz-section").style.display = "block";

    // 🎉 Sparkle effect
    triggerSparkles();

    // 💬 Start bubbles immediately
    startBubbles();
}

}

// LOVE QUIZ RESPONSE
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

// PUZZLE LOGIC
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

// FINAL GIFT OPENER
function openFinalGift() {
    const sparkles = document.getElementById("sparkles");
    sparkles.classList.add("active");

    document.getElementById("final-section").style.display = "none";
    document.getElementById("love-letter-section").style.display = "block";

    // Stop the bubbles from floating
    document.getElementById("bubbles").style.display = "none";

    setTimeout(() => {
        sparkles.classList.remove("active");
    }, 1500);
}

// SPAWN BUBBLES FUNCTION
function spawnBubbles() {
    const bubbleImages = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Replace with real paths
    const bubbleContainer = document.getElementById("bubbles");

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const bubble = document.createElement("div");
            bubble.className = "bubble";

            const img = document.createElement("img");
            img.src = bubbleImages[i % bubbleImages.length];
            bubble.appendChild(img);

            bubble.style.left = Math.random() * 100 + "vw";
            bubble.style.top = 100 + Math.random() * 100 + "vh";
            bubble.style.animationDuration = 20 + Math.random() * 10 + "s";

            bubbleContainer.appendChild(bubble);
        }, i * 400); // Delayed spawn to avoid clumps
    }
}
