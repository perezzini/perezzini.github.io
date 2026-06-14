import React from 'react'

/**
 * Button — the brand's pill-shaped action. Two variants:
 * `primary` (navy fill) and `outline` (navy hairline on paper).
 * Renders an <a> when `href` is given, otherwise a <button>.
 * Icons come from Font Awesome (pass a className like
 * "fa-solid fa-cloud-arrow-down" via `icon`).
 */
export function Button({
  children,
  variant = 'primary',
  href,
  icon,
  iconRight = false,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: 'var(--pad-button-y) var(--pad-button-x)',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-button)',
    fontWeight: 'var(--weight-regular)',
    lineHeight: 1,
    textDecoration: 'none',
    cursor: disabled ? 'default' : 'pointer',
    border: '1px solid transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    WebkitTapHighlightColor: 'transparent',
  }

  const variants = {
    primary: {
      backgroundColor: 'var(--navy)',
      color: 'var(--text-on-navy)',
      borderColor: 'var(--navy)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--navy)',
      borderColor: 'var(--navy)',
    },
  }

  const style = { ...base, ...(variants[variant] || variants.primary) }
  const ico = icon ? <i className={icon} aria-hidden="true"></i> : null

  const content = (
    <>
      {ico && !iconRight ? ico : null}
      {children ? <span>{children}</span> : null}
      {ico && iconRight ? ico : null}
    </>
  )

  if (href) {
    return (
      <a href={href} style={style} onClick={onClick} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} style={style} disabled={disabled} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
