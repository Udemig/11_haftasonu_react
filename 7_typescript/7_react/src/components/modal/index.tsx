import { CarType } from "../../types";
import Images from "./images";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  car: CarType;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({ car, isOpen, close }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 grid place-items-center backdrop-blur">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white relative p-6 max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            <button
              onClick={close}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" />
            </button>

            {/* fotoğraflar */}
            <Images car={car} />

            {/* bilgiler */}
            {Object.entries(car).map(([key, value]) => (
              <p className="flex justify-between">
                <span className="capitalize">
                  {key.split("_").join(" ")}
                </span>
                <span className="font-semibold capitalize">{value}</span>
              </p>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
