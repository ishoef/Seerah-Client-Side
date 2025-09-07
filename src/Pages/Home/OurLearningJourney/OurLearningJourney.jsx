import BookReading from "../../../illustration/BookReading";
import PageTurner from "../../../illustration/PageTurner";

export default function OurLearningJourney() {
  return (
    <div
      className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8
      bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-950 dark:to-black 
      transition-colors duration-500"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <div className="mb-4 w-16 sm:w-20 md:w-24 mx-auto">
          <PageTurner />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          যা যা{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            আলোচনা
          </span>{" "}
          থাকছে
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          বেশ কয়েকটি ধাপে সাজানো হয়েছে পুরো পাঠচক্র
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-start">
        {/* Left Illustration */}
        <div className="flex justify-center">
          <BookReading className="hidden md:block w-full max-w-xs sm:max-w-sm md:max-w-md" />
        </div>

        {/* Right Modules (Scrollable) */}
        <div className="h-[400px] sm:h-[450px] md:h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
          {/* Module Pills */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            মক্কী জীবন - নবুওয়াতের পূর্বে
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "নবীজির দুনিয়ায় আগমনের পূর্বাবস্থা",
              "তখনকার বিশ্ব পরিস্থিতি",
              "তখনকার সুপার পাওয়ার",
              "মক্কা ভূমি",
              "মক্কা ভূমি - আরবদের নিকট মক্কার অবস্থান",
              "কুরাইশ বংশ ও আরবের নেতৃত্ব",
              "কুরাইশদের ধর্ম ও ধর্মনীতি",
              "ব্যবসা - বাণিজ্য",
              "যুদ্ধ",
              "নবীজিীর দুনিয়ায় আগমন",
              "মাতার মৃত্যু",
              "দাদার মৃত্যু",
              "চাচা আবু তালিব এর দায়িত্বগ্রহণ",
              "নবীজির কুরাইশদের কাছে মর্যাদা",
              "আল-আমিন উপাধি",
              "হিলফুল ফুযুল সংগঠন",
              "নবীজির ব্যবসায় অংশগ্রহণ",
              "বিবাহ বন্ধন",
              "একাকিত্বগ্রহণ - হেরা গুহায় অবস্থান",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-blue-500 
                  text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white 
                  transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>

          {/* নবীজির মক্কী জীবন - নবুওয়াতের পরে */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            মক্কী জীবন - নবুওয়াতের পরে
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "নবীজির দুনিয়ায় আগমনের পূর্বাবস্থা",
              "নবীজিীর দুনিয়ায় আগমন",
              "তখনকার বিশ্ব পরিস্থিতি",
              "তখনকার সুপার পাওয়ার",
              "মক্কা ভূমি",
              "মক্কা ভূমি - আরবদের নিকট মক্কার অবস্থান",
              "কুরাইশ বংশ ও আরবের নেতৃত্ব",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-blue-500 
                  text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white 
                  transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>

          {/* নবীজির মাদানী জীবন */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            মাদানী জীবন
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "নবীজির দুনিয়ায় আগমনের পূর্বাবস্থা",
              "নবীজিীর দুনিয়ায় আগমন",
              "তখনকার বিশ্ব পরিস্থিতি",
              "তখনকার সুপার পাওয়ার",
              "মক্কা ভূমি",
              "মক্কা ভূমি - আরবদের নিকট মক্কার অবস্থান",
              "কুরাইশ বংশ ও আরবের নেতৃত্ব",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-blue-500 
                  text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white 
                  transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Sub Section */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            গাযওয়াতুর রাসুল (সা.)
          </h3>
          <div className="flex flex-wrap gap-3">
            {["বদর যুদ্ধ", "ওহুদ যুদ্ধ", "মুতা যুদ্ধ", "তাবুক যুদ্ধ"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-gray-400 dark:border-gray-600 
                  text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 
                  transition-colors cursor-pointer"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
