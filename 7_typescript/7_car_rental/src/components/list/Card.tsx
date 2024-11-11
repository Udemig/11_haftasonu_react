import { CarType } from "../../types";
import Info from "./Info";
import Button from "../button/index";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../modal";
import generateImage from "../../utils/generateImage";

type Props = {
  car: CarType;
};

const Card = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);

    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsOpen(false);

    document.body.style.overflow = "auto";
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="car-card group"
    >
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* araba fiyatı */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">{Math.round(Math.random() * 7000) + 1500}</span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      {/* resim alanı */}
      <div className="w-full">
        <img
          alt={car.make + car.model}
          src={generateImage(car)}
          className="w-full h-full object-contain"
        />
      </div>

      {/* alt kısım */}
      <div className="w-full">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>

        <div className="mt-[4px] hidden group-hover:flex">
          <Button
            designs="w-full py-[25px] text-white"
            title="Daha fazla"
            icon="right-arrow.svg"
            handleClick={handleOpen}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} close={handleClose} car={car} />
    </motion.div>
  );
};

export default Card;
