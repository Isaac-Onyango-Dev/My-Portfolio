import './manifestoes.css';

const manifestoItems = [
  {
    number: '01',
    title: 'Architecture precedes code',
    body: 'Robust systems aren\'t accidentally typed into existence; they are meticulously planned. I prioritize a strong foundational design before writing a single line of logic.',
  },
  {
    number: '02',
    title: 'Design is how it works',
    body: 'Aesthetics and mechanics are inseparable. I obsess over the micro-interactions, accessibility, and performance just as much as the visual layer.',
  },
  {
    number: '03',
    title: 'Automation over repetition',
    body: 'If a process requires doing the same thing thrice, I script it. Efficiency isn\'t just about saving time; it\'s about eliminating human error.',
  },
  {
    number: '04',
    title: 'Continuous evolution',
    body: 'Technology shifts rapidly. The most critical skill I possess isn\'t mastery of a single framework—it\'s the ability to absorb, adapt, and deploy new paradigms continuously.',
  },
];

export function Manifestoes() {
  const items = manifestoItems.map(({ number, title, body }) => `
    <div class="manifesto-item">
      <span class="manifesto-number">${number}</span>
      <div class="manifesto-content">
        <h3 class="manifesto-title">${title}</h3>
        <p class="manifesto-body">${body}</p>
      </div>
    </div>
  `).join('');

  return `
    <section id="manifestoes" class="manifestoes-section">
      <div class="section-container">
        <div class="section-label">What I Believe</div>
        <h2 class="section-title">My Manifesto</h2>
        <div class="manifesto-list">
          ${items}
        </div>
      </div>
    </section>
  `;
}
