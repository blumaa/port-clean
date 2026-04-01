import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AnimationsPage } from './AnimationsPage'

vi.mock('../components/animations/Lighthouse', () => ({
  Lighthouse: () => <svg data-testid="lighthouse" />,
}))
vi.mock('../components/animations/AnimatedEyeballWatching', () => ({
  AnimatedEyeballWatching: () => <svg data-testid="eyeball-watching" />,
}))
vi.mock('../components/animations/PadelPointBerlin', () => ({
  PadelPointBerlin: () => <svg data-testid="padel" />,
}))
vi.mock('../components/animations/RustlingGrass', () => ({
  RustlingGrass: () => <svg data-testid="grass" />,
}))
vi.mock('../components/animations/AlienMoon', () => ({
  AlienMoon: () => <svg data-testid="alien" />,
}))
vi.mock('../components/animations/AnimatedLamp', () => ({
  AnimatedLamp: () => <svg data-testid="lamp" />,
}))
vi.mock('../components/animations/Bus', () => ({
  Bus: () => <svg data-testid="bus" />,
}))
vi.mock('../components/animations/Bird', () => ({
  Bird: () => <svg data-testid="bird" />,
}))
vi.mock('../components/animations/AnimatedEyeball', () => ({
  AnimatedEyeball: () => <svg data-testid="eyeball" />,
}))
vi.mock('../components/animations/AnimatedLoadingAirplane', () => ({
  AnimatedLoadingAirplane: () => <svg data-testid="airplane" />,
}))
vi.mock('../components/animations/AnimatedOctoDude', () => ({
  AnimatedOctoDude: () => <svg data-testid="octo" />,
}))
vi.mock('../components/animations/NuclearPhysics', () => ({
  NuclearPhysics: () => <svg data-testid="nuclear" />,
}))
vi.mock('../components/animations/NoirCarChase', () => ({
  NoirCarChase: () => <svg data-testid="car-chase" />,
}))
vi.mock('../components/animations/AnimatedMoon', () => ({
  AnimatedMoon: () => <svg data-testid="moon" />,
}))

function renderPage() {
  return render(
    <MemoryRouter>
      <AnimationsPage />
    </MemoryRouter>,
  )
}

describe('AnimationsPage', () => {
  it('renders the Animations heading', () => {
    renderPage()
    expect(screen.getByText('Animations')).toBeInTheDocument()
  })

  it('renders animation labels', () => {
    renderPage()
    expect(screen.getByText('Lighthouse')).toBeInTheDocument()
    expect(screen.getByText('Noir Car Chase')).toBeInTheDocument()
    expect(screen.getByText('Bus')).toBeInTheDocument()
  })

  it('renders the animation grid', () => {
    renderPage()
    const grid = document.querySelector('.animation-grid')
    expect(grid).toBeInTheDocument()
  })

})
