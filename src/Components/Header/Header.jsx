import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { AuthContext } from "../../Context/AuthProvider";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const navLinks = [
    { path: "/", label: "মূলপাতা" },
    { path: "/articles", label: "সীরাত" },
    { path: "/quizes", label: "কুইজ" },
    { path: "/about", label: "আমাদের সম্পর্কে" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-b-blue-100 dark:border-gray-700 bg-blue-50 dark:bg-gray-900">
      <div className="relative max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="font-bold text-2xl text-blue-800 dark:text-white"
          >
            সীরাত শিক্ষা
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg font-medium">
            {navLinks.map((link) => (
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

        {/* Right Section (Desktop + Mobile) */}
        <div className="flex items-center gap-3">
          <DarkModeToggle />

          {/* Desktop Login/Profile */}
          {user ? (
            <div className="hidden md:block">
              <ProfilePhoto />
            </div>
          ) : (
            <Link
              to="/auth"
              className="hidden md:block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              লগইন
            </Link>
          )}

          {/* Mobile Login/Profile / Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <span className="w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            </button>
            {user ? (
              <ProfilePhoto />
            ) : (
              <Link
                to="/auth"
                className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
              >
                লগইন
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (nav links only) */}
      {menuOpen && (
        <div className="md:hidden relative bg-blue-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-lg font-medium">
            {navLinks.map((link) => (
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
        </div>
      )}
    </header>
  );
}
