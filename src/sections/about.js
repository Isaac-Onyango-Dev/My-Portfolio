import './about.css';
import { profile, aboutParagraphs, skillGroups } from '../data/profile.js';

const base = import.meta.env.BASE_URL;

export function About() {
  const paragraphs = aboutParagraphs
    .map((p) => `<p data-reveal-child>${p}</p>`)
    .join('');

  const groups = skillGroups
    .map(
      ({ group, items }) => `
      <div class="skill-group" data-reveal-child>
        <h3 class="skill-group-title">${group}</h3>
        <div class="about-skills">
          ${items
            .map(
              ({ name, icon, color }) => `
            <div class="skill-chip">
              <i class="${icon}" style="color: ${color};" aria-hidden="true"></i>${name}
            </div>`
            )
            .join('')}
        </div>
      </div>`
    )
    .join('');

  // The rotating ring reuses the same skill data — no duplicated icon list.
  const ringItems = skillGroups.flatMap((g) => g.items);
  const ring = ringItems
    .map(
      ({ name, icon, color }, i) => `
      <div class="tech-icon" style="--i: ${i}; color: ${color};" title="${name}">
        <i class="${icon}"></i>
      </div>`
    )
    .join('');

  return `
    <section id="about" class="about-section">
      <div class="section-container" data-reveal>
        <div class="section-label">About Me</div>
        <h2 class="section-title">Who I Am</h2>
        <div class="about-grid">
          <div class="about-text">
            ${paragraphs}
            <div class="about-skill-groups">${groups}</div>
          </div>
          <div class="about-image-wrapper">
            <div class="tech-ring" aria-hidden="true" style="--total: ${ringItems.length};">
              ${ring}
            </div>
            <img
              class="about-image"
              src="${base}isaac-profile.png"
              alt="Portrait of ${profile.name}"
              width="320" height="400" loading="lazy" decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  `;
}
