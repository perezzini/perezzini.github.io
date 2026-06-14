import React from 'react'

/**
 * Avatar — a circular portrait. When `ring` is true it carries
 * the signature paper-gap + navy halo (--ring-avatar).
 */
export function Avatar({ src, alt = '', size = 112, ring = true, ...rest }) {
  const style = {
    width: size,
    height: size,
    borderRadius: 'var(--radius-full)',
    objectFit: 'cover',
    display: 'block',
    boxShadow: ring ? 'var(--ring-avatar)' : 'none',
  }
  return <img src={src} alt={alt} style={style} {...rest} />
}
