import React, { useEffect, useState } from "react";
import SeerahHero from "./SeerahHero/SeerahHero";
import Articles from "./Articles/Articles";
import { useLocation } from "react-router";

export default function Seerah() {
  const { pathname } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <section
      className="min-h-screen transition-colors duration-300 
      bg-gradient-to-br from-blue-50 via-white to-blue-100 
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-gray-100"
    >
      {/* Hero Section */}
      <SeerahHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Articles Section */}
      <div>
        <Articles searchQuery={searchQuery} />
      </div>
    </section>
  );
}
