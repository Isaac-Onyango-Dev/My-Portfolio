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
        <div class="section-label">What I Believe</div>
        <h2 class="section-title">My Manifesto</h2>
        <div class="manifesto-list">
          ${items}
        </div>
      </div>
    </section>
  `;
}
