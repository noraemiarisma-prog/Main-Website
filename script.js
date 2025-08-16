const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');
const toggleBtn = document.getElementById('toggleDark');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') 
    ? '☀️ Light Mode' 
    : '🌙 Dark Mode';
});
