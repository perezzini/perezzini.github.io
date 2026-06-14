import * as React from 'react'

export interface AvatarProps {
  /** Image URL. */
  src: string
  alt?: string
  /** Pixel diameter. Default 112. */
  size?: number
  /** Show the paper-gap + navy halo ring. Default true. */
  ring?: boolean
}

/** A circular portrait with the brand's signature navy halo ring. */
export function Avatar(props: AvatarProps): JSX.Element
