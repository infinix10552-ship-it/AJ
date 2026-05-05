import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/hero.css';
import './styles/work.css';
import './styles/sections.css';

import { initPreloader } from './modules/preloader';
import { initCursor } from './modules/cursor';
import { initNav } from './modules/nav';
import { initParticles } from './modules/particles';
import { initHeroAnimations } from './modules/heroAnim';
import { initWorkSection } from './modules/workSection';
import { initAbout } from './modules/about';
import { initCredentials } from './modules/credentials';
import { initContact } from './modules/contact';
import { initLenis } from './modules/smoothScroll';

document.addEventListener('DOMContentLoaded', () => {
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
});
