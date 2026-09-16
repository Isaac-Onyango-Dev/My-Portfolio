/**
 * Snapshots the repos pinned on the GitHub profile into public/github.json.
 *
 * Pinned repos are only exposed through GitHub's GraphQL API, which always
 * needs a token, so this can't happen in the visitor's browser. It runs at
 * build time instead: the deploy workflow passes its built-in GITHUB_TOKEN
 * and rebuilds nightly, so pin changes reach the site within a day.
 *
 * Without a token (a plain local `npm run build`) it skips quietly and the
 * site falls back to the repos named in projectNotes.
 */
import { writeFile } from 'node:fs/promises';
import { profile } from '../src/data/profile.js';

const OUT = new URL('../public/github.json', import.meta.url);
const token = process.env.GITHUB_TOKEN;

const query = `query($login: String!) {
  user(login: $login) {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name description url homepageUrl pushedAt
          stargazerCount forkCount isFork isArchived
          usesCustomOpenGraphImage openGraphImageUrl
          primaryLanguage { name }
          repositoryTopics(first: 4) { nodes { topic { name } } }
        }
      }
    }
  }
}`;

if (!token) {
  console.log('sync-github: no GITHUB_TOKEN, skipping pinned-repo snapshot.');
  process.exit(0);
}

try {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { login: profile.github } }),
  });
  const body = await res.json();
  if (!res.ok || body.errors) throw new Error(JSON.stringify(body.errors || body));

  // Same shape as fetchRepos() in src/utils/github.js, plus the preview image.
  const pinned = body.data.user.pinnedItems.nodes
    .filter((r) => !r.isFork && !r.isArchived)
    .map((r) => ({
      name: r.name,
      description: r.description || '',
      url: r.url,
      homepage: r.homepageUrl || '',
      language: r.primaryLanguage?.name || '',
      topics: r.repositoryTopics.nodes.map((n) => n.topic.name),
      stars: r.stargazerCount,
      forks: r.forkCount,
      pushedAt: r.pushedAt,
      // GitHub generates a preview for every repo; only a custom one is a real screenshot.
      image: r.usesCustomOpenGraphImage ? r.openGraphImageUrl : null,
    }));

  await writeFile(OUT, JSON.stringify({ syncedAt: new Date().toISOString(), pinned }, null, 2));
  console.log(`sync-github: ${pinned.length} pinned repos -> public/github.json (${pinned.map((r) => r.name).join(', ')})`);
} catch (err) {
  // Don't block a deploy over this: the site has a fallback. Surface it in the Actions UI instead.
  console.log(`::warning title=Pinned repo sync failed::${err.message}`);
}
