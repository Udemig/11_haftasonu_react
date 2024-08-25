import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import Card from "../components/Card";
import Loader from "../components/Loader";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [page, setPage] = useState(1);

  // 1) urlden aratılan terimi al
  const query = searchParams.get("search_query");

  // 2) api'dan aratılan terime uygun verileri al
  useEffect(() => {
    setIsLoading(true);

    let params = {
      query,
      type: "video",
      // eğerki sayfa 1'den fazlaysa yapılan api isteğine token'ıda ekliyoruz bu sayede sonraki sayfanın verilerini alıyoruz
      token: page > 1 ? token : undefined,
    };

    api
      .get(`/search`, { params })
      .then((res) => {
        setData((prev) => [...prev, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  return (
    <div className="p-4 sm:p-6 md:p-10 h-[90vh] overflow-y-auto">
      <h2 className="text-xl mb-5">
        <span className="font-bold">{query}</span> için sonuçlar
      </h2>

      <div className="flex flex-col gap-5 justify-center">
        {data.map(
          (item) =>
            item.type === "video" && (
              <Card key={item.videoId} video={item} isRow />
            )
        )}

        {isLoading && <Loader spinner />}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setPage(page + 1)}
          disabled={isLoading}
          className={`bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition ${
            isLoading ? "hidden" : ""
          }`}
        >
          Daha Fazla
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
