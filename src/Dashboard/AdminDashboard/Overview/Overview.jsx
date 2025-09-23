import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Overview() {
  const [stats] = useState({
    totalUsers: 1200,
    totalAdmins: 5,
    totalArticles: 250,
    totalContent: 480,
  });

  const [userActivity] = useState([
    { month: "Jan", users: 400 },
    { month: "Feb", users: 600 },
    { month: "Mar", users: 700 },
    { month: "Apr", users: 500 },
    { month: "May", users: 900 },
    { month: "Jun", users: 1100 },
  ]);

  const [allUsers] = useState([
    { id: 1, name: "Ismail Hossen", email: "ismail@gmail.com", role: "user" },
    { id: 2, name: "Ahmed Ali", email: "ahmed@gmail.com", role: "user" },
    { id: 3, name: "Admin User", email: "admin@seerah.com", role: "admin" },
  ]);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Users" value={stats.totalUsers} color="blue" />
        <StatCard
          label="Total Admins"
          value={stats.totalAdmins}
          color="green"
        />
        <StatCard
          label="Total Articles"
          value={stats.totalArticles}
          color="purple"
        />
        <StatCard
          label="Total Content"
          value={stats.totalContent}
          color="orange"
        />
      </div>

      {/* User Activity Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          User Activity (Monthly)
        </h2>
        <div className="w-full h-64 sm:h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#3B82F6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* All Users Table */}
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md overflow-x-auto">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          All Users
        </h2>
        <div className="min-w-[600px]">
          {" "}
          {/* ensures horizontal scroll on small screens */}
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 dark:text-gray-300">
              {allUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      user.role === "admin" ? "text-red-500" : "text-blue-500"
                    }`}
                  >
                    {user.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 🔹 Stats Card Component
function StatCard({ label, value, color }) {
  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
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
