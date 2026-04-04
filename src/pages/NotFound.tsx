import { Link } from 'react-router'
import { PageMeta } from '../components/PageMeta'

function NotFound() {
  return (
    <div className="not-found">
      <PageMeta
        title="Page Not Found | Aaron Blum"
        description=""
        path=""
      />
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>
    </div>
  )
}

export { NotFound }
