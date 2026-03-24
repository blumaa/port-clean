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
  it('renders the Work heading', () => {
    renderPage()
    expect(screen.getByText('Work')).toBeInTheDocument()
  })

  it('renders all project names', () => {
    renderPage()
    expect(screen.getByText('Padel Point Berlin')).toBeInTheDocument()
    expect(screen.getByText('Berlin Demo Finder')).toBeInTheDocument()
    expect(screen.getByText('Mond Design System')).toBeInTheDocument()
    expect(screen.getByText('xClues games')).toBeInTheDocument()
    expect(screen.getByText('Bird Poo')).toBeInTheDocument()
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

  it('renders View Gallery button for Animation Gallery', () => {
    renderPage()
    const link = screen.getByText('View Gallery').closest('a')
    expect(link).toHaveAttribute('href', '/animations')
  })

  it('links Retro Television title to /tv', () => {
    renderPage()
    const link = screen.getByText('Retro Television').closest('a')
    expect(link).toHaveAttribute('href', '/tv')
  })

  it('renders View Television button for Television', () => {
    renderPage()
    const link = screen.getByText('View Television').closest('a')
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
