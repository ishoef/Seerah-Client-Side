import React from "react";

export default function SeerahHero({ searchQuery, setSearchQuery }) {
  return (
    <section className="relative bg-blue-50 dark:bg-gray-900 mt-10 py-20 dark:border-b border-b-gray-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 -z-10"></div>

      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          নবী কারীম ﷺ-এর জীবনবৃত্তান্ত
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          নবী ﷺ-এর জন্ম থেকে তাঁর মহৎ শিক্ষা পর্যন্ত সবকিছু জানুন। সীরাহ শেখার
          মাধ্যমে জীবনের মূল্যবান পাঠ ও অনুপ্রেরণা গ্রহণ করুন।
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {/* Buttons Row */}
          <div className="flex flex-row justify-center gap-4">
            <a
              href="#lectures"
              className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition text-center"
            >
              লেকচার দেখুন
            </a>
            <a
              href="#articles"
              className="flex-1 px-6 py-3 border border-blue-500 hover:bg-blue-100 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg font-semibold transition text-center"
            >
              নিবন্ধ পড়ুন
            </a>
          </div>

          {/* Search Input + Button */}
          <div className="flex flex-row gap-2">
            <input
              className="flex-1 px-4 py-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              type="search"
              placeholder="সন্ধান করুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition"
              onClick={() => console.log("Searching for:", searchQuery)}
            >
              🔍
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
