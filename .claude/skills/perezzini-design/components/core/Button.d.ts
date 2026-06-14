import * as React from 'react'

export interface ButtonProps {
  /** Button label. */
  children?: React.ReactNode
  /** Visual style. `primary` = navy fill, `outline` = navy hairline. */
  variant?: 'primary' | 'outline'
  /** Render as a link to this URL instead of a <button>. */
  href?: string
  /** Font Awesome class, e.g. "fa-solid fa-cloud-arrow-down". */
  icon?: string
  /** Place the icon after the label instead of before. */
  iconRight?: boolean
  /** Dim and disable interaction. */
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  type?: 'button' | 'submit' | 'reset'
}

/** The brand's pill-shaped action button. */
export function Button(props: ButtonProps): JSX.Element
