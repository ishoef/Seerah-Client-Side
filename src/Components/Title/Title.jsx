import React from "react";

export default function Title({ normalText, blueText }) {
  return (
    <h1 className="text-xl md:text-4xl font-bold text-gray-800 dark:text-white">
      {normalText || ""} {" "}
      <span className="dark:text-blue-400 text-blue-600">{blueText || ""}</span>
    </h1>
  );
}
