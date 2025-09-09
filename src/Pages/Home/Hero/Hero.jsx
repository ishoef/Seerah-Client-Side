import React, { useState } from "react";
import AlertModal from "../../../Components/AlertModal/AlertModal";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="
      relative 
      bg-gray-50 dark:bg-gray-900 
      overflow-hidden
      [background-image:linear-gradient(to_right,rgba(229,231,235,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.3)_1px,transparent_1px)] 
      dark:[background-image:linear-gradient(to_right,rgba(75,85,99,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.3)_1px,transparent_1px)]
      [background-size:20px_20px] border-b border-b-gray-200 dark:border-b-gray-800 mt-5 md:pt-20"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 dark:from-blue-900/40 dark:via-gray-900 dark:to-purple-900/40 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white">
            <span className="dark:text-blue-400 text-blue-600">সীরাত</span>{" "}
            শিক্ষা প্ল্যাটফর্ম
          </h1>
          <p className="mt-6 text-lg text-justify md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
            প্রিয় নবী করীম ﷺ এর জীবন ও আদর্শ থেকে মূল্যবান শিক্ষা গ্রহণ করুন।
            আমাদের কুইজ, পাঠ এবং ইন্টার‌্যাকটিভ উপকরণের মাধ্যমে আপনার জ্ঞান,
            বোধগম্যতা এবং দক্ষতা বৃদ্ধি করুন। প্রতিটি পাঠ আপনাকে আরও সুসংগঠিত ও
            সচেতন জীবনযাপনের পথে পরিচালিত করবে।
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button onClick={() => setIsOpen(true)} className="cursor-pointer px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
              শুরু করুন
            </button>
            <button onClick={() => setIsOpen(true)} className="cursor-pointer px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition">
              আরও জানুন
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.ibb.co.com/WdwZSc7/nano-banana-2025-09-05-T03-04-20.png"
            alt="Seerah Illustration"
            className="w-full max-w-md drop-shadow-xl rounded-xl"
          />
        </div>
      </div>

      {isOpen && <AlertModal setIsOpen={setIsOpen}/>}
    </section>
  );
}
