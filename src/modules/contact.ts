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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.contact__submit') as HTMLButtonElement;
    const btnText = btn.querySelector('span');
    if (!btnText) return;

    // Start loading state
    btn.disabled = true;
    const frames = ['/', '—', '\\', '|'];
    let frame = 0;
    const spinner = setInterval(() => {
      frame = (frame + 1) % frames.length;
      btnText.textContent = frames[frame];
    }, 100);

    const formData = new FormData(form);

    try {
      // NOTE: Replace 'mqakvjnd' with your own Formspree ID from https://formspree.io/
      const response = await fetch('https://formspree.io/f/mqakvjnd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      clearInterval(spinner);

      if (response.ok) {
        form.style.display = 'none';
        successEl.style.display = 'block';
        
        // Ensure visibility of the success terminal line
        const lines = successEl.querySelectorAll('.terminal-line');
        lines.forEach(line => line.classList.add('visible'));

        const messages = [
          '> Establishing secure tunnel...',
          '> Payload encrypted.',
          '> Status: 200 OK',
          '> Message transmitted successfully.',
          '> Expect a response within 24h.'
        ];

        const textEl = successEl.querySelector('.contact__success-text') as HTMLElement;
        let msgIndex = 0;
        textEl.innerHTML = '';

        function typeNext() {
          if (msgIndex >= messages.length) return;
          const msg = messages[msgIndex];
          textEl.innerHTML += (msgIndex > 0 ? '<br>' : '') + msg;
          msgIndex++;
          setTimeout(typeNext, 400);
        }

        typeNext();
      } else {
        throw new Error('Transmission failed');
      }
    } catch (err) {
      clearInterval(spinner);
      btn.disabled = false;
      btnText.textContent = 'RETRY ↵';
      alert('Terminal Error: Connection refused. Please try again.');
    }
  });
}
