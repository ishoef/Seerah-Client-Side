import React from "react";

export default function AlertModal({ setIsOpen }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-black/60 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-96 p-6 relative transition-colors">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition"
        >
          ✕
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          ⚡ কাজ চলমান
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          এই ফিচারটি এখনো ডেভেলপমেন্টে আছে 🙂
        </p>

        {/* Action button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer px-5 py-2.5 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition"
          >
            ঠিক আছে
          </button>
        </div>
      </div>
    </div>
  );
}
