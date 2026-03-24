import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { HomePage } from './HomePage'

function renderPage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  )
}

describe('HomePage', () => {
  it('renders the bio text', () => {
    renderPage()
    expect(screen.getByText(/frontend developer/i)).toBeInTheDocument()
  })

  it('renders contact email', () => {
    renderPage()
    const emailLink = screen.getByText(/blumaa@gmail.com/i)
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:blumaa@gmail.com')
  })
})
