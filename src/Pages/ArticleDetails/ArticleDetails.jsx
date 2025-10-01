import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import useArticles from "../../Hooks/useArticles/useArticles";
import NextPreview from "../../Components/NextPreview/NextPreview";
import RelatedArticles from "../../Components/RelatedArticles/RelatedArticles";

export default function ArticleDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const fromScrollY = location.state?.fromScrollY || 0;
  const article = location.state?.article;
  console.log(article);

  const { articles } = useArticles();

  // --- Find current article index ---
  const currentIndex = articles.findIndex((a) => a.id === article?.id);

  // --- Timer States ---
  const [timeLeft, setTimeLeft] = useState(0); // 🔥 changed (init as 0 to avoid NaN)
  const totalSeconds = article?.timing?.minutes
    ? article.timing.minutes * 60
    : 0; // 🔥 changed (safe check)
  const [showNotification, setShowNotification] = useState(false);

  // set initial timeLeft when article available
  useEffect(() => {
    if (article?.timing?.minutes) {
      setTimeLeft(article.timing.minutes * 60); // 🔥 changed (initialize after article load)
    }
  }, [article]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    if (!article) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowNotification(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [article]);

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

  // Format countdown time
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // Progress calculation
  const progress =
    totalSeconds > 0 ? ((totalSeconds - timeLeft) / totalSeconds) * 100 : 0;

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

        <div className="mx-auto bg-white dark:bg-gray-900 text-justify rounded-2xl shadow-lg p-8 md:p-12 transition-colors">
          {/* Title */}
          <div className="flex justify-between">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-6 text-center md:text-left">
              {article.title}
            </h1>
            <p className="px-3 py-1 bg-gray-200 rounded-2xl w-fit h-fit text-gray-700">{article.category}</p>
          </div>

          {/* Info Box */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 text-gray-600 dark:text-gray-300">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm">
              Writer: {article.writer}
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded-full text-sm font-medium shadow-sm">
              Published: {article.publishDate}
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full text-sm font-medium shadow-sm">
              Timing: {article.timing.text}
            </span>
          </div>

          {/* Timer Box */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span>Reading Progress</span>
              <span>
                {timeLeft > 0 ? `⏱ ${formatTime(timeLeft)}` : "✅ Completed"}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Article Text */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {article.articleText}
          </p>

          {/* --- Next-Preview Buttons --- */}
          <NextPreview
            currentIndex={currentIndex}
            items={articles}
            fromScrollY={fromScrollY}
          />
        </div>
      </div>

      {/* Notification Modal */}
      {showNotification && (
        <div className="fixed inset-0 bg-gray-900/80 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-8 rounded-2xl shadow-lg text-center max-w-sm">
            <h2 className="text-xl font-bold mb-4">⏳ Time’s Up!</h2>
            <p className="mb-6">
              আপনি নির্ধারিত {article.timing.text} সময়ের মধ্যে পড়া শেষ করেছেন।
            </p>
            <div className="pb-5">
              <NextPreview
                currentIndex={currentIndex}
                items={articles}
                fromScrollY={fromScrollY}
              />
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
            >
              ঠিক আছে
            </button>
          </div>
        </div>
      )}

      {/* Related Articles */}
      <RelatedArticles article={article} articles={articles} />
    </section>
  );
}
