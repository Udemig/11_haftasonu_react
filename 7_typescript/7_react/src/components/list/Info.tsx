import { motion } from "framer-motion";
import { CarType } from "../../types";

const Field = ({ img, text }: { img: string; text: string }) => {
  return (
    <motion.div
      initial={{
        translateY: 50,
        opacity: 0.3,
      }}
      whileInView={{
        translateY: 0,
        opacity: 1,
      }}
      className="flex-center flex-col"
    >
      <img src={img} width={25} />
      <p>{text}</p>
    </motion.div>
  );
};

const Info = ({ car }: { car: CarType }) => {
  const transmission = car.transmission === "a" ? "Otomatik" : "Manuel";

  const drive =
    car.drive === "fwd"
      ? "Önden Çeker"
      : car.drive === "rwd"
      ? "Arkadan İtişli"
      : car.drive === "awd"
      ? "4 Çeker"
      : "4 Çeker (Sürekli)";

  return (
    <div className="flex w-full justify-between">
      <Field img="/steering-wheel.svg" text={transmission} />
      <Field img="/tire.svg" text={drive} />
      <Field img="/gas.svg" text={car.fuel_type} />
    </div>
  );
};

export default Info;
