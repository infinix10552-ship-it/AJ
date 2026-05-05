import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initCredentials() {
  // Stat count-up animation
  const stats = document.querySelectorAll('.stat');
  stats.forEach((stat, i) => {
    const numEl = stat.querySelector('.stat__number') as HTMLElement;
    const target = parseInt((stat as HTMLElement).dataset.count || '0');

    gsap.from(stat, {
      y: 40, opacity: 0, duration: 0.6,
      delay: i * 0.1,
      ease: 'cubic-bezier(0.16,1,0.3,1)',
      scrollTrigger: { trigger: '.credentials__stats', start: 'top 85%' }
    });

    ScrollTrigger.create({
      trigger: stat,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            numEl.textContent = Math.round(obj.val).toString();
          }
        });
      }
    });
  });
}
