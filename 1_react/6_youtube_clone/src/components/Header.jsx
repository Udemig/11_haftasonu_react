import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputta aratılan metni al
    let text = e.target[0].value;

    // kullanıcıyı arama sonuçları sayfasına yönlendir
    // search_query parametresi ekle (aratılan terimi)
    navigate(`/results?search_query=${text}`);
  };

  return (
    <div className="flex justify-between items-center px-2 py-4 sm:p-4">
      <Link to="/" className="flex items-center gap-2">
        <img
          className="w-10 sm:w-12"
          src="/youtube.png"
          alt="youtube logo"
        />
        <h1 className="text-xl sm:text-2xl font-mono ">YouTube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          className="bg-black outline-none text-white px-2 sm:px-5 py-1 sm:py-2  border border-transparent focus:border-blue-500 rounded-l-[20px]"
          type="text"
        />

        <button className="px-3 sm:px-4 text-2xl bg-zinc-800 hover:bg-zinc-600 transition duration-300 max-sm:text-base">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400 transition" />
        <IoMdVideocam className="hover:text-gray-400 transition" />
        <MdVideoLibrary className="hover:text-gray-400 transition" />
      </div>
    </div>
  );
};

export default Header;
