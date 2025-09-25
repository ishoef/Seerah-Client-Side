import { NavLink, Outlet, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  FaHome,
  FaSignOutAlt,
  FaUsers,
  FaUserShield,
  FaFileAlt,
  FaPlus,
  FaTachometerAlt,
  FaBars,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DarkModeToggle from "../../Components/DarkModeToggle/DarkModeToggle";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const photoURL = user?.photoURL || "https://i.pravatar.cc/40";

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/auth");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar Overlay on Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-50 inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo / Dark Mode */}
          <div className="flex items-center justify-between px-6 py-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
            Admin Panel
            <DarkModeToggle />
          </div>

          {/* Navigation */}
          <nav className="flex-1 mt-4 flex flex-col space-y-2 px-4 overflow-y-auto">
            <NavItem
              to="overview"
              icon={<FaTachometerAlt />}
              label="Overview"
            />
            <NavItem to="add-content" icon={<FaPlus />} label="Add Content" />
            <NavItem
              to="add-articles"
              icon={<FaFileAlt />}
              label="Add Articles"
            />
            <NavItem to="all-users" icon={<FaUsers />} label="All Users" />
            <NavItem
              to="all-admins"
              icon={<FaUserShield />}
              label="All Admins"
            />
          </nav>

          {/* Bottom Profile Section */}
          <div className="border-t border-gray-300 dark:border-gray-700 p-4">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-blue-500"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                  {user?.displayName || "Admin User"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user?.email || "admin@seerah.com"}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer flex items-center space-x-2 px-3 py-2 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
              >
                <FaHome /> <span>Go Home</span>
              </button>
              <button
                onClick={handleLogout}
                className="cursor-pointer flex items-center space-x-2 px-3 py-2 rounded-lg text-red-600 hover:bg-red-100 dark:hover:bg-gray-700 transition"
              >
                <FaSignOutAlt /> <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between bg-white dark:bg-gray-800 p-4 shadow">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-blue-600 dark:text-blue-400 text-2xl"
          >
            <FaBars />
          </button>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
            Admin Dashboard
          </h1>
          <div />
        </div>

        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md min-h-[80vh]"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-2 rounded-lg font-medium transition truncate ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
        }`
      }
    >
      {icon} <span>{label}</span>
    </NavLink>
  );
}
