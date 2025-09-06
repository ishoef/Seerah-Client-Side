import React from "react";

export default function SeerahIntroSection() {
  const points = [
    "সীরাত কি এবং কেন তা অধ্যয়ন গুরুত্বপূর্ণ।",
    "ইতিহাস ও প্রেক্ষাপটের সংক্ষিপ্ত বর্ণনা।",
    "সহজ পাঠ্য বা ইনফোগ্রাফিক্সের মাধ্যমে মূল বিষয়গুলো উপস্থাপন।",
  ];

  const discussion = [
    "সীরাত অধ্যয়ন আমাদের নবীর জীবন, শিক্ষা ও নীতি বোঝার জন্য অত্যন্ত গুরুত্বপূর্ণ।",
    "এটি কেবল ধর্মীয় শিক্ষা নয়, বরং নৈতিক ও সামাজিক দিকগুলো শেখার সুযোগ দেয়।",
    "ছোট ছোট গল্প, সংক্ষিপ্ত উদাহরণ ও ইনফোগ্রাফিক্স ব্যবহার করে বিষয়গুলো সহজে বোধগম্য করা যায়।",
    "সীরাতের বিভিন্ন ঘটনা ও শিক্ষা আমাদের দৈনন্দিন জীবনে প্রয়োগযোগ্য নীতি প্রদান করে।",
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2 text-center md:text-left">
          সীরাতের সংক্ষিপ্ত পরিচিতি
        </h2>

        {/* Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
            >
              <div className="text-3xl md:text-4xl text-blue-600 dark:text-blue-400 font-bold mb-4">
                {idx + 1}.
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-lg">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Discussion Section */}
        <div className="bg-blue-50 dark:bg-gradient-to-r dark:from-gray-950 dark:via-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-inner">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-100 mb-4">
            আরও বিস্তারিত আলোচনা
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
            {discussion.map((item, idx) => (
              <li
                key={idx}
                className="hover:text-blue-600 dark:hover:text-blue-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
