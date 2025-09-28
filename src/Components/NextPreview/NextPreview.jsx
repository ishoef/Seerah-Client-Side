import React from "react";
import { useNavigate } from "react-router";
import NextButton from "./NextButton/NextButton";

export default function NextPreview({ currentIndex, items, fromScrollY }) {
  // Pass this Props from Parent
  // 1. const currentIndex = articles.findIndex((a) => a.id === article?.id);
  // 2. items mean waht items you want to apply this on that
  // 3. const fromScrollY = location.state?.fromScrollY || 0;

  const navigate = useNavigate();

  const goToArticle = (index) => {
    if (index < 0 || index >= items.length) return;
    navigate(`/articles/${items[index].id}`, {
      state: { article: items[index], fromScrollY },
    });
  };

  return (
    <>
      <div>
        {/* --- Navigation Buttons --- */}
        <div className="flex justify-between mt-10">
          {currentIndex > 0 ? (
            <button
              onClick={() => goToArticle(currentIndex - 1)}
              className="cursor-pointer px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition"
            >
              ◀ পূর্ববর্তী নিবন্ধ
            </button>
          ) : (
            <div />
          )}

          {/* ✅ Use NextButton here */}
          <NextButton
            currentIndex={currentIndex}
            items={items}
            goToArticle={goToArticle}
          />
        </div>
      </div>
    </>
  );

  
}
