import React from "react";
import { FiFileText } from "react-icons/fi";

export default function NoArticles() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 min-h-[60vh] text-center">
      <div className="text-blue-500 dark:text-blue-400 text-6xl mb-6">
        <FiFileText />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">
        কোন নিবন্ধ পাওয়া যায়নি
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">
        নির্বাচিত বিভাগে এখনও কোনও নিবন্ধ নেই। অন্য বিভাগ বা সব নিবন্ধ দেখার
        জন্য উপরের category বাটন ব্যবহার করুন।
      </p>
    </div>
  );
}
