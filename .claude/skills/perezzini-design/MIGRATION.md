# MIGRATION.md — refactor perezzini.github.io onto this design system

A file-by-file checklist for Claude Code. Goal: **consolidate, don't redesign.** Pull the scattered Tailwind values in `src/styles/global.css` into this system's named tokens, reconcile each `.astro` component with its component contract, and make the **landing page match the "Portfolio Page" template** in this design system exactly.

Two hard requirements from the owner:
1. **Prata is hosted locally** — no Google Fonts request.
2. **Landing page UI = the Portfolio Page template** (see `templates/portfolio/Portfolio.dc.html` and `guidelines/brand-*` cards). This implies two deliberate visual changes from today's live site — see ⚠️ flags below.

---

## 0. Get the system into the repo

Copy this whole folder to `perezzini.github.io/.claude/skills/perezzini-design/`. Then copy the two assets the site needs at runtime:

```
cp .claude/skills/perezzini-design/assets/fonts/Prata-Regular.ttf  public/fonts/Prata-Regular.ttf
# profile, favicon, affiliation logos already live in public/imgs — leave them.
```

---

## 1. Host Prata locally  ⚠️ requirement #1

**`src/layouts/BaseLayout.astro`** — DELETE these three blocks from `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet" />
```

**`src/styles/global.css`** — add the `@font-face` at the very top (before `@import 'tailwindcss'`), pointing at the local binary:

```css
@font-face {
  font-family: 'Prata';
  font-style: normal;
  font-weight: 400;          /* Prata ships a single 400 master — see §3 */
  font-display: swap;
  src: url('/fonts/Prata-Regular.ttf') format('truetype');
}
```

(Reference: `tokens/fonts.css` in this system. The path is `/fonts/...` because Astro serves `public/` from the site root.)

---

## 2. One source of truth for tokens

**`src/styles/global.css`** — import this system's token layer, then re-point the existing Tailwind `@theme` names at the tokens so every utility class resolves to a documented value. Keep your `@theme`/Tailwind setup; just stop hard-coding hexes.

Add after the `@font-face` / `@import 'tailwindcss'` lines:

```css
/* documented design-system tokens (single source of truth) */
@import './ds/colors.css';      /* = skill tokens/colors.css   */
@import './ds/typography.css';  /* = skill tokens/typography.css */
@import './ds/spacing.css';     /* = skill tokens/spacing.css   */
```

(Copy `tokens/colors.css`, `typography.css`, `spacing.css` from this skill into `src/styles/ds/`. Don't import `base.css` — your `@layer base` already owns element defaults; just align its values per §3.)

Then change `@theme` to alias instead of literal hex:

```css
@theme {
  --color-apple-blue:    var(--navy);            /* #01377d */
  --color-apple-light:   var(--surface-light);   /* #f5f5f7 */
  --color-apple-gray:    var(--gray);            /* #6e6e73 */
  --color-apple-divider: var(--divider);         /* #d2d2d7 */
  --color-apple-tag-bg:  var(--surface-subtle);  /* #f5f5f7 */
  --font-display: var(--font-display);           /* 'Prata', Georgia, … */
}
```

### Hardcoded-hex → token map (find & replace across `global.css`)

| Current literal | Replace with token | Notes |
|---|---|---|
| `#01377d` | `var(--navy)` | primary ink, links, fills, borders |
| `#1a6abf` | `var(--navy-bright)` | gradient terminus only |
| `#4a6f94` | `var(--navy-subtitle)` | hero subtitle |
| `#f0ede8` | `var(--paper)` | page background |
| `#f5f5f7` | `var(--surface-subtle)` | tags / wells |
| `#ffffff` | `var(--white)` | text on navy |
| `#6e6e73` | `var(--gray)` | secondary text |
| `#d2d2d7` | `var(--divider)` | hairlines |
| `rgba(1,55,125,0.12)` | `var(--navy-a12)` | glass border |
| `rgba(1,55,125,0.08)` | `var(--navy-a08)` | glass shadow |
| `rgba(1,55,125,0.06)` | `var(--navy-a06)` | nav-link hover |
| `rgba(240,237,232,0.85)` | `var(--surface-glass)` | nav fill |
| `980px` (radii) | `var(--radius-pill)` | nav, buttons, tags |
| `0 1px 8px rgba(1,55,125,.08)` | `var(--shadow-glass)` | `.site-nav` |
| ring: `0 0 0 4px #f0ede8, 0 0 0 6px #01377d` | `var(--ring-avatar)` | `.hero-avatar` |
| `150ms ease` | `var(--dur-fast) var(--ease-out)` | transitions |
| `400ms ease` | `var(--dur-base) var(--ease-out)` | fade-up / reveal |

---

## 3. Fix the Prata weight  ⚠️ visual change #1

Today `@layer base html { font-weight: 700 }` — but Prata has **no bold master**, so the browser renders faux-bold (or falls back). The design system's rule is **hierarchy from size, not weight**. To match the template:

- `html { font-weight: 700 }` → `font-weight: var(--weight-regular)` (400)
- `h2 { font-weight: 700 }` → `400` (`--weight-regular`)
- `.blog-post-title`, `.blog-list-title` `font-weight: 700` → `400`
- `.nav-link`, `.btn`, `.tag`, `.blog-preview-title` `font-weight: 500/600` → `400`

> This is intentional. Text will look slightly lighter but render *correctly* (no synthetic bold). If the owner wants visual heft back, that's a separate decision (a different display face) — flag it, don't silently re-add 700.

---

## 4. Landing page = Portfolio Page template  ⚠️ visual change #2

Reference: `templates/portfolio/Portfolio.dc.html`. The structure already matches your `index.astro` (nav → hero → bio → CTAs → social in a 640px centered column). One color change is required to match the template:

**`src/components/Hero.astro`** — the name is currently `text-black` (#000). The template renders it in **navy**:

```diff
- class="hero-name text-[36px] max-sm:text-[28px] font-bold tracking-[-0.5px] leading-[1.1] text-black mb-2"
+ class="hero-name text-[36px] max-sm:text-[28px] tracking-[-0.5px] leading-[1.1] text-[color:var(--navy)] mb-2"
```

(Also drop `font-bold` per §3.) Everything else in the hero already matches: 112px circular avatar with the navy ring (`.hero-avatar` → `--ring-avatar`), subtitle in `--navy-subtitle`. Leave the markup and copy as-is.

Confirm the rest of the column already mirrors the template — no markup changes needed, only the token swaps from §2:
- **Nav** (`.site-nav` / `.nav-link`) ⇄ `NavPill` contract — already identical (glass pill, active = navy fill).
- **Bio / Education / CurrentWork** — running copy; `.home p` stays navy, `.secondary` stays gray.
- **CTAs** (`.btn-primary` / `.btn-outline`) ⇄ `Button` contract — identical.
- **Social** (`.social-link`) ⇄ `SocialIcon` contract — gray → navy on hover, identical.

---

## 5. Component-contract reconciliation

Your site is **Astro**; the skill's `.jsx` files are **React reference contracts** — match props/variants/markup, do **not** import the JSX. Per component:

| Your code | Contract (`components/core/`) | Action |
|---|---|---|
| `.btn` / `.btn-primary` / `.btn-outline` (`CTAButtons.astro`) | `Button` (`variant`, `icon`, `href`) | Values already match. Keep classes; ensure radius=`--radius-pill`, weight=400, padding `9px 20px`. |
| `.site-nav` + `.nav-link[.active]` (`Navbar.astro`) | `NavPill` (`items`, `active`) | Already matches. Token-swap only. |
| `.social-links` / `.social-link` (`SocialLinks.astro`) | `SocialIcon` (`icon`, `href`, `label`) | Already matches. Token-swap only. |
| `.tag` / `.tags` | `Tag` | Token-swap only. |
| `.hero-avatar` (`Hero.astro`) | `Avatar` (`size`, `ring`) | Ring → `--ring-avatar`; size 112. |
| `.blog-preview*` (`BlogPreview.astro`) | `BlogCard` (`date`, `title`, `description`, `href`) | Title weight 600 → 400; token-swap. |
| `.publications li` (`Publications.astro`) | — (no primitive) | Token-swap only; leave structure. |

---

## 6. Don't change

- The 640px single-column layout, the center-aligned home copy / left-aligned long-form bodies.
- Copy, i18n strings (`src/i18n`), publication formatting, accented characters.
- The fade-up / reveal motion (just re-point its durations to `--dur-base`).
- **No new colors, no new fonts, no bold weight, no dark theme** unless separately requested.

---

## 7. Acceptance check

- [ ] No `fonts.googleapis.com` / `gstatic.com` request in the Network tab; Prata loads from `/fonts/Prata-Regular.ttf`.
- [ ] `grep -nE '#01377d|#f0ede8|#6e6e73|#f5f5f7|#d2d2d7|#4a6f94|#1a6abf' src/styles/global.css` returns **nothing** (all moved to tokens).
- [ ] No `font-weight: 700 | 600 | 500` left in `global.css`.
- [ ] Landing hero name renders in **navy**, not black; no synthetic-bold Prata anywhere.
- [ ] Landing page visually equals `templates/portfolio/Portfolio.dc.html`.
- [ ] Diff is token/weight/color swaps only — no structural or copy changes.
