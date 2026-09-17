# My Portfolio

Personal portfolio for **Isaac Onyango Ouma** — a single-page site built with Vite,
vanilla JavaScript and TailwindCSS, deployed to GitHub Pages.

Live: https://isaac-onyango-dev.github.io/My-Portfolio/

---

## Everything personal lives in one file

Open [`src/data/profile.js`](src/data/profile.js). It holds your name, bio, contact
details, skills, featured projects, work history and manifesto. Edit that file and the
whole site updates — no other file contains your personal information.

Things worth keeping current:

1. **Featured projects** — pin them on your GitHub profile. See below.
2. **Project copy** — optional hand-written blurbs and highlights live in
   `projectNotes`, keyed by repo name. `extraProjects` holds work that isn't a
   public repo yet.
3. **Screenshots** — set a custom social preview on the repo (Settings → Social
   preview) and the featured card uses it. Or drop an image into `public/` and set
   `image` in that repo's notes.
4. **CV** — `public/Isaac-Onyango-Ouma-CV.pdf` is generated from your Word document.
   Regenerate it whenever you update the .docx.
5. **Open to work** — set `profile.openToWork` to `false` once you land the role.

## The site keeps itself in sync with GitHub

| You do this on GitHub | The site shows it |
|---|---|
| Create, delete, rename or describe a repo | Next page load |
| Add a homepage URL or topics | Next page load |
| Pin or unpin a repo | After the nightly rebuild, or instantly via **Actions → Run workflow** |

- **Featured** is your pinned repos, in pin order. A pinned repo that has since been
  deleted is dropped immediately. With nothing pinned, it falls back to the repos
  in `projectNotes`.
- **Live from GitHub** is every other public repo, fetched in the visitor's
  browser. Forks, archived repos and `repoBlocklist` are skipped.
- **Headline numbers** for shipped projects and repositories are counted live.
  A repo counts as shipped when it has a homepage URL.

Pins are only available from GitHub's GraphQL API, which needs a token, so
`scripts/sync-github.mjs` fetches them at build time into `public/github.json`.
The deploy workflow passes its built-in token and runs every night. No secrets to
set up. To test the pinned view locally:

```bash
GITHUB_TOKEN=<a personal token with no scopes> npm run build
```

GitHub pauses scheduled workflows in repos with no activity for 60 days. Any push
turns it back on.

## Contact form

The form posts to [Formspree](https://formspree.io), set in `profile.formEndpoint`.
Messages arrive in the inbox attached to that form — no backend needed, and it works
on GitHub Pages.

Formspree asks you to confirm the first submission by email, so send yourself one test
message after deploying. If you ever clear `formEndpoint`, the form falls back to
opening the visitor's email client, so it is never a dead end. A hidden honeypot field
catches most spam bots.

## Projects pull from GitHub automatically

The "Live from GitHub" grid calls the public GitHub API at page load, so every repo you
push shows up without touching this codebase. Forks, archived and private repos are
skipped, results are cached in the browser for 30 minutes, and anything listed in
`repoBlocklist` is hidden.

Featured projects above it stay hand-written, because a recruiter should see your best
work framed properly rather than sorted by push date.

## Local development

```bash
npm install
npm run dev
```

Then open the URL Vite prints. Note the site is served under `/My-Portfolio/` to match
the GitHub Pages path, set by `base` in `vite.config.js`.

```bash
npm test          # checks the featured-project rules
npm run build     # syncs pins (if GITHUB_TOKEN is set), then builds into dist/
npm run preview   # serve the production build locally
```

## Deployment

`.github/workflows/deploy.yml` tests, builds and publishes `dist/` to GitHub Pages on
every push to `main`, every night, and whenever you press **Run workflow**.

## Project structure

```
index.html              markup shell, SEO tags, navbar, footer
src/main.js             renders every section and starts the interactions
src/data/profile.js     ← all your personal content
src/sections/           one .js + .css pair per section
src/utils/github.js     GitHub API client, caching, featured-project rules
scripts/sync-github.mjs build-time snapshot of pinned repos
src/utils/motion.js     scroll reveal, progress bar, active nav link, role rotator
public/                 logo, portrait, CV, robots.txt, sitemap.xml
```

## Accessibility and performance notes

- Mobile first: phones get a bottom tab bar, 44px+ touch targets, and 17px form
  text so iOS doesn't zoom on focus. Tablet and desktop layer on from there.
- Every animation is disabled when the visitor's system asks for reduced motion,
  translucent bars turn solid for reduced transparency, and separators and
  secondary text strengthen for increased contrast.
- A skip link and visible focus rings support keyboard navigation.
- Form fields validate inline with messages tied to their inputs.
- Images are lazy-loaded and sized to avoid layout shift.
