import * as React from 'react'

export interface SocialIconProps {
  /** Font Awesome class, e.g. "fa-brands fa-github". */
  icon: string
  href: string
  /** Accessible label (aria-label). */
  label: string
  /** Glyph size in px. Default 24. */
  size?: number
}

/** A bare social glyph link — gray, navy on hover. */
export function SocialIcon(props: SocialIconProps): JSX.Element
