import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders children inside an h2', () => {
    render(<SectionHeading>Experience</SectionHeading>)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Experience')
  })

  it('applies section-heading class by default', () => {
    render(<SectionHeading>Title</SectionHeading>)
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('section-heading')
  })

  it('merges additional className', () => {
    render(<SectionHeading className="custom">Title</SectionHeading>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('section-heading')
    expect(heading).toHaveClass('custom')
  })
})
