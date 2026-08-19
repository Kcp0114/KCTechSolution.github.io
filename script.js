// theme toggle (stores preference in localStorage)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const stored = localStorage.getItem('theme');
if (stored === 'light') body.classList.add('light-theme');
// initialize button text based on current theme
if (body.classList.contains('light-theme')) themeToggle.textContent = '☀️';

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
});

// simple nav scrolling + active state
document.querySelectorAll('.nav li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('.nav li').forEach(i => i.classList.remove('active'));
    li.classList.add('active');
    const target = document.querySelector(li.dataset.target);
    if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});

// hamburger (optional expand behavior)
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const s = document.getElementById('sidebar');
    s.classList.toggle('open');
  });
}

// Analytics placeholder: add your analytics snippet here if needed
