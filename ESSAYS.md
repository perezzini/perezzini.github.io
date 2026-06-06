# Essays — How to publish and remove

## Publish a new essay

1. Create a new file in `src/content/essays/` — name it with lowercase, hyphens, no spaces:

   ```
   src/content/essays/my-essay-title.md
   ```

2. Add the required frontmatter at the top:

   ```markdown
   ---
   title: 'My Essay Title'
   description: 'One sentence that summarises the essay.'
   pubDate: 2026-06-06
   draft: false
   tags: ['ai', 'data'] # optional — remove the line if not needed
   ---

   Your essay content starts here...
   ```

3. Write the body in Markdown below the frontmatter.

4. Commit and push to `master`:
   ```bash
   git add src/content/essays/my-essay-title.md
   git commit -m "feat: add essay 'My Essay Title'"
   git push origin master
   ```
   GitHub Actions will build and deploy automatically (usually takes ~1 minute).

---

## Work on a draft without publishing

Set `draft: true` in the frontmatter. The essay will be built locally (visible at `localhost:4321/essays/my-essay-title`) but excluded from the public listing and not reachable on the live site.

```markdown
---
title: 'Work In Progress'
description: '...'
pubDate: 2026-06-06
draft: true
---
```

Change to `draft: false` when ready to publish, then commit and push.

---

## Remove an essay

Delete the file and push:

```bash
git rm src/content/essays/my-essay-title.md
git commit -m "chore: remove essay 'My Essay Title'"
git push origin master
```

---

## Essay URL

Each essay is available at:

```
https://perezzini.github.io/essays/<filename-without-extension>
```

Example: `src/content/essays/hello-world.md` → `https://perezzini.github.io/essays/hello-world`
