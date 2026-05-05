import gsap from 'gsap';

export function initCursor() {
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  if (isCoarse) return;

  const dot = document.getElementById('cursorDot') as HTMLElement;
  const ring = document.getElementById('cursorRing') as HTMLElement;
  if (!dot || !ring) return;

  const pos = { x: 0, y: 0 };

  // GSAP quickTo for smooth ring follow
  const ringX = gsap.quickTo(ring, 'left', { duration: 0.15, ease: 'power2.out' });
  const ringY = gsap.quickTo(ring, 'top', { duration: 0.15, ease: 'power2.out' });

  document.addEventListener('mousemove', (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
    dot.style.left = pos.x + 'px';
    dot.style.top = pos.y + 'px';
    ringX(pos.x);
    ringY(pos.y);
  });

  // Click pulse
  document.addEventListener('mousedown', () => {
    gsap.to(dot, { scale: 0.5, duration: 0.1 });
    gsap.to(ring, { scale: 0.8, duration: 0.1 });
  });
  document.addEventListener('mouseup', () => {
    gsap.to(dot, { scale: 1, duration: 0.15 });
    gsap.to(ring, { scale: 1, duration: 0.15 });
  });

  // Hover states for links/buttons
  const links = document.querySelectorAll('a, button, [data-magnetic]');
  links.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('hover-link');
      dot.classList.add('hide');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('hover-link');
      dot.classList.remove('hide');
    });
  });

  // Hover states for project cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      ring.classList.add('hover-card');
      ring.classList.remove('hover-link');
      dot.classList.add('hide');
    });
    card.addEventListener('mouseleave', () => {
      ring.classList.remove('hover-card');
      dot.classList.remove('hide');
    });
  });
}
