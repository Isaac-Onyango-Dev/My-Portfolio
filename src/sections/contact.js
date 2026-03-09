import './contact.css';

export function Contact() {
  return `
    <section id="contact" class="contact-section">
      <div class="section-container">
        <div class="section-label">Say Hello</div>
        <h2 class="section-title">Get In Touch</h2>
        <p class="contact-intro">
          Have a project in mind, a question, or just want to say hi?
          My inbox is always open.
        </p>
        <form class="contact-form" id="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="contact-name">Name</label>
              <input type="text" id="contact-name" name="name" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label for="contact-email">Email</label>
              <input type="email" id="contact-email" name="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div class="form-group">
            <label for="contact-subject">Subject</label>
            <input type="text" id="contact-subject" name="subject" placeholder="What's this about?" />
          </div>
          <div class="form-group">
            <label for="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" class="btn-submit">Send Message</button>
        </form>
        <div class="contact-socials">
          <a href="https://github.com/Isaac-Onyango-Dev" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
            <i class="fa-brands fa-github text-2xl"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/isaac-onyango-334953374/" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin text-2xl"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://x.com/isaaco62800" target="_blank" rel="noopener" class="social-link" aria-label="Twitter">
            <i class="fa-brands fa-x-twitter text-2xl"></i>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (wire up your backend or a service like EmailJS here)');
    form.reset();
  });
}
