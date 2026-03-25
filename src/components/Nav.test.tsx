import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { Nav } from './Nav'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const filtered: Record<string, unknown> = {}
      for (const [key, value] of Object.entries(props)) {
        if (!['initial', 'animate', 'exit', 'transition', 'whileHover', 'whileTap'].includes(key)) {
          filtered[key] = value
        }
      }
      return <div {...filtered}>{children}</div>
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

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
  it('renders the octodude button in the nav', () => {
    renderNav()
    expect(screen.getByLabelText('Open OctoDude animation')).toBeInTheDocument()
  })

  it('renders octodude before the nav links', () => {
    renderNav()
    const navLinks = screen.getByRole('list')
    const octoButton = screen.getByLabelText('Open OctoDude animation')
    const items = navLinks.querySelectorAll('li')
    expect(items[0]).toContainElement(octoButton)
  })

  it('opens fullscreen overlay when octodude is clicked', async () => {
    const user = userEvent.setup()
    renderNav()

    await user.click(screen.getByLabelText('Open OctoDude animation'))
    expect(screen.getByTestId('octo-overlay')).toBeInTheDocument()
  })

  it('closes overlay when backdrop is clicked', async () => {
    const user = userEvent.setup()
    renderNav()

    await user.click(screen.getByLabelText('Open OctoDude animation'))
    expect(screen.getByTestId('octo-overlay')).toBeInTheDocument()

    await user.click(screen.getByTestId('octo-overlay'))
    expect(screen.queryByTestId('octo-overlay')).not.toBeInTheDocument()
  })

  it('closes overlay when Escape key is pressed', async () => {
    renderNav()

    fireEvent.click(screen.getByLabelText('Open OctoDude animation'))
    expect(screen.getByTestId('octo-overlay')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByTestId('octo-overlay')).not.toBeInTheDocument()
  })
})
