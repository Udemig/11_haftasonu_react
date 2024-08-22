import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to="/" className="flex items-center gap-2">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="text-2xl font-mono max-sm:hidden">Youtube</h1>
      </Link>

      <form className="flex border border-gray-400 rounded-[20px] overflow-hidden">
        <input
          className="bg-black outline-none text-white px-5 py-2  border border-transparent focus:border-blue-500 rounded-l-[20px]"
          type="text"
        />

        <button className="px-4 text-2xl bg-zinc-800 hover:bg-zinc-600 transition duration-300">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition" />
        <IoMdVideocam className="hover:text-gray-400 transition" />
        <MdVideoLibrary className="hover:text-gray-400 transition" />
      </div>
    </div>
  );
};

export default Header;
