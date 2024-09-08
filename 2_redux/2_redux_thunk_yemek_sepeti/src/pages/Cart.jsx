import { useSelector } from "react-redux";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import OrderBox from "../components/OrderBox";

const Cart = () => {
  const { isLoading, error, cart } = useSelector((store) => store.cart);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      <div className="grid md:grid-cols-[1fr_300px] gap-4 ">
        <OrderBox />

        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : cart.length === 0 ? (
            <p className="flex flex-col items-center gap-3">
              Sepette herhangi bir ürün yok
              <Link
                to="/"
                className="border p-2 shadow rounded hover:bg-gray-100"
              >
                Ürün Ekle
              </Link>
            </p>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
