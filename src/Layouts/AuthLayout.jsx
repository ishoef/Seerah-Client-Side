import React from "react";
import GoogleLogin from "../Components/SocialLogin/GoogleLogin/GoogleLogin";

export default function AuthLayout() {
  return (
    <div className="w-full h-screen relative flex justify-center items-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Pattern Background */}
      <div
        className="absolute inset-0
        [background-image:linear-gradient(to_right,rgba(229,231,235,0.3)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(229,231,235,0.3)_1px,transparent_1px)]
        dark:[background-image:linear-gradient(to_right,rgba(75,85,99,0.3)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(75,85,99,0.3)_1px,transparent_1px)]
        [background-size:20px_20px]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30 dark:from-blue-900/40 dark:via-gray-900/40 dark:to-purple-900/40 pointer-events-none" />

      {/* Google Login Button */}
      <div className="relative z-10">
        <GoogleLogin />
      </div>
    </div>
  );
}
