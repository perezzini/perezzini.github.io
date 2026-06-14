---
name: perezzini-design
description: Use this skill to generate well-branded interfaces and assets for Luciano Perezzini's personal brand (perezzini.github.io), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **One typeface:** Prata (Didone serif) on *everything*. Hierarchy from size, not weight (single 400 master — no bold).
- **One accent:** navy `#01377d` on warm cream paper `#f0ede8`. Secondary text Apple gray `#6e6e73`.
- **Pill chrome:** nav, buttons, and tags are fully rounded (`980px`). Avatars are circles with a navy halo ring.
- **Quiet motion:** 400ms fade-up entrances, 150ms color transitions, navy-tinted soft shadows. No bounce, no neutral-black shadow.
- **Voice:** third-person, sentence case, em-dash-jointed, precise, no emoji.
- **Icons:** Font Awesome 6.7.2 (CDN), used sparingly with labels.

## Files

- `styles.css` — link this; it `@import`s all tokens + fonts + base.
- `tokens/` — colors, typography, spacing, fonts, base element styles.
- `components/core/` — Button, Tag, Avatar, SocialIcon, NavPill, BlogCard.
- `ui_kits/website/` — full portfolio recreation (Home, Essays, EssayPost, Publications).
- `assets/` — portrait, favicon, affiliation logos, Prata font binary.
- `readme.md` — full content + visual + iconography guidelines.
