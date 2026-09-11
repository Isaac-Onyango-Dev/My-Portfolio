import './contact.css';
import { profile } from '../data/profile.js';

export function Contact() {
  const socials = profile.socials
    .map(
      ({ label, icon, url }) => `
      <a href="${url}" target="_blank" rel="noopener" class="social-link" aria-label="${label}">
        <i class="${icon}" aria-hidden="true"></i>
        <span>${label}</span>
      </a>`
    )
    .join('');

  return `
    <section id="contact" class="contact-section">
      <div class="section-container" data-reveal>
        <div class="section-label">Say Hello</div>
        <h2 class="section-title">Get In Touch</h2>
        <p class="contact-intro">
          Hiring, collaborating, or just curious about something I've built?
          Send a message and I'll reply within a day.
        </p>

        <a href="mailto:${profile.email}" class="contact-email-link">
          <i class="fa-solid fa-envelope" aria-hidden="true"></i> ${profile.email}
        </a>

        <form class="contact-form" id="contact-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="contact-name">Name</label>
              <input type="text" id="contact-name" name="name" placeholder="Your name"
                     autocomplete="name" required minlength="2" />
              <span class="field-error" data-error-for="contact-name"></span>
            </div>
            <div class="form-group">
              <label for="contact-email">Email</label>
              <input type="email" id="contact-email" name="email" placeholder="your@email.com"
                     autocomplete="email" required />
              <span class="field-error" data-error-for="contact-email"></span>
            </div>
          </div>

          <div class="form-group">
            <label for="contact-subject">Subject</label>
            <input type="text" id="contact-subject" name="subject" placeholder="What's this about?" />
          </div>

          <div class="form-group">
            <label for="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5"
                      placeholder="Your message..." required minlength="10"></textarea>
            <div class="textarea-foot">
              <span class="field-error" data-error-for="contact-message"></span>
              <span class="char-count" id="char-count">0 characters</span>
            </div>
          </div>

          <!-- Honeypot: bots fill hidden fields, humans never see this one. -->
          <input type="text" name="botcheck" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />

          <button type="submit" class="btn-submit" id="contact-submit">
            <span class="btn-label">Send Message</span>
            <span class="btn-spinner" aria-hidden="true"></span>
          </button>

          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>

        <div class="contact-socials">${socials}</div>
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

    // No form service configured yet — fall back to the visitor's mail client
    // so the form is never a dead end.
    if (!profile.web3formsKey) {
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
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: data.subject || `Portfolio message from ${data.name}`,
          from_name: data.name,
          ...data,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        form.reset();
        if (counter) counter.textContent = '0 characters';
        setStatus("Thanks! Your message is on its way. I'll reply soon.", 'success');
      } else {
        throw new Error(result.message || 'The form service rejected the request.');
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
