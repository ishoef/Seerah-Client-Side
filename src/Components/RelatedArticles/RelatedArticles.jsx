import React, { useEffect, useState } from "react";
import AricleCard from "../Cards/ArticleCard/AricleCard";

export default function RelatedArticles({ article, articles }) {
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    if (article && articles.length > 0) {
      const articleCategory = article.category;
      const related = articles.filter(
        (art) => art.category === articleCategory && art.id !== article.id
      );
      setRelatedArticles(related);
    }
  }, [article, articles]);
  return (
    <div className="">
      {relatedArticles.length > 0 && ( // 🔥 changed (render only if available)
        <div className="max-w-5xl  mx-auto mt-20">
          <h1 className="mb-5 text-3xl font-semibold ">
            <span className="text-blue-500">
              {`${article.category} সম্পর্কিত`}{" "}
            </span>
            <span>অন্যান্য প্রবন্ধ</span>{" "}
          </h1>
          <div className="grid grid-cols-2">
            {relatedArticles.map(
              (
                rel,
                index // 🔥 changed (renamed var for clarity)
              ) => (
                <AricleCard article={rel} index={index} />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
