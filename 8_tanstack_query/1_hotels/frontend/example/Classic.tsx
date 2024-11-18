import axios from "axios";
import { useEffect, useState } from "react";

export type Quote = {
  id: number;
  quote: string;
  author: string;
};

const Classic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Quote[]>([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => setData(res.data.quotes))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h2>Yükleniyor.....</h2>;

  if (error) return <h2>Bir hata oluştu: {error}</h2>;

  return (
    <div className="wrapper">
      {data.map((item) => (
        <div>
          <span>{item.quote}</span>
          <br />
          <p>-{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Classic;
