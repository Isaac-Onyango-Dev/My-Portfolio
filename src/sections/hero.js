import './hero.css';
import { profile } from '../data/profile.js';

const base = import.meta.env.BASE_URL;

export function Hero() {
  const badge = profile.openToWork
    ? `<div class="hero-badge" data-reveal>
         <span class="hero-badge-dot" aria-hidden="true"></span>
         ${profile.availability}
       </div>`
    : '';

  const resumeBtn = profile.resumeFile
    ? `<a href="${base}${profile.resumeFile}" download class="btn-secondary">
         <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i> Download CV
       </a>`
    : '';

  const socials = profile.socials
    .map(
      ({ label, icon, url }) => `
      <a href="${url}" target="_blank" rel="noopener" class="hero-social" aria-label="${label}">
        <i class="${icon}" aria-hidden="true"></i>
      </a>`
    )
    .join('');

  return `
    <section id="hero" class="hero-section">
      <div class="hero-content">
        ${badge}
        <span class="hero-greeting" data-reveal>Hello, I'm</span>
        <h1 class="hero-name">
          <span id="typed-name"></span><span class="typing-cursor" id="hero-cursor">|</span>
        </h1>
        <p class="hero-role" aria-live="polite">
          <span id="typed-role"></span><span class="role-cursor" aria-hidden="true">|</span>
        </p>
        <p class="hero-description" data-reveal>${profile.tagline}</p>
        <p class="hero-meta" data-reveal>
          <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${profile.location}</span>
          <span><i class="fa-solid fa-envelope" aria-hidden="true"></i> ${profile.email}</span>
        </p>
        <div class="hero-cta" data-reveal>
          <a href="#projects" class="btn-primary">View My Work</a>
          ${resumeBtn}
          <a href="#contact" class="btn-secondary">Get In Touch</a>
        </div>
        <div class="hero-socials" data-reveal>${socials}</div>
      </div>
      <a href="#about" class="hero-scroll-indicator" aria-label="Scroll to about section">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </a>
    </section>
  `;
}
