import { useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import CartItem from './CartItem';
import CartInfo from './CartInfo';

const Modal = ({ isOpen, close }) => {
  const { cart } = useSelector((store) => store);

  return (
    isOpen && (
      <div
        data-testid="modal"
        className="fixed inset-0 bg-black/30 grid place-items-center backdrop-blur"
      >
        <div className="bg-white p-5 rounded-lg w-[90%] md:w-[600px] text-black ">
          <div className="border-b pb-3 flex justify-between max-md:text-lg fs-5 ">
            <h1 className="font-semibold">SİPARİŞ</h1>

            <button
              className="border p-2 rounded-md hover:bg-gray-300/50"
              onClick={close}
            >
              <IoClose />
            </button>
          </div>

          <div>
            {cart.length === 0 ? (
              <p className="text-center text-gray-600 py-5 border-b text-lg font-semibold">
                Henüz sepete ürün eklenmedi
              </p>
            ) : (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>

          <CartInfo cart={cart} close={close} />
        </div>
      </div>
    )
  );
};

export default Modal;
