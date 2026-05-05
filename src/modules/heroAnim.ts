import gsap from 'gsap';

export function initHeroAnimations() {
  const tl = gsap.timeline({ delay: 0.2 });
  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

  // Label reveal
  tl.to('.hero__label .reveal-inner', {
    y: '0%',
    duration: 0.6,
    ease,
  }, 0);

  // Heading lines
  const headingInners = document.querySelectorAll('.hero__heading .reveal-inner');
  headingInners.forEach((el, i) => {
    tl.to(el, {
      y: '0%',
      duration: 0.6,
      ease,
    }, 0.2 + i * 0.15);
  });

  // Sub text
  tl.to('.hero__sub', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease,
  }, 0.9);

  // CTA
  tl.to('.hero__cta', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease,
  }, 1.1);
}
