import './about.css';

export function About() {
  return `
    <section id="about" class="about-section">
      <div class="section-container">
        <div class="section-label">About Me</div>
        <h2 class="section-title">Who I Am</h2>
        <div class="about-grid">
          <div class="about-text">
            <p>
              I'm a passionate developer and designer with a love for building
              things that live on the internet. I care deeply about craft,
              accessibility, and creating meaningful experiences.
            </p>
            <p>
              When I'm not writing code, you'll find me exploring new ideas,
              reading, or pushing pixels until everything feels just right.
            </p>
            <div class="about-skills">
              <div class="skill-chip">HTML & CSS</div>
              <div class="skill-chip">JavaScript</div>
              <div class="skill-chip">UI/UX Design</div>
              <div class="skill-chip">Vite</div>
              <div class="skill-chip">TailwindCSS</div>
              <div class="skill-chip">Git</div>
            </div>
          </div>
          <div class="about-image-wrapper">
            <div class="tech-ring" aria-hidden="true" style="--total: 16;">
              <!-- 16 Technologies -->
              <!-- Using original brand colors -->
              <div class="tech-icon" style="--i: 0; color: #3776AB;"><i class="fa-brands fa-python"></i></div>
              <div class="tech-icon" style="--i: 1; color: #ED8B00;"><i class="fa-brands fa-java"></i></div>
              <div class="tech-icon" style="--i: 2; color: #F7DF1E;"><i class="fa-brands fa-js"></i></div>
              <div class="tech-icon" style="--i: 3; color: #5FA04E;"><i class="fa-brands fa-node"></i></div> <!-- Node.js -->
              <div class="tech-icon" style="--i: 4; color: #47A248;"><i class="fa-solid fa-leaf"></i></div> <!-- MongoDB -->
              <div class="tech-icon" style="--i: 5; color: #336791;"><i class="fa-solid fa-database"></i></div> <!-- PostgreSQL -->
              <div class="tech-icon" style="--i: 6; color: #4479A1;"><i class="fa-solid fa-server"></i></div> <!-- MySQL -->
              <div class="tech-icon" style="--i: 7; color: #E34F26;"><i class="fa-brands fa-html5"></i></div>
              <div class="tech-icon" style="--i: 8; color: #1572B6;"><i class="fa-brands fa-css3-alt"></i></div>
              <div class="tech-icon" style="--i: 9; color: #06B6D4;"><i class="fa-solid fa-wind"></i></div> <!-- Tailwindcss -->
              <div class="tech-icon" style="--i: 10; color: #F05032;"><i class="fa-brands fa-git-alt"></i></div>
              <div class="tech-icon" style="--i: 11; color: var(--text-primary);"><i class="fa-brands fa-github"></i></div>
              <div class="tech-icon" style="--i: 12; color: #2496ED;"><i class="fa-brands fa-docker"></i></div>
              <div class="tech-icon" style="--i: 13; color: #EA4B71;"><i class="fa-solid fa-network-wired"></i></div> <!-- n8n -->
              <div class="tech-icon" style="--i: 14; color: #8B5CF6;"><i class="fa-solid fa-brain"></i></div> <!-- AI/ML -->
              <div class="tech-icon" style="--i: 15; color: #D83B01;"><i class="fa-brands fa-microsoft"></i></div> <!-- MS Office -->
            </div>
            <img class="about-image" src="${import.meta.env.BASE_URL}isaac-profile.png" alt="Isaac Onyango Ouma" />
          </div>
        </div>
      </div>
    </section>
  `;
}
