import './about.css';
import { aboutParagraphs, skillGroups, quickFacts } from '../data/profile.js';

export function About() {
  const paragraphs = aboutParagraphs
    .map((p) => `<p data-reveal-child>${p}</p>`)
    .join('');

  const facts = quickFacts
    .map(
      ({ icon, label, value }) => `
      <li class="fact">
        <span class="fact-icon" aria-hidden="true"><i class="${icon}"></i></span>
        <div>
          <span class="fact-label">${label}</span>
          <span class="fact-value">${value}</span>
        </div>
      </li>`
    )
    .join('');

  const groups = skillGroups
    .map(
      ({ group, items }) => `
      <div class="skill-group" data-reveal-child>
        <h3 class="skill-group-title">${group}</h3>
        <ul class="about-skills">
          ${items
            .map(
              ({ name, icon, color }) => `
            <li class="skill-chip">
              <i class="${icon}" style="color: ${color};" aria-hidden="true"></i>${name}
            </li>`
            )
            .join('')}
        </ul>
      </div>`
    )
    .join('');

  return `
    <section id="about" class="about-section">
      <div class="section-container" data-reveal>
        <header class="section-head">
          <p class="section-label">About</p>
          <h2 class="section-title">Software that solves real problems.</h2>
        </header>

        <div class="about-grid">
          <div class="about-text">${paragraphs}</div>
          <ul class="about-facts" aria-label="Quick facts">${facts}</ul>
        </div>
      </div>

      <div class="section-container about-skills-block" data-reveal>
        <h3 class="subsection-title">What I work with</h3>
        <div class="about-skill-groups">${groups}</div>
      </div>
    </section>
  `;
}
