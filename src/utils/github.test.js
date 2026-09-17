// Run with `npm test`. Covers the rules that decide what the portfolio features.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickFeatured, safeUrl, summarizeRepos } from './github.js';

const repo = (name, extra = {}) => ({
  name, description: `${name} desc`, url: `https://github.com/u/${name}`,
  homepage: '', language: 'Python', topics: ['cli'], ...extra,
});
const names = (list) => list.map((p) => p.name);

test('pins lead, in pin order, and skip blocklisted repos', () => {
  const live = [repo('B'), repo('A'), repo('Site')];
  const pinned = [repo('A'), repo('Site'), repo('B')];
  const out = pickFeatured({ pinned, live, notes: {}, blocklist: ['Site'] });
  assert.deepEqual(names(out), ['A', 'B']);
});

test('a pinned repo deleted since the snapshot disappears', () => {
  const out = pickFeatured({ pinned: [repo('Gone'), repo('A')], live: [repo('A')], notes: {} });
  assert.deepEqual(names(out), ['A']);
});

test('without live data, the snapshot is trusted as-is', () => {
  const out = pickFeatured({ pinned: [repo('A'), repo('B')], live: null, notes: {} });
  assert.deepEqual(names(out), ['A', 'B']);
});

test('no pins falls back to repos with notes that still exist', () => {
  const live = [repo('A'), repo('B')];
  const out = pickFeatured({ pinned: [], live, notes: { B: {}, Deleted: {} } });
  assert.deepEqual(names(out), ['B']);
});

test('notes override GitHub copy; GitHub fills the gaps', () => {
  const live = [repo('my-app', { homepage: 'https://x.dev', description: 'fresh' })];
  const pinned = [repo('my-app', { description: 'stale', image: 'https://img/og.png' })];
  const [withNotes] = pickFeatured({ pinned, live, notes: { 'my-app': { title: 'Mine', tags: ['T'] } } });
  assert.equal(withNotes.title, 'Mine');
  assert.equal(withNotes.blurb, 'fresh'); // live beats the snapshot
  assert.deepEqual(withNotes.tags, ['T']);
  assert.equal(withNotes.image, 'https://img/og.png');
  assert.equal(withNotes.status, 'live');

  const [bare] = pickFeatured({ pinned, live, notes: {} });
  assert.equal(bare.title, 'My App');
  assert.deepEqual(bare.tags, ['Python', 'cli']);
});

test('repo names matching Object.prototype keys are not treated as noted', () => {
  const out = pickFeatured({ pinned: [], live: [repo('constructor')], notes: {} });
  assert.deepEqual(out, []);
});

test('safeUrl only passes http(s)', () => {
  assert.equal(safeUrl('https://a.dev'), 'https://a.dev');
  assert.equal(safeUrl('javascript:alert(1)'), '');
  assert.equal(safeUrl(null), '');
});

test('counts every public repo, lists only own active ones', () => {
  const all = [
    repo('Site', { homepage: 'https://site.dev' }),   // blocklisted, still counted and shipped
    repo('Profile'),                                   // blocklisted
    repo('App', { homepage: 'https://app.dev' }),
    repo('Old', { archived: true }),
    repo('Theirs', { fork: true, homepage: 'https://fork.dev' }),
    repo('Draft'),
  ];
  const { visible, publicCount, shippedCount } = summarizeRepos(all, ['Site', 'Profile']);
  assert.equal(publicCount, 6);
  assert.equal(shippedCount, 2); // Site + App; a fork's homepage isn't your shipment
  assert.deepEqual(names(visible), ['App', 'Draft']);
});
