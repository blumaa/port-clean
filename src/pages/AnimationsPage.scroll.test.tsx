import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { App } from '../App'
import { HomePage } from './HomePage'
import { ResumePage } from './ResumePage'
import { WorkPage } from './WorkPage'
import { AnimationsPage } from './AnimationsPage'
import { TvPage } from './TvPage'
import { NotFound } from './NotFound'

vi.mock('../components/animations/Lighthouse', () => ({ Lighthouse: () => <svg /> }))
vi.mock('../components/animations/AnimatedEyeballWatching', () => ({ AnimatedEyeballWatching: () => <svg /> }))
vi.mock('../components/animations/PadelPointBerlin', () => ({ PadelPointBerlin: () => <svg /> }))
vi.mock('../components/animations/RustlingGrass', () => ({ RustlingGrass: () => <svg /> }))
vi.mock('../components/animations/AlienMoon', () => ({ AlienMoon: () => <svg /> }))
vi.mock('../components/animations/AnimatedLamp', () => ({ AnimatedLamp: () => <svg /> }))
vi.mock('../components/animations/Bus', () => ({ Bus: () => <svg /> }))
vi.mock('../components/animations/Bird', () => ({ Bird: () => <svg /> }))
vi.mock('../components/animations/AnimatedEyeball', () => ({ AnimatedEyeball: () => <svg /> }))
vi.mock('../components/animations/AnimatedLoadingAirplane', () => ({ AnimatedLoadingAirplane: () => <svg /> }))
vi.mock('../components/animations/AnimatedOctoDude', () => ({ AnimatedOctoDude: () => <svg /> }))
vi.mock('../components/animations/NuclearPhysics', () => ({ NuclearPhysics: () => <svg /> }))
vi.mock('../components/animations/NoirCarChase', () => ({ NoirCarChase: () => <svg /> }))
vi.mock('../components/animations/AnimatedMoon', () => ({ AnimatedMoon: () => <svg /> }))
vi.mock('../components/animations/TelevisionPreview', () => ({ TelevisionPreview: () => <div>TV</div> }))

describe('Scroll behavior on navigation', () => {
  it('scrolls to top when navigating from /work to /animations', async () => {
    const user = userEvent.setup()
    const scrollToSpy = vi.fn()
    window.scrollTo = scrollToSpy

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
      { initialEntries: ['/work'] },
    )

    render(<RouterProvider router={router} />)

    await user.click(screen.getByText('view gallery'))

    expect(screen.getByText('Animations')).toBeInTheDocument()
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0)
  })
})
