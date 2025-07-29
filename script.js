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

function triggerSparkles() {
    const container = document.getElementById("sparkles");
    container.innerHTML = ''; // clear existing

    for (let i = 0; i < 60; i++) {
        const particle = document.createElement("div");
        particle.className = "sparkle-particle";
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 150 + 50;

        particle.style.setProperty("--x", `${Math.cos(angle) * radius}px`);
        particle.style.setProperty("--y", `${Math.sin(angle) * radius}px`);
        container.appendChild(particle);

        setTimeout(() => container.removeChild(particle), 1200);
    }
}

function openGift() {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("background-music").play();
    document.getElementById("pop-sound").play();
    triggerSparkles();
    document.querySelector(".hero-section").style.display = "block";
    document.getElementById("love-quiz-section").style.display = "block";
    startBubbles();
}

function openFinalGift() {
    triggerSparkles();
    document.getElementById("final-section").style.display = "none";
    document.getElementById("love-letter-section").style.display = "block";
    document.getElementById("bubbles").style.display = "none";
}

function startBubbles() {
    const bubbleImages = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    const bubbleContainer = document.getElementById("bubbles");
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const bubble = document.createElement("div");
            bubble.className = "bubble";
            const img = document.createElement("img");
            img.src = bubbleImages[i % bubbleImages.length];
            bubble.appendChild(img);
            bubble.style.left = Math.random() * 100 + "vw";
            bubble.style.top = Math.random() * 100 + "vh";
            bubble.style.animationDuration = 20 + Math.random() * 10 + "s";
            bubbleContainer.appendChild(bubble);
        }, i * 300);
    }
}

function loveAnswer(isYes) {
    const response = document.getElementById("love-response");
    const confettiAudio = document.getElementById("confetti-sound");

    if (isYes) {
        response.textContent = "I knew it! I love you more 💖";

        // Play sound
        confettiAudio.play();

        // Confetti burst
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });

        // Wait 3 seconds before moving to next section
        setTimeout(() => {
            document.getElementById("love-quiz-section").style.display = "none";
            document.getElementById("puzzles").style.display = "block";
        }, 3000);
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
function printLoveLetter() {
    const printContents = document.getElementById("love-letter").innerHTML;
    const win = window.open("", "", "height=700,width=700");
    win.document.write(`
        <html>
        <head>
            <title>Love Letter</title>
            <style>
                body {
                    font-family: 'Quicksand', sans-serif;
                    padding: 20px;
                    color: #5c004d;
                    background: #fffafc;
                }
                .letter-content {
                    font-size: 1rem;
                    line-height: 1.8;
                }
                .letter-signature {
                    margin-top: 2rem;
                    font-style: italic;
                    text-align: right;
                }
            </style>
        </head>
        <body>
            <div>${printContents}</div>
        </body>
        </html>
    `);
    win.document.close();
    win.focus();
    win.print();
    win.close();
}

