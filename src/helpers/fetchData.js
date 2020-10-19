import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    let results = [];

    while (url !== null) {
      const res = await fetch(url);
      const data = await res.json();
    //   if (data.next !== null) {
    //     data.next = data.next.replace(/^http:\/\//i, 'https://');
    //   }
    //   if (data.previous !== null) {
    //     data.previous = data.previous.replace(/^http:\/\//i, 'https://');
    //   }
    //   results.push(...data.results);
    //   url = data.next;
    }

    setData(results);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}