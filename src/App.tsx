import { Outlet, ScrollRestoration } from 'react-router'
import { Nav } from './components/Nav'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  )
}

export { App }
