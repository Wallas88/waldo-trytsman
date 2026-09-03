# Waldo Trytsman — Developer Portfolio

A responsive web developer portfolio built with React and Vite. It presents selected client redesign work, a working full-stack demo, and the design principles behind the work.

## About Waldo

I'm a web developer and the founder of SiteReviveSA, based in Pretoria. My strongest focus is front-end development with JavaScript, React, HTML, and CSS, including responsive website design and rebuilds.

I'm developing my backend and database skills through structured learning, hands-on projects, and collaboration with a backend-focused developer. Revive Portal demonstrates that ongoing full-stack learning; it is a portfolio demo, not a production client service.

Focus areas: front-end development, React, JavaScript, responsive web design, and web development.

**Live site:** [wallas88.github.io/waldo-trytsman](https://wallas88.github.io/waldo-trytsman/)

## Highlights

- Responsive layout tested from small mobile screens through desktop
- Expandable SBB Software redesign case study
- Accessible navigation, labelled controls, reduced-motion support, and semantic content
- Optimized WebP artwork and a dedicated social-sharing preview
- Automated GitHub Pages deployment

## Run locally

```bash
pnpm install
pnpm dev
```

Create a production build:

```bash
pnpm build
```

## Update profile content

Personal details, capabilities, principles, and project cards live in `src/profile.js`. Update that file rather than editing copy throughout the components.

## Project structure

- `src/App.jsx` contains the page sections and interactive behaviour.
- `src/profile.js` contains personal details, capabilities, projects, and principles.
- `src/styles.css` contains the visual system and responsive rules.
- `public/art/` contains the artwork and project previews used by the site.

## Deployment

Pushes to `main` deploy through the GitHub Pages workflow in `.github/workflows/deploy.yml`. Vite builds the site into `dist/` with the repository base path configured in `vite.config.js`.

## Artwork

Artwork in `public/art/` was supplied by Waldo Trytsman for this profile. It is not offered for reuse independently of this project.

