import Image, { StaticImageData } from "next/image";
import { CarType } from "../utils/types";
import Link from "next/link";
import arrow from "../assets/icons/arrow.svg";
import mile from "../assets/icons/mile.svg";
import transmission from "../assets/icons/transmission.svg";
import gas from "../assets/icons/gas.svg";

type Props = {
  car: CarType;
};

type InfoObject = {
  icon: StaticImageData;
  name: string;
};

const Card = ({ car }: Props) => {
  const arr: InfoObject[] = [
    {
      icon: mile,
      name: car.mileage + " Miles",
    },
    {
      icon: gas,
      name: car.fuelType,
    },
    {
      icon: transmission,
      name: car.transmission,
    },
  ];

  return (
    <div className="border shadow rounded hover:shadow-lg">
      <div className="relative h-[250px]">
        <Image
          fill
          src={car.imageUrl}
          alt={car.model}
          unoptimized
          className="object-contain"
        />
      </div>

      <div className="py-5 px-10 sm:px-5">
        <h2 className="text-2xl font-semibold">
          {car.make} {car.model}
        </h2>

        <hr className="border-[#E9E9E9] border-[1.5px] mt-2 mb-4" />

        <div className="flex justify-between">
          {arr.map((item, key) => (
            <div key={key} className="flex flex-col gap-2 items-center">
              <Image src={item.icon} alt={item.name} />
              <p className="text-lg sm:text-base">{item.name}</p>
            </div>
          ))}
        </div>

        <hr className="border-[#E9E9E9] border-[1.5px] mt-4 mb-2" />

        <div className="flex justify-between text-2xl sm:text-xl">
          <p className="font-semibold">${car.price}</p>

          <div className="flex gap-1 items-center text-blue-500 hover:text-blue-800">
            <Link href={`/car/${car._id}`}>Detay</Link>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
