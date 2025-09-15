import { useState, useEffect } from "react";
import axios from "axios";

export default function useArticles(url = "/articles.json") {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        setArticles(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [url]);

  return { articles, loading, error };
}
