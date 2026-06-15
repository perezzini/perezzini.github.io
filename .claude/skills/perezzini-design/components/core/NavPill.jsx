import React from 'react'

/**
 * NavPill — the floating, glassmorphic top navigation. A
 * centered pill that blurs the warm page behind it. Pass an
 * array of { label, href } and the active label.
 */
export function NavPill({ items = [], active, floating = true }) {
  const nav = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2px',
    padding: '4px',
    background: 'var(--surface-glass)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid var(--border-glass)',
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    boxShadow: 'var(--shadow-glass)',
    ...(floating
      ? {
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }
      : {}),
  }
  return (
    <nav style={nav}>
      {items.map((it) => (
        <NavLink key={it.label} item={it} active={it.label === active} />
      ))}
    </nav>
  )
}

function NavLink({ item, active }) {
  const [hover, setHover] = React.useState(false)
  const style = {
    padding: '6px 16px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-meta)',
    fontWeight: 'var(--weight-regular)',
    textDecoration: 'none',
    lineHeight: 1.3,
    color: active ? 'var(--nav-active-fg)' : 'var(--nav-link-fg)',
    background: active
      ? 'var(--nav-active-bg)'
      : hover
        ? 'var(--hover-tint)'
        : 'transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
  }
  return (
    <a
      href={item.href}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {item.label}
    </a>
  )
}
