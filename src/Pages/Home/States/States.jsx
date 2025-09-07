import React from "react";
import {
  FaUser,
  FaBook,
  FaCertificate,
  FaAward,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import Title from "../../../Components/Title/Title";

const stateData = [
  { icon: "FaUser", label: "মোট ভিজিটর", amount: "500+" },
  { icon: "FaClipboardList", label: "পরীক্ষায় অংশগ্রহণকারী", amount: "450+" },
  { icon: "FaCertificate", label: "সার্টিফিকেট অর্জনকারী", amount: "350+" },
  { icon: "FaBook", label: "মোট অধ্যায়", amount: "20+" },
  { icon: "FaAward", label: "বিশেষ সম্মাননা", amount: "15+" },
  { icon: "FaUsers", label: "এক্টিভ পাঠক", amount: "100+" },
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800">
      <div className="text-center mb-6">
        <Title normalText={"ওয়েবসাইট"} blueText={"এক্টিভিটি"} />
      </div>
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
