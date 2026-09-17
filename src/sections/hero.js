import './hero.css';
import { profile, skillGroups, stats } from '../data/profile.js';

const base = import.meta.env.BASE_URL;

export function Hero() {
  const badge = profile.openToWork
    ? `<p class="hero-badge"><span class="hero-badge-dot" aria-hidden="true"></span>${profile.availability}</p>`
    : '';

  const resumeBtn = profile.resumeFile
    ? `<a href="${base}${profile.resumeFile}" download class="btn btn-tinted">
         <i class="fa-solid fa-arrow-down" aria-hidden="true"></i> Download CV
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

  // The orbit reuses the skill data — no duplicated icon list.
  const ringItems = skillGroups.flatMap((g) => g.items);
  const ring = ringItems
    .map(
      ({ name, icon, color }, i) => `
      <span class="tech-icon" style="--i: ${i}; color: ${color};" title="${name}">
        <i class="${icon}"></i>
      </span>`
    )
    .join('');

  const statCells = stats
    .map(
      ({ value, label, source }) => `
      <div class="stat">
        <span class="stat-value"${source ? ` data-stat-source="${source}"` : ''}>${value ?? '–'}</span>
        <span class="stat-label">${label}</span>
      </div>`
    )
    .join('');

  return `
    <section id="hero" class="hero-section">
      <div class="hero-inner">
        <div class="hero-visual" style="--total: ${ringItems.length};">
          <div class="tech-ring" aria-hidden="true">${ring}</div>
          <img
            class="hero-portrait"
            src="${base}isaac-profile.png"
            alt="Portrait of ${profile.name}"
            width="400" height="500" fetchpriority="high" decoding="async"
          />
        </div>

        <div class="hero-content">
          ${badge}
          <h1 class="hero-name">${profile.name}</h1>
          <p class="hero-role">
            <span class="sr-only">${profile.roles.join(', ')}</span>
            <span class="role-word" id="role-word" aria-hidden="true">${profile.roles[0]}</span>
          </p>
          <p class="hero-description">${profile.tagline}</p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-filled">View my work</a>
            ${resumeBtn}
          </div>
          <div class="hero-foot">
            <div class="hero-socials">${socials}</div>
            <p class="hero-meta">
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${profile.location}
            </p>
          </div>
        </div>
      </div>

      <div class="hero-stats section-container" data-reveal>${statCells}</div>
    </section>
  `;
}
