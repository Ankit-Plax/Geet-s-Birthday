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
    container.innerHTML = '';

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

function triggerConfetti() {
    const count = 80;
    const colors = ["#ff6ec4", "#ffc3a0", "#ffb6b9", "#fcd5ce", "#e0bbf4"];
    const container = document.body;

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
        confetti.style.opacity = Math.random();

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

function openGift() {
    document.getElementById("background-music").play();
    document.getElementById("pop-sound").play();
    document.getElementById("sparkle-sound").play();
    triggerSparkles();
    startBubbles();

    document.getElementById("gift-screen").style.display = "none";
    document.querySelector(".hero-section").style.display = "block";
    document.getElementById("love-quiz-section").style.display = "block";
}

function openFinalGift() {
    document.getElementById("pop-sound").play();
    triggerSparkles();
    document.getElementById("final-section").style.display = "none";
    document.getElementById("love-letter-section").style.display = "block";
    document.getElementById("bubbles").style.display = "none";
}

function startBubbles() {
    const bubbleImages = [
        'bubbles/img1.jpg',
        'bubbles/img2.jpg',
        'bubbles/img3.jpg'
    ];
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
    if (isYes) {
        response.textContent = "I knew it! I love you more 💖";

        document.getElementById("confetti-sound").play();
        triggerConfetti();

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
        el.textContent = "Exactly!";

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
