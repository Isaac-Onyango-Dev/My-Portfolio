import './hero.css';

export function Hero() {
  return `
    <section id="hero" class="hero-section">
      <div class="hero-content">
        <span class="hero-greeting">Hello, I'm</span>
        <h1 class="hero-name">
          <span id="typed-name"></span><span class="typing-cursor">|</span>
        </h1>
        <p class="hero-tagline">Designer · Developer · Creator</p>
        <p class="hero-description">
          I craft beautiful, functional digital experiences that leave a lasting impression.
        </p>
        <div class="hero-cta">
          <a href="#projects" class="btn-primary">View My Work</a>
          <a href="#contact" class="btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  `;
}
