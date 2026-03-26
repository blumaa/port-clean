import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { App } from './App'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import './styles.css'

const router = createBrowserRouter([
  {
    element: <App />,
    HydrateFallback: () => null,
    children: [
      {
        path: '/',
        lazy: { Component: async () => (await import('./pages/HomePage')).HomePage },
      },
      {
        path: '/cv',
        lazy: { Component: async () => (await import('./pages/ResumePage')).ResumePage },
      },
      {
        path: '/work',
        lazy: { Component: async () => (await import('./pages/WorkPage')).WorkPage },
      },
      {
        path: '/animations',
        lazy: { Component: async () => (await import('./pages/AnimationsPage')).AnimationsPage },
      },
      {
        path: '/tv',
        lazy: { Component: async () => (await import('./pages/TvPage')).TvPage },
      },
      {
        path: '*',
        lazy: { Component: async () => (await import('./pages/NotFound')).NotFound },
      },
    ],
  },
])

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
