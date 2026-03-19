// Seteaza stilurile INAINTE ca pagina sa se incarce
document.querySelectorAll('.animate').forEach(el => {
  el.style.opacity = '0';
  if (el.classList.contains('fade-up')) el.style.transform = 'translateY(30px)';
  else if (el.classList.contains('fade-down')) el.style.transform = 'translateY(-30px)';
  else if (el.classList.contains('fade-left')) el.style.transform = 'translateX(-30px)';
  else if (el.classList.contains('fade-right')) el.style.transform = 'translateX(30px)';
  else el.style.transform = 'translateY(30px)';
});

document.querySelectorAll('.animate-fixed').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
});

window.addEventListener('load', () => {
  document.querySelectorAll('.animate').forEach(el => {
    el.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    const delay = parseInt(el.dataset.delay) || 0;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translate(0, 0)';
    }, delay + 50);
  });

  document.querySelectorAll('.animate-fixed').forEach(el => {
    el.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    const delay = parseInt(el.dataset.delay) || 0;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, delay + 200);
  });
});