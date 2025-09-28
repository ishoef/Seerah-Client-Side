import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2; // show 2 pages before and after current

    const range = (start, end) => {
      let arr = [];
      for (let i = start; i <= end; i++) arr.push(i);
      return arr;
    };

    if (totalPages <= 10) {
      return range(1, totalPages);
    }

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);

    if (left > 2) pages.push("ellipsis-left");

    pages.push(...range(left, right));

    if (right < totalPages - 1) pages.push("ellipsis-right");

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-700 flex-wrap gap-2">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex gap-2 flex-wrap">
        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-lg text-sm ${
            currentPage === 1
              ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
              : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((num, idx) =>
          typeof num === "string" && num.includes("ellipsis") ? (
            <span
              key={num + idx}
              className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400"
            >
              …
            </span>
          ) : (
            <button
              key={num}
              onClick={() => onPageChange(num)}
              className={`px-3 py-1 rounded-lg text-sm ${
                currentPage === num
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            >
              {num}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-lg text-sm ${
            currentPage === totalPages
              ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
