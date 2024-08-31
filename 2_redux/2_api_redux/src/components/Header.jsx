import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "./Container";
import { IoRestaurant } from "react-icons/io5";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurant);

  return (
    <header className="shadow">
      <Container designs="flex justify-between items-center">
        <Link className="text-red-500 font-[900] text-2xl font-mono md:text-3xl">
          ThunkSepeti
        </Link>

        <div className="flex gap-5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            Yakınınızda {restaurants.length}{" "}
            <IoRestaurant className="text-red-500" />
            <span className="max-md:hidden">Restaurant var</span>
          </Link>

          <button className="border py-1 px-3 rounded text-red-500 hover:bg-red-500 hover:text-white transition max-md:hidden">
            Giriş Yap
          </button>
          <button className="border py-1 px-3 rounded text-red-500 hover:bg-red-500 hover:text-white transition">
            Kayıt Ol
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
