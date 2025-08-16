// Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-toggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Confetti
const confettiBtn = document.getElementById('confetti-btn');
confettiBtn.addEventListener('click', () => {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
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
