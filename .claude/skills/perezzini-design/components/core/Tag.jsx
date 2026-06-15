import React from 'react'

/**
 * Tag — a small pill chip on Apple-light fill with navy text.
 * Used for essay topics / metadata labels.
 */
export function Tag({ children, ...rest }) {
  const style = {
    display: 'inline-block',
    backgroundColor: 'var(--surface-subtle)',
    color: 'var(--tag-fg)',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-meta)',
    fontWeight: 'var(--weight-regular)',
    padding: '5px 12px',
    borderRadius: 'var(--radius-pill)',
    lineHeight: 1.2,
  }
  return (
    <span style={style} {...rest}>
      {children}
    </span>
  )
}
