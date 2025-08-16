// Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-toggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Confetti
const confettiBtn = document.getElementById('confetti-btn');
confettiBtn.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

// Jumpscare Ghost
const jumpscareBtn = document.getElementById('jumpscare-btn');
const jumpscareImg = document.getElementById('jumpscare-img');
const screamSound = document.getElementById('scream-sound');

jumpscareBtn.addEventListener('click', () => {
  screamSound.play();
  jumpscareImg.classList.add('jumpscare-visible');

  setTimeout(() => {
    jumpscareImg.classList.remove('jumpscare-visible');
  }, 800);
});

// Lightbox Gallery
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = lightbox.querySelector('.close');

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
