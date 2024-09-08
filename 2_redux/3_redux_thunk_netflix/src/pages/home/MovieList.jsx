import { useEffect, useState } from "react";
import api from "../../utils/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseImgUrl } from "../../utils/constants";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // api'a gönderilicek parametreleri belirle
    const params = {
      language: "tr",
      with_genres: genre.id,
    };

    // belirli kategoriye ait filmleri api'dan al
    api
      .get("/discover/movie", { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>

      <Splide
        options={{
          pagination: false,
          autoWidth: true,
          gap: "20px",
        }}
      >
        {movies.map((movie, key) => (
          <SplideSlide key={key}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[300px] cursor-pointer rounded transition hover:scale-[1.01]"
                src={baseImgUrl + movie.poster_path}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
