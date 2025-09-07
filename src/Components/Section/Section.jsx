import React from "react";

export default function Section() {
  return (
    <section
      className="
        min-h-[300px] 
        flex items-center justify-center text-center 
        px-6 py-16
        bg-gradient-to-br from-blue-50 via-white to-orange-50 
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
      "
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Section Title
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This is a sample section using Seerah-inspired colors with a soft
          gradient for both light and dark mode.
        </p>
      </div>
    </section>
  );
}
