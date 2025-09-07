import Lottie from "lottie-react";
import React from "react";
import bookLoading from "../assets/lotties/Book-loading.json";

export default function BookReading() {
  return (
    <div className="w-full flex justify-center">
      <Lottie
        animationData={bookLoading}
        loop={true}
        style={{
          width: "100%", // Full width of parent
          maxWidth: "400px", // Max width on large screens
          height: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  );
}
