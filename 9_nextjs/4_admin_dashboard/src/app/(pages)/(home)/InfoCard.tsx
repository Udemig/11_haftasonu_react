import Image from "next/image";
import { InfoItem } from "./page";

type Props = {
  item: InfoItem;
};

const InfoCard = ({ item }: Props) => {
  return (
    <div className="bg-white rounded-lg p-3 flex justify-between items-center">
      <div>
        <h4 className="text-gray-700 whitespace-nowrap text-base sm:text-sm">{item.label}</h4>
        <p className="font-bold text-xl md:text-2xl">{item.value.toLocaleString()}</p>
      </div>

      <Image src={item.icon} alt="icon" className="size-14" />
    </div>
  );
};

export default InfoCard;
