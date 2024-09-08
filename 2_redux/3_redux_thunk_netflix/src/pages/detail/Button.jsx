import { MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/actions";

const Button = ({ movie }) => {
  const { favorites } = useSelector((store) => store.favorites);

  const dispatch = useDispatch();

  // ekrana basılan film favoriler arasında var mı
  const isFav = favorites.find((item) => item.id === movie.id);

  // favoride zaten varsa 2.param false yoksa true olmalı
  const handleClick = () => {
    dispatch(toggleFavorite(movie, !isFav));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition flex gap-2 items-center"
    >
      {isFav ? (
        <>
          <MdBookmarkRemove className="text-xl" />
          İzleme Listesinden Çıkar
        </>
      ) : (
        <>
          <MdBookmarkAdd className="text-xl" />
          İzleme Listesine Ekle
        </>
      )}
    </button>
  );
};

export default Button;
