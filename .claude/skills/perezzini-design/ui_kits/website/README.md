# Website UI Kit — Luciano Perezzini

A high-fidelity recreation of the personal portfolio at **perezzini.github.io**, built from the Astro source (`src/pages`, `src/components`, `src/styles/global.css`).

## Screens

| File | Screen | Source |
| --- | --- | --- |
| `Home.jsx` | Landing column — hero avatar, bio, education, current work, CTAs, social | `pages/index.astro` + section components |
| `Essays.jsx` | Essay listing | `pages/essays/index.astro` |
| `EssayPost.jsx` | A single essay | `layouts/BlogPostLayout.astro` |
| `Publications.jsx` | Academic publications list | `components/Publications.astro` |

## Interactive entry

`index.html` mounts all four screens behind the floating glass **NavPill**. Click the nav to move between Home / Essays / Academic publications; on Essays, click the preview to open the post, then **←** to go back.

## Composition

Screens compose the design-system primitives (`Avatar`, `Button`, `SocialIcon`, `BlogCard`, `Tag`, `NavPill`) from `window.PerezziniDesignSystem_33c6f1` and read all color/type/spacing from `styles.css` tokens. Font Awesome 6 supplies icons. Everything is a single 640px centered column on warm paper — the brand's one true layout.
