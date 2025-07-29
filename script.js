const revealBtn = document.getElementById('reveal-btn');
const intro = document.getElementById('intro');
const greeting = document.getElementById('greeting');
const giftBox = document.querySelector('.gift-box');
const bubblesContainer = document.getElementById('bubbles');
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');

// Resize canvas for confetti
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

// Image bubbles - ADD your girlfriend's image URLs here:
const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg'
];

// Create floating bubbles
function createBubbles() {
  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.style.left = `${Math.random() * 90}vw`;
    img.style.animationDelay = `${Math.random() * 10}s`;
    img.style.animationDuration = `${10 + Math.random() * 10}s`;
    bubblesContainer.appendChild(img);
  });
}

// Confetti animation
let confettiPieces = Array.from({ length: 150 }, () => ({
  x: Math.random() * confettiCanvas.width,
  y: Math.random() * confettiCanvas.height,
  r: Math.random() * 6 + 4,
  d: Math.random() * 10,
  color: `hsl(${Math.random() * 360}, 100%, 70%)`,
  tilt: Math.random() * 10 - 10,
  tiltAngleIncrement: Math.random() * 0.07 + 0.05,
  tiltAngle: 0
}));

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach((p) => {
    ctx.beginPath();
    ctx.lineWidth = p.r / 2;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
    ctx.stroke();
  });
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confettiPieces.forEach((p) => {
    p.tiltAngle += p.tiltAngleIncrement;
    p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
    p.x += Math.sin(0.5);
    p.tilt = Math.sin(p.tiltAngle) * 15;
    if (p.y > confettiCanvas.height) {
      p.x = Math.random() * confettiCanvas.width;
      p.y = -10;
    }
  });
}

// Reveal animation
revealBtn.addEventListener('click', () => {
  giftBox.style.transform = 'scale(0)';
  giftBox.style.opacity = '0';
  intro.style.opacity = '0';

  setTimeout(() => {
    intro.classList.add('hidden');
    greeting.classList.remove('hidden');
    setTimeout(() => greeting.style.opacity = '1', 50);
    createBubbles();
    drawConfetti();
  }, 800);
});
