// Typing Animation
document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('generated-text');
  const cursorElement = document.getElementById('cursor');

  textElement.classList.add('typing-animation');

  textElement.addEventListener('animationend', function () {
    cursorElement.classList.add('blink');
  });
});