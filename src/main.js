import './style.css';

import { Hero }        from './sections/hero.js';
import { About }       from './sections/about.js';
import { Projects, initProjectsCarousel } from './sections/projects.js';
import { Manifestoes } from './sections/manifestoes.js';
import { Contact, initContactForm } from './sections/contact.js';
import { typewriter }  from './utils/typewriter.js';

// Assemble and render all sections into #app
const app = document.querySelector('#app');
app.innerHTML = [
  Hero(),
  About(),
  Projects(),
  Manifestoes(),
  Contact(),
].join('');

// Typing animation — fires after DOM is ready
typewriter('typed-name', 'Isaac Onyango Ouma', {
  speed: 85,
  startDelay: 300,
  cursorId: 'hero-cursor',
});

// Initialize interactive sections
initContactForm();
initProjectsCarousel();

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon (bars <-> xmark)
    const icon = navToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when a link is clicked
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = navToggle.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });
}
