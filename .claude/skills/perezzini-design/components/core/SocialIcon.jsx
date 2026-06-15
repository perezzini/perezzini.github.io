import React from 'react'

/**
 * SocialIcon — a bare Font Awesome glyph link, gray by default,
 * navy on hover. Used in the footer social row.
 */
export function SocialIcon({ icon, href, label, size = 24, ...rest }) {
  const [hover, setHover] = React.useState(false)
  const style = {
    color: hover ? 'var(--social-fg-hover)' : 'var(--social-fg)',
    fontSize: size,
    textDecoration: 'none',
    lineHeight: 1,
    display: 'inline-flex',
    transition: 'color var(--dur-fast) var(--ease-out)',
  }
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      <i className={icon} aria-hidden="true"></i>
    </a>
  )
}
