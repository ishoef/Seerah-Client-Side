import React, { useState, useEffect, useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaChartLine,
  FaBookmark,
  FaQuestionCircle,
  FaCog,
  FaHome,
  FaSignOutAlt,
  FaBars,
  FaBell,
  FaEnvelope,
  FaTrophy,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { AuthContext } from "../../Context/AuthProvider";
import DarkModeToggle from "../../Components/DarkModeToggle/DarkModeToggle";

export default function UserDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy state — replace with real API calls
  const [stats, setStats] = useState({
    completedQuizzes: 8,
    readArticles: 42,
    savedArticles: 12,
    activeStreak: 6,
  });

  const [activity] = useState([
    {
      id: 1,
      title: "রাসূল (ﷺ) - জীবনী পরিচিতি",
      date: "2025-09-01",
      status: "completed",
    },
    { id: 2, title: "বরাবরের হাদিস পাঠ", date: "2025-09-03", status: "saved" },
    {
      id: 3,
      title: "কাজিয়া কুইজ — পর্ব ২",
      date: "2025-09-05",
      status: "completed",
    },
  ]);

  const [chartData] = useState([
    { day: "Mon", progress: 2 },
    { day: "Tue", progress: 4 },
    { day: "Wed", progress: 3 },
    { day: "Thu", progress: 5 },
    { day: "Fri", progress: 6 },
    { day: "Sat", progress: 4 },
    { day: "Sun", progress: 7 },
  ]);

  const [notifications] = useState([
    { id: 1, message: "নতুন প্রবন্ধ যুক্ত হয়েছে", date: "2025-09-20" },
    { id: 2, message: "আপনার কুইজ স্কোর আপডেট হয়েছে", date: "2025-09-22" },
  ]);

  const [messages] = useState([
    { id: 1, from: "Admin", text: "Welcome to Seerah!", date: "2025-09-15" },
    {
      id: 2,
      from: "Teacher",
      text: "Keep up your daily streak!",
      date: "2025-09-18",
    },
  ]);

  const [achievements] = useState([
    { id: 1, title: "First Quiz Completed", icon: "🏆" },
    { id: 2, title: "10 Articles Read", icon: "📖" },
    { id: 3, title: "7-Day Streak", icon: "🔥" },
  ]);

  const handleLogout = async () => {
    if (logout) await logout();
    navigate("/auth");
  };

  const greetingName =
    user?.displayName || user?.email?.split("@")[0] || "প্রিয় ব্যবহারকারী";

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* overlay for mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 font-bengali">
              Seerah
            </h2>
            <div className="hidden md:block text-sm text-gray-500 dark:text-gray-300">
              <DarkModeToggle />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
            <SidebarLink to="profile" icon={<FaUser />} label="My Profile" />
            <SidebarLink
              to="progress"
              icon={<FaChartLine />}
              label="My Progress"
            />
            <SidebarLink
              to="saved"
              icon={<FaBookmark />}
              label="Saved Articles"
            />
            <SidebarLink
              to="quizzes"
              icon={<FaQuestionCircle />}
              label="My Quizzes"
            />
            <SidebarLink to="settings" icon={<FaCog />} label="Settings" />
          </nav>

          {/* Bottom */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user?.photoURL || "https://i.pravatar.cc/40"}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold font-bengali truncate">
                  {user ? greetingName : "প্রবেশ করুন"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user?.email || "guest@seerah.app"}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => navigate("/")}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
              >
                <FaHome /> Go Home
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 dark:bg-transparent dark:hover:bg-gray-700 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col md:ml-72">
        {/* top mobile header */}
        <header className="md:hidden flex items-center justify-between bg-white dark:bg-gray-800 px-4 py-3 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-blue-600 dark:text-blue-400 text-2xl"
          >
            <FaBars />
          </button>
          <div className="flex-1 text-center">
            <h3 className="text-lg font-semibold font-bengali">ড্যাশবোর্ড</h3>
          </div>
          <div style={{ width: 32 }} />
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {/* Welcome Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold font-bengali">
                  স্বাগতম,{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {greetingName}
                  </span>
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  আপনার শেখার অগ্রগতি এখানে দেখুন — কুইজ, নিবন্ধ ও সংরক্ষিত
                  সামগ্রী।
                </p>
              </div>

              <div className="flex gap-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 px-4 py-3 rounded-lg text-blue-600 dark:text-blue-300">
                  <div className="text-xs">Active Streak</div>
                  <div className="text-lg font-semibold">
                    {stats.activeStreak} দিন
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg text-green-600">
                  <div className="text-xs">Completed Quizzes</div>
                  <div className="text-lg font-semibold">
                    {stats.completedQuizzes}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                label="Completed Quizzes"
                value={stats.completedQuizzes}
                color="bg-blue-500"
              />
              <StatCard
                label="Read Articles"
                value={stats.readArticles}
                color="bg-indigo-500"
              />
              <StatCard
                label="Saved Articles"
                value={stats.savedArticles}
                color="bg-teal-500"
              />
              <StatCard
                label="Active Streak (days)"
                value={stats.activeStreak}
                color="bg-yellow-500"
              />
            </div>

            {/* Chart + Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Weekly Progress Line Chart */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">সাপ্তাহিক অগ্রগতি</h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Last 7 days
                  </div>
                </div>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
                      <XAxis dataKey="day" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="progress"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        dot
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Recent Activity</h3>
                  <button className="text-sm text-blue-600 hover:underline">
                    View all
                  </button>
                </div>

                <ul className="space-y-3">
                  {activity.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-600">
                        {item.status === "completed" ? "✓" : "★"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate">{item.title}</p>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              item.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {item.date}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Extra Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bar Chart */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3">
                  Monthly Articles Read
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={[
                      { month: "Jan", articles: 10 },
                      { month: "Feb", articles: 15 },
                      { month: "Mar", articles: 22 },
                      { month: "Apr", articles: 18 },
                      { month: "May", articles: 30 },
                      { month: "Jun", articles: 25 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="articles"
                      fill="#3B82F6"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart */}
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3">
                  Learning Breakdown
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={[
                        {
                          name: "Completed Quizzes",
                          value: stats.completedQuizzes,
                        },
                        { name: "Saved Articles", value: stats.savedArticles },
                        { name: "Read Articles", value: stats.readArticles },
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      label
                      dataKey="value"
                    >
                      <Cell fill="#3B82F6" />
                      <Cell fill="#10B981" />
                      <Cell fill="#F59E0B" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Progress Goals */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4">
                Your Progress Goals
              </h3>
              <div className="space-y-4">
                {/* Weekly Quiz Goal */}
                <GoalBar
                  label="Weekly Quiz Goal (10)"
                  current={stats.completedQuizzes}
                  target={10}
                  color="bg-blue-500"
                />
                {/* Article Goal */}
                <GoalBar
                  label="Article Reading Goal (50)"
                  current={stats.readArticles}
                  target={50}
                  color="bg-green-500"
                />
                {/* Streak Target */}
                <GoalBar
                  label="30-Day Streak"
                  current={stats.activeStreak}
                  target={30}
                  color="bg-yellow-500"
                />
              </div>
            </div>

            {/* Notifications / Messages / Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Notifications */}
              <Card title="Notifications" icon={<FaBell />}>
                <ul className="space-y-2">
                  {notifications.map((n) => (
                    <li key={n.id} className="flex justify-between text-sm">
                      <span>{n.message}</span>
                      <span className="text-gray-500">{n.date}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Messages */}
              <Card title="Messages" icon={<FaEnvelope />}>
                <ul className="space-y-2">
                  {messages.map((m) => (
                    <li key={m.id} className="text-sm">
                      <p className="font-medium">{m.from}</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {m.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Achievements */}
              <Card title="Achievements" icon={<FaTrophy />}>
                <div className="flex flex-wrap gap-3">
                  {achievements.map((a) => (
                    <div
                      key={a.id}
                      className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-center w-24"
                    >
                      <div className="text-2xl">{a.icon}</div>
                      <p className="text-xs mt-1">{a.title}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* optional children routes */}
            <div>
              <Outlet />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

/* ----------------- small reusable components ----------------- */
function SidebarLink({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span className="font-bengali">{label}</span>
    </NavLink>
  );
}

function StatCard({ label, value, color = "bg-blue-500" }) {
  return (
    <div className="p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color}`}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 12h18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function GoalBar({ label, current, target, color }) {
  const percent = Math.min((current / target) * 100, 100);
  return (
    <div>
      <p className="text-sm font-medium mb-1">{label}</p>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

function Card({ title, icon, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-2 mb-3">
        {icon} <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}
