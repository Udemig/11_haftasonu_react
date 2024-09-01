import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const ProductCard = ({ item }) => {
  const { cart } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  // karttaki üründen sepette kaç tane var
  const found = cart.find((i) => i.productId === item.id);

  // artı butonuna tıklanınca
  const handleAdd = () => {
    // sepette eleman varsa güncelleme aksiyonunu tetikle
    // sepette eleman yoksa ekleme aksiyonunu tetikle
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(addToBasket(item));
  };

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="text-gray-500 my-1">{item.desc}</p>
        </div>
        <p className="text-lg font-semibold">{item.price}$</p>
      </div>

      <div className="relative">
        <img
          src={item.photo}
          className="rounded-md object-cover w-full h-full"
        />

        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 size-8 grid place-items-center font-semibold"
        >
          {found ? <span>{found.amount}</span> : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
