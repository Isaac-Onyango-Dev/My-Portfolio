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
        <i class="${icon}" aria-hidden="true"></i>
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

  return `
    <section id="about" class="about-section">
      <div class="section-container" data-reveal>
        <div class="section-label">About Me</div>
        <h2 class="section-title">Who I Am</h2>

        <div class="about-grid">
          <div class="about-text">${paragraphs}</div>
          <aside class="about-facts" aria-label="Quick facts">
            <ul>${facts}</ul>
          </aside>
        </div>
      </div>

      <div class="section-container" data-reveal>
        <h3 class="subsection-title">What I work with</h3>
        <div class="about-skill-groups">${groups}</div>
      </div>
    </section>
  `;
}
