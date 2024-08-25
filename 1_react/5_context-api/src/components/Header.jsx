import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { basket } = useContext(BasketContext);

  // toplam eleman sayısını hesapla (miktar değerlerini topla)
  const total = basket.reduce((total, item) => total + item.amount, 0);

  console.log(basket);
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/">
          Context Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Context Store
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3 ">
              <li
                className="nav-item"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
              >
                <NavLink to="/">Anasayfa</NavLink>
              </li>
              <li
                className="nav-item"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
              >
                <NavLink to="/sepet">Sepet</NavLink>
                <span className="badge bg-danger ms-2">{total}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
