import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initWorkSection() {
  const isMobile = window.innerWidth < 768;

  // Animate section header
  gsap.from('.work__header .section-label', {
    y: 30, opacity: 0, duration: 0.6,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.work__header', start: 'top 85%' }
  });
  gsap.from('.work__header .section-heading', {
    y: 40, opacity: 0, duration: 0.7,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.work__header', start: 'top 80%' }
  });
  gsap.from('.work__header .section-sub', {
    y: 30, opacity: 0, duration: 0.6, delay: 0.1,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.work__header', start: 'top 80%' }
  });

  if (isMobile) {
    // Vertical card stack on mobile - simple reveal
    gsap.utils.toArray('.project-card').forEach((card: any) => {
      gsap.from(card, {
        y: 60, opacity: 0, duration: 0.7,
        ease: 'cubic-bezier(0.16,1,0.3,1)',
        scrollTrigger: { trigger: card, start: 'top 85%' }
      });
    });
    return;
  }

  // Horizontal scroll on desktop
  const pinned = document.getElementById('workPinned');
  const track = document.getElementById('workTrack');
  const progressBar = document.getElementById('workProgress');
  if (!pinned || !track) return;

  // Calculate total scroll width
  const getScrollAmount = () => {
    return track.scrollWidth - window.innerWidth + 80;
  };

  const tween = gsap.to(track, {
    x: () => -getScrollAmount(),
    ease: 'none',
    scrollTrigger: {
      trigger: pinned,
      start: 'top top',
      end: () => `+=${getScrollAmount() * 1.5}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (progressBar) {
          progressBar.style.width = (self.progress * 100) + '%';
        }
      }
    }
  });

  // Stagger card reveals
  gsap.utils.toArray('.project-card').forEach((card: any) => {
    gsap.from(card, {
      opacity: 0,
      x: 100,
      duration: 0.8,
      ease: 'cubic-bezier(0.16,1,0.3,1)',
      scrollTrigger: {
        trigger: card,
        containerAnimation: tween,
        start: 'left 85%',
        toggleActions: 'play none none none',
      }
    });
  });
}
