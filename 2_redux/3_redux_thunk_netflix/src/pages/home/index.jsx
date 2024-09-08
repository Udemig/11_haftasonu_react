import { useSelector } from "react-redux";
import Hero from "./Hero";
import Loader from "../../components/loader";
import MovieList from "./MovieList";

const Home = () => {
  const { isLoading, error, genres } = useSelector(
    (store) => store.genres
  );

  return (
    <div>
      <Hero />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        genres &&
        genres.map((cat) => <MovieList key={genres.id} genre={cat} />)
      )}
    </div>
  );
};

export default Home;
