import { CarType } from "../utils/types";

type Props = {
  car: CarType;
};

const Overview = ({ car }: Props) => {
  // neneyi diziye çevir
  const arr = Object.entries(car).filter(
    (i) => i[0] !== "_id" && i[0] !== "imageUrl"
  );

  return (
    <div>
      <div className="grid md:grid-cols-2 mt-5 gap-5">
        {arr.map(([key, value]) => (
          <p key={key} className="flex justify-between capitalize">
            <span>{key}</span>
            <span className="font-semibold">{value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Overview;
