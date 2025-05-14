const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
document.body.appendChild(script);

script.onload = () => {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
};
