import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "@/assets/logo_foceen_white.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/">
            <img alt="FOCEEN" className="h-20 w-auto" src={logoWhite} width={160} height={80} decoding="async" />
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
                      ? "text-primary-foreground underline underline-offset-4 decoration-cyan"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground"
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
            className="md:hidden bg-primary overflow-hidden"
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
                        ? "text-cyan"
                        : "text-primary-foreground/80"
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
