import './projects.css';
import { profile, featuredProjects, repoBlocklist } from '../data/profile.js';
import { fetchRepos, languageColors, relativeTime } from '../utils/github.js';
import { revealWithin } from '../utils/motion.js';

const base = import.meta.env.BASE_URL;

const STATUS_LABEL = {
  live: 'Live',
  'in-progress': 'In progress',
  archived: 'Archived',
};

/** Deterministic gradient so a project without a screenshot still looks intentional. */
function gradientFor(title) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) hash = (hash * 31 + title.charCodeAt(i)) % 360;
  return `linear-gradient(135deg, hsl(${hash} 65% 22%), hsl(${(hash + 55) % 360} 60% 34%))`;
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function resolveImage(image) {
  if (!image) return null;
  return /^https?:\/\//.test(image) ? image : `${base}${image}`;
}

// ── Featured card ────────────────────────────────────────────────────────
function featuredCard(project) {
  const { title, blurb, highlights = [], tags = [], repo, demo, image, status } = project;
  const img = resolveImage(image);

  const media = img
    ? `<img src="${img}" alt="${escapeHtml(title)} screenshot" loading="lazy" decoding="async" />`
    : `<div class="card-media-fallback" style="background: ${gradientFor(title)};">
         <span>${escapeHtml(title.slice(0, 1))}</span>
       </div>`;

  const links = [
    repo
      ? `<a href="${repo}" target="_blank" rel="noopener" class="card-link">
           <i class="fa-brands fa-github" aria-hidden="true"></i> Code
         </a>`
      : '',
    demo
      ? `<a href="${demo}" target="_blank" rel="noopener" class="card-link card-link-primary">
           <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live demo
         </a>`
      : '',
  ]
    .filter(Boolean)
    .join('');

  return `
    <article class="project-card featured-card" data-reveal>
      <div class="card-media">
        ${media}
        ${status ? `<span class="card-status status-${status}">${STATUS_LABEL[status] || status}</span>` : ''}
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(title)}</h3>
        <p class="card-blurb">${escapeHtml(blurb)}</p>
        ${
          highlights.length
            ? `<ul class="card-highlights">
                 ${highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join('')}
               </ul>`
            : ''
        }
        <div class="card-tags">
          ${tags.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="card-links">
          ${links || '<span class="card-link card-link-muted">Repository coming soon</span>'}
        </div>
      </div>
    </article>
  `;
}

// ── GitHub repo card ─────────────────────────────────────────────────────
function repoCard(repo) {
  const dot = languageColors[repo.language] || '#94a3b8';

  return `
    <article class="project-card repo-card" data-reveal data-language="${escapeHtml(repo.language)}">
      <div class="repo-card-top">
        <i class="fa-regular fa-folder-open repo-icon" aria-hidden="true"></i>
        <div class="repo-stats">
          ${repo.stars ? `<span><i class="fa-regular fa-star" aria-hidden="true"></i> ${repo.stars}</span>` : ''}
          ${repo.forks ? `<span><i class="fa-solid fa-code-fork" aria-hidden="true"></i> ${repo.forks}</span>` : ''}
        </div>
      </div>
      <h3 class="card-title">
        <a href="${repo.url}" target="_blank" rel="noopener">${escapeHtml(repo.title)}</a>
      </h3>
      <p class="card-blurb">${escapeHtml(repo.description)}</p>
      ${
        repo.topics.length
          ? `<div class="card-tags">${repo.topics
              .map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`)
              .join('')}</div>`
          : ''
      }
      <div class="repo-card-foot">
        ${
          repo.language
            ? `<span class="repo-lang"><span class="lang-dot" style="background:${dot}"></span>${escapeHtml(repo.language)}</span>`
            : '<span class="repo-lang"></span>'
        }
        <span class="repo-updated">Updated ${relativeTime(repo.pushedAt)}</span>
      </div>
      <div class="card-links">
        <a href="${repo.url}" target="_blank" rel="noopener" class="card-link">
          <i class="fa-brands fa-github" aria-hidden="true"></i> Code
        </a>
        ${
          repo.homepage
            ? `<a href="${repo.homepage}" target="_blank" rel="noopener" class="card-link card-link-primary">
                 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live
               </a>`
            : ''
        }
      </div>
    </article>
  `;
}

function skeletons(count = 6) {
  return Array.from({ length: count })
    .map(
      () => `
      <div class="project-card repo-skeleton" aria-hidden="true">
        <div class="sk-line sk-sm"></div>
        <div class="sk-line sk-lg"></div>
        <div class="sk-line"></div>
        <div class="sk-line sk-md"></div>
        <div class="sk-line sk-sm"></div>
      </div>`
    )
    .join('');
}

export function Projects() {
  return `
    <section id="projects" class="projects-section">
      <div class="section-container" data-reveal>
        <div class="section-label">My Work</div>
        <h2 class="section-title">Projects</h2>
        <p class="section-intro">
          A few things I've built end to end, followed by everything I'm currently
          pushing to GitHub — pulled live, so this list is never out of date.
        </p>
      </div>

      <div class="section-container">
        <h3 class="subsection-title" data-reveal>Featured</h3>
        <div class="projects-grid featured-grid">
          ${featuredProjects.map(featuredCard).join('')}
        </div>
      </div>

      <div class="section-container repos-block">
        <div class="repos-header" data-reveal>
          <h3 class="subsection-title">Live from GitHub</h3>
          <a href="https://github.com/${profile.github}" target="_blank" rel="noopener" class="repos-profile-link">
            <i class="fa-brands fa-github" aria-hidden="true"></i> @${profile.github}
          </a>
        </div>

        <div class="repo-filters" id="repo-filters" hidden></div>

        <div class="projects-grid" id="repo-grid">
          ${skeletons()}
        </div>

        <div class="repo-message" id="repo-message" hidden></div>

        <div class="view-all-container">
          <button class="view-all-btn" id="repo-more" hidden>Show all repositories</button>
        </div>
      </div>
    </section>
  `;
}

// ── Behaviour ────────────────────────────────────────────────────────────
const INITIAL_COUNT = 6;

export async function initProjects() {
  const grid = document.getElementById('repo-grid');
  const message = document.getElementById('repo-message');
  const moreBtn = document.getElementById('repo-more');
  const filterBar = document.getElementById('repo-filters');
  if (!grid) return;

  let repos = [];
  let activeLanguage = 'All';
  let expanded = false;

  const render = () => {
    const filtered =
      activeLanguage === 'All'
        ? repos
        : repos.filter((r) => r.language === activeLanguage);

    const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
    grid.innerHTML = visible.map(repoCard).join('');
    revealWithin(grid);

    moreBtn.hidden = filtered.length <= INITIAL_COUNT;
    moreBtn.textContent = expanded
      ? 'Show fewer'
      : `Show all ${filtered.length} repositories`;

    if (!filtered.length) {
      message.hidden = false;
      message.textContent = `No public repositories in ${activeLanguage} yet.`;
    } else {
      message.hidden = true;
    }
  };

  const buildFilters = () => {
    const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b));

    if (languages.length < 2) return;

    filterBar.hidden = false;
    filterBar.innerHTML = ['All', ...languages]
      .map(
        (lang) =>
          `<button class="repo-filter${lang === 'All' ? ' is-active' : ''}" data-lang="${escapeHtml(lang)}">${escapeHtml(lang)}</button>`
      )
      .join('');

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.repo-filter');
      if (!btn) return;
      activeLanguage = btn.dataset.lang;
      expanded = false;
      filterBar
        .querySelectorAll('.repo-filter')
        .forEach((b) => b.classList.toggle('is-active', b === btn));
      render();
    });
  };

  moreBtn.addEventListener('click', () => {
    expanded = !expanded;
    render();
  });

  try {
    repos = await fetchRepos(profile.github, repoBlocklist);

    if (!repos.length) {
      grid.innerHTML = '';
      message.hidden = false;
      message.innerHTML = `No public repositories found yet. <a href="https://github.com/${profile.github}" target="_blank" rel="noopener">Visit the profile →</a>`;
      return;
    }

    buildFilters();
    render();
  } catch (err) {
    grid.innerHTML = '';
    message.hidden = false;
    message.innerHTML = `
      <p>Couldn't load repositories: ${escapeHtml(err.message)}</p>
      <a href="https://github.com/${profile.github}" target="_blank" rel="noopener" class="card-link card-link-primary">
        <i class="fa-brands fa-github" aria-hidden="true"></i> Browse on GitHub instead
      </a>`;
  }
}
