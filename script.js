/* ========================================
   SLACKLAB — INTERACTIONS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================
  // CUSTOM CURSOR
  // ========================================
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .work-card, .service-row, .process-step').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('hovered');
      ring.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('hovered');
      ring.classList.remove('hovered');
    });
  });

  // ========================================
  // NAV — SCROLL
  // ========================================
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ========================================
  // MOBILE MENU
  // ========================================
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('mobileMenu');
  const menuBg = document.getElementById('mobileMenuBg');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  menuBg.addEventListener('click', closeMenu);
  menuLinks.forEach(l => l.addEventListener('click', closeMenu));

  function closeMenu() {
    burger.classList.remove('active');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ========================================
  // SMOOTH SCROLL
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // REVEAL ON SCROLL
  // ========================================
  const animEls = document.querySelectorAll('[data-anim]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  animEls.forEach(el => observer.observe(el));

});
