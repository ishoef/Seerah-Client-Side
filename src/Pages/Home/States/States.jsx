import React from "react";
import {
  FaUser,
  FaBook,
  FaCertificate,
  FaAward,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

const stateData = [
  { icon: "FaUser", label: "Visitors", amount: "50+" },
  { icon: "FaClipboardList", label: "Exams Conducted", amount: "50+" },
  { icon: "FaCertificate", label: "Certificates Issued", amount: "50+" },
  { icon: "FaBook", label: "Courses", amount: "20+" },
  { icon: "FaAward", label: "Achievements", amount: "15+" },
  { icon: "FaUsers", label: "Active Students", amount: "100+" },
];

const iconMap = {
  FaUser: FaUser,
  FaBook: FaBook,
  FaCertificate: FaCertificate,
  FaAward: FaAward,
  FaUsers: FaUsers,
  FaClipboardList: FaClipboardList,
};

export default function States() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {stateData.map((state, idx) => {
          const Icon = iconMap[state.icon];
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
            >
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-3">
                <Icon />
              </div>
              <h3 className="text-gray-800 dark:text-gray-200 font-bold text-xl">
                {state.amount}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{state.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
