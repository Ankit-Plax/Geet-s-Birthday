const giftBtn = document.getElementById('giftBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const confettiCanvas = document.getElementById('confetti');
const bubbleContainer = document.getElementById('bubble-container');

giftBtn.addEventListener('click', () => {
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.classList.add('hidden');
    mainContent.classList.remove('hidden');
    startConfetti();
    generateBubbles();
  }, 1000);
});

// Confetti effect
function startConfetti() {
  const canvas = confettiCanvas;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const numberOfPieces = 200;

  for (let i = 0; i < numberOfPieces; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      rotation: Math.random() * 360,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      ctx.fillStyle = p.color;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();

      p.y += p.speed;
      p.rotation += 5;

      if (p.y > canvas.height) p.y = -10;
    }
    requestAnimationFrame(draw);
  }

  draw();
}

// Bubble animation (placeholder images)
function generateBubbles() {
  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement('img');
    bubble.src = "https://via.placeholder.com/60"; // replace with your image
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    bubbleContainer.appendChild(bubble);
  }
}
