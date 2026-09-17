import './contact.css';
import { profile } from '../data/profile.js';

export function Contact() {
  // One inset-grouped list: ways to talk directly first, then profiles.
  const socials = [...profile.socials].sort((a, b) => Number(!!b.direct) - Number(!!a.direct));
  const routes = [
    {
      label: 'Email',
      value: profile.email,
      icon: 'fa-solid fa-envelope',
      url: `mailto:${profile.email}`,
      color: 'var(--accent)',
    },
    ...socials.map(({ label, icon, url, display, color }) => ({
      label,
      icon,
      url,
      color,
      value: display || url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
    })),
  ];

  const routeRows = routes
    .map(
      ({ label, value, icon, url, color }) => `
      <li>
        <a class="route" href="${url}"${url.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>
          <span class="route-icon"${color ? ` style="background: ${color}; color: #fff;"` : ''} aria-hidden="true"><i class="${icon}"></i></span>
          <span class="route-text">
            <span class="route-label">${label}</span>
            <span class="route-value">${value}</span>
          </span>
          <i class="fa-solid fa-chevron-right route-chevron" aria-hidden="true"></i>
        </a>
      </li>`
    )
    .join('');

  const field = (id, label, control) => `
    <div class="field">
      <label for="${id}">${label}</label>
      ${control}
      <span class="field-error" id="${id}-error" data-error-for="${id}"></span>
    </div>`;

  return `
    <section id="contact" class="contact-section">
      <div class="section-container contact-layout" data-reveal>
        <div class="contact-aside">
          <header class="section-head">
            <p class="section-label">Contact</p>
            <h2 class="section-title">Let's build something.</h2>
            <p class="section-intro">
              Hiring, collaborating, or curious about something I've built?
              I reply within a day.
            </p>
          </header>
          <ul class="routes" aria-label="Ways to reach me">${routeRows}</ul>
        </div>

        <form class="contact-form" id="contact-form" novalidate>
          <div class="field-group">
            ${field('contact-name', 'Name', `<input type="text" id="contact-name" name="name" placeholder="Your name"
                     autocomplete="name" required minlength="2" aria-describedby="contact-name-error" />`)}
            ${field('contact-email', 'Email', `<input type="email" id="contact-email" name="email" placeholder="you@company.com"
                     autocomplete="email" inputmode="email" required aria-describedby="contact-email-error" />`)}
            ${field('contact-subject', 'Subject', `<input type="text" id="contact-subject" name="subject" placeholder="What's this about?" />`)}
            ${field('contact-message', 'Message', `<textarea id="contact-message" name="message" rows="5"
                     placeholder="Tell me a little about it" required minlength="10"
                     aria-describedby="contact-message-error char-count"></textarea>
              <span class="char-count" id="char-count">0 characters</span>`)}
          </div>

          <!-- Honeypot: bots fill hidden fields, humans never see this one. -->
          <input type="text" name="botcheck" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />

          <button type="submit" class="btn btn-filled btn-submit" id="contact-submit">
            <span class="btn-label">Send message</span>
            <span class="btn-spinner" aria-hidden="true"></span>
          </button>

          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

// ── Validation ───────────────────────────────────────────────────────────
const rules = {
  'contact-name': (v) =>
    v.trim().length >= 2 ? '' : 'Please enter your name (at least 2 characters).',
  'contact-email': (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
      ? ''
      : 'Please enter a valid email address.',
  'contact-message': (v) =>
    v.trim().length >= 10 ? '' : 'Please write at least 10 characters.',
};

function validateField(input) {
  const rule = rules[input.id];
  if (!rule) return true;

  const error = rule(input.value);
  const slot = document.querySelector(`[data-error-for="${input.id}"]`);

  input.classList.toggle('is-invalid', Boolean(error));
  input.setAttribute('aria-invalid', String(Boolean(error)));
  if (slot) slot.textContent = error;
  return !error;
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const submit = document.getElementById('contact-submit');
  const message = document.getElementById('contact-message');
  const counter = document.getElementById('char-count');

  // Live character count, and clear errors as the visitor fixes them.
  if (message && counter) {
    message.addEventListener('input', () => {
      const n = message.value.length;
      counter.textContent = `${n} character${n === 1 ? '' : 's'}`;
    });
  }

  Object.keys(rules).forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) validateField(input);
    });
  });

  const setStatus = (text, kind) => {
    status.textContent = text;
    status.className = `form-status is-${kind}`;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const valid = Object.keys(rules)
      .map((id) => validateField(document.getElementById(id)))
      .every(Boolean);

    if (!valid) {
      setStatus('Please fix the highlighted fields above.', 'error');
      return;
    }

    // Honeypot tripped — silently pretend success so bots don't retry.
    if (form.botcheck.value) {
      form.reset();
      setStatus('Thanks! Your message has been sent.', 'success');
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    // No endpoint configured — fall back to the visitor's mail client so the
    // form is never a dead end.
    if (!profile.formEndpoint) {
      const subject = encodeURIComponent(data.subject || `Portfolio message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('Opening your email app to send the message…', 'info');
      return;
    }

    submit.disabled = true;
    submit.classList.add('is-loading');
    setStatus('Sending…', 'info');

    try {
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          // Formspree reads these underscore keys to set the email subject
          // and the address a reply goes to.
          _subject: data.subject || `Portfolio message from ${data.name}`,
          _replyto: data.email,
        }),
      });

      if (res.ok) {
        form.reset();
        if (counter) counter.textContent = '0 characters';
        setStatus("Thanks! Your message is on its way. I'll reply soon.", 'success');
      } else {
        const result = await res.json().catch(() => ({}));
        const detail = Array.isArray(result.errors)
          ? result.errors.map((e) => e.message).join(', ')
          : result.error;
        throw new Error(detail || `the form service returned ${res.status}.`);
      }
    } catch (err) {
      setStatus(
        `Couldn't send that: ${err.message} You can email me directly at ${profile.email}.`,
        'error'
      );
    } finally {
      submit.disabled = false;
      submit.classList.remove('is-loading');
    }
  });
}
