/**
 * Pulls public repositories from the GitHub REST API so the Projects section
 * stays current without editing code. No token needed for public data; the
 * unauthenticated rate limit (60 requests/hour/IP) is plenty for a portfolio,
 * and responses are cached in sessionStorage so a visitor costs one request.
 */

const CACHE_KEY = 'gh-repos-cache-v1';
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

/** Approximate brand colours for the languages likely to appear. */
export const languageColors = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  Java: '#ED8B00',
  HTML: '#E34F26',
  CSS: '#1572B6',
  SCSS: '#CF649A',
  Shell: '#89E051',
  'C++': '#F34B7D',
  C: '#555555',
  'C#': '#178600',
  PHP: '#777BB4',
  Go: '#00ADD8',
  Rust: '#DEA584',
  Ruby: '#701516',
  Dart: '#00B4AB',
  Kotlin: '#A97BFF',
  Vue: '#41B883',
  Jupyter: '#DA5B0B',
  'Jupyter Notebook': '#DA5B0B',
  Dockerfile: '#2496ED',
  Makefile: '#427819',
};

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, data } = JSON.parse(raw);
    if (Date.now() - at > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    /* storage unavailable (private mode, quota) — caching is optional */
  }
}

/**
 * @param {string} username        GitHub handle
 * @param {string[]} blocklist     repo names to omit
 * @returns {Promise<Array>}       normalised repo objects, newest push first
 */
export async function fetchRepos(username, blocklist = []) {
  const cached = readCache();
  if (cached) return cached.filter((r) => !blocklist.includes(r.name));

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
    { headers: { Accept: 'application/vnd.github+json' } }
  );

  if (!res.ok) {
    throw new Error(
      res.status === 403
        ? 'GitHub rate limit reached — try again shortly.'
        : `GitHub responded with ${res.status}.`
    );
  }

  const raw = await res.json();

  const repos = raw
    .filter((r) => !r.fork && !r.archived && !r.private)
    .map((r) => ({
      name: r.name,
      title: prettify(r.name),
      description: r.description || 'No description yet.',
      url: r.html_url,
      homepage: r.homepage || '',
      language: r.language || '',
      topics: Array.isArray(r.topics) ? r.topics.slice(0, 4) : [],
      stars: r.stargazers_count,
      forks: r.forks_count,
      pushedAt: r.pushed_at,
    }));

  writeCache(repos);
  return repos.filter((r) => !blocklist.includes(r.name));
}

/** my-cool-repo → My Cool Repo */
function prettify(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** "3 weeks ago" style relative time for the "last updated" line. */
export function relativeTime(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const units = [
    ['year', 1000 * 60 * 60 * 24 * 365],
    ['month', 1000 * 60 * 60 * 24 * 30],
    ['week', 1000 * 60 * 60 * 24 * 7],
    ['day', 1000 * 60 * 60 * 24],
    ['hour', 1000 * 60 * 60],
    ['minute', 1000 * 60],
  ];

  for (const [unit, ms] of units) {
    const value = Math.floor(diff / ms);
    if (value >= 1) return `${value} ${unit}${value > 1 ? 's' : ''} ago`;
  }
  return 'just now';
}
