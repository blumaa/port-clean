import { NavLink } from 'react-router'

function Nav() {
  return (
    <nav>
      <NavLink to="/" className="nav-logo" end>
        Aaron Blum
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className={({ isActive }) => isActive ? 'active' : ''}>
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { Nav }
