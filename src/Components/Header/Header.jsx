import React from "react";
import { NavLink } from "react-router";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 z-50 w-full border-b border-b-blue-100 dark:border-gray-700
      bg-blue-50 dark:bg-gray-900
      [background-image:linear-gradient(to_right,rgba(229,231,235,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.3)_1px,transparent_1px)]
      dark:[background-image:linear-gradient(to_right,rgba(75,85,99,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.3)_1px,transparent_1px)]
      [background-size:20px_20px]"
    >
      {/* Gradient overlay to match Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 dark:from-blue-900/40 dark:via-gray-900 dark:to-purple-900/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl text-blue-800 dark:text-white">
            সীরাত শিক্ষা
          </h1>
          {/* <h4 className="text-[17.5px] text-gray-400 dark:text-gray-400">নবী জীবনী শিক্ষা</h4> */}
        </div>

        {/* Navbar */}
        <nav>
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

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
            লগইন
          </button>
        </div>
      </div>
    </header>
  );
}
