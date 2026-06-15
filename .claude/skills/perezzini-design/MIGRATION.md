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
- **No new colors, no new fonts, no bold weight.** (Dark mode is now in-scope — see §8.)

---

## 7. Acceptance check (light migration)

- [ ] No `fonts.googleapis.com` / `gstatic.com` request in the Network tab; Prata loads from `/fonts/Prata-Regular.ttf`.
- [ ] `grep -nE '#01377d|#f0ede8|#6e6e73|#f5f5f7|#d2d2d7|#4a6f94|#1a6abf' src/styles/global.css` returns **nothing** (all moved to tokens).
- [ ] No `font-weight: 700 | 600 | 500` left in `global.css`.
- [ ] Landing hero name renders in **navy**, not black; no synthetic-bold Prata anywhere.
- [ ] Landing page visually equals `templates/portfolio/Portfolio.dc.html`.
- [ ] Diff is token/weight/color swaps only — no structural or copy changes.

---

## 8. Dark mode — "Warm Midnight"

Adds the design system's dark theme to the live site. The palette inverts (brand navy `#01377d` becomes the canvas, warm off-white the ink) and stays monochrome. This section is self-contained — do it after §1–7.

> **Why your current dark toggle won't "just work":** two mismatches.
> 1. `DarkModeToggle.astro` toggles a `.dark` **class**; the system's `dark.css` keys off the `[data-theme]` **attribute**.
> 2. Your `@layer components` CSS hardcodes **base** tokens (`var(--navy)`, `var(--white)`, `var(--gray)`). `dark.css` only flips **semantic/component** aliases — so `.nav-link { color: var(--navy) }` stays navy-on-navy (invisible) in dark. Every colored component must move to the themable token.

### 8.1 — Copy the dark token file

```bash
cp .claude/skills/perezzini-design/tokens/dark.css src/styles/ds/dark.css
# Re-copy colors.css too — it now ships the component tokens dark.css depends on:
cp .claude/skills/perezzini-design/tokens/colors.css src/styles/ds/colors.css
```

`colors.css` now declares the themable component tokens (`--btn-primary-bg`, `--btn-primary-fg`, `--btn-outline-fg`, `--btn-outline-border`, `--nav-active-bg`, `--nav-active-fg`, `--nav-link-fg`, `--tag-fg`, `--social-fg`, `--social-fg-hover`) with their light defaults. `dark.css` defines `--dk-*` values and maps them onto the semantic + component aliases under `[data-theme='dark']`, `[data-theme='light']`, and a `prefers-color-scheme` fallback.

**`src/styles/global.css`** — import it last in the token block:

```css
@import './ds/colors.css';
@import './ds/typography.css';
@import './ds/spacing.css';
@import './ds/dark.css';   /* add — must come after the others */
```

### 8.2 — Switch element + component colors to themable tokens

These currently use **base** tokens and so won't flip. Find & replace inside `global.css`:

**`@layer base`:**

| Selector / prop | From | To |
|---|---|---|
| `html` background | `var(--paper)` | `var(--surface-page)` |
| `html` color | `var(--navy)` | `var(--text-primary)` |
| `a` color | `var(--navy)` | `var(--link)` |
| `p` color | `var(--gray)` | `var(--text-secondary)` |
| `p.secondary` color | `var(--gray)` | `var(--text-secondary)` |
| `.home p` color | `var(--navy)` | `var(--text-primary)` |
| `.home p.secondary` color | `var(--gray)` | `var(--text-secondary)` |
| `h2` color | `var(--navy)` | `var(--text-primary)` |

**`@layer components`:**

| Selector / prop | From | To |
|---|---|---|
| `.nav-link` color | `var(--navy)` | `var(--nav-link-fg)` |
| `.nav-link.active` background | `var(--navy)` | `var(--nav-active-bg)` |
| `.nav-link.active` color | `var(--white)` | `var(--nav-active-fg)` |
| `.btn-primary` background-color | `var(--navy)` | `var(--btn-primary-bg)` |
| `.btn-primary` color | `var(--white)` | `var(--btn-primary-fg)` |
| `.btn-primary` border-color | `var(--navy)` | `var(--btn-primary-bg)` |
| `.btn-outline` color | `var(--navy)` | `var(--btn-outline-fg)` |
| `.btn-outline` border-color | `var(--navy)` | `var(--btn-outline-border)` |
| `.social-link` color | `var(--gray)` | `var(--social-fg)` |
| `.social-link:hover` color | `var(--navy)` | `var(--social-fg-hover)` |
| `.tag` color | `var(--navy)` | `var(--tag-fg)` |
| `.publications li` + `::before` color | `var(--gray)` | `var(--text-secondary)` |
| `.blog-preview-date` color | `var(--gray)` | `var(--text-secondary)` |
| `.blog-preview-title` color | `var(--navy)` | `var(--text-primary)` |
| `.blog-preview-title a` (+`:hover`) color | `var(--navy)` | `var(--link)` |
| `.blog-preview-desc` color | `var(--gray)` | `var(--text-secondary)` |
| `.blog-back-link` color | `var(--navy)` | `var(--link)` |
| `.blog-post-title` color | `var(--navy)` | `var(--text-primary)` |
| `.blog-list-title` color | `var(--navy)` | `var(--text-primary)` |

Leave `.site-nav` as-is — it already uses `--surface-glass` / `--border-glass` / `--shadow-glass`, which `dark.css` themes (the glass capsule gets a lighter frosted-navy fill + a visible cream hairline in dark, so the bar reads clearly).

The `.text-gradient` utility is overridden by `dark.css` automatically (navy→navy is invisible on dark; it lifts to sky→cream). No change needed.

### 8.3 — Prevent the flash (FOUC)

**`src/layouts/BaseLayout.astro`** — add this as the **first** thing in `<head>`, before the stylesheet import, so the theme is set before first paint:

```astro
<script is:inline>
  (function () {
    var stored = localStorage.getItem('theme')
    var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.dataset.theme = stored || (sysDark ? 'dark' : 'light')
  })()
</script>
```

This resolves the system preference into an explicit `data-theme` on `<html>` (so the `[data-theme]` rules drive everything; the `@media` block in `dark.css` stays as a no-JS fallback).

### 8.4 — Rewire the toggle to `data-theme`

**`src/components/DarkModeToggle.astro`** — replace the `<script>` so it flips the **attribute** instead of the `.dark` class (keep the button markup and `localStorage['theme']` key):

```astro
<script>
  const toggle = document.getElementById('darkToggle')
  const html = document.documentElement
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = html.dataset.theme === 'dark' ? 'light' : 'dark'
      html.dataset.theme = next
      localStorage.setItem('theme', next)
    })
  }
</script>
```

Add a scoped `<style>` so only the relevant icon shows (the markup has both `.dark-icon-moon` and `.dark-icon-sun`):

```astro
<style>
  .dark-icon-sun { display: none; }
  :global([data-theme='dark']) .dark-icon-moon { display: none; }
  :global([data-theme='dark']) .dark-icon-sun { display: inline; }
  .dark-toggle {
    background: var(--surface-glass);
    color: var(--text-primary);
    border: 1px solid var(--border-glass);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
</style>
```

> **Search the repo for any leftover `.dark`-class CSS or JS** (`grep -rn "\.dark\b\|classList.*dark\|'dark'" src`) and migrate it to `[data-theme='dark']` so nothing depends on the old class.

### 8.5 — Dark-mode acceptance check

- [ ] First paint already correct (no light flash) when `localStorage['theme']` / system pref is dark.
- [ ] Toggle flips `<html data-theme>` between `light`/`dark` and persists to `localStorage['theme']`; moon shows in light, sun in dark.
- [ ] In dark: canvas is navy `#01377d`, text is off-white, primary button is **cream fill / navy text**, links are sky.
- [ ] Nav capsule is clearly visible in dark (frosted navy + cream hairline); **no** nav link or title renders navy-on-navy.
- [ ] `grep -nE 'var\(--navy\)|var\(--white\)|var\(--gray\)' src/styles/global.css` shows these **only** inside `:root`/token files — every component/element color now uses a semantic/component token.
- [ ] Light mode unchanged from §7.
