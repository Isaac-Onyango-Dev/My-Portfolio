import './manifestoes.css';
import { manifestoItems } from '../data/profile.js';

export function Manifestoes() {
  const items = manifestoItems
    .map(
      ({ number, title, body }) => `
      <div class="manifesto-item" data-reveal-child>
        <span class="manifesto-number">${number}</span>
        <div class="manifesto-content">
          <h3 class="manifesto-title">${title}</h3>
          <p class="manifesto-body">${body}</p>
        </div>
      </div>`
    )
    .join('');

  return `
    <section id="manifestoes" class="manifestoes-section">
      <div class="section-container" data-reveal>
        <header class="section-head">
          <p class="section-label">Principles</p>
          <h2 class="section-title">How I work.</h2>
        </header>
        <div class="manifesto-list">
          ${items}
        </div>
      </div>
    </section>
  `;
}
