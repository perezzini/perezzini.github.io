import * as React from 'react'

export interface NavItem {
  label: string
  href: string
}

export interface NavPillProps {
  /** Navigation items, left to right. */
  items: NavItem[]
  /** Label of the active item (gets the navy fill). */
  active?: string
  /** Fix to the top-center of the viewport. Default true. */
  floating?: boolean
}

/** The floating glassmorphic top navigation pill. */
export function NavPill(props: NavPillProps): JSX.Element
