import gsap from 'gsap';

export function initNav() {
  const nav = document.getElementById('mainNav') as HTMLElement;
  const hamburger = document.getElementById('navHamburger') as HTMLElement;
  const mobileMenu = document.getElementById('mobileMenu') as HTMLElement;
  const mobileLinks = mobileMenu?.querySelectorAll('.mobile-menu__link');

  if (!nav) return;

  // Scroll-direction hide/show
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 100) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScroll = current;
  }, { passive: true });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('no-scroll');
      } else {
        mobileMenu.classList.add('open');
        hamburger.classList.add('open');
        document.body.classList.add('no-scroll');
      }
    });

    mobileLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Magnetic nav links (desktop only)
  if (!window.matchMedia('(pointer: coarse)').matches) {
    const magLinks = document.querySelectorAll('[data-magnetic]');
    magLinks.forEach(link => {
      const el = link as HTMLElement;
      el.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (me.clientX - cx) * 0.3;
        const dy = (me.clientY - cy) * 0.3;
        gsap.to(el, { x: dx, y: dy, duration: 0.2, ease: 'power2.out' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1,0.5)' });
      });
    });
  }

  // Active section tracking
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id') || '';
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}
