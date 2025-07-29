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

function openGift() {
    // Hide initial gift screen
    document.getElementById("gift-screen").style.display = "none";

    // Play background music
    document.getElementById("background-music").play();

    // Play pop sound
    const pop = new Audio("audio/pop.mp3"); // Ensure this file exists in your audio folder
    pop.play();

    // Trigger animated sparkles
    triggerSparkles();

    // Show hero + quiz sections
    document.querySelector(".hero-section").style.display = "block";
    document.getElementById("love-quiz-section").style.display = "block";

    // Start bubbles
    startBubbles();
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
function triggerSparkles() {
    const container = document.getElementById("sparkles");
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.className = "sparkle-particle";

        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 100 + 30;

        particle.style.setProperty("--x", `${Math.cos(angle) * radius}px`);
        particle.style.setProperty("--y", `${Math.sin(angle) * radius}px`);

        container.appendChild(particle);

        setTimeout(() => container.removeChild(particle), 1000);
    }
}
