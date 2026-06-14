**NavPill** — the floating, glassmorphic top navigation. A centered pill that blurs the warm page behind it; the active link gets the navy fill.

```jsx
<NavPill
  active="Home"
  items={[
    { label: 'Home', href: '/' },
    { label: 'Essays', href: '/essays' },
    { label: 'Academic publications', href: '/publications' },
  ]}
/>
```

- `floating` (default) fixes it top-center; set `false` to place inline.
- Links are 13px Prata; hover tints navy at 6%.
