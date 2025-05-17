
  function restartAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; // trigger reflow
      el.style.animation = null;
    });
  }

  // Run animations on page load once:
  restartAnimation('.hero-section .intro-text h1, .hero-section .intro-text p, .hero-section .intro-text .btn');

  // Repeat animation every 15 seconds:
  setInterval(() => {
    restartAnimation('.hero-section .intro-text h1, .hero-section .intro-text p, .hero-section .intro-text .btn');
  }, 20000);
