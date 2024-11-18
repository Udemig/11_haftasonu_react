import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Quote } from "./Classic";
import { useState } from "react";

export const getQuotes = (page: number) => {
  const params = {
    limit: 10,
    skip: page * 10,
  };

  return axios
    .get("https://dummyjson.com/quotes", { params })
    .then((res) => res.data.quotes);
};

const Updated = () => {
  const [page, setPage] = useState(0);

  const { isLoading, data, error, refetch } = useQuery<Quote[]>({
    queryKey: ["quotes", page],
    queryFn: () => getQuotes(page),
    retry: 3,
  });

  if (isLoading) return <h2>Yükleniyor.....</h2>;

  if (error)
    return (
      <>
        <h2>Bir hata oluştu: {error.message}</h2>
        {/* @ts-ignore */}
        <button onClick={refetch}>Tekrar Dene</button>
      </>
    );

  return (
    <div className="wrapper">
      <button onClick={() => setPage(page + 1)}>Sonraki Sayfa</button>

      {data?.map((item) => (
        <div>
          <span>{item.quote}</span>
          <br />
          <p>-{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Updated;
