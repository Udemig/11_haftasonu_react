import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector(
    (store) => store.flight
  );

  return (
    <header>
      <Link to="/">
        <img src="/planelogo.png" alt="plane-logo" />
        <h2>Uçuş Radarı</h2>
      </Link>

      <h3>
        {isLoading
          ? "Uçuşlar aranıyor..."
          : error
          ? "Hata: " + error
          : `${flights.length} Uçuş Bulundu`}
      </h3>
    </header>
  );
};

export default Header;
