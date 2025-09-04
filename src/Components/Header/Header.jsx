import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-blue-50 py-3 w-full border-b border-b-blue-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl text-blue-800">সীরাত শিক্ষা</h1>
          {/* <h4 className="text-[17.5px] text-gray-400">নবী জীবনী শিক্ষা</h4> */}
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
                    `px-2  transition-colors duration-200 ${
                      isActive
                        ? "text-blue-700 border-b-2 border-blue-600 font-semibold"
                        : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-400"
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
        <div>
          <button className="btn px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            লগইন
          </button>
        </div>
      </div>
    </header>
  );
}
