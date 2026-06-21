import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";

const links = [
  { href: "/#projects", label: "projects" },
  { href: "/experience", label: "experience" },
  { href: "/about", label: "about" },
  { href: "/#contact", label: "contact" },
];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 z-50 w-full border-b border-hairline/70 bg-canvas/80 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/60"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2" aria-label="kate chadwick — home">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral transition-transform duration-300 group-hover:scale-150" />
          <span className="font-display text-xl tracking-tight text-ink">
            kate chadwick
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative rounded-md px-3 py-1.5 font-mono text-sm text-muted transition-colors duration-300 hover:text-coral"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-1 rounded-full border border-hairline p-2 text-muted transition-colors duration-300 hover:border-coral hover:text-coral"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>
        </div>
      </div>

      {/* mobile links row */}
      <ul className="flex items-center justify-center gap-1 border-t border-hairline/60 px-6 py-2 sm:hidden">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="rounded-md px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-300 hover:text-coral"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
