'use client';

import { useEffect } from 'react';

export default function ClientInitializer() {
  useEffect(() => {
    async function init() {
      const { initPreloader } = await import('../../src/modules/preloader');
      const { initLenis } = await import('../../src/modules/smoothScroll');
      const { initNav } = await import('../../src/modules/nav');
      const { initCursor } = await import('../../src/modules/cursor');
      const { initParticles } = await import('../../src/modules/particles');
      const { initHeroAnimations } = await import('../../src/modules/heroAnim');
      const { initWorkSection } = await import('../../src/modules/workSection');
      const { initAbout } = await import('../../src/modules/about');
      const { initCredentials } = await import('../../src/modules/credentials');
      const { initContact } = await import('../../src/modules/contact');

      initPreloader(() => {
        initLenis();
        initNav();
        initCursor();
        initParticles();
        initHeroAnimations();
        initWorkSection();
        initAbout();
        initCredentials();
        initContact();
      });
    }
    init();
  }, []);

  return null;
}
