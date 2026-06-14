**Button** — the brand's pill-shaped action; navy `primary` fill or `outline` hairline on warm paper. Use for resume/contact CTAs and downloads.

```jsx
<Button variant="primary" icon="fa-solid fa-cloud-arrow-down" href="/res/cv.pdf">Resume</Button>
<Button variant="outline" icon="fa-regular fa-envelope" href="mailto:hi@example.com">Contact Me</Button>
```

- `variant`: `primary` (navy fill, white text) | `outline` (transparent, navy border + text)
- `icon`: Font Awesome class string; `iconRight` to trail the label
- `href` renders an `<a>`; omit for a `<button>`. `disabled` dims to 40%.
- Fully pill (`--radius-pill`); set in Prata like all chrome.
