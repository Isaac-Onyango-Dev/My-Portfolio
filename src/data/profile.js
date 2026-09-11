/**
 * ── SINGLE SOURCE OF TRUTH ─────────────────────────────────────────────
 * Everything personal about the site lives here. Edit this file and the
 * whole portfolio updates. No other file should contain your bio, links,
 * job history or project details.
 *
 * Content below is taken from your CV. Anything still marked // TODO is a
 * detail the CV did not specify.
 * ───────────────────────────────────────────────────────────────────────
 */

export const profile = {
  // ── Identity ──────────────────────────────────────────────────────────
  name: 'Isaac Onyango Ouma',
  initials: 'IOO.',
  roles: [
    'Computer Science Student',
    'Software Developer',
    'Full-Stack Builder',
    'AI & Automation Enthusiast',
  ],
  tagline:
    'I build practical software that solves real problems — desktop apps, web platforms, databases and the automation that ties them together.',
  location: 'Kenya',
  openToWork: true,
  availability: 'Open to junior developer roles & internships',

  // ── Contact ───────────────────────────────────────────────────────────
  email: 'isaaco62800@gmail.com',
  phone: '', // TODO add if you want it public
  // Sits in /public. Leave '' to hide the download button.
  resumeFile: 'Isaac-Onyango-Ouma-CV.pdf',

  // ── Links ─────────────────────────────────────────────────────────────
  github: 'Isaac-Onyango-Dev',
  socials: [
    { label: 'GitHub',   icon: 'fa-brands fa-github',    url: 'https://github.com/Isaac-Onyango-Dev' },
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin',  url: 'https://www.linkedin.com/in/isaac-onyango-334953374/' },
    { label: 'X',        icon: 'fa-brands fa-x-twitter', url: 'https://x.com/isaaco62800' },
  ],

  // ── Site / SEO ────────────────────────────────────────────────────────
  siteUrl: 'https://isaac-onyango-dev.github.io/My-Portfolio/',
  ogImage: 'isaac-profile.png',

  // ── Contact form ──────────────────────────────────────────────────────
  // Formspree endpoint. Messages land in the inbox tied to this form.
  formEndpoint: 'https://formspree.io/f/mzdznlge',
};

// ── About copy ──────────────────────────────────────────────────────────
export const aboutParagraphs = [
  `I'm a Computer Science student at Moi University and a software developer who
   learns by building. Desktop applications, web platforms, database systems,
   developer tools — if it solves a real problem, I want to build it and ship it.`,

  `My work spans the whole stack: React and TypeScript on the front, Python and
   SQL behind it, Docker and GitHub Actions to get it out the door. I care about
   the parts nobody demos — sensible schema design, honest error handling, and
   packaging that actually works on someone else's machine.`,

  `Alongside that I'm exploring AI integration, cybersecurity and cloud
   infrastructure. I'm looking for a junior developer role or internship where I
   can learn from people who ship at scale and contribute from day one.`,
];

// ── Skills, grouped ─────────────────────────────────────────────────────
export const skillGroups = [
  {
    group: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'fa-brands fa-js',       color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'fa-solid fa-file-code', color: '#3178C6' },
      { name: 'Python',     icon: 'fa-brands fa-python',   color: '#3776AB' },
      { name: 'Java',       icon: 'fa-brands fa-java',     color: '#ED8B00' },
      { name: 'C#',         icon: 'fa-solid fa-hashtag',   color: '#9B4F96' },
      { name: 'HTML5',      icon: 'fa-brands fa-html5',    color: '#E34F26' },
      { name: 'CSS3',       icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    ],
  },
  {
    group: 'Frameworks & Tools',
    items: [
      { name: 'React',          icon: 'fa-brands fa-react',    color: '#61DAFB' },
      { name: 'Vite',           icon: 'fa-solid fa-bolt',      color: '#A855F7' },
      { name: 'TailwindCSS',    icon: 'fa-solid fa-wind',      color: '#06B6D4' },
      { name: 'Git',            icon: 'fa-brands fa-git-alt',  color: '#F05032' },
      { name: 'GitHub Actions', icon: 'fa-solid fa-gears',     color: '#2088FF' },
      { name: 'Docker',         icon: 'fa-brands fa-docker',   color: '#2496ED' },
      { name: 'FFmpeg',         icon: 'fa-solid fa-film',      color: '#388E3C' },
    ],
  },
  {
    group: 'Data & Platforms',
    items: [
      { name: 'SQL Server',   icon: 'fa-solid fa-server',        color: '#CC2927' },
      { name: 'PostgreSQL',   icon: 'fa-solid fa-database',      color: '#336791' },
      { name: 'MongoDB',      icon: 'fa-solid fa-leaf',          color: '#47A248' },
      { name: 'MS Access',    icon: 'fa-solid fa-table',         color: '#A4373A' },
      { name: 'REST APIs',    icon: 'fa-solid fa-plug',          color: '#8B5CF6' },
      { name: 'Linux/Ubuntu', icon: 'fa-brands fa-linux',        color: '#E95420' },
      { name: 'AI Tooling',   icon: 'fa-solid fa-brain',         color: '#EC4899' },
    ],
  },
];

// ── Featured projects ───────────────────────────────────────────────────
// These sit above the auto-pulled GitHub repos.
// `image` is a file in /public, a full URL, or null for a generated gradient.
export const featuredProjects = [
  {
    title: 'Internet Download Hub',
    blurb:
      'A free Windows desktop application for downloading video and audio from across the web, built around a clean, fast interface.',
    highlights: [
      'Desktop app packaged and released for Windows',
      'Media pipeline handling multiple sources and formats',
      'Automated builds and releases via GitHub Actions',
    ],
    tags: ['TypeScript', 'Desktop', 'Electron', 'CI/CD'],
    repo: 'https://github.com/Isaac-Onyango-Dev/Internet-Download-Hub',
    demo: 'https://isaac-onyango-dev.github.io/Internet-Download-Hub/',
    image: null,
    status: 'live',
  },
  {
    title: 'MediaGrab',
    blurb:
      'Cross-platform media downloader for Windows, Linux and macOS, with a modern GUI, playlist support and full control over every download.',
    highlights: [
      'CustomTkinter interface with download history and playlist selection',
      'Pause, resume, cancel, retry and delete on any download',
      'Automatic FFmpeg detection with cross-platform packaging',
      'Release pipeline automated with GitHub Actions',
    ],
    tags: ['Python', 'CustomTkinter', 'FFmpeg', 'GitHub Actions'],
    repo: 'https://github.com/Isaac-Onyango-Dev/MediaGrab',
    demo: 'https://isaac-onyango-dev.github.io/MediaGrab/',
    image: null,
    status: 'live',
  },
  {
    title: 'ScamShield',
    blurb:
      'A tool that helps people detect and report suspicious online job and service listings before they lose money to them.',
    highlights: [
      'Listing analysis surfacing common scam signals',
      'Community reporting flow for flagged listings',
      'Responsive TypeScript front end',
    ],
    tags: ['TypeScript', 'Web App', 'Security'],
    repo: 'https://github.com/Isaac-Onyango-Dev/ScamShield',
    demo: 'https://isaac-onyango-dev.github.io/ScamShield/',
    image: null,
    status: 'live',
  },
  {
    title: 'Streamer Hub',
    blurb:
      'A streaming platform in the spirit of modern services: cinematic hero sections, content sliders, search and episode organisation over live APIs.',
    highlights: [
      'API-driven content retrieval with pagination',
      'Trending and completed sections with search',
      'Worked around real provider and API limitations',
      'Responsive UI across phone, tablet and desktop',
    ],
    tags: ['TypeScript', 'REST APIs', 'UI/UX'],
    repo: 'https://github.com/Isaac-Onyango-Dev/Streamer-Hub',
    demo: 'https://isaac-onyango-dev.github.io/Streamer-Hub/',
    image: null,
    status: 'live',
  },
  {
    title: 'Complex Developers',
    blurb:
      'The brand and website for a software development studio offering web, software, game, AI and cybersecurity work.',
    highlights: [
      'Brand identity and service positioning',
      'Marketing site deployed on Vercel',
      'SEO groundwork and conversion-focused layout',
    ],
    tags: ['Web Design', 'Branding', 'Vercel'],
    repo: 'https://github.com/Isaac-Onyango-Dev/Complex-Developers-Web',
    demo: 'https://complex-developers-web.vercel.app/',
    image: null,
    status: 'live',
  },
  {
    title: 'School Portal System',
    blurb:
      'A full college management portal designed around real institutional workflows, centralising student records, results, fees and communication.',
    highlights: [
      'Relational schema covering students, results, fees and hostels',
      'CAT and examination results with assignment submission',
      'Fee payment, hostel booking and exam registration flows',
      'Designed for scalability and clear data organisation',
    ],
    tags: ['Database Design', 'SQL', 'Full-Stack'],
    repo: '', // TODO add once the code is on GitHub
    demo: '',
    image: null,
    status: 'in-progress',
  },
];

// Repositories to never show in the auto-pulled GitHub list.
// The profile README repo and this portfolio itself are noise on a portfolio.
export const repoBlocklist = ['My-Portfolio', 'Isaac-Onyango-Dev'];

// ── Experience & education timeline ─────────────────────────────────────
// Newest first. `kind` picks the icon: 'work' | 'education' | 'certification'.
export const timeline = [
  {
    kind: 'work',
    role: 'Developer',
    org: 'Complex Developers',
    period: 'Present', // TODO add the year you started
    location: 'Remote',
    points: [
      'Building the brand and web presence for a software studio offering web, software, game and AI development.',
      'Shipping client-facing sites with SEO groundwork and cloud deployment.',
      'Covering API integration, automation and maintenance across projects.',
    ],
    tags: ['Web Development', 'AI Integration', 'Cloud'],
  },
  {
    kind: 'work',
    role: 'Independent Software Developer',
    org: 'Personal & open-source projects',
    period: 'Ongoing',
    location: 'Remote',
    points: [
      'Shipping desktop and web applications end to end, from first commit through packaged release.',
      'Automating build and release pipelines with GitHub Actions and Docker.',
      'Debugging cross-platform packaging, environment configuration and third-party API limitations.',
    ],
    tags: ['Python', 'TypeScript', 'CI/CD', 'Docker'],
  },
  {
    kind: 'education',
    role: 'BSc, Computer Science',
    org: 'Moi University',
    period: 'In progress', // TODO add your start and expected finish years
    location: 'Kenya',
    points: [
      'Coursework in programming, database systems, computer networks and operating systems.',
      'Further study in software development, web technologies, computer architecture and systems analysis.',
    ],
    tags: ['Databases', 'Networks', 'Operating Systems', 'Systems Analysis'],
  },
  {
    kind: 'certification',
    role: 'Professional Certificates',
    org: 'Operating Systems · Networking · Graphics Design · Office Applications',
    period: 'Completed',
    location: 'Kenya',
    points: [
      'Certificate in Operating Systems and Certificate in Computer Networking.',
      'Certificate in Graphics Design and Certificate in Computer/Office Applications.',
    ],
    tags: ['Operating Systems', 'Networking', 'Design'],
  },
];

// ── Manifesto ───────────────────────────────────────────────────────────
export const manifestoItems = [
  {
    number: '01',
    title: 'Build things people can actually use',
    body: 'A project is not finished when the code runs on my machine. It is finished when someone else can install it, open it, and get what they came for without reading a manual.',
  },
  {
    number: '02',
    title: 'Architecture precedes code',
    body: "Robust systems aren't accidentally typed into existence. I map the data and the workflows first, because a schema you get wrong follows you for the life of the project.",
  },
  {
    number: '03',
    title: 'Automation over repetition',
    body: 'If a process needs doing three times, I script it. Automated builds and releases are not a luxury — they are how you stop shipping broken versions by hand.',
  },
  {
    number: '04',
    title: 'Continuous evolution',
    body: "The most useful skill I have isn't mastery of one framework — it's absorbing a new one fast enough to be useful in it by the end of the week.",
  },
];
