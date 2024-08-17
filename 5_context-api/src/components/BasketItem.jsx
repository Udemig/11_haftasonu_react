import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { FaTrashAlt } from "react-icons/fa";

const BasketItem = ({ item }) => {
  const { addToBasket, removeFromBasket } = useContext(BasketContext);

  return (
    <div className="d-flex flex-column flex-md-row gap-3 align-items-md-center justify-content-between border-bottom pb-4">
      <div className="d-flex align-items-center gap-3">
        <div className="rounded bg-white">
          <img src={item.thumbnail} width={60} height={60} />
        </div>

        <h4 className="text-truncate">{item.title}</h4>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <h3 className="text-success text-nowrap">{item.price} $</h3>

        <p className="d-flex align-items-center gap-1 text-nowrap">
          <span>Miktar: </span>
          <span className="fw-bold">{item.amount}</span>
        </p>

        <div className="d-flex  gap-2">
          <button
            onClick={() => removeFromBasket(item.id)}
            className="btn btn-danger button"
          >
            {item.amount === 1 ? <FaTrashAlt className="text-xs" /> : "-"}
          </button>
          <button
            onClick={() => addToBasket(item)}
            className="btn btn-success button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
