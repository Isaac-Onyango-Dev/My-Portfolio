import './projects.css';

const projectList = [
  {
    title: 'Calculator App',
    description: 'A sleek, modern calculator with dark mode and history tracking.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imgUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=400&q=80', // Calculator/Math
  },
  {
    title: 'To-Do List',
    description: 'A highly interactive task manager with drag-and-drop and local storage persistence.',
    tags: ['React', 'Tailwind', 'Vite'],
    imgUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80', // Notebook/Checklist
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecasting using the OpenWeather API with dynamic backgrounds.',
    tags: ['JavaScript', 'Fetch API', 'CSS Grid'],
    imgUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=400&q=80', // Weather/Clouds
  },
  {
    title: 'Digital Clock',
    description: 'A minimalist digital clock with customizable themes and alarm functionality.',
    tags: ['HTML', 'CSS', 'DOM Manipulation'],
    imgUrl: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=400&q=80', // Clock
  },
  {
    title: 'Currency Converter',
    description: 'Live exchange rates converter built with seamless asynchronous API fetching.',
    tags: ['JavaScript', 'REST API', 'JSON'],
    imgUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80', // Forex/Finance charts
  },
  {
    title: 'Simple Chatbot',
    description: 'An AI-powered rule-based chatbot interface for automated customer support.',
    tags: ['Python', 'Flask', 'JavaScript'],
    imgUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80', // Robot
  },
  {
    title: 'Database Design',
    description: 'Optimized relational schemas mapped out for an e-commerce platform.',
    tags: ['SQL', 'PostgreSQL', 'ER Diagrams'],
    imgUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80', // Servers
  },
  {
    title: 'Simple Portal',
    description: 'A secure employee authentication portal with JWT-based session management.',
    tags: ['Node.js', 'Express', 'JWT'],
    imgUrl: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=400&q=80', // Login/Web
  },
  {
    title: 'Library Management System',
    description: 'A full-stack tracking system for borrowing, returning, and managing book inventories.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    imgUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80', // Library
  },
];

function renderCard({ title, description, tags, imgUrl }) {
  return `
    <!-- Add data-title to pass to the modal -->
    <div class="project-card" data-title="${title}">
      <div class="project-card-header" style="background-image: url('${imgUrl}'); background-size: cover; background-position: center;"></div>
      <div class="project-card-body">
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${description}</p>
        <div class="project-tech-stack">
          <span class="tech-label">Technologies Used:</span>
          <div class="project-tags">
            ${tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function Projects() {
  // Render cards twice — the CSS marquee animates to -50%, creating a seamless infinite loop
  const cards = [...projectList, ...projectList].map(renderCard).join('');

  return `
    <section id="projects" class="projects-section">
      <div class="section-container">
        <div class="section-label">My Work</div>
        <h2 class="section-title">Projects</h2>
      </div>
      <div class="projects-carousel" id="projects-carousel">
        <!-- We use an animation duration based on card count so it doesn't scroll too fast -->
        <div class="projects-track" id="projects-track" style="animation-duration: 60s;">
          ${cards}
        </div>
      </div>
      
      <div class="view-all-container">
        <a href="#" class="view-all-btn" id="view-all-btn">View All Projects →</a>
      </div>

      <!-- Under Development Modal -->
      <div id="project-modal" class="project-modal">
        <div class="project-modal-content">
          <i class="fa-solid fa-person-digging modal-icon"></i>
          <h3 id="modal-project-title">Project Name</h3>
          <p id="modal-project-desc">This project is currently still under development.</p>
          <button class="modal-close-btn" id="modal-close-btn">Close</button>
        </div>
      </div>
    </section>
  `;
}

// Attach modal event listeners
export function initProjectsCarousel() {
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-project-title');
  const modalDesc = document.getElementById('modal-project-desc');
  const projectCards = document.querySelectorAll('.project-card');
  const viewAllBtn = document.getElementById('view-all-btn');

  if (!modal) return;

  // Open modal on card click
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = 'This project is currently still under development.';
      modal.classList.add('active');
    });
  });

  // Open modal on View All click
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalTitle) modalTitle.textContent = 'All Projects Archive';
      if (modalDesc) modalDesc.textContent = 'This page is currently still in compilation.';
      modal.classList.add('active');
    });
  }

  // Close modal when clicking the close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close modal when clicking outside the modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}
