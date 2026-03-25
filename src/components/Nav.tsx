import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedOctoDude } from "./animations/AnimatedOctoDude";

function Nav() {
  const [isOctoFullscreen, setIsOctoFullscreen] = useState(false);
  const [isBuzzing, setIsBuzzing] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOctoFullscreen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleOctoClick = () => {
    setIsBuzzing(true);
    setTimeout(() => setIsBuzzing(false), 400);
  };

  return (
    <nav>
      <NavLink to="/" className="nav-logo" end>
        Aaron Blum
      </NavLink>
      <ul className="nav-links">
        <li>
          <button
            className="octo-button"
            onClick={handleOctoClick}
            aria-label="Buzz OctoDude"
          >
            <AnimatedOctoDude isBuzzing={isBuzzing} />
          </button>
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

      <AnimatePresence>
        {isOctoFullscreen && (
          <motion.div
            className="octo-overlay"
            data-testid="octo-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOctoFullscreen(false)}
          >
            <motion.div
              className="octo-fullscreen"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatedOctoDude />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export { Nav };
