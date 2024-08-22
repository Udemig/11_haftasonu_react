import { FaUserCircle } from "react-icons/fa";

const Loader = () => {
  const arr = new Array(20).fill("selam");

  return arr.map(() => (
    <div className="shadow animate-pulse">
      <div className="bg-gray-600 h-[220px]  md:h-48 mb-4 rounded" />

      <div className="flex items-center gap-3">
        <FaUserCircle className="text-5xl text-gray-600" />

        <div>
          <div className="h-2.5 w-44 rounded-full bg-gray-600" />
          <div className="h-2 w-16 rounded-full bg-gray-600 my-4" />
          <div className="flex gap-2">
            <div className="h-2 w-28 rounded-full bg-gray-600" />
            <div className="h-2 w-28 rounded-full bg-gray-600" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
