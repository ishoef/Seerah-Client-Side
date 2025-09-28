import React from "react";
import { CheckCircle, XCircle, FileText } from "lucide-react";

export default function PositionCard() {
  return (
    <>
    <div className="my-3">
        <h1 className="text-2xl font-semibold">Your Position</h1>
    </div>
      <div className="bg-white dark:bg-gray-900 border border-blue-500/50 rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            {/* Rank Badge */}
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-600 text-white text-2xl font-bold">
              1
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Submitted Quizzes: 12
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                MD ISMAIL HOSSAN NAYEF
              </h2>
              <p className="text-yellow-600 dark:text-yellow-400 font-medium mt-1">
                Quiz Average Mark: 59.83
              </p>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="flex gap-4 text-center">
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-8 py-3">
              <FileText className="text-blue-500 mb-1" size={22} />
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                12
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Quizzes
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-8 py-3">
              <CheckCircle className="text-green-500 mb-1" size={22} />
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                12
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Submitted
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-8 py-3">
              <XCircle className="text-red-500 mb-1" size={22} />
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                0
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pending
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
