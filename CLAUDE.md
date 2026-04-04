# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run format     # Format all files with Prettier
npm run pre-commit # Check formatting (used in CI)
```

There is no build step — this is a static HTML site served directly.

## Architecture

Single-page static portfolio site (`index.html`) deployed to GitHub Pages. No framework, no build pipeline, no custom JavaScript.

- **HTML**: `index.html` — the entire site
- **CSS**: `style.css` — minimal responsive overrides on top of Bootstrap 4
- **Assets**: `imgs/` (photos), `res/` (PDFs like CV and thesis)
- **External CDNs**: Bootstrap 4.3.1, jQuery, Font Awesome 4.7.0, Google Fonts (Noto Sans Display)
- **Analytics**: Google Analytics via GTM (UA-149415453-1)

CI runs Prettier format check on PRs and pushes to `master`/`develop`.

## Git

Do not mention Claude Code or any AI tool in commit messages, PR descriptions, or any git-related output.

Always commit atomically — one logical change per commit.
