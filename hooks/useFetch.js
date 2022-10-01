import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data;
        setData(articles);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [url]);

  return [data, error, loading];
};

export default useFetch;
