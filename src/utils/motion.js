/**
 * Scroll-driven polish: reveal-on-enter, a top progress bar, and nav link
 * highlighting for the section currently in view.
 *
 * Everything here respects prefers-reduced-motion: if the visitor has asked
 * their OS to reduce motion, content is shown immediately rather than animated.
 */

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

/**
 * Reveals any element carrying [data-reveal] as it scrolls into view.
 * Children with [data-reveal-child] are staggered for a cascade effect.
 */
export function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // Children too — otherwise staggered items stay invisible.
    document
      .querySelectorAll('[data-reveal], [data-reveal-child]')
      .forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');

        entry.target
          .querySelectorAll('[data-reveal-child]')
          .forEach((child, i) => {
            child.style.transitionDelay = `${Math.min(i * 70, 560)}ms`;
            child.classList.add('is-revealed');
          });

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

/**
 * Observes elements added after the initial render (e.g. GitHub repo cards
 * that arrive once the API responds).
 */
export function revealWithin(root) {
  if (!root) return;
  const targets = root.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((el) => observer.observe(el));
}

/** Thin accent bar across the top showing how far down the page you are. */
export function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  let ticking = false;
  const update = () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.transform = `scaleX(${pct / 100})`;
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
}

/** Marks the nav link whose section currently fills most of the viewport. */
export function initActiveNav() {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle(
            'is-active',
            link.getAttribute('href') === `#${entry.target.id}`
          )
        );
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

/** Adds a shadow/condensed state to the navbar once the page has scrolled. */
export function initNavScrollState() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const update = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/**
 * Cycles an element's text through `phrases`: the current one lifts out,
 * the next rises in from below (same axis, so the motion reads as one path).
 * Reduced motion keeps the first phrase and never cycles.
 */
export function rotateText(el, phrases, interval = 2800) {
  if (!el || phrases.length < 2 || prefersReducedMotion) return;

  let i = 0;
  setInterval(() => {
    el.classList.add('is-leaving');
    setTimeout(() => {
      i = (i + 1) % phrases.length;
      el.textContent = phrases[i];
      // Jump below without animating, then let the transition bring it home.
      el.classList.replace('is-leaving', 'is-entering');
      void el.offsetWidth;
      el.classList.remove('is-entering');
    }, 260);
  }, interval);
}
