import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAbout() {
  // Section entrance
  gsap.from('.about__left .section-label', {
    y: 30, opacity: 0, duration: 0.6,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.about', start: 'top 70%' }
  });
  gsap.from('.about__left .section-heading', {
    y: 40, opacity: 0, duration: 0.7, delay: 0.1,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.about', start: 'top 70%' }
  });
  gsap.from('.about__json-block', {
    y: 50, opacity: 0, duration: 0.8, delay: 0.2,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.about__json-block', start: 'top 85%' }
  });

  // Philosophy text highlighting on scroll
  const lines = document.querySelectorAll('.about__philosophy-line');
  lines.forEach((line) => {
    ScrollTrigger.create({
      trigger: line,
      start: 'top 75%',
      onEnter: () => line.classList.add('highlighted'),
    });
  });

  // Terminal animation
  gsap.from('.about__terminal', {
    y: 60, opacity: 0, duration: 0.8,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.about__right', start: 'top 80%' }
  });

  // Terminal lines typing effect
  const terminalLines = document.querySelectorAll('#terminalBody .terminal-line');
  ScrollTrigger.create({
    trigger: '#terminalBody',
    start: 'top 80%',
    onEnter: () => {
      terminalLines.forEach((line) => {
        const delay = parseInt((line as HTMLElement).dataset.delay || '0');
        setTimeout(() => {
          line.classList.add('visible');
        }, delay);
      });
    },
    once: true,
  });
}
