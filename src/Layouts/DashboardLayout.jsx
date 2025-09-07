import { Clock, ToolCase } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      {/* Icon */}
      <div className="bg-blue-500 rounded-full p-6 mb-6">
        <ToolCase className="w-12 h-12 text-white" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Dashboard Under Construction
      </h1>

      {/* Description */}
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-lg mb-6">
        This dashboard is currently under construction. We’re working hard to
        bring you a fully functional dashboard very soon. Please check back
        later!
      </p>

      {/* Clock Icon with message */}
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <Clock className="w-5 h-5 animate-spin" />
        <span>Will be available at the close of time ⏳</span>
      </div>

      {/* Go Home Button */}
      <Link
        to={"/"}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition"
      >
        মূলপাতায় ফিরে যান
      </Link>
    </div>
  );
}
