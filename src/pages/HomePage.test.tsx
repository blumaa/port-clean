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
  it('renders an H1 with the name', () => {
    renderPage()
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent('Aaron Blum')
  })

  it('renders JSON-LD Person schema', () => {
    renderPage()
    const script = document.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
    const data = JSON.parse(script!.textContent!)
    expect(data['@type']).toBe('Person')
    expect(data.name).toBe('Aaron Blum')
    expect(data.jobTitle).toBe('Frontend Developer')
    expect(data.url).toBe('https://www.aaronblum.co')
  })

  it('renders the bio text', () => {
    renderPage()
    expect(screen.getByText(/frontend developer/i)).toBeInTheDocument()
  })

  it('sets the page title', () => {
    renderPage()
    expect(document.title).toBe('Aaron Blum — Frontend Developer in Berlin')
  })

  it('renders contact email', () => {
    renderPage()
    const emailLink = screen.getByText(/blumaa@gmail.com/i)
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:blumaa@gmail.com')
  })
})
