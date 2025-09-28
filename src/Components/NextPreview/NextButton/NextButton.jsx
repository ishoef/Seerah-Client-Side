import React from "react";

export default function NextButton({
  currentIndex,
  items,
  goToArticle,
}) {
  if (currentIndex >= items.length - 1) return null; // Hide button if last item

  return (
    <button
      onClick={() => goToArticle(currentIndex + 1)}
      className="cursor-pointer px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
    >
      পরবর্তী নিবন্ধ ▶
    </button>
  );
}
