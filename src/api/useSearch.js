import { useEffect } from "react";
import { useState } from "react";

const FIELDS = "?fields=name,capital,population,region,flags,cca3";
const ALL_URL = `https://restcountries.com/v3.1/all${FIELDS}`;
const SEARCH_URL = "https://restcountries.com/v3.1/name/";

const useSearch = (query) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const url = query.trim() ? `${SEARCH_URL}${query}${FIELDS}` : ALL_URL;
        const response = await fetch(url);
        if (!response.ok) {
          setResults([]);
          return;
        }
        const data = await response.json();
        setResults(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return { results, loading };
};

export default useSearch;
