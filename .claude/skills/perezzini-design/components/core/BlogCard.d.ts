import * as React from 'react'

export interface BlogCardProps {
  title: string
  description: string
  /** Pre-formatted date string, e.g. "May 31, 2026". */
  date: string
  href?: string
}

/** An essay preview row: date, serif title link, gray description. */
export function BlogCard(props: BlogCardProps): JSX.Element
