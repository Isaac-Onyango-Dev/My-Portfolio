/**
 * ── SINGLE SOURCE OF TRUTH ─────────────────────────────────────────────
 * Everything personal about the site lives here. Edit this file and the
 * whole portfolio updates. No other file should contain your bio, links,
 * job history or project details.
 *
 * Content below is taken from your CV.
 * ───────────────────────────────────────────────────────────────────────
 */

const phone = '+254 742 028 905';

// wa.me opens a chat in the WhatsApp app (or WhatsApp Web on a computer)
// with this message already typed, so the first line is always professional.
const whatsappMessage = "Hi Isaac, I came across your portfolio and I'd like to talk.";

export const profile = {
  // ── Identity ──────────────────────────────────────────────────────────
  name: 'Isaac Onyango Ouma',
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
  availability: 'Open to junior roles & internships',

  // ── Contact ───────────────────────────────────────────────────────────
  email: 'isaaco62800@gmail.com',
  phone,
  // Sits in /public. Leave '' to hide the download button.
  resumeFile: 'Isaac-Onyango-Ouma-CV.pdf',

  // ── Links ─────────────────────────────────────────────────────────────
  github: 'Isaac-Onyango-Dev',
  socials: [
    { label: 'GitHub',   icon: 'fa-brands fa-github',    url: 'https://github.com/Isaac-Onyango-Dev' },
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin',  url: 'https://www.linkedin.com/in/isaac-onyango-dev/' },
    {
      label: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp',
      url: `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`,
      display: phone,      // shown instead of the URL in the contact list
      color: '#25D366',    // WhatsApp green on its contact-list icon
      direct: true,        // listed with email, ahead of the profile links
    },
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
  `I'm a Computer Science student at Moi University TVET Institute and a software
   developer who learns by building. Desktop applications, web platforms, database
   systems, developer tools — if it solves a real problem, I want to build it and
   ship it.`,

  `My work spans the whole stack: React and TypeScript on the front, Python and
   SQL behind it, Docker and GitHub Actions to get it out the door. I care about
   the parts nobody demos — sensible schema design, honest error handling, and
   packaging that actually works on someone else's machine.`,

  `Alongside that I'm exploring AI integration, cybersecurity, cloud infrastructure
   and game development with Unity, Unreal Engine and Blender. I'm looking for a
   junior developer role or internship where I can learn from people who ship at
   scale and contribute from day one.`,
];

// ── Quick facts ─────────────────────────────────────────────────────────
// The card beside the About copy. Short, scannable, recruiter-friendly.
export const quickFacts = [
  { icon: 'fa-solid fa-graduation-cap', label: 'Studying',  value: 'Diploma in Computer Science, Moi University TVET Institute' },
  { icon: 'fa-solid fa-location-dot',   label: 'Based in',  value: 'Kenya · open to remote' },
  { icon: 'fa-solid fa-certificate',    label: 'Certified', value: 'Six certificates across systems, networking, data and the web' },
  { icon: 'fa-solid fa-compass',        label: 'Exploring', value: 'AI integration, cybersecurity, cloud and game development' },
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

// ── Headline numbers ────────────────────────────────────────────────────
// `source` values are counted at runtime from GitHub:
//   'shipped' = public repos with a live homepage, 'repos' = public repos.
export const stats = [
  { label: 'Projects shipped', source: 'shipped' },
  { label: 'Public repositories', source: 'repos' },
  { label: 'Certifications', value: '6' },
  { label: 'Technologies used', value: String(skillGroups.flatMap((g) => g.items).length) },
];

// ── Featured projects ───────────────────────────────────────────────────
// The featured section shows whatever you PIN on your GitHub profile, synced
// nightly. Pin or unpin a repo on GitHub and the portfolio follows.
//
// Notes below are optional, keyed by repo name. A pinned repo with no notes
// still shows, using its GitHub description, language and topics. Repo and
// demo links always come from GitHub, so they can never go stale here.
// `image` is a file in /public or a full URL; otherwise the repo's custom
// social preview is used, then a generated gradient.
export const projectNotes = {
  'Internet-Download-Hub': {
    blurb:
      'A free Windows desktop application for downloading video and audio from across the web, built around a clean, fast interface.',
    highlights: [
      'Desktop app packaged and released for Windows',
      'Media pipeline handling multiple sources and formats',
      'Automated builds and releases via GitHub Actions',
    ],
    tags: ['TypeScript', 'Desktop', 'Electron', 'CI/CD'],
  },
  MediaGrab: {
    blurb:
      'Cross-platform desktop media downloader for Windows and Linux, with a modern GUI, playlist support and full control over every download.',
    highlights: [
      'CustomTkinter interface with download history and playlist selection',
      'Pause, resume, cancel, retry and delete on any download',
      'Automatic FFmpeg detection with cross-platform packaging',
      'Release pipeline automated with GitHub Actions',
    ],
    tags: ['Python', 'CustomTkinter', 'FFmpeg', 'GitHub Actions'],
  },
  ScamShield: {
    blurb:
      'A tool that helps people detect and report suspicious online job and service listings before they lose money to them.',
    highlights: [
      'Listing analysis surfacing common scam signals',
      'Community reporting flow for flagged listings',
      'Responsive TypeScript front end',
    ],
    tags: ['TypeScript', 'Web App', 'Security'],
  },
  'Complex-Developers-Web': {
    title: 'Complex Developers',
    blurb:
      'The brand and website for the software development studio I co-founded, offering web, software, game, AI and cybersecurity work.',
    highlights: [
      'Brand identity and service positioning',
      'Marketing site deployed on Vercel',
      'SEO groundwork and conversion-focused layout',
    ],
    tags: ['Web Design', 'Branding', 'Vercel'],
  },
};

// Projects that aren't a public repo yet. Shown after the pinned ones.
export const extraProjects = [
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
    repo: '',
    demo: '',
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
    role: 'Co-Founder',
    org: 'Complex Developers',
    period: '2025 — Present',
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
    role: 'Diploma in Computer Science',
    org: 'Moi University TVET Institute',
    period: 'May 2025 — Sep 2027',
    location: 'Kenya',
    points: [
      'Coursework in programming, database systems, computer networks and operating systems.',
      'Further study in computer architecture, web design and graphics design.',
    ],
    tags: ['Databases', 'Networks', 'Operating Systems', 'Web Design'],
  },
  {
    kind: 'certification',
    role: 'Professional Certificates',
    org: 'Six certificates across systems, networking, data and the web',
    period: 'Completed',
    location: 'Kenya',
    points: [
      'Operating Systems · Computer Networking · Computer Organization and Architecture.',
      'Database Management · Web Development · Graphics Design.',
    ],
    tags: ['Operating Systems', 'Networking', 'Databases', 'Web Development'],
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
