import { Link } from "react-router-dom";
import Container from "../container";
import { PiVirus } from "react-icons/pi";

const Header = () => {
  return (
    <div className="border-b border-gray-600 bg-blue-900 text-white">
      <Container designs="flex justify-between items-center">
        <Link to="/" className="flex gap-3 items-center">
          <PiVirus className="text-4xl text-pink-600" />
          <span className="font-semibold">Covid-19</span>
        </Link>

        <nav className="flex gap-4">
          <a href="#">Anasayfa</a>
          <a href="#">Sonuçlarımız</a>
          <a className="max-md:hidden" href="#">
            Hakkımızda
          </a>
          <a className="max-md:hidden" href="#">
            İletişim
          </a>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
