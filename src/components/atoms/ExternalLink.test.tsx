import { render, screen } from '@testing-library/react'
import { ExternalLink } from './ExternalLink'

describe('ExternalLink', () => {
  it('renders children', () => {
    render(<ExternalLink href="https://example.com">Click me</ExternalLink>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('sets target="_blank" and rel="noopener noreferrer"', () => {
    render(<ExternalLink href="https://example.com">Link</ExternalLink>)
    const link = screen.getByText('Link').closest('a')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('sets the href', () => {
    render(<ExternalLink href="https://example.com">Link</ExternalLink>)
    expect(screen.getByText('Link').closest('a')).toHaveAttribute('href', 'https://example.com')
  })

  it('passes through className', () => {
    render(<ExternalLink href="#" className="custom">Link</ExternalLink>)
    expect(screen.getByText('Link').closest('a')).toHaveClass('custom')
  })

  it('passes through aria-label', () => {
    render(<ExternalLink href="#" aria-label="My label">Link</ExternalLink>)
    expect(screen.getByLabelText('My label')).toBeInTheDocument()
  })
})
