import './hero.css';
import { profile, skillGroups, stats } from '../data/profile.js';

const base = import.meta.env.BASE_URL;

export function Hero() {
  const badge = profile.openToWork
    ? `<div class="hero-badge">
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

  // The rotating ring reuses the skill data — no duplicated icon list.
  const ringItems = skillGroups.flatMap((g) => g.items);
  const ring = ringItems
    .map(
      ({ name, icon, color }, i) => `
      <div class="tech-icon" style="--i: ${i}; color: ${color};" title="${name}">
        <i class="${icon}"></i>
      </div>`
    )
    .join('');

  const statCells = stats
    .map(
      ({ value, label, source }) => `
      <div class="stat">
        <span class="stat-value"${source ? ` data-stat-source="${source}"` : ''}>${value ?? '—'}</span>
        <span class="stat-label">${label}</span>
      </div>`
    )
    .join('');

  return `
    <section id="hero" class="hero-section">
      <div class="hero-inner">
        <div class="hero-content">
          ${badge}
          <p class="hero-greeting">Hello, I'm</p>
          <h1 class="hero-name">
            <span id="typed-name"></span><span class="typing-cursor" id="hero-cursor">|</span>
          </h1>
          <p class="hero-role" aria-live="polite">
            <span id="typed-role"></span><span class="role-cursor" aria-hidden="true">|</span>
          </p>
          <p class="hero-description">${profile.tagline}</p>
          <p class="hero-meta">
            <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${profile.location}</span>
            <a href="mailto:${profile.email}"><i class="fa-solid fa-envelope" aria-hidden="true"></i> ${profile.email}</a>
          </p>
          <div class="hero-cta">
            <a href="#projects" class="btn-primary">View My Work</a>
            ${resumeBtn}
            <a href="#contact" class="btn-secondary">Get In Touch</a>
          </div>
          <div class="hero-socials">${socials}</div>
        </div>

        <div class="hero-visual">
          <div class="tech-ring" aria-hidden="true" style="--total: ${ringItems.length};">
            ${ring}
          </div>
          <img
            class="hero-portrait"
            src="${base}isaac-profile.png"
            alt="Portrait of ${profile.name}"
            width="320" height="400" fetchpriority="high" decoding="async"
          />
        </div>
      </div>

      <div class="hero-stats" data-reveal>${statCells}</div>

      <a href="#about" class="hero-scroll-indicator" aria-label="Scroll to about section">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </a>
    </section>
  `;
}
