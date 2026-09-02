# Waldo Trytsman — Developer Portfolio

A responsive full-stack developer portfolio built with React and Vite. It presents selected client work, a working full-stack product, technical capabilities, and the design principles behind the work.

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

