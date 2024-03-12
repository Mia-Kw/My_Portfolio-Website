// Mouse movement circle
document.addEventListener('DOMContentLoaded', function() {
  const circle = document.getElementById('circle');

  document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
  
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
  });
});