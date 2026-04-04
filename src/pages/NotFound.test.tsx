import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { NotFound } from './NotFound'

describe('NotFound', () => {
  it('sets the page title', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    )
    expect(document.title).toBe('Page Not Found | Aaron Blum')
  })

  it('renders page not found message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    )
    expect(screen.getByText('Page not found')).toBeInTheDocument()
  })

  it('renders a link to home', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    )
    const link = screen.getByText('Go home')
    expect(link).toHaveAttribute('href', '/')
  })
})
