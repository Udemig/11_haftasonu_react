import {
  FaRetweet,
  FaRegHeart,
  FaHeart,
  FaShareNodes,
  FaRegComment,
} from "react-icons/fa6";

const Buttons = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer transition  hover:bg-blue-400/40">
        <FaRegComment />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition  hover:bg-green-300/30">
        <FaRetweet />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition  hover:bg-red-400/30">
        <FaRegHeart />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition  hover:bg-gray-400/30">
        <FaShareNodes />
      </div>
    </div>
  );
};

export default Buttons;
