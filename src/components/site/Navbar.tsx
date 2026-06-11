import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant group-hover:scale-110 transition-transform">
              <Code2 className="size-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-base sm:text-lg">Coderise</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-0.5">
                Technologies
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-accent transition-colors"
                activeProps={{ className: "px-4 py-2 text-sm font-semibold text-primary rounded-lg bg-primary/10" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-elegant hover:scale-105 transition-transform"
            >
              Explore Courses
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-4 shadow-soft"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/courses"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center rounded-xl bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-semibold"
                >
                  Explore Courses
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
