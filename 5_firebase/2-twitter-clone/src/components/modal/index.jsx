import { IoMdClose } from "react-icons/io";

// HOC yazarak projdeki modalların ortak noktalarını belirledik
// Modal oluştururkenki kod tekrarını önledik
const Modal = ({ children, isOpen, close }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-zinc-700/70 grid place-items-center z-[9999]">
        <div className="bg-black py-10 px-8 w-3/4 max-w-[600px] rounded-md">
          <div className="flex justify-end">
            <button onClick={close}>
              <IoMdClose className="text-3xl transition hover:text-gray-500" />
            </button>
          </div>

          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
