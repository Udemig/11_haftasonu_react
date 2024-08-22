import { Link } from "react-router-dom";
import { categories } from "../utils/constants";
import { useContext } from "react";
import { VideoContext } from "../context/videoContext";

const Sidebar = () => {
  const { category, setCategory } = useContext(VideoContext);

  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item, i) => (
        <Link to="/" key={i} onClick={() => setCategory(item)}>
          <div
            className={`flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] ${
              item.name === category.name && "bg-[#242424]"
            }`}
          >
            <span className="max-md:text-2xl">{item.icon}</span>
            <span className="max-md:hidden">{item.name}</span>
          </div>

          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
