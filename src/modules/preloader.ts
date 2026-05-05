import gsap from 'gsap';

export function initPreloader(onComplete: () => void) {
  const preloader = document.getElementById('preloader');
  const textEl = document.querySelector('.preloader__text') as HTMLElement;
  const barFill = document.querySelector('.preloader__bar-fill') as HTMLElement;

  if (!preloader) { onComplete(); return; }

  // Check session flag
  if (sessionStorage.getItem('preloaded')) {
    preloader.style.display = 'none';
    onComplete();
    return;
  }

  const message = '> initializing aman.jha...';
  let i = 0;

  // Type out text
  const typeInterval = setInterval(() => {
    if (i <= message.length) {
      textEl.textContent = message.slice(0, i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 40);

  // Animate progress bar
  gsap.to(barFill, {
    width: '100%',
    duration: 1.5,
    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    delay: 0.2,
    onComplete: () => {
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        onComplete: () => {
          preloader.style.display = 'none';
          sessionStorage.setItem('preloaded', '1');
          onComplete();
        }
      });
    }
  });
}
