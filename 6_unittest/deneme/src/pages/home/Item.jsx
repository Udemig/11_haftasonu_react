import { PiVirus } from "react-icons/pi";

const Item = ({ color, text, value }) => {
  return (
    <div className="flex gap-3">
      <PiVirus
        data-testid="svg"
        className={`${color} text-2xl md:text-5xl`}
      />

      <div>
        <span className="text-gray-500 text-xs lg:text-sm max-md:hidden">
          {text}
        </span>
        <h2 className="text-lg md:text-2xl">{value}</h2>
      </div>
    </div>
  );
};

export default Item;
