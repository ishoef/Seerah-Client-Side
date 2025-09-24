import React, { useState, useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEdit,
  FaCamera,
  FaLock,
  FaSave,
  FaTimes,
  FaUpload,
} from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";
import DarkModeToggle from "../../../Components/DarkModeToggle/DarkModeToggle";

/**
 * UserProfile.jsx
 * - Replace placeholder API calls (updateProfileApi, uploadPhotoApi, updatePasswordApi, saveSettingsApi)
 * - Expects AuthContext to provide { user, refreshUser } where refreshUser refetches updated user data
 */

export default function UserProfile() {
  const { user, refreshUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Profile form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    bio: "",
    role: "",
    joinDate: "",
  });

  // Settings (local state — persist via API)
  const [settings, setSettings] = useState({
    darkMode: false, // hook into your theme manager
    notifyNewArticles: true,
    notifyQuizResults: true,
  });

  // Photo upload
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  // Password change
  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });
  const [pwError, setPwError] = useState("");
  // Notifications & Messages dummy state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "নতুন কুইজ আপনার জন্য প্রস্তুত!",
      date: "2025-09-20",
      read: false,
    },
    {
      id: 2,
      text: "আপনার প্রোফাইল সফলভাবে আপডেট হয়েছে।",
      date: "2025-09-22",
      read: true,
    },
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "Admin",
      text: "স্বাগতম! আপনার শেখার যাত্রা শুরু করুন।",
      date: "2025-09-21",
    },
    {
      id: 2,
      from: "Mentor",
      text: "আজকের ক্লাস ৮টায় শুরু হবে।",
      date: "2025-09-23",
    },
  ]);

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.displayName || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
        bio: user.bio || "",
        role: user.role || "User",
        joinDate: user.metadata?.creationTime || "",
      });
      setPhotoPreview(user.photoURL || null);
    }
    // If you store theme in user prefs, set settings darkMode accordingly
    // setSettings(prev => ({ ...prev, darkMode: user?.prefs?.darkMode ?? false }));
  }, [user]);

  // ------------- placeholder API functions -------------
  const updateProfileApi = async (payload) => {
    // Replace with axios/fetch to your backend
    // e.g. await axios.put(`/api/users/${user.uid}`, payload)
    console.log("updateProfileApi", payload);
    return { ok: true };
  };

  const uploadPhotoApi = async (file) => {
    // Replace with upload logic (Cloud storage / S3 / Firebase storage)
    // Return new photoURL
    console.log("uploadPhotoApi", file);
    return { ok: true, url: "https://i.pravatar.cc/300?u=updated" };
  };

  const updatePasswordApi = async ({ current, newPass }) => {
    // Replace with reauth + update logic
    console.log("updatePasswordApi", current, newPass);
    return { ok: true };
  };

  const saveSettingsApi = async (newSettings) => {
    console.log("saveSettingsApi", newSettings);
    return { ok: true };
  };
  // -----------------------------------------------------

  // Handle profile form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  // Save profile
  const handleSaveProfile = async () => {
    const payload = { ...form };
    const res = await updateProfileApi(payload);
    if (res.ok) {
      setIsEditing(false);
      if (refreshUser) await refreshUser();
    } else {
      // show error UI
      alert("Failed to update profile");
    }
  };

  // Upload photo
  const handlePhotoSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadPhotoApi(file);
      if (res.ok && res.url) {
        setPhotoPreview(res.url);
        if (refreshUser) await refreshUser();
      } else {
        alert("Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Upload error");
    } finally {
      setUploading(false);
      // reset file input
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Change password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPwError("");
    if (!passwords.current || !passwords.newPass || !passwords.confirm) {
      setPwError("অনুগ্রহ করে সব মাঠ পূরণ করুন");
      return;
    }
    if (passwords.newPass !== passwords.confirm) {
      setPwError("New password and confirm must match");
      return;
    }
    const res = await updatePasswordApi({
      current: passwords.current,
      newPass: passwords.newPass,
    });
    if (res.ok) {
      setShowPasswordModal(false);
      setPasswords({ current: "", newPass: "", confirm: "" });
      alert("Password updated");
    } else {
      setPwError("Password update failed");
    }
  };

  // Save settings
  const handleSaveSettings = async () => {
    const res = await saveSettingsApi(settings);
    if (res.ok) {
      alert("Settings saved");
      // optionally update theme (if darkMode toggled)
    } else {
      alert("Failed to save settings");
    }
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Top card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src={photoPreview || "https://i.pravatar.cc/300"}
              alt="profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 right-1 flex gap-2">
              <label
                htmlFor="photo"
                className="cursor-pointer bg-white/90 dark:bg-gray-900/80 p-2 rounded-full shadow hover:scale-105 transition"
                title="Upload photo"
              >
                <FaCamera className="text-blue-600" />
              </label>
              <input
                id="photo"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoSelect}
                className="hidden"
              />
            </div>
          </div>
        </div>

        {/* Info & actions */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold font-bengali">
                {form.fullName || "প্রিয় ব্যবহারকারী"}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {form.email}
              </p>
              {form.bio && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {form.bio}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsEditing((s) => !s)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
                title="Edit profile"
              >
                <FaEdit /> <span>Edit Profile</span>
              </button>

              <button
                onClick={() => setShowPasswordModal(true)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                title="Change password"
              >
                <FaLock /> <span>Change Password</span>
              </button>
            </div>
          </div>

          {/* meta row */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="text-gray-600 dark:text-gray-300">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Phone
              </div>
              <div>{form.phone || "—"}</div>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Joined
              </div>
              <div>
                {form.joinDate
                  ? new Date(form.joinDate).toLocaleDateString()
                  : "—"}
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Role
              </div>
              <div>{form.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit form */}
      <AnimatePresence>
        {isEditing && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="mt-1 input-base"
                />
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled
                  className="mt-1 input-base bg-gray-100 dark:bg-gray-700/40"
                />
              </div>

              <div>
                <label className="text-sm">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 input-base"
                />
              </div>

              <div>
                <label className="text-sm">Role</label>
                <input
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  disabled
                  className="mt-1 input-base bg-gray-100 dark:bg-gray-700/40"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm">Bio / About</label>
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  className="mt-1 input-base h-28"
                />
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleSaveProfile}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                <FaSave /> Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <FaTimes /> Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings & Notifications */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Settings Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Settings</h3>
            <DarkModeToggle />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Dark Mode</p>
                <p className="text-xs text-gray-500">Switch theme</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, darkMode: e.target.checked }))
                  }
                  className="sr-only"
                />
                <div
                  className={`w-11 h-6 rounded-full transition ${
                    settings.darkMode
                      ? "bg-blue-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                ></div>
              </label>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">
                Notification Preferences
              </p>
              <div className="space-y-2">
                <label className="flex items-center justify-between">
                  <span className="text-sm">New Articles</span>
                  <input
                    type="checkbox"
                    checked={settings.notifyNewArticles}
                    onChange={(e) =>
                      setSettings((s) => ({
                        ...s,
                        notifyNewArticles: e.target.checked,
                      }))
                    }
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Quiz Results</span>
                  <input
                    type="checkbox"
                    checked={settings.notifyQuizResults}
                    onChange={(e) =>
                      setSettings((s) => ({
                        ...s,
                        notifyQuizResults: e.target.checked,
                      }))
                    }
                  />
                </label>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>

        {/* Messages / Notifications quick view */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold mb-3">Notifications</h4>
            <ul className="space-y-2 text-sm">
              {notifications?.map((n) => (
                <li key={n.id} className="flex justify-between">
                  <span>{n.message}</span>
                  <span className="text-gray-500 text-xs">{n.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold mb-3">Messages</h4>
            <ul className="space-y-2 text-sm">
              {messages?.map((m) => (
                <li key={m.id}>
                  <p className="font-medium">{m.from}</p>
                  <p className="text-gray-600 dark:text-gray-300">{m.text}</p>
                  <p className="text-xs text-gray-400 mt-1">{m.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          >
            <motion.form
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onSubmit={handleChangePassword}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Change Password</h3>
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="text-gray-600 dark:text-gray-300"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm">Current Password</label>
                  <input
                    type="password"
                    value={passwords.current}
                    onChange={(e) =>
                      setPasswords((p) => ({ ...p, current: e.target.value }))
                    }
                    className="mt-1 input-base"
                  />
                </div>

                <div>
                  <label className="text-sm">New Password</label>
                  <input
                    type="password"
                    value={passwords.newPass}
                    onChange={(e) =>
                      setPasswords((p) => ({ ...p, newPass: e.target.value }))
                    }
                    className="mt-1 input-base"
                  />
                </div>

                <div>
                  <label className="text-sm">Confirm New Password</label>
                  <input
                    type="password"
                    value={passwords.confirm}
                    onChange={(e) =>
                      setPasswords((p) => ({ ...p, confirm: e.target.value }))
                    }
                    className="mt-1 input-base"
                  />
                </div>

                {pwError && <p className="text-sm text-red-600">{pwError}</p>}
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 rounded-md border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-500 text-white"
                >
                  Update
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ----------------- small styles notes -----------------
  - input-base: you should add in your global CSS:
    .input-base {
      @apply w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm;
    }
  - Or replace input className with full Tailwind classes.
------------------------------------------------------ */
