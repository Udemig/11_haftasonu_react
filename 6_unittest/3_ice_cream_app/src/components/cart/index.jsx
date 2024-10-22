// todo butona tıklanınca sepet modalı açılacak
const Cart = () => {
  return (
    <div className="sticky top-4 left-1 -mb-10 z-[999]">
      <button className="bg-white rounded-full px-4 py-1 pr-14  flex items-center gap-2 text-[20px] lg:text-[24px] font-semibold text-black relative hover:bg-gray-200 transition shadow-lg shadow-gray-300/90 ">
        Sepet
        <img src="/cart-1.png" className="absolute w-12 right-1 bottom-0" />
      </button>
    </div>
  );
};

export default Cart;
