import './experience.css';
import { timeline } from '../data/profile.js';

const KIND = {
  work: { icon: 'fa-solid fa-briefcase', label: 'Work' },
  education: { icon: 'fa-solid fa-graduation-cap', label: 'Education' },
  certification: { icon: 'fa-solid fa-certificate', label: 'Certification' },
};

function entry({ kind, role, org, period, location, points = [], tags = [] }) {
  const meta = KIND[kind] || KIND.work;

  return `
    <li class="timeline-item" data-reveal>
      <span class="timeline-marker" aria-hidden="true">
        <i class="${meta.icon}"></i>
      </span>
      <div class="timeline-card">
        <div class="timeline-head">
          <div>
            <h3 class="timeline-role">${role}</h3>
            <p class="timeline-org">${org}</p>
          </div>
          <div class="timeline-when">
            <span class="timeline-period">${period}</span>
            ${location ? `<span class="timeline-location">${location}</span>` : ''}
          </div>
        </div>
        ${
          points.length
            ? `<ul class="timeline-points">${points.map((p) => `<li>${p}</li>`).join('')}</ul>`
            : ''
        }
        ${
          tags.length
            ? `<div class="card-tags">${tags
                .map((t) => `<span class="project-tag">${t}</span>`)
                .join('')}</div>`
            : ''
        }
      </div>
    </li>
  `;
}

export function Experience() {
  return `
    <section id="experience" class="experience-section">
      <div class="section-container" data-reveal>
        <div class="section-label">The Road So Far</div>
        <h2 class="section-title">Experience &amp; Education</h2>
      </div>
      <div class="section-container">
        <ol class="timeline">
          ${timeline.map(entry).join('')}
        </ol>
      </div>
    </section>
  `;
}
