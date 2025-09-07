import { MessageSquare, Users, Clock } from "lucide-react";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import { useState } from "react";

export default function CommunitySupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        className="w-full py-16 px-6 
      bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-950 dark:to-black 
      transition-colors duration-500"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            <span className="text-blue-500"> কমিউনিটি</span> ও{" "}
            <span className="text-blue-500">সাপোর্ট</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Forum */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 
          bg-white dark:bg-gray-900 p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <MessageSquare className="w-10 h-10 mx-auto text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              আলোচনা ফোরাম
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">
              অন্যান্য শিক্ষার্থীদের সাথে আলোচনা করুন
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer px-4 py-2 text-sm font-medium rounded-md 
            border border-gray-300 dark:border-gray-700 
            hover:bg-blue-500 hover:text-white transition"
            >
              যোগ দিন
            </button>
          </div>

          {/* Group */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 
          bg-white dark:bg-gray-900 p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <Users className="w-10 h-10 mx-auto text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              ইউনিটি গ্রুপ
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">
              গ্রুপে একসাথে পড়াশোনা করুন
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer px-4 py-2 text-sm font-medium rounded-md 
            border border-gray-300 dark:border-gray-700 
            hover:bg-blue-500 hover:text-white transition"
            >
              গ্রুপ খুঁজুন
            </button>
          </div>

          {/* 24/7 Support */}
          <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 
          bg-white dark:bg-gray-900 p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <Clock className="w-10 h-10 mx-auto text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              ২৪/৭ সাপোর্ট
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">
              যেকোনো সমস্যায় সহায়তা পান
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer px-4 py-2 text-sm font-medium rounded-md 
            border border-gray-300 dark:border-gray-700 
            hover:bg-blue-500 hover:text-white transition"
            >
              যোগাযোগ
            </button>
          </div>
        </div>
      </section>

      {isOpen && <AlertModal setIsOpen={setIsOpen} />}
    </>
  );
}
