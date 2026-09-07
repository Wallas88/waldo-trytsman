// Keep personal facts here so the profile can evolve without redesigning it.
export const profile = {
  name: "Waldo Trytsman",
  role: "Frontend engineer building toward full-stack and AI-enabled products",
  location: "Pretoria, South Africa · working worldwide",
  email: "revivewebsitedev@gmail.com",
  linkedin: "https://www.linkedin.com/in/waldo-trytsman-siterevivesa/",
  github: "https://github.com/Wallas88",
  business: "https://siterevivesa.com/",
  intro:
    "I build thoughtful React interfaces and practical web applications while learning backend development as I go. My work is growing from frontend into APIs, data, automation, and AI-enabled software, with each project helping me understand more of the whole product system.",
};

export const disciplines = [
  {
    code: "01",
    title: "Frontend engineering",
    summary:
      "React interfaces built around reusable components, responsive behaviour, clear state, accessible markup, and real content.",
    tools: ["React", "JavaScript", "HTML", "CSS", "Vite", "Responsive UI", "Accessibility"],
  },
  {
    code: "02",
    title: "Full-stack foundations",
    summary:
      "Practical experience connecting a frontend to APIs, authentication, persistence, and tests. Growing deeper into backend architecture through working projects.",
    tools: [
      "Node.js",
      "Express",
      "REST APIs",
      "SQLite",
      "Authentication",
      "Integration tests",
    ],
  },
  {
    code: "03",
    title: "Product thinking",
    summary:
      "Turning unclear requirements into sensible structure, useful flows, clear content, and interfaces that people can understand.",
    tools: [
      "UX thinking",
      "Content structure",
      "Prototyping",
      "Design systems",
      "Accessibility",
    ],
  },
  {
    code: "04",
    title: "Shipping practice",
    summary:
      "The habits that help a project leave the screen: version control, QA, performance checks, deployment, documentation, and maintainable handover.",
    tools: ["Git", "Netlify", "GitHub Actions", "SEO foundations", "Performance", "Documentation"],
  },
];

export const projects = [
  {
    type: "Client redesign · Purchased",
    status: "Deployment pending",
    title: "SBB Software",
    description:
      "A full visual and content redesign for an experienced software engineer: clearer positioning, easier-to-understand services, and a more direct contact journey.",
    stack: ["React", "Vite", "Responsive UI", "Content strategy"],
    href: "#sbb-case-study",
    action: "Open the case study",
    preview: `${import.meta.env.BASE_URL}art/sbb-phoenix-logo.svg`,
    previewKind: "logo",
    featured: true,
    caseStudy: true,
  },
  {
    type: "Full-stack portfolio product",
    status: "Live demo",
    title: "Revive Portal",
    description:
      "A portfolio-built client workspace for project progress, milestones, feedback, and next actions. I built the React interface, Express API, authentication flow, SQLite persistence, and integration tests.",
    stack: ["React", "Node.js", "Express", "SQLite", "Integration tests"],
    note: "Portfolio demonstration, not a production client service.",
    preview: `${import.meta.env.BASE_URL}art/revive-portal-dashboard.webp`,
    previewKind: "dashboard",
    href: "https://revive-portal.onrender.com/",
    action: "Open the live demo",
  },
  {
    type: "Business",
    title: "SiteReviveSA",
    description:
      "The website design and development business I run, focused on responsive implementation, clear outcomes, honest scope, and direct collaboration.",
    stack: ["React", "Vite", "SSR prerendering", "Netlify"],
    href: "https://siterevivesa.com/",
    action: "Visit the business",
  },
];

export const principles = [
  [
    "Understand before building",
    "The real problem matters more than the requested feature.",
  ],
  [
    "Make complexity legible",
    "Good engineering should reduce confusion, not merely move it elsewhere.",
  ],
  [
    "Let personality earn its place",
    "Humour and motion work best when the experience remains useful.",
  ],
  [
    "Ship work that can evolve",
    "A finished build should be understandable, portable, and maintainable.",
  ],
];
