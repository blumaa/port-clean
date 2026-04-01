import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { Nav } from './Nav'

vi.mock('./animations/AnimatedOctoDude', () => ({
  AnimatedOctoDude: () => <div data-testid="animated-octodude">OctoDude</div>,
}))

function renderNav(initialEntry = '/') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Nav />
    </MemoryRouter>,
  )
}

describe('Nav', () => {
  it('renders the name as a link to home', () => {
    renderNav()
    const logo = screen.getByText('Aaron Blum')
    expect(logo).toBeInTheDocument()
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })

  it('renders CV and Work nav links', () => {
    renderNav()
    expect(screen.getByText('CV')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
  })

  it('links CV to /cv and Work to /work', () => {
    renderNav()
    expect(screen.getByText('CV').closest('a')).toHaveAttribute('href', '/cv')
    expect(screen.getByText('Work').closest('a')).toHaveAttribute('href', '/work')
  })

  it('marks CV as active on /cv', () => {
    renderNav('/cv')
    expect(screen.getByText('CV').closest('a')).toHaveClass('active')
  })

  it('marks Work as active on /work', () => {
    renderNav('/work')
    expect(screen.getByText('Work').closest('a')).toHaveClass('active')
  })
})

describe('Nav - OctoDude', () => {
  it('renders the octodude in the nav', () => {
    renderNav()
    expect(screen.getByLabelText('OctoDude')).toBeInTheDocument()
  })

  it('renders octodude before the nav links', () => {
    renderNav()
    const navLinks = screen.getByRole('list')
    const octoButton = screen.getByLabelText('OctoDude')
    const items = navLinks.querySelectorAll('li')
    expect(items[0]).toContainElement(octoButton)
  })
})
