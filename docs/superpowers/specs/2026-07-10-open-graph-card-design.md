# Open Graph homepage card — design

- **Date:** 2026-07-10
- **Status:** Approved, ready for implementation planning
- **Scope:** Homepage social share metadata + a branded preview image. Single, self-contained change.

## Context

`src/layouts/BaseLayout.astro` currently emits a minimal, **hardcoded** Open Graph block
(lines 27–35): `og:title` and `og:description` are both just `"Luciano Perezzini"`, `og:image`
points at `unr-2.jpg` (a campus photo), and there are no Twitter/X Card tags, no `og:site_name`,
`og:locale`, image dimensions, or image `alt`. Links shared to LinkedIn, Slack, iMessage, and X
therefore preview with a bare title and an off-brand photo.

## Decisions

| Area          | Decision                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------- |
| Coverage      | **Homepage only.** Essays keep inheriting the site default (no per-essay OG).                       |
| Preview image | A **dedicated branded 1200×630 card**, replacing the campus photo.                                  |
| Card design   | **"Pure" monogram** — a single Prata "L" on cream, centered, generous whitespace.                   |
| Tag set       | Full **Open Graph + Twitter/X** meta, plus `og:site_name`, `og:locale`, image dimensions and `alt`. |
| Theme         | **Single-theme (light).** Dark mode was removed from the site, so no dark card variant.             |

Rationale: restraint is the brand — the card mirrors the homepage hero's own "L" mark, and the
`og:description` field carries the full context to every platform, so the image itself stays pure.
Homepage-only was chosen deliberately; per-essay OG was considered and declined to keep the change
small.

## Card image

- **Dimensions:** 1200×630 (the standard `summary_large_image` / OG ratio).
- **Background:** flat warm cream `#f0ede8` — no photography, gradient, texture, or border.
- **Mark:** a single navy `#01377d` **"L"** set in the real **Prata 400** face (the site's only
  typeface), centered with generous surrounding whitespace. No wordmark, no ring, no tagline.
- **Voice:** the card is the favicon's "L" monogram at scale, in Prata rather than the favicon's
  Georgia fallback.

### Asset deliverables

- `public/imgs/og-card.svg` — the committed, re-renderable **source of truth**, self-contained so
  it rasterizes without a font dependency (the "L" is an outlined vector path).
- `public/imgs/og-card.png` — the 1200×630 raster that `og:image` points at (social scrapers do
  not reliably render SVG, so the referenced image must be PNG).
- Rasterization is a **build-time step** using an already-available tool; it adds **no new project
  dependency** (no change to `package.json` / `package-lock.json`). The exact command is recorded
  in the implementation PR.

## Metadata

The hardcoded Open Graph block (`BaseLayout.astro` lines 27–35) is replaced with the full set
below. Values stay hardcoded to the homepage (homepage-only scope). The existing
`<meta name="title">`, `<meta name="description">`, and `robots` tags are left as-is.

```html
<!-- Open Graph — Facebook, LinkedIn, Slack, iMessage -->
<meta property="og:type" content="profile" />
<meta property="profile:first_name" content="Luciano" />
<meta property="profile:last_name" content="Perezzini" />
<meta property="og:site_name" content="Luciano Perezzini" />
<meta property="og:locale" content="en_US" />
<meta property="og:url" content="https://perezzini.com/" />
<meta property="og:title" content="Luciano Perezzini" />
<meta
  property="og:description"
  content="Luciano builds data-driven products at the intersection of AI, information retrieval, and software engineering."
/>
<meta property="og:image" content="https://perezzini.com/imgs/og-card.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Luciano Perezzini — Technologist" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Luciano Perezzini" />
<meta
  name="twitter:description"
  content="Luciano builds data-driven products at the intersection of AI, information retrieval, and software engineering."
/>
<meta name="twitter:image" content="https://perezzini.com/imgs/og-card.png" />
<meta name="twitter:image:alt" content="Luciano Perezzini — Technologist" />
```

Copy (verbatim, drawn from the site's own bio):

- **Title:** `Luciano Perezzini`
- **Description:** `Luciano builds data-driven products at the intersection of AI, information retrieval, and software engineering.`
- **Image alt:** `Luciano Perezzini — Technologist`

`twitter:site` / `twitter:creator` are omitted — no X handle is published on the site. They can be
added later if one is.

### Canonical domain

All absolute URLs use `https://perezzini.com` — the site's custom domain — **not** the
`perezzini.github.io` Pages URL. Two related items sit **outside this OG change** and are flagged
for the owner:

- `astro.config.mjs` still sets `site: 'https://perezzini.github.io'`, so Astro-generated absolute
  URLs (canonical links, sitemap, RSS) point at the wrong host. Recommend updating it to
  `https://perezzini.com`; it is small and closely related, so it can ride this branch if wanted.
- No `public/CNAME` file exists. GitHub Pages Actions deploys need one to keep the custom domain
  pinned across deploys; confirm the domain is set in repo settings, or add `public/CNAME`
  containing `perezzini.com`.

## Files touched

- `public/imgs/og-card.svg` — new (source).
- `public/imgs/og-card.png` — new (referenced raster).
- `src/layouts/BaseLayout.astro` — replace the Open Graph block with the full set above.
- `public/imgs/unr-2.jpg` — **not removed by this change.** It is currently referenced _only_ by
  the Open Graph block being replaced, so after this change it is unreferenced by the site.
  Deleting it is deliberately left out of scope — a separate cleanup call for the owner.

## Non-goals

- Per-essay / per-page dynamic OG (title, description, `article` type, canonical URL per essay).
- A dark-mode card variant.
- Changing `og:type` away from `profile`, or adding structured data (JSON-LD).
- Removing or repurposing `unr-2.jpg`.

## Verification

- `npm run build` succeeds; the built `dist/index.html` contains the full tag set with correct
  values and `og:image` resolving to `/imgs/og-card.png`.
- `og-card.png` is exactly 1200×630 and renders the navy "L" on cream.
- `npm run check:format` passes (Prettier over the repo, including this doc).
- Manual: paste the deployed URL into a link-preview validator (e.g. LinkedIn Post Inspector,
  opengraph.xyz) and confirm the card + title + description unfurl correctly.

## Commits (atomic, Conventional Commits, GitFlow `feature/open-graph-card` → `develop`)

1. `docs: add Open Graph homepage card design spec` — this document.
2. `feat: add branded Open Graph card image` — `og-card.svg` source + `og-card.png` raster.
3. `feat: expand homepage Open Graph and Twitter card metadata` — `BaseLayout.astro` tag block.
