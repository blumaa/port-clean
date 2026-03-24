import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { App } from './App'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'
import { WorkPage } from './pages/WorkPage'
import { AnimationsPage } from './pages/AnimationsPage'
import { TvPage } from './pages/TvPage'
import { NotFound } from './pages/NotFound'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import './styles.css'

const router = createBrowserRouter([
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
])

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

document.getElementById('loader')?.remove()
