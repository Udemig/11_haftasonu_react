import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import HeaderLoader from "../../components/loaders/HeaderLoader";

const Heading = () => {
  const { data, isLoading } = useSelector((store) => store);

  return (
    <div className="flex justify-between items-center">
      <Link
        to="/"
        className="bg-gray-400 py-2 px-2 pe-3 rounded-md hover:bg-gray-500 flex gap-2 items-center shadow"
      >
        <MdKeyboardArrowLeft className="text-2xl" />
        Geri
      </Link>

      {isLoading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4">
            <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold font-sans">
              {data.country}
            </h1>
            <img
              className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] w-[64px] h-[64px]"
              src={`https://flagsapi.com/${data.code}/flat/64.png`}
              alt="flag"
            ></img>
          </div>
        )
      )}
    </div>
  );
};

export default Heading;
