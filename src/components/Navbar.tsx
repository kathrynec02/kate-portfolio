import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider"; 

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${
        darkMode ? "bg-blue-800" : "bg-gray-800"
      } text-white p-4 fixed w-full top-0 shadow-md z-50`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">KC</span>
            <span className="text-2xl font-bold">Kate Chadwick</span>
          </div>
        </Link>

        <div className="space-x-6 flex items-center">
          <Link href="/#projects">
            <span className="cursor-pointer hover:text-gray-300">Projects</span>
          </Link>
          <Link href="/experience">
            <span className="cursor-pointer hover:text-gray-300">Experience</span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer hover:text-gray-300">About</span>
          </Link>
          <Link href="/#contact">
            <span className="cursor-pointer hover:text-gray-300">Contact</span>
          </Link>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-md focus:outline-none"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-300" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
