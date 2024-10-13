import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Heading from "./Heading";
import Content from "./Content";

const Detail = () => {
  const { code } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(code));
  }, []);

  return (
    <div className="flex-1 text-white grid place-items-center p-6">
      <div className="bg-white border shadow-2xl min-h-[80%] py-6 px-8 rounded-lg max-w-3xl max-md:w-full md:min-w-[500px]">
        <Heading />

        <Content />
      </div>
    </div>
  );
};

export default Detail;
