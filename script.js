  window.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar');

    // Check all elements exist before attaching event listeners
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
      });
    }

    // Scroll behavior for navbar
    if (navbar) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  });