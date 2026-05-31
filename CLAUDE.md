# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production (outputs to dist/)
npm run preview    # Preview the production build locally
npm run format     # Format all files with Prettier
npm run check:format  # Check formatting (used in CI)
```

## Architecture

Astro 5 portfolio site deployed to GitHub Pages via GitHub Actions. Static output (`output: 'static'`) — no server-side rendering.

- **Pages**: `src/pages/` — `index.astro` (homepage), `blog/index.astro` (listing), `blog/[slug].astro` (posts)
- **Layouts**: `src/layouts/BaseLayout.astro` (site shell), `src/layouts/BlogPostLayout.astro` (blog posts)
- **Components**: `src/components/` — one component per homepage section, plus `LangToggle`, `DarkModeToggle`, `ScrollReveal`, `BlogPreview`
- **Styles**: `src/styles/global.css` — Tailwind v4 with `@theme` design tokens (Apple color palette), `@layer base/components/utilities`
- **Content**: `src/content/blog/` — Markdown/MDX posts via Astro Content Collections
- **i18n**: `src/i18n/en.ts` + `es.ts` — client-side EN/ES toggle via `data-i18n` attributes and `LangToggle`
- **Assets**: `public/imgs/` (photos), `public/res/` (PDFs: CV, thesis, thesis defense)
- **External CDNs**: Font Awesome 6.7.2, Google Analytics gtag.js (UA-149415453-1)

## Key patterns

- **Dark mode**: Toggle class on `<html>`. FOUC prevention via `is:inline` script in `<head>`. CSS `.dark` overrides in `global.css`.
- **i18n**: `LangToggle.astro` uses `define:vars` to pass translation objects into a client script. All translatable elements have `data-i18n` attributes.
- **Blog slugs**: `post.id.replace(/\.mdx?$/, '')` strips the file extension from Astro 5 content collection IDs.
- **Tailwind v4**: No JS config file — all configuration in CSS via `@theme`, `@custom-variant`, `@plugin`, `@layer`.

## CI/CD

- **CI** (`.github/workflows/ci.yml`): Runs `npm run check:format` on PRs and pushes to `master`/`develop`.
- **Deploy** (`.github/workflows/deploy.yml`): Builds and deploys to GitHub Pages on push to `master`. Requires Pages source set to "GitHub Actions" in repo settings.

## Git

Do not mention Claude Code or any AI tool in commit messages, PR descriptions, or any git-related output.

Always commit atomically — one logical change per commit.
