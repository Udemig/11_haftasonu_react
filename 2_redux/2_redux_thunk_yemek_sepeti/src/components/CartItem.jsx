import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/actions/basketActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };

  const handleDelete = () => {
    item.amount > 1
      ? dispatch(updateItem(item.id, item.amount - 1))
      : dispatch(deleteItem(item.id));
  };

  return (
    <div className="flex gap-4 border mb-10 rounded-lg p-4">
      <img src={item.photo} className="w-[115px] rounded-lg" />
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-red-500">
          {item.title}
        </h3>
        <p className="text-gray-500">{item.restaurantName}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">{item.price}$</p>

          <div className="border text-xl rounded-lg">
            <button
              onClick={handleDelete}
              className="p-3 text-red-500 hover:bg-red-100 transition rounded-lg"
            >
              {item.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <span className="p-3">{item.amount}</span>
            <button
              onClick={handleAdd}
              className="p-3 text-red-500 hover:bg-red-100 transition rounded-lg"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
