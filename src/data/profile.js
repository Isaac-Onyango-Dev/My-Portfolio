/**
 * ── SINGLE SOURCE OF TRUTH ─────────────────────────────────────────────
 * Everything personal about the site lives here. Edit this file and the
 * whole portfolio updates. No other file should contain your bio, links,
 * job history or project details.
 *
 * Anything marked  // TODO  is a placeholder you should replace.
 * ───────────────────────────────────────────────────────────────────────
 */

export const profile = {
  // ── Identity ──────────────────────────────────────────────────────────
  name: 'Isaac Onyango Ouma',
  initials: 'IOO.',
  // Shown under your name in the hero. Keep it concrete — recruiters scan this.
  roles: [
    'Full-Stack Developer',
    'Backend & API Builder',
    'Automation Engineer',
    'UI/UX-Minded Coder',
  ],
  // One sentence. What you do, who for, and what you are looking for.
  tagline:
    'I build clean, reliable web applications — from database schema to the pixels on screen.',
  location: 'Nairobi, Kenya', // TODO confirm
  // Set to false once you are hired; hides the "open to work" badge.
  openToWork: true,
  availability: 'Open to junior developer roles & internships',

  // ── Contact ───────────────────────────────────────────────────────────
  email: 'isaaco62800@gmail.com', // TODO confirm this is the address you want public
  // Put your CV in /public and name it here. Leave '' to hide the button.
  resumeFile: 'isaac-onyango-cv.pdf', // TODO add this file to /public

  // ── Links ─────────────────────────────────────────────────────────────
  github: 'Isaac-Onyango-Dev',
  socials: [
    { label: 'GitHub',   icon: 'fa-brands fa-github',     url: 'https://github.com/Isaac-Onyango-Dev' },
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin',   url: 'https://www.linkedin.com/in/isaac-onyango-334953374/' },
    { label: 'X',        icon: 'fa-brands fa-x-twitter',  url: 'https://x.com/isaaco62800' },
  ],

  // ── Site / SEO ────────────────────────────────────────────────────────
  siteUrl: 'https://isaac-onyango-dev.github.io/My-Portfolio/',
  ogImage: 'isaac-profile.png', // lives in /public

  // ── Contact form ──────────────────────────────────────────────────────
  // Free, no backend, works on GitHub Pages. Sign up at https://web3forms.com
  // with your email, paste the access key below, and the form goes live.
  // Until a real key is present the form falls back to opening the visitor's
  // email client instead of silently failing.
  web3formsKey: '', // TODO paste your Web3Forms access key
};

// ── About copy ──────────────────────────────────────────────────────────
// Two or three short paragraphs. Write like you talk. TODO: make this yours.
export const aboutParagraphs = [
  `I'm a developer based in ${profile.location} who enjoys the whole stack — designing
   the data model, writing the API, then making the interface feel effortless. Most of
   what I know came from building things end to end and breaking them until they worked.`,

  `I care about the unglamorous parts: readable code, sensible database design, and
   automating anything I've had to do more than twice. I'd rather ship something small
   that works properly than something large that almost does.`,

  `Right now I'm looking for a junior developer role or internship where I can learn from
   people who've shipped at scale, and contribute from day one.`,
];

// ── Skills, grouped ─────────────────────────────────────────────────────
export const skillGroups = [
  {
    group: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'fa-brands fa-js',        color: '#F7DF1E' },
      { name: 'Python',     icon: 'fa-brands fa-python',    color: '#3776AB' },
      { name: 'Java',       icon: 'fa-brands fa-java',      color: '#ED8B00' },
      { name: 'SQL',        icon: 'fa-solid fa-database',   color: '#336791' },
      { name: 'HTML5',      icon: 'fa-brands fa-html5',     color: '#E34F26' },
      { name: 'CSS3',       icon: 'fa-brands fa-css3-alt',  color: '#1572B6' },
    ],
  },
  {
    group: 'Frameworks & Tools',
    items: [
      { name: 'Node.js',     icon: 'fa-brands fa-node',        color: '#5FA04E' },
      { name: 'Express',     icon: 'fa-solid fa-route',        color: '#94a3b8' },
      { name: 'Spring Boot', icon: 'fa-solid fa-seedling',     color: '#6DB33F' },
      { name: 'TailwindCSS', icon: 'fa-solid fa-wind',         color: '#06B6D4' },
      { name: 'Vite',        icon: 'fa-solid fa-bolt',         color: '#A855F7' },
      { name: 'Git',         icon: 'fa-brands fa-git-alt',     color: '#F05032' },
    ],
  },
  {
    group: 'Data & Infrastructure',
    items: [
      { name: 'PostgreSQL', icon: 'fa-solid fa-database',      color: '#336791' },
      { name: 'MySQL',      icon: 'fa-solid fa-server',        color: '#4479A1' },
      { name: 'MongoDB',    icon: 'fa-solid fa-leaf',          color: '#47A248' },
      { name: 'Docker',     icon: 'fa-brands fa-docker',       color: '#2496ED' },
      { name: 'n8n',        icon: 'fa-solid fa-network-wired', color: '#EA4B71' },
      { name: 'AI / LLM APIs', icon: 'fa-solid fa-brain',      color: '#8B5CF6' },
    ],
  },
];

// ── Featured projects ───────────────────────────────────────────────────
// These sit above the auto-pulled GitHub repos. Three or four is plenty.
// `repo` links the card to a GitHub repository; `demo` to a live deployment.
// `image` is a file in /public, or a full URL, or null for a generated gradient.
export const featuredProjects = [
  {
    title: 'Library Management System',
    blurb:
      'Full-stack system for borrowing, returning and tracking book inventory, with role-based access for staff and members.',
    highlights: [
      'Normalised MySQL schema with transactional borrow/return',
      'REST API secured with Spring Security',
      'Overdue detection and reporting',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST'],
    repo: '', // TODO paste repo URL
    demo: '',
    image: null,
    status: 'in-progress', // 'live' | 'in-progress' | 'archived'
  },
  {
    title: 'Employee Portal',
    blurb:
      'Secure authentication portal with JWT sessions, password hashing and protected routes for internal staff tooling.',
    highlights: [
      'JWT access + refresh token flow',
      'bcrypt password hashing, rate-limited login',
      'Role-gated dashboard routes',
    ],
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    repo: '', // TODO
    demo: '',
    image: null,
    status: 'in-progress',
  },
  {
    title: 'Weather Dashboard',
    blurb:
      'Real-time forecast app built on the OpenWeather API, with geolocation, unit switching and backgrounds that react to conditions.',
    highlights: [
      'Async data fetching with graceful error states',
      'Debounced city search with caching',
      'Responsive CSS Grid layout',
    ],
    tags: ['JavaScript', 'Fetch API', 'CSS Grid'],
    repo: '', // TODO
    demo: '',
    image: null,
    status: 'live',
  },
];

// Repositories to never show in the auto-pulled GitHub list.
export const repoBlocklist = ['My-Portfolio', 'Isaac-Onyango-Dev'];

// ── Experience & education timeline ─────────────────────────────────────
// Newest first. `kind` picks the icon: 'work' | 'education' | 'certification'.
// TODO: replace all of these with your real history.
export const timeline = [
  {
    kind: 'work',
    role: 'Freelance Developer',
    org: 'Self-employed',
    period: '2025 — Present',
    location: 'Remote',
    points: [
      'Built and deployed web applications for small businesses, handling requirements, build and hosting end to end.',
      'Automated repetitive client workflows with scripted pipelines, cutting manual data entry.',
    ],
    tags: ['JavaScript', 'Node.js', 'PostgreSQL'],
  },
  {
    kind: 'education',
    role: 'BSc, Computer Science', // TODO your real course
    org: 'University', // TODO
    period: '2022 — 2026',
    location: profile.location,
    points: [
      'Coursework in data structures, database systems, software engineering and networks.',
      'Capstone project: full-stack management system with relational backend.',
    ],
    tags: ['Algorithms', 'Databases', 'Software Engineering'],
  },
  {
    kind: 'certification',
    role: 'Self-directed Engineering Practice',
    org: 'Personal projects & open source',
    period: 'Ongoing',
    location: 'Remote',
    points: [
      'Shipping projects publicly on GitHub, from first commit through deployment.',
      'Working through backend, DevOps and AI tooling one project at a time.',
    ],
    tags: ['Docker', 'Git', 'CI/CD'],
  },
];

// ── Manifesto ───────────────────────────────────────────────────────────
export const manifestoItems = [
  {
    number: '01',
    title: 'Architecture precedes code',
    body: "Robust systems aren't accidentally typed into existence; they are meticulously planned. I prioritise a strong foundational design before writing a single line of logic.",
  },
  {
    number: '02',
    title: 'Design is how it works',
    body: 'Aesthetics and mechanics are inseparable. I obsess over micro-interactions, accessibility and performance just as much as the visual layer.',
  },
  {
    number: '03',
    title: 'Automation over repetition',
    body: "If a process requires doing the same thing thrice, I script it. Efficiency isn't just about saving time; it's about eliminating human error.",
  },
  {
    number: '04',
    title: 'Continuous evolution',
    body: "Technology shifts rapidly. The most critical skill I possess isn't mastery of a single framework — it's the ability to absorb, adapt and deploy new paradigms continuously.",
  },
];
