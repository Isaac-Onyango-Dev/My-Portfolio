import './style.css';

import { profile } from './data/profile.js';
import { Hero } from './sections/hero.js';
import { About } from './sections/about.js';
import { Projects, initProjects } from './sections/projects.js';
import { Experience } from './sections/experience.js';
import { Manifestoes } from './sections/manifestoes.js';
import { Contact, initContactForm } from './sections/contact.js';
import {
  initReveal,
  initScrollProgress,
  initActiveNav,
  initNavScrollState,
  rotateText,
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

// ── Hero role line ───────────────────────────────────────────────────────
rotateText(document.getElementById('role-word'), profile.roles);

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
