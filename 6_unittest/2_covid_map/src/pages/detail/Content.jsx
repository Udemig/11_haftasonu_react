import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "../../components/loaders/ContentLoader";
import Error from "../../components/error";
import Card from "./Card";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Content = () => {
  const { data, error, isLoading } = useSelector((store) => store);
  const { code } = useParams();
  const dispatch = useDispatch();

  // data nesnenini diziye çevir
  const arr = Object.entries(data || {});

  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} retry={() => dispatch(getDetails(code))} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
