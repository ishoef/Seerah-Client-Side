import React, { useEffect, useState } from "react";
import AricleCard from "../../../Components/Cards/ArticleCard/AricleCard";
import useArticles from "../../../Hooks/useArticles/useArticles";
import NoArticles from "../../../Components/NoArticles/NoArticles";
import { useLocation } from "react-router";

export default function Articles() {
  const { articles } = useArticles();
  //   const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("সকল নিবন্ধ");

  const location = useLocation();

  useEffect(() => {
    // Scroll to position from state if exists, else top 0
    const scrollPos = location.state?.scrollTo || 0;
    window.scrollTo({ top: scrollPos, behavior: "smooth" });
  }, [location]);

  const allCategories = [
    "সকল নিবন্ধ",
    "প্রাথমিক জীবন",
    "মক্কী জীবন",
    "হিজরত",
    "মাদানী জীবন",
    "যুদ্ধসমূহ",
    "সফরসমূহ",
    "ব্যবসা",
  ];

  //   useEffect(() => {
  //     const fetchArticles = async () => {
  //       try {
  //         const response = await axios.get("/articles.json");
  //         setArticles(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchArticles();
  //   }, []);

  // Filter articles by selected category
  const filteredArticles =
    selectedCategory === "সকল নিবন্ধ"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <section className="w-full py-10">
      <div className="content max-w-7xl mx-auto px-4">
        <div className="w-fit mx-auto">
          <h1 className=" text-4xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 text-blue-600 dark:text-blue-400 relative inline-block">
            {selectedCategory}
            {/* Underline effect */}
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-400 rounded-full"></span>
          </h1>
        </div>

        {/* Category Section */}
        <div className="categories sm:w-fit sm:mx-auto flex gap-4 overflow-x-auto py-4 px-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 dark:scrollbar-thumb-blue-700 dark:scrollbar-track-gray-700">
          {allCategories.map((category, i) => (
            <div
              key={i}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 cursor-pointer px-5 py-2 border rounded-lg transition 
                ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white border-blue-500"
                    : "text-blue-600 dark:text-blue-400 border-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Article Cards */}
        {filteredArticles.length === 0 ? (
          <NoArticles />
        ) : (
          <div
            id="articles"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          >
            {filteredArticles.map((article, index) => (
              <AricleCard article={article} key={index} index={index} />
            ))}
          </div>
        )}

        {/* See More Button */}
        {filteredArticles.length !== 0 && (
          <div className="w-fit mx-auto mt-6">
            <button className="btn">আরও নিবন্ধ লোড করুন</button>
          </div>
        )}
      </div>
    </section>
  );
}
