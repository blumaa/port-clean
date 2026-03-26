import { lazy, Suspense } from "react";
import { NavLink } from "react-router";

const AnimatedOctoDude = lazy(() =>
  import("./animations/AnimatedOctoDude").then((m) => ({ default: m.AnimatedOctoDude }))
);

function OctoSkeleton() {
  return <div className="octo-skeleton skeleton" />;
}

function Nav() {
  return (
    <nav>
      <NavLink to="/" className="nav-logo" end>
        Aaron Blum
      </NavLink>
      <ul className="nav-links">
        <li>
          <div
            className="octo-button"
            aria-label="OctoDude"
          >
            <Suspense fallback={<OctoSkeleton />}>
              <AnimatedOctoDude />
            </Suspense>
          </div>
        </li>
        <li>
          <NavLink
            to="/cv"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            CV
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };
