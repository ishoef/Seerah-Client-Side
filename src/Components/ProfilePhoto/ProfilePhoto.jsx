import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";

export default function ProfilePhoto() {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  console.log(user);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Avatar */}
      <img
        src={user?.photoURL || "U"}
        alt="Profile"
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer hover:scale-105 transition"
      />

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 z-50">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-b-gray-300 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {user?.displayName || "User"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
          </div>

          {/* Dashboard Link */}
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Dashboard
          </Link>

          {/* Logout Button */}
          <button
            onClick={() => {
              logOut();
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
