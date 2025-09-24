import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { motion } from "framer-motion";
import { FaUserEdit, FaTrash, FaUserShield } from "react-icons/fa";

export default function Overview() {
  // Stats
  const [stats] = useState({
    totalUsers: 1200,
    totalAdmins: 5,
    totalArticles: 250,
    totalContent: 480,
  });

  // Toggle for Weekly vs Monthly
  const [timeframe, setTimeframe] = useState("monthly");

  // Chart Data
  const userActivityMonthly = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 600 },
    { month: "Mar", users: 700 },
    { month: "Apr", users: 500 },
    { month: "May", users: 900 },
    { month: "Jun", users: 1100 },
  ];

  const userActivityWeekly = [
    { week: "Week 1", users: 200 },
    { week: "Week 2", users: 350 },
    { week: "Week 3", users: 500 },
    { week: "Week 4", users: 650 },
  ];

  const contentUploads = [
    { category: "Articles", count: 250 },
    { category: "Quizzes", count: 120 },
    { category: "Videos", count: 110 },
  ];

  const stackedContent = [
    { month: "Jan", Articles: 40, Quizzes: 20, Videos: 10 },
    { month: "Feb", Articles: 50, Quizzes: 25, Videos: 15 },
    { month: "Mar", Articles: 60, Quizzes: 30, Videos: 20 },
    { month: "Apr", Articles: 70, Quizzes: 35, Videos: 25 },
  ];

  const roleDistribution = [
    { name: "Users", value: 1195 },
    { name: "Admins", value: 5 },
  ];

  const engagementLevels = [
    { subject: "Reading", A: 120 },
    { subject: "Quizzes", A: 98 },
    { subject: "Videos", A: 86 },
    { subject: "Forum", A: 99 },
    { subject: "Assignments", A: 85 },
  ];

  const colors = ["#3B82F6", "#F87171", "#10B981", "#8B5CF6"];

  // Users
  const [search, setSearch] = useState("");
  const [allUsers] = useState([
    { id: 1, name: "Ismail Hossen", email: "ismail@gmail.com", role: "user" },
    { id: 2, name: "Ahmed Ali", email: "ahmed@gmail.com", role: "user" },
    { id: 3, name: "Admin User", email: "admin@seerah.com", role: "admin" },
  ]);

  const filteredUsers = useMemo(
    () =>
      allUsers.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      ),
    [search, allUsers]
  );

  // Recent signups & notifications
  const recentSignups = [
    { id: 4, name: "New User", email: "new@seerah.com" },
    { id: 5, name: "Another User", email: "another@seerah.com" },
  ];

  const notifications = [
    { id: 1, type: "info", message: "System update scheduled tomorrow." },
    {
      id: 2,
      type: "warning",
      message: "5 users reported inappropriate content.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 🔹 Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-bold">Welcome Back, Admin 👋</h1>
        <p className="text-sm opacity-90">
          Here’s what’s happening with your platform today.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard label="Total Users" value={stats.totalUsers} color="blue" />
        <StatCard label="Total Admins" value={stats.totalAdmins} color="red" />
        <StatCard
          label="Total Articles"
          value={stats.totalArticles}
          color="purple"
        />
        <StatCard
          label="Total Content"
          value={stats.totalContent}
          color="green"
        />
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Activity Chart */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              User Activity
            </h2>
            <div className="space-x-2">
              <button
                onClick={() => setTimeframe("weekly")}
                className={`px-3 py-1 rounded-md text-sm ${
                  timeframe === "weekly"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setTimeframe("monthly")}
                className={`px-3 py-1 rounded-md text-sm ${
                  timeframe === "monthly"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={
                  timeframe === "monthly"
                    ? userActivityMonthly
                    : userActivityWeekly
                }
              >
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey={timeframe === "monthly" ? "month" : "week"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  fill="url(#colorUsers)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie Chart Role Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md"
        >
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Role Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={roleDistribution}
                dataKey="value"
                outerRadius={90}
                label
              >
                {roleDistribution.map((_, idx) => (
                  <Cell key={idx} fill={colors[idx % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Extra Charts: Area, Stacked Bar, Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Area Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md"
        >
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Growth Trend
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={userActivityMonthly}>
              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#10B981"
                fill="url(#colorGrowth)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Stacked Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md"
        >
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Content Comparison
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stackedContent}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Articles" stackId="a" fill="#3B82F6" />
              <Bar dataKey="Quizzes" stackId="a" fill="#F87171" />
              <Bar dataKey="Videos" stackId="a" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md"
        >
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Engagement Levels
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={engagementLevels}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Engagement"
                dataKey="A"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Users Table, Recent Signups, Notifications remain same */}
      {/* ... keep your existing table and lists here ... */}
    </div>
  );
}

// 🔹 Stats Card Component
function StatCard({ label, value, color }) {
  const colors = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
  };

  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${colors[color]} text-white text-xl font-bold mr-4`}
      >
        {value.toString().length > 3 ? `${(value / 1000).toFixed(1)}k` : value}
      </div>
      <div>
        <p className="text-gray-800 dark:text-gray-200 font-semibold">
          {label}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Seerah Stats</p>
      </div>
    </div>
  );
}
