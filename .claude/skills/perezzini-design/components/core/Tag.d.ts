import * as React from 'react'

export interface TagProps {
  /** Tag label. */
  children?: React.ReactNode
}

/** A small pill chip for essay topics & metadata. */
export function Tag(props: TagProps): JSX.Element
