document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.main-nav');
  const authLinks = document.querySelector('.auth-links');

  if (mobileMenu && nav) {
    mobileMenu.addEventListener('click', function() {
      nav.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      if (authLinks) {
        authLinks.classList.toggle('mobile-visible');
      }
    });
  }

  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});
