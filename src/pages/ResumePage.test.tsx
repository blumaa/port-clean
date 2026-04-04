import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ResumePage } from './ResumePage'

function renderPage() {
  return render(
    <MemoryRouter>
      <ResumePage />
    </MemoryRouter>,
  )
}

describe('ResumePage', () => {
  it('sets the page title', () => {
    renderPage()
    expect(document.title).toBe('CV | Aaron Blum')
  })

  it('renders the Experience heading', () => {
    renderPage()
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders all coding jobs', () => {
    renderPage()
    expect(screen.getByText('fluege.de')).toBeInTheDocument()
    expect(screen.getByText('localyze.com')).toBeInTheDocument()
    expect(screen.getByText('x-ion.de')).toBeInTheDocument()
  })

  it('renders teaching jobs', () => {
    renderPage()
    expect(screen.getByText('ESL Teacher')).toBeInTheDocument()
    expect(screen.getByText('South High School')).toBeInTheDocument()
  })

  it('renders the Education heading', () => {
    renderPage()
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('renders education entries', () => {
    renderPage()
    expect(screen.getByText('Flatiron School')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Web Development')).toBeInTheDocument()
  })

  it('renders the Skills heading', () => {
    renderPage()
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('renders skill categories', () => {
    renderPage()
    expect(screen.getByText('Frontend Core')).toBeInTheDocument()
    expect(screen.getByText('Testing & Quality')).toBeInTheDocument()
  })
})
