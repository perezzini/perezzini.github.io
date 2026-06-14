import React from 'react'

/**
 * BlogCard — an essay preview: small date, navy serif title
 * link, gray description. Left-aligned, no border or fill.
 */
export function BlogCard({ title, description, date, href = '#', ...rest }) {
  const [hover, setHover] = React.useState(false)
  return (
    <article style={{ marginBottom: 'var(--space-6)' }} {...rest}>
      <time
        style={{
          display: 'block',
          fontSize: 'var(--text-meta)',
          color: 'var(--text-secondary)',
          marginBottom: '4px',
        }}
      >
        {date}
      </time>
      <h3 style={{ margin: 0, marginBottom: '4px' }}>
        <a
          href={href}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            fontSize: 'var(--text-body)',
            fontWeight: 'var(--weight-regular)',
            color: 'var(--navy)',
            letterSpacing: 'var(--tracking-tight)',
            textDecoration: hover ? 'underline' : 'none',
            textUnderlineOffset: '2px',
          }}
        >
          {title}
        </a>
      </h3>
      <p
        style={{
          fontSize: 'var(--text-button)',
          color: 'var(--text-secondary)',
          textAlign: 'left',
          margin: 0,
          lineHeight: 'var(--leading-body)',
        }}
      >
        {description}
      </p>
    </article>
  )
}
