import React from "react";
import { Rocket, Loader2 } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 
        [background-image:linear-gradient(to_right,rgba(229,231,235,0.2)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(229,231,235,0.2)_1px,transparent_1px)] 
        dark:[background-image:linear-gradient(to_right,rgba(75,85,99,0.2)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(75,85,99,0.2)_1px,transparent_1px)]
        [background-size:20px_20px]"
      />

      {/* Card */}
      <div className="relative z-10 text-center p-10 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl max-w-lg">
        <div className="flex justify-center mb-6">
          <Rocket className="w-16 h-16 text-blue-500 animate-bounce" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">
          🚀 Coming Soon!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          এই পেজে আমরা নতুন ফিচার আনছি।
          <span className="block mt-2 font-medium">
            শীঘ্রই এটি অ্যাভেইলেবল হবে!
          </span>
        </p>
        <div className="flex justify-center mt-6">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      </div>
    </div>
  );
}
