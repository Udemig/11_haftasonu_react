import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [category, setCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState();

  useEffect(() => {
    let type = category.type;

    // seçilen kategori menu tipindeyse fonk. durdur
    if (type === "menu") return;

    // istek atılcak url'i belirle
    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : `/search?query=${category.name}`;

    // yüklenme state'İni true'ya çek
    setIsLoading(true);

    console.log("api isteği");

    // api isteği at
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <VideoContext.Provider
      value={{ isLoading, error, videos, category, setCategory }}
    >
      {children}
    </VideoContext.Provider>
  );
};
