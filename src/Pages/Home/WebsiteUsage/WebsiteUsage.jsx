import { BookOpen, Award } from "lucide-react";
import Title from "../../../Components/Title/Title";

export default function WebsiteUsage() {
  return (
    <div
      className="py-12 px-6 
      bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black 
      transition-colors duration-500"
    >
      {/* Title */}
      <div className="text-center mb-6">
        <Title normalText={"ওয়েবসাইট"} blueText={"ব্যবহারবিধি"} />
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* কিভাবে পড়বেন */}
        <div
          className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg 
          bg-gradient-to-br from-gray-100 to-gray-50 
          dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 
          transition-colors duration-500"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            <h3
              className="text-lg font-semibold 
              bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"
            >
              কিভাবে পড়বেন
            </h3>
          </div>
          <ol className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>১. প্রথমে রেজিস্ট্রেশন করুন</li>
            <li>২. সিলেবাস বিভাগে গিয়ে অধ্যায় নির্বাচন করুন</li>
            <li>৩. ধারাবাহিকভাবে প্রতিটি অধ্যায় পড়ুন</li>
            <li>৪. গুরুত্বপূর্ণ বিষয়গুলো নোট করুন</li>
          </ol>
        </div>

        {/* পরীক্ষায় অংশগ্রহণ */}
        <div
          className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg 
          bg-gradient-to-br from-gray-100 to-gray-50 
          dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 
          transition-colors duration-500"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            <h3
              className="text-lg font-semibold 
              bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"
            >
              পরীক্ষায় অংশগ্রহণ
            </h3>
          </div>
          <ol className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>১. অধ্যায় পড়া শেষ করুন</li>
            <li>২. সংশ্লিষ্ট কুইজে অংশ নিন</li>
            <li>৩. ফলাফল দেখুন ও পর্যালোচনা করুন</li>
            <li>৪. সার্টিফিকেট ডাউনলোড করুন</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
