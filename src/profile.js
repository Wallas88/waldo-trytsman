// Keep personal facts here so the profile can evolve without redesigning it.
export const profile = {
  name: "Waldo Trytsman",
  role: "Web developer and founder of SiteReviveSA, learning backend engineering to become a full-stack developer",
  location: "Pretoria, South Africa · working worldwide",
  email: "revivewebsitedev@gmail.com",
  linkedin: "https://www.linkedin.com/in/waldo-trytsman-siterevivesa/",
  github: "https://github.com/Wallas88",
  business: "https://siterevivesa.com/",
  intro:
    "I run SiteReviveSA, where I design, build and host websites for small businesses in South Africa. Front end is my strongest ground; the goal is to be as strong on the backend, so I'm learning it on real work: Node APIs and databases, authentication, admin tools clients use every day — with AI-assisted workflows that let a one-person studio ship like a team.",
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
      "Front ends wired to real APIs, authentication, persistence and tests — Revive Portal, client admin tools with a database behind them, team work alongside a backend-focused developer. Backend is the skill I'm building on purpose, one working project at a time.",
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
    tools: ["Git", "Netlify", "Cloudflare Workers", "GitHub Actions", "SEO foundations", "Performance", "Documentation"],
  },
];

export const projects = [
  {
    type: "Client rebuild · Live",
    status: "Live client site",
    title: "Phezulu Academy",
    description:
      "A live WordPress site for a SETA-accredited training academy: custom theme and plugin, a 117-course catalogue with accreditation data, category landing pages, sitemap and PAIA manual. Client-editable; built, launched and looked after by me.",
    // The bolded line from their signed testimonial (16 Sep 2026). Company
    // name only — no person named, per their consent.
    quote: {
      text: "We would highly recommend SiteReviveSA to any business looking for a professional, creative and reliable website development partner.",
      by: "Phezulu Academy",
    },
    stack: ["WordPress", "Custom theme", "Custom plugin", "SEO foundations"],
    preview: `${import.meta.env.BASE_URL}art/phezulu-academy.webp`,
    previewKind: "dashboard",
    featured: true,
    href: "https://www.phezuluacademy.co.za/",
    action: "Visit the live site",
  },
  {
    type: "Client redesign · Purchased",
    status: "Concept sold · client restyling",
    title: "SBB Software",
    description:
      "A full visual and content redesign concept for an experienced software engineer: clearer positioning, easier-to-understand services, and a more direct contact journey. Purchased as the foundation for her own restyled site.",
    stack: ["React", "Vite", "Responsive UI", "Content strategy"],
    href: "#sbb-case-study",
    action: "Open the case study",
    preview: `${import.meta.env.BASE_URL}art/sbb-phoenix-logo.svg`,
    previewKind: "logo",
    featured: true,
    caseStudy: true,
  },
  {
    type: "Full-stack product · In use",
    status: "Client portal",
    title: "Revive Portal",
    description:
      "The client portal behind my projects: invitation-only accounts, per-project access, milestones, versioned deliverables with approve / request-changes decisions and their history, messages and private files. React on an Express API with SQLite, cookie sessions, CSRF protection and 27 integration tests — designed, built and run by me.",
    stack: ["React", "Node.js", "Express", "SQLite", "Auth & permissions", "Integration tests"],
    preview: `${import.meta.env.BASE_URL}art/revive-portal-dashboard.webp`,
    previewKind: "dashboard",
    // Clients sign in by invitation, so there is no public demo login — the code is the open part.
    href: "https://github.com/Wallas88/revive-portal",
    action: "See the code",
  },
  {
    type: "Business",
    title: "SiteReviveSA",
    description:
      "The web studio I run: rebuilds of dated sites, new one-page and multi-page sites, and hosting and care afterwards — for small businesses that need a site that works, scoped and priced honestly.",
    stack: ["React", "Vite", "SSR prerendering", "Netlify", "Cloudflare Workers"],
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
