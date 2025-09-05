import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full border-b border-b-blue-100 dark:border-gray-700
      bg-blue-50 dark:bg-gray-900
      [background-image:linear-gradient(to_right,rgba(229,231,235,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.3)_1px,transparent_1px)]
      dark:[background-image:linear-gradient(to_right,rgba(75,85,99,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.3)_1px,transparent_1px)]
      [background-size:20px_20px]"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 dark:from-blue-900/40 dark:via-gray-900 dark:to-purple-900/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <div>
          <Link
            to={"/"}
            className="font-bold text-2xl text-blue-800 dark:text-white"
          >
            সীরাত শিক্ষা
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg font-medium">
            {[
              { path: "/", label: "হোম" },
              { path: "/seerah", label: "সীরাত" },
              { path: "/quizes", label: "কুইজ" },
              { path: "/about", label: "আমাদের সম্পর্কে" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2 transition-colors duration-200 ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-400 dark:hover:border-blue-500"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <DarkModeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <span className="w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
          </button>

          {/* Desktop Login Button */}
          <button className="hidden md:block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
            লগইন
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden relative bg-blue-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-lg font-medium">
            {[
              { path: "/", label: "হোম" },
              { path: "/seerah", label: "সীরাত" },
              { path: "/quizes", label: "কুইজ" },
              { path: "/about", label: "আমাদের সম্পর্কে" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 transition-colors duration-200 ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Login Button */}
          <button className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
            লগইন
          </button>
        </div>
      )}
    </header>
  );
}
