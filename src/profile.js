// Keep personal facts here so the profile can evolve without redesigning it.
export const profile = {
  name: 'Waldo Trytsman',
  role: 'Full-stack developer & digital builder',
  location: 'Pretoria, South Africa · working worldwide',
  email: 'revivewebsitedev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/waldo-trytsman-siterevivesa/',
  github: 'https://github.com/Wallas88',
  business: 'https://siterevivesa.com/',
  intro:
    'I turn unclear ideas into useful, maintainable digital products — from the interface people touch to the systems working underneath it.',
}

export const disciplines = [
  {
    code: '01',
    title: 'Frontend systems',
    summary: 'Responsive interfaces built around real content, clear state, and reusable components.',
    tools: ['React', 'JavaScript', 'HTML', 'CSS', 'Vite', 'Responsive UI'],
  },
  {
    code: '02',
    title: 'Backend development',
    summary: 'Server-side logic, APIs, data flows, authentication, and the connective tissue behind an application.',
    tools: ['Node.js', 'REST APIs', 'Authentication', 'Data modelling', 'Integrations'],
  },
  {
    code: '03',
    title: 'Product & design',
    summary: 'Structure, visual identity, interaction design, and direct language working as one system.',
    tools: ['UX thinking', 'Design systems', 'Prototyping', 'Accessibility', 'Content structure'],
  },
  {
    code: '04',
    title: 'Delivery',
    summary: 'Performance, search foundations, deployment, testing, and responsible handover.',
    tools: ['Git', 'Netlify', 'SEO', 'Performance', 'QA', 'Documentation'],
  },
]

export const projects = [
  {
    type: 'Client redesign · Purchased',
    status: 'Deployment pending',
    title: 'SBB Software',
    description: 'A complete redesign for an experienced software engineer: sharper positioning, clearer services, stronger trust signals, and a focused contact journey.',
    stack: ['React', 'Vite', 'Responsive UI', 'Content strategy'],
    href: '#sbb-case-study',
    action: 'Open the case study',
    preview: `${import.meta.env.BASE_URL}art/sbb-phoenix-logo.svg`,
    previewKind: 'logo',
    featured: true,
    caseStudy: true,
  },
  {
    type: 'Full-stack product',
    status: 'Live demo',
    title: 'Revive Portal',
    description: 'A private client workspace for project progress, milestones, next actions, and feedback—with real authentication and persisted data.',
    stack: ['React', 'Node.js', 'Express', 'SQLite', 'Integration tests'],
    preview: `${import.meta.env.BASE_URL}art/revive-portal-dashboard.webp`,
    previewKind: 'dashboard',
    href: 'https://revive-portal.onrender.com/',
    action: 'Open the live demo',
  },
  {
    type: 'Business',
    title: 'SiteReviveSA',
    description: 'A website design and development business built around clear outcomes, honest scope, and direct collaboration.',
    stack: ['React', 'Vite', 'SSR prerendering', 'Netlify'],
    href: 'https://siterevivesa.com/',
    action: 'Visit the business',
  },
]

export const principles = [
  ['Understand before building', 'The real problem matters more than the requested feature.'],
  ['Make complexity legible', 'Good engineering should reduce confusion, not merely move it elsewhere.'],
  ['Let personality earn its place', 'Humour and motion work best when the experience remains useful.'],
  ['Ship work that can evolve', 'A finished build should be understandable, portable, and maintainable.'],
]

