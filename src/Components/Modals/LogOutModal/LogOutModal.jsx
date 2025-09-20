import React from "react";

export default function LogoutConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null; // modal বন্ধ থাকলে কিছুই দেখাবে না

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          আপনি কি নিশ্চিত লগআউট করতে চান?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          লগআউট করলে আবার লগইন করতে হবে।
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            বাতিল
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold shadow transition"
          >
            হ্যাঁ, লগআউট করুন
          </button>
        </div>
      </div>
    </div>
  );
}
