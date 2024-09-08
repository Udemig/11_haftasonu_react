import { useEffect, useState } from "react";
import api from "../../utils/api";
import Error from "../../components/error/index";
import Loader from "../../components/loader/index";
import { baseImgUrl } from "../../utils/constants";
import React from "react";
import Button from "../detail/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        // filmler dizisi
        const movies = res.data.results;

        // dizinin uzunluğu kadar rastgele bir sayı seç
        const i = Math.floor(Math.random() * movies.length);

        // filemler diziden rastgele 1 elemanseç
        setMovie(movies[i]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;

  if (!movie) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-start text-gray-300"> {movie.overview}</p>
        <p>
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">
            {movie.vote_average.toFixed(2)}
          </span>
        </p>
        <div className="flex gap-5">
          <Link
            to={`/movie/${movie.id}`}
            className="p-2 bg-red-600 rounded transition hover:bg-red-700"
          >
            Filmi İzle
          </Link>

          <Button movie={movie} />
        </div>
      </div>

      <div>
        <img
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 object-contain rounded max-h-[300px]"
          src={baseImgUrl + movie.backdrop_path}
        />
      </div>
    </div>
  );
};

export default React.memo(Hero);
