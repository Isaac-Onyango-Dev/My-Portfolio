# My Portfolio

Personal portfolio for **Isaac Onyango Ouma** — a single-page site built with Vite,
vanilla JavaScript and TailwindCSS, deployed to GitHub Pages.

Live: https://isaac-onyango-dev.github.io/My-Portfolio/

---

## Everything personal lives in one file

Open [`src/data/profile.js`](src/data/profile.js). It holds your name, bio, contact
details, skills, featured projects, work history and manifesto. Edit that file and the
whole site updates — no other file contains your personal information.

Anything still marked `// TODO` in that file is a placeholder waiting for you.

### The short checklist

1. **Bio** — rewrite `aboutParagraphs` in your own voice.
2. **Timeline** — replace the three entries in `timeline` with your real jobs,
   course and certifications.
3. **Featured projects** — fill in the `repo` and `demo` URLs in `featuredProjects`,
   and drop screenshots into `public/` (then set `image: 'my-shot.png'`).
4. **CV** — put your PDF in `public/` and match the filename to `profile.resumeFile`.
   Leave `resumeFile: ''` to hide the download button.
5. **Contact form** — see below.
6. **Open to work** — set `profile.openToWork` to `false` once you land the role.

## Wiring up the contact form

The form works with [Web3Forms](https://web3forms.com): free, no backend, no account
data stored, and it works on GitHub Pages.

1. Go to web3forms.com and enter your email — they send you an access key.
2. Paste that key into `profile.web3formsKey` in `src/data/profile.js`.
3. Push. Messages now land in your inbox.

Until a key is set, the form validates as normal and then falls back to opening the
visitor's email client, so it is never a dead end. A hidden honeypot field catches
most spam bots.

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
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. Nothing to run by hand.

## Project structure

```
index.html              markup shell, SEO tags, navbar, footer
src/main.js             renders every section and starts the interactions
src/data/profile.js     ← all your personal content
src/sections/           one .js + .css pair per section
src/utils/github.js     GitHub API client with caching
src/utils/motion.js     scroll reveal, progress bar, active nav link
src/utils/typewriter.js hero typing and rotating role animations
public/                 images, CV, robots.txt, sitemap.xml
```

## Accessibility and performance notes

- Every animation is disabled when the visitor's system asks for reduced motion.
- A skip link and visible focus rings support keyboard navigation.
- Form fields validate inline with messages tied to their inputs.
- Images are lazy-loaded and sized to avoid layout shift.
