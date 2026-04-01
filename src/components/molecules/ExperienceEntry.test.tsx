import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ExperienceEntry } from './ExperienceEntry'

function renderEntry(props: Partial<React.ComponentProps<typeof ExperienceEntry>> = {}) {
  const defaults = {
    date: '2023 — 2024',
    company: 'Acme Corp',
    role: 'Developer',
    ...props,
  }
  return render(
    <MemoryRouter>
      <ExperienceEntry {...defaults} />
    </MemoryRouter>
  )
}

describe('ExperienceEntry', () => {
  it('renders date, company, and role', () => {
    renderEntry()
    expect(screen.getByText('2023 — 2024')).toBeInTheDocument()
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    renderEntry({ description: 'Built things' })
    expect(screen.getByText('Built things')).toBeInTheDocument()
  })

  it('renders achievements when provided', () => {
    renderEntry({ achievements: ['Shipped v2', 'Improved perf'] })
    expect(screen.getByText('Shipped v2')).toBeInTheDocument()
    expect(screen.getByText('Improved perf')).toBeInTheDocument()
  })

  it('renders role as a link when roleLink is provided', () => {
    renderEntry({ roleLink: 'https://example.com' })
    const link = screen.getByText('Developer').closest('a')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('applies single-col class when singleCol is true', () => {
    const { container } = renderEntry({ singleCol: true })
    expect(container.querySelector('.experience-entry')).toHaveClass('single-col')
  })
})
