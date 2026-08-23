// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const stored = localStorage.getItem('theme');

// Check stored theme on load
if (stored === 'light') {
  body.classList.add('light-theme');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  body.classList.remove('light-theme');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Navigation
document.querySelectorAll('.nav li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('.nav li').forEach(i => i.classList.remove('active'));
    li.classList.add('active');
    const target = document.querySelector(li.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

// Number Animation
function animateNumbers() {
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach(stat => {
    const target = parseInt(stat.dataset.target);
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 60));
    let current = 0;
    
    const updateNumber = () => {
      current += step;
      if (current >= target) {
        stat.textContent = target + '+';
        return;
      }
      stat.textContent = current + '+';
      requestAnimationFrame(updateNumber);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateNumber();
          observer.disconnect();
        }
      });
    });
    
    observer.observe(stat);
  });
}

animateNumbers();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Console greeting
console.log('%c Kruti Patel %c .NET Developer ',
  'background: #6c63ff; color: white; padding: 8px 12px; border-radius: 4px 0 0 4px; font-weight: bold;',
  'background: #3b82f6; color: white; padding: 8px 12px; border-radius: 0 4px 4px 0;'
);
