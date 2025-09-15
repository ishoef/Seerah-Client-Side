import React, { useState } from "react";
import { BookOpen, Clock, User, Calendar } from "lucide-react";
import AlertModal from "../../AlertModal/AlertModal";
import { useNavigate } from "react-router";

export default function AricleCard({ article, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigateToDetails = (article) => {
    // Save current scroll before navigating to details
    const scrollY = window.scrollY;
    navigate(`/articles/${article.id}`, {
      state: { article, fromScrollY: scrollY },
    });
  };
  return (
    <div
      key={index}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col relative transition hover:shadow-2xl"
    >
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-md text-gray-700 dark:text-gray-300">
          {article.category || "প্রাথমিক জীবন"}
        </span>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-1">
          <Clock size={14} /> {article.timing || "৫ মিনিট"}
        </div>
      </div>
      {/* Title */}
      <h2 className="text-lg font-bold leading-snug mb-2 text-gray-900 dark:text-white">
        {article.title}
      </h2>
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
        {article.articleText}
      </p>
      {/* Footer */}
      <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
        <div className="flex items-center gap-1">
          <User size={14} />
          {article.writer}
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          {article.publishDate || "২০২৫-০১-০৫"}
        </div>
      </div>
      {/* Button */}
      <button
        onClick={() => handleNavigateToDetails(article)}
        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <BookOpen size={16} /> পড়ুন
      </button>
      {isOpen && <AlertModal setIsOpen={setIsOpen} />}
    </div>
  );
}
