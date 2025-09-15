import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

export default function ArticleDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const fromScrollY = location.state?.fromScrollY || 0;
  const article = location.state?.article;
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4">
        <p className="text-xl mb-4">নিবন্ধটি পাওয়া যায়নি</p>
        <button
          onClick={() => navigate("/articles")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
        >
          সমস্ত নিবন্ধ দেখুন
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 mt-10 py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() =>
            navigate("/articles", { state: { scrollY: fromScrollY } })
          }
          className="mb-5 flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800 font-medium transition"
        >
          <FaArrowLeft /> Back to Articles
        </button>

        <div className=" mx-auto bg-white dark:bg-gray-900 text-justify rounded-2xl shadow-lg p-8 md:p-12 transition-colors">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-6 text-center md:text-left">
            {article.title}
          </h1>

          {/* Info Box */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 text-gray-600 dark:text-gray-300">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm">
              Writer: {article.writer}
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded-full text-sm font-medium shadow-sm">
              Published: {article.publishDate}
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full text-sm font-medium shadow-sm">
              Timing: {article.timing}
            </span>
          </div>

          {/* Article Text */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {article.articleText}
          </p>
        </div>
      </div>
    </section>
  );
}
