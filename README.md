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

The content is already filled in from your CV. What's left:

1. **Dates** — `timeline` needs your diploma start and expected finish years, and the
   year you started with Complex Developers.
2. **Screenshots** — drop images into `public/` and set `image: 'my-shot.png'` on the
   matching entry in `featuredProjects`. They currently fall back to generated
   gradients.
3. **School Portal System** — add its `repo` URL once the code is on GitHub.
4. **CV** — `public/Isaac-Onyango-Ouma-CV.pdf` is generated from your Word document.
   Regenerate it whenever you update the .docx.
5. **Headline numbers** — the `stats` array feeds the strip under the hero. The
   repository count fills itself in from GitHub; the rest are yours to keep current.
6. **Open to work** — set `profile.openToWork` to `false` once you land the role.

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
public/                 logo, portrait, CV, robots.txt, sitemap.xml
```

## Accessibility and performance notes

- Every animation is disabled when the visitor's system asks for reduced motion.
- A skip link and visible focus rings support keyboard navigation.
- Form fields validate inline with messages tied to their inputs.
- Images are lazy-loaded and sized to avoid layout shift.
