import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "Exposants", path: "/exposants" },
  { label: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
  { label: "Notre équipe", path: "/notre-equipe" },
  { label: "Infos Pratiques", path: "/infos-pratiques" },
  { label: "S'INSCRIRE", path: "/inscrire", external: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center bg-transparent">
            <img alt="FOCEEN" className="h-20 w-auto bg-transparent" src="/logo-foceen-white.png" width={200} height={100} decoding="async" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href="https://forum-foceen.eventmaker.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-cyan text-primary font-heading font-bold text-sm hover:bg-cyan/80 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`text-sm font-heading transition-colors ${
                      location.pathname === link.path
                        ? "text-white underline underline-offset-4 decoration-cyan"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary overflow-hidden border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href="https://forum-foceen.eventmaker.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 rounded-md bg-cyan text-primary font-heading font-bold text-sm text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`block text-sm font-heading ${
                      location.pathname === link.path
                        ? "text-white"
                        : "text-white/80"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
