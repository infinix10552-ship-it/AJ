import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initContact() {
  // Section entrance
  gsap.from('.contact .section-label', {
    y: 30, opacity: 0, duration: 0.6,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.contact', start: 'top 70%' }
  });
  gsap.from('.contact__heading', {
    y: 40, opacity: 0, duration: 0.7, delay: 0.1,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.contact', start: 'top 70%' }
  });
  gsap.from('.contact__terminal', {
    y: 50, opacity: 0, duration: 0.8, delay: 0.2,
    ease: 'cubic-bezier(0.16,1,0.3,1)',
    scrollTrigger: { trigger: '.contact__terminal', start: 'top 85%' }
  });

  // Contact form handling
  const form = document.getElementById('contactForm') as HTMLFormElement;
  const successEl = document.getElementById('contactSuccess') as HTMLElement;

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.contact__submit') as HTMLButtonElement;
    const btnText = btn.querySelector('span');
    if (!btnText) return;

    // ASCII spinner
    const frames = ['/', '—', '\\', '|'];
    let frame = 0;
    btnText.textContent = frames[0];
    const spinner = setInterval(() => {
      frame = (frame + 1) % frames.length;
      btnText.textContent = frames[frame];
    }, 120);

    // Simulate processing
    setTimeout(() => {
      clearInterval(spinner);
      form.style.display = 'none';
      successEl.style.display = 'block';

      const messages = [
        '> Packet delivered.',
        '> Status: 200 OK',
        '> Expect a response within 24h.'
      ];

      const textEl = successEl.querySelector('.contact__success-text') as HTMLElement;
      let msgIndex = 0;

      function typeNext() {
        if (msgIndex >= messages.length) return;
        const msg = messages[msgIndex];
        textEl.innerHTML += (msgIndex > 0 ? '<br>' : '') + msg;
        msgIndex++;
        setTimeout(typeNext, 400);
      }

      typeNext();
    }, 1200);
  });
}
