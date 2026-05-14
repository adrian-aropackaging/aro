// aro-motion.js — simple reveal effect placeholder
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.reveal');
  elements.forEach(el => {
    el.style.opacity = 1;
    el.style.transform = 'none';
  });
});
