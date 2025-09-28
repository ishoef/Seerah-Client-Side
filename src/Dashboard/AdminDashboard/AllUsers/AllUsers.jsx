// AllUsers.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrash,
  FaBan,
  FaUserShield,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";

/**
 * AllUsers Management Component
 *
 * - Replace dummyUsers with API data / fetch in useEffect as needed
 * - Wire deleteUserApi / banUserApi to server endpoints
 */

const PAGE_SIZE = 10;

export default function AllUsers() {
  const [users, setUsers] = useState(dummyUsers()); // replace with API fetch
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // confirmation modal state
  const [confirm, setConfirm] = useState({
    open: false,
    action: null, // 'delete' | 'ban'
    userId: null,
    userName: null,
  });

  // Derived filtered list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        (u.name || "").toLowerCase().includes(q) ||
        (u.email || "").toLowerCase().includes(q) ||
        (u.phone || "").toLowerCase().includes(q)
    );
  }, [users, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const pageData = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Placeholder API functions (replace with axios/fetch)
  const deleteUserApi = async (id) => {
    // await axios.delete(`/api/users/${id}`)
    return { ok: true };
  };
  const banUserApi = async (id, banned) => {
    // await axios.post(`/api/users/${id}/ban`, { banned })
    return { ok: true };
  };

  // Actions
  const handleOpenConfirm = (action, user) => {
    setConfirm({
      open: true,
      action,
      userId: user.id,
      userName: user.name,
    });
  };

  const handleConfirm = async () => {
    const { action, userId } = confirm;
    if (!action || !userId) return;

    if (action === "delete") {
      const res = await deleteUserApi(userId);
      if (res.ok) {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
      } else {
        alert("Delete failed");
      }
    } else if (action === "ban") {
      const user = users.find((u) => u.id === userId);
      const newStatus = user?.status === "Banned" ? "Active" : "Banned";
      const res = await banUserApi(userId, newStatus === "Banned");
      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === userId ? { ...u, status: newStatus, role: u.role } : u
          )
        );
      } else {
        alert("Ban/unban failed");
      }
    }

    setConfirm({ open: false, action: null, userId: null, userName: null });
  };

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 border-b border-gray-200 dark:border-gray-700">
        {/* Left: Title & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            All Users
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage registered users — search, ban, delete and view activity.
          </p>
        </div>

        {/* Right: Search */}
        <div className="relative w-full sm:w-80">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 dark:text-gray-500">
            <FaSearch className="w-4 h-4" />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search by name, email or phone..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 
        bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
        placeholder-gray-400 dark:placeholder-gray-500 
        focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>

      {/* Quick summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {/* Total Users */}
        <div className="p-5 rounded-xl shadow-md bg-blue-500 dark:bg-blue-700 text-white transition-colors duration-300">
          <p className="text-sm opacity-90 dark:opacity-80">Total Users</p>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>

        {/* Active Users */}
        <div className="p-5 rounded-xl shadow-md bg-green-500 dark:bg-green-700 text-white transition-colors duration-300">
          <p className="text-sm opacity-90 dark:opacity-80">Active</p>
          <p className="text-2xl font-bold">
            {users.filter((u) => u.status === "Active").length}
          </p>
        </div>

        {/* Banned Users */}
        <div className="p-5 rounded-xl shadow-md bg-red-500 dark:bg-red-700 text-white transition-colors duration-300">
          <p className="text-sm opacity-90 dark:opacity-80">Banned</p>
          <p className="text-2xl font-bold">
            {users.filter((u) => u.status === "Banned").length}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full table-auto">
            <thead className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
              <tr className="text-left text-xs uppercase text-gray-600 dark:text-gray-300">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                {/* <th className="px-4 py-3">Phone</th> */}
                <th className="px-4 py-3">Join Date</th>
                <th className="px-4 py-3">Articles Read</th>
                <th className="px-4 py-3">Quizzes Joined</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              <AnimatePresence initial={false}>
                {pageData.length === 0 ? (
                  <motion.tr
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800"
                  >
                    <td colSpan={9} className="p-6 text-center text-gray-500">
                      No users found.
                    </td>
                  </motion.tr>
                ) : (
                  pageData.map((u) => (
                    <motion.tr
                      key={u.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500">
                            <img
                              src={u.avatar}
                              alt={u.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">
                              {u.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {u.role}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                        {u.email}
                      </td>
                      {/* <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                        {u.phone}
                      </td> */}
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                        {formatDate(u.joinDate)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                        {u.articlesRead}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                        {u.quizzesJoined}
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-md text-sm font-medium ${
                            u.role === "admin"
                              ? "bg-red-100 text-red-700 dark:bg-red-900/40"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900/40"
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-md text-sm font-medium ${
                            u.status === "Banned"
                              ? "bg-red-50 text-red-700 dark:bg-red-900/30"
                              : "bg-green-50 text-green-700 dark:bg-green-900/30"
                          }`}
                        >
                          {u.status}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            title={
                              u.status === "Banned" ? "Unban user" : "Ban user"
                            }
                            onClick={() => handleOpenConfirm("ban", u)}
                            className="p-2 rounded-md bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 transition"
                          >
                            <FaBan />
                          </button>
                          <button
                            title="Make admin"
                            onClick={() =>
                              setUsers((prev) =>
                                prev.map((p) =>
                                  p.id === u.id
                                    ? {
                                        ...p,
                                        role:
                                          p.role === "admin" ? "user" : "admin",
                                      }
                                    : p
                                )
                              )
                            }
                            className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                          >
                            <FaUserShield />
                          </button>
                          <button
                            title="Delete user"
                            onClick={() => handleOpenConfirm("delete", u)}
                            className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * PAGE_SIZE + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(currentPage * PAGE_SIZE, filtered.length)}
            </span>{" "}
            of <span className="font-medium">{filtered.length}</span> users
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50"
              title="Previous"
            >
              <FaChevronLeft />
            </button>
            <div className="text-sm text-gray-700 dark:text-gray-200 px-3">
              Page {currentPage} / {totalPages}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50"
              title="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      <AnimatePresence>
        {confirm.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-md w-full p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {confirm.action === "delete"
                  ? "Delete User"
                  : "Ban / Unban User"}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Are you sure you want to{" "}
                <span className="font-medium">
                  {confirm.action === "delete" ? "delete" : "ban/unban"}
                </span>{" "}
                <span className="font-semibold">{confirm.userName}</span>? This
                action cannot be undone.
              </p>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() =>
                    setConfirm({
                      open: false,
                      action: null,
                      userId: null,
                      userName: null,
                    })
                  }
                  className="px-4 py-2 rounded-md border"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ----------------- helper components & utils ----------------- */

function SmallKpi({ label, value }) {
  return (
    <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-sm">
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  );
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString();
}

/* ----------------- dummy data generator ----------------- */
function dummyUsers() {
  // small set for demo — extend or replace with real data
  return [
    {
      id: "u1",
      name: "Ismail Hossen",
      email: "ismail@gmail.com",
      phone: "+8801712345678",
      joinDate: "2024-03-12",
      articlesRead: 34,
      quizzesJoined: 12,
      role: "user",
      status: "Active",
      avatar: "https://i.pravatar.cc/80?img=5",
    },
    {
      id: "u2",
      name: "Ahmed Ali",
      email: "ahmed@gmail.com",
      phone: "+8801723456789",
      joinDate: "2024-05-02",
      articlesRead: 12,
      quizzesJoined: 3,
      role: "user",
      status: "Active",
      avatar: "https://i.pravatar.cc/80?img=6",
    },
    {
      id: "u3",
      name: "Admin User",
      email: "admin@seerah.com",
      phone: "+8801734567890",
      joinDate: "2023-11-10",
      articlesRead: 120,
      quizzesJoined: 40,
      role: "admin",
      status: "Active",
      avatar: "https://i.pravatar.cc/80?img=7",
    },
    {
      id: "u4",
      name: "Banned User",
      email: "banned@example.com",
      phone: "+8801745678901",
      joinDate: "2024-01-20",
      articlesRead: 1,
      quizzesJoined: 0,
      role: "user",
      status: "Banned",
      avatar: "https://i.pravatar.cc/80?img=8",
    },
    // generate a few more to demo pagination
    ...Array.from({ length: 12 }).map((_, i) => ({
      id: `gen${i}`,
      name: `Demo User ${i + 1}`,
      email: `demo${i + 1}@seerah.app`,
      phone: `+88017${10000000 + i}`,
      joinDate: `2024-0${(i % 9) + 1}-0${(i % 27) + 1}`,
      articlesRead: Math.floor(Math.random() * 50),
      quizzesJoined: Math.floor(Math.random() * 20),
      role: i % 6 === 0 ? "admin" : "user",
      status: i % 7 === 0 ? "Banned" : "Active",
      avatar: `https://i.pravatar.cc/80?img=${10 + i}`,
    })),
  ];
}
