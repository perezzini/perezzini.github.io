# Perezzini Design System

The design language of **[perezzini.github.io](https://perezzini.github.io)** — the personal portfolio of **Luciano Perezzini**, a computer scientist and Chief Data Officer working at the intersection of AI, information retrieval, and software engineering (Universidad Nacional de Rosario; CIFASIS-CONICET; DeepAgro).

It is a quiet, editorial, Apple-inspired system: a single high-contrast serif (**Prata**) set across the entire interface, deep **navy ink** on **warm cream paper**, fully-pill chrome, and whisper-soft navy-tinted shadows. One typeface, one accent color, one column — restraint is the brand.

## Sources

- **Codebase:** `perezzini.github.io/` — Astro 5 static site (mounted locally, read-only). Key files: `src/styles/global.css` (Tailwind v4 `@theme` tokens), `src/layouts/BaseLayout.astro`, `src/components/*.astro`, `src/i18n/en.ts` (copy).
- **Live site:** https://perezzini.github.io
- **GitHub:** https://github.com/perezzini/perezzini.github.io

Everything here was derived from that source — not from screenshots.

---

## Content fundamentals

How the brand writes.

- **Third person, by name.** The bio refers to its subject as "Luciano" and "He," not "I" — a CV/portfolio register, observed rather than self-spoken. UI labels are plain imperatives ("Resume", "Contact Me", "Thesis").
- **Tone:** measured, precise, senior. It states accomplishments without hype — *"leading the Data and Cloud Computing division — driving the design, deployment, and scaling of machine learning systems."* No exclamation marks, no marketing adjectives.
- **Sentence craft:** long, em-dash-jointed sentences that layer a claim and then ground it — *"applied research — grounded in the belief that great engineering and great user experience are inseparable."* The em dash (`—`, U+2014) is the signature punctuation.
- **Casing:** Sentence case everywhere — headings ("Academic publications"), buttons ("Contact Me"), nav. No ALL-CAPS, no Title Case Headlines.
- **Vocabulary:** domain-precise and unafraid of jargon — "information retrieval", "recommender systems", "LegalTech", "decision-ready systems". Academic citations are formatted formally (authors, title, venue, year).
- **Bilingual:** the site ships EN/ES (`src/i18n`). Publication titles appear in their original Spanish. Keep accented characters intact (Recuperación, Informática).
- **No emoji. Ever.** None appear anywhere in the source. The voice is bookish, not casual.
- **Brevity in chrome:** essays open with three-sentence paragraphs; the first post is deliberately spare ("Every portfolio needs a first post. This is mine.").

---

## Visual foundations

- **Color.** A near-monochrome navy-on-cream palette. **Navy `#01377d`** is the only brand color — text, links, fills, borders, even shadows are tinted with it. The page is **warm cream `#f0ede8`**, not white; white (`#fff`) and Apple-light (`#f5f5f7`) appear only on small surfaces (tags, ring gaps). Secondary text is **Apple gray `#6e6e73`**; hairlines are `#d2d2d7`. The hero subtitle uses a softened **`#4a6f94`**. A single navy→bright (`#1a6abf`) gradient exists as a `.text-gradient` utility but is used sparingly.
- **Type.** **Prata** — a high-contrast Didone serif — set on *everything*: hero, headings, body, nav, buttons, tags, dates. Prata ships a single 400 master, so there is no bold; hierarchy comes from **size**, not weight. Gentle negative tracking on large sizes (-0.5px hero, -0.3px headings). Body is 17px at 1.7 line-height; chrome is 13px. This single-typeface discipline is the most recognizable thing about the brand.
- **Layout.** One 640px centered column, every page. Home copy is **center-aligned**; long-form essay/list bodies switch to left-aligned. Sections separated by 32px vertical rhythm on a 4px base scale. Page content starts 112px down to clear the floating nav.
- **Backgrounds.** Flat warm paper — no images, no patterns, no full-bleed photography, no texture. The only "image" is the circular portrait. Calm and uncluttered.
- **Shape & radii.** Interactive chrome is **fully pill** (`980px`) — nav, buttons, tags all read as capsules. Avatars are circles. There are no sharp-cornered cards in the source; soft radii (10–18px) are provided for any new surfaces.
- **Borders.** Hairline only — 1px, either navy (`outline` button, glass nav at 12% navy) or `#d2d2d7` divider gray. No heavy rules.
- **Shadows.** Soft and **always navy-tinted, never neutral black.** The floating nav carries `0 1px 8px rgba(1,55,125,.08)`. The avatar's signature treatment is a *ring*, not a shadow: a 4px paper-colored gap then a 6px solid navy halo (`--ring-avatar`).
- **Glass / blur.** Used in exactly one place: the floating nav — `rgba(240,237,232,.85)` with `backdrop-filter: blur(16px)`. Transparency and blur are a special-occasion material, not a theme.
- **Hover states.** Nav links and ghost surfaces tint to **navy at 6%** (`rgba(1,55,125,.06)`). Links underline. Social glyphs shift **gray → navy**. Hovers are color shifts, never scale.
- **Press states.** None pronounced in the source — the brand favors quiet color transitions over depress/shrink effects.
- **Motion.** Restrained and elegant. Entrance: a 400ms `fade-up` (opacity + 6px translateY) staggered across the hero (0 / 80 / 160ms). Scroll reveal uses the same 6px lift. Transitions are 150ms `ease` on color/background. No bounce, no spring, no parallax. All animation is gated behind `prefers-reduced-motion`.
- **Imagery vibe.** A single cool, neutral-lit headshot on a soft gray ground; academic logos (UNR seal in black line-art, the LCC lambda monogram) are monochrome. Nothing warm, saturated, or grainy.

---

## Iconography

- **System:** **Font Awesome 6.7.2**, loaded from CDN (`cdnjs`). This is the brand's only icon set.
- **Style:** thin, simple glyphs used sparingly and always paired with a text label or as a bare social link — never decorative clusters.
- **Glyphs in use:** `fa-solid fa-cloud-arrow-down` (Resume / Thesis downloads), `fa-regular fa-envelope` (Contact), `fa-brands fa-linkedin-in`, `fa-brands fa-github` (social), `fa-solid fa-moon` / `fa-sun` (a dark-mode toggle present in source but not mounted), `fa-solid fa-bars` style chrome is absent.
- **Color:** icons inherit navy in buttons (white on the filled primary), and gray→navy on hover for social links.
- **Emoji:** never used.
- **Unicode as icon:** the back-link on essay posts is a bare **←** (U+2190) glyph; publication bullets are a middle-dot **·**. The favicon is a Prata **"L"** monogram (`assets/favicon.svg`).
- **To use:** load `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet">` and pass the class string to `<Button icon>` / `<SocialIcon icon>`.

---

## Index

Root manifest of this design system.

- **`styles.css`** — the single entry point consumers link. `@import`s everything below.
- **`tokens/`**
  - `fonts.css` — `@font-face` for Prata (bundled at `assets/fonts/Prata-Regular.ttf`).
  - `colors.css` — navy / paper / gray palette + semantic aliases.
  - `typography.css` — Prata family, type scale, line-heights, tracking.
  - `spacing.css` — spacing scale, pill/card radii, navy-tinted shadows, motion tokens.
  - `base.css` — element defaults (paper bg, Prata, navy ink) + `.text-gradient`.
- **`components/core/`** — reusable primitives (`.jsx` + `.d.ts` + `.prompt.md`):
  - `Button` · `Tag` · `Avatar` · `SocialIcon` · `NavPill` · `BlogCard`
  - `core.card.html` — the Components specimen card.
- **`ui_kits/website/`** — full portfolio recreation: `Home`, `Essays`, `EssayPost`, `Publications`, interactive `index.html`, `README.md`.
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- **`assets/`** — `profile-1.jpeg` (portrait), `favicon.svg` (L monogram), `unr-2.jpg` / `lcc.png` / `unr-1.png` (affiliation marks), `tablet-resume.png`, `fonts/Prata-Regular.ttf`.
- **`SKILL.md`** — Agent-Skill manifest for downloadable use.
- **`MIGRATION.md`** — file-by-file checklist for refactoring the live `perezzini.github.io` Astro repo onto these tokens/contracts (local Prata; landing page = Portfolio Page template).

### Namespace

Components compile into `window.PerezziniDesignSystem_33c6f1`. In card/kit HTML: `const { Button } = window.PerezziniDesignSystem_33c6f1`.
