import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { App } from './App'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'
import { WorkPage } from './pages/WorkPage'
import { AnimationsPage } from './pages/AnimationsPage'
import { TvPage } from './pages/TvPage'
import { NotFound } from './pages/NotFound'

vi.mock('./components/animations/TelevisionPreview', () => ({
  TelevisionPreview: () => <div data-testid="tv-preview">TV Preview</div>,
}))
vi.mock('./components/animations/Lighthouse', () => ({ Lighthouse: () => <svg /> }))
vi.mock('./components/animations/AnimatedEyeballWatching', () => ({ AnimatedEyeballWatching: () => <svg /> }))
vi.mock('./components/animations/PadelPointBerlin', () => ({ PadelPointBerlin: () => <svg /> }))
vi.mock('./components/animations/RustlingGrass', () => ({ RustlingGrass: () => <svg /> }))
vi.mock('./components/animations/AlienMoon', () => ({ AlienMoon: () => <svg /> }))
vi.mock('./components/animations/AnimatedLamp', () => ({ AnimatedLamp: () => <svg /> }))
vi.mock('./components/animations/Bus', () => ({ Bus: () => <svg /> }))
vi.mock('./components/animations/Bird', () => ({ Bird: () => <svg /> }))
vi.mock('./components/animations/AnimatedEyeball', () => ({ AnimatedEyeball: () => <svg /> }))
vi.mock('./components/animations/AnimatedLoadingAirplane', () => ({ AnimatedLoadingAirplane: () => <svg /> }))
vi.mock('./components/animations/AnimatedOctoDude', () => ({ AnimatedOctoDude: () => <svg /> }))
vi.mock('./components/animations/NuclearPhysics', () => ({ NuclearPhysics: () => <svg /> }))
vi.mock('./components/animations/NoirCarChase', () => ({ NoirCarChase: () => <svg /> }))

function renderApp(initialEntry = '/') {
  const router = createMemoryRouter(
    [
      {
        element: <App />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/cv', element: <ResumePage /> },
          { path: '/work', element: <WorkPage /> },
          { path: '/animations', element: <AnimationsPage /> },
          { path: '/tv', element: <TvPage /> },
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
    { initialEntries: [initialEntry] },
  )
  return render(<RouterProvider router={router} />)
}

describe('App routing', () => {
  it('renders HomePage at /', () => {
    renderApp('/')
    expect(screen.getByText(/frontend developer/i)).toBeInTheDocument()
  })

  it('renders ResumePage at /cv', () => {
    renderApp('/cv')
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders WorkPage at /work', () => {
    renderApp('/work')
    expect(screen.getByText('Padel Point Berlin')).toBeInTheDocument()
  })

  it('renders AnimationsPage at /animations', () => {
    renderApp('/animations')
    expect(screen.getByText('Animations')).toBeInTheDocument()
  })

  it('renders TvPage at /tv', () => {
    renderApp('/tv')
    expect(screen.getByTestId('tv-preview')).toBeInTheDocument()
  })

  it('renders NotFound for unknown routes', () => {
    renderApp('/garbage')
    expect(screen.getByText('Page not found')).toBeInTheDocument()
  })

  it('renders Nav on every page', () => {
    renderApp('/')
    expect(screen.getByText('Aaron Blum')).toBeInTheDocument()
  })
})
