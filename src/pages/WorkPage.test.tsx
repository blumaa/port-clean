import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { WorkPage } from './WorkPage'

function renderPage() {
  return render(
    <MemoryRouter>
      <WorkPage />
    </MemoryRouter>,
  )
}

describe('WorkPage', () => {
  it('sets the page title', () => {
    renderPage()
    expect(document.title).toBe('Projects | Aaron Blum')
  })

  it('renders category headings', () => {
    renderPage()
    expect(screen.getByText('Web Apps')).toBeInTheDocument()
    expect(screen.getByText('Game Apps')).toBeInTheDocument()
    expect(screen.getByText('Animations')).toBeInTheDocument()
    expect(screen.getByText('Systems & Tools')).toBeInTheDocument()
  })

  it('renders all project names', () => {
    renderPage()
    expect(screen.getByText('Padel Point Berlin')).toBeInTheDocument()
    expect(screen.getByText('Berlin Demo Finder')).toBeInTheDocument()
    expect(screen.getByText('Mond Design System')).toBeInTheDocument()
    expect(screen.getByText('xClues games')).toBeInTheDocument()
    expect(screen.getByText('Bird Poo')).toBeInTheDocument()
    expect(screen.getByText('Scrabblish')).toBeInTheDocument()
    expect(screen.getByText('Animation Gallery')).toBeInTheDocument()
    expect(screen.getByText('Retro Television')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    renderPage()
    expect(screen.getByText(/aggregates open padel matches/)).toBeInTheDocument()
  })

  it('links Animation Gallery title to /animations', () => {
    renderPage()
    const link = screen.getByText('Animation Gallery').closest('a')
    expect(link).toHaveAttribute('href', '/animations')
  })

  it('renders view gallery link for Animation Gallery', () => {
    renderPage()
    const link = screen.getByText('view gallery').closest('a')
    expect(link).toHaveAttribute('href', '/animations')
  })

  it('links Retro Television title to /tv', () => {
    renderPage()
    const link = screen.getByText('Retro Television').closest('a')
    expect(link).toHaveAttribute('href', '/tv')
  })

  it('renders watch television link for Television', () => {
    renderPage()
    const link = screen.getByText('watch television').closest('a')
    expect(link).toHaveAttribute('href', '/tv')
  })

  it('renders external links for projects with live URLs', () => {
    renderPage()
    const liveLinks = screen.getAllByText('view site')
    expect(liveLinks.length).toBeGreaterThan(0)
  })

  it('renders GitHub links where available', () => {
    renderPage()
    const githubLinks = screen.getAllByText('GitHub')
    expect(githubLinks.length).toBeGreaterThan(0)
  })
})
