import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/constants";
import { useScrollspy } from "../hooks/useScrollspy";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollspy(
    navLinks.map((link) => link.id),
    120
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-900/80 backdrop-blur-md border-b border-surface-600/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-accent-400 hover:text-accent-300 transition-colors"
          >
            Nazir.
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeId === link.id
                      ? "text-accent-400"
                      : "text-text-secondary hover:text-accent-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-accent-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-surface-800/95 backdrop-blur-md border-b border-surface-600/50"
          >
            <ul className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-sm font-medium transition-colors ${
                      activeId === link.id
                        ? "text-accent-400"
                        : "text-text-secondary hover:text-accent-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
