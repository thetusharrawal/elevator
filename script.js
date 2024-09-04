window.addEventListener('scroll', function () {
  const elevator = document.querySelector('.elevator-box');
  const scrollPosition = window.scrollY;
  
  // Simple elevator movement based on scroll
  elevator.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
