import './style.css';

import { profile } from './data/profile.js';
import { Hero } from './sections/hero.js';
import { About } from './sections/about.js';
import { Projects, initProjects } from './sections/projects.js';
import { Experience } from './sections/experience.js';
import { Manifestoes } from './sections/manifestoes.js';
import { Contact, initContactForm } from './sections/contact.js';
import { typewriter, rotatingTypewriter } from './utils/typewriter.js';
import {
  initReveal,
  initScrollProgress,
  initActiveNav,
  initNavScrollState,
} from './utils/motion.js';

// ── Render ───────────────────────────────────────────────────────────────
const app = document.querySelector('#app');
app.innerHTML = [
  Hero(),
  About(),
  Projects(),
  Experience(),
  Manifestoes(),
  Contact(),
].join('');

// ── Hero typing animations ───────────────────────────────────────────────
typewriter('typed-name', profile.name, {
  speed: 85,
  startDelay: 300,
  cursorId: 'hero-cursor',
});

rotatingTypewriter('typed-role', profile.roles, {
  // Start once the name has finished typing so the two don't compete.
  startDelay: 300 + profile.name.length * 85 + 500,
});

// ── Section behaviour ────────────────────────────────────────────────────
initContactForm();
initProjects();

// ── Scroll polish ────────────────────────────────────────────────────────
initReveal();
initScrollProgress();
initActiveNav();
initNavScrollState();

// ── Brand mark ───────────────────────────────────────────────────────────
// Set here rather than in index.html: a root-relative src there is correct in
// the build but double-prefixed by Vite's dev server, so it 404s in preview.
const brandMark = document.getElementById('brand-mark');
if (brandMark) brandMark.src = `${import.meta.env.BASE_URL}logo.svg`;

// ── Footer year, so it never goes stale ──────────────────────────────────
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Mobile navigation ────────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  const setMenu = (open) => {
    navLinks.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars', !open);
    icon.classList.toggle('fa-xmark', open);
  };

  navToggle.addEventListener('click', () =>
    setMenu(!navLinks.classList.contains('active'))
  );

  document
    .querySelectorAll('.nav-link')
    .forEach((link) => link.addEventListener('click', () => setMenu(false)));

  // Escape closes the menu — standard behaviour people expect.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
}
