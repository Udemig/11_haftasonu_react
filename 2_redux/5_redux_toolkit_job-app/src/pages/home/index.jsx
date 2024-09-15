import { useSelector } from "react-redux";
import Filter from "../../components/filter";
import Loader from "../../components/loader/index";
import Error from "../../components/error/index";
import Card from "../../components/card/index";
import "./home.scss";

const Home = () => {
  const { isLoading, error, jobs } = useSelector(
    (store) => store.jobReducer
  );

  return (
    <div className="home-page">
      <Filter />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="cards-wrapper">
          {jobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
