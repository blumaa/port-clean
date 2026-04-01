import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  className?: string
}

function SectionHeading({ children, className }: SectionHeadingProps) {
  const classes = className ? `section-heading ${className}` : 'section-heading'
  return <h2 className={classes}>{children}</h2>
}

export { SectionHeading }
