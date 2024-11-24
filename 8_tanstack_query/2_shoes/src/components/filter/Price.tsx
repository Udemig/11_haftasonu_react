import { FilterProps } from "../../types";

const Price = ({ selected, setSelected }: FilterProps<string>) => {
  return (
    <div>
      <h2 className="mb-4 font-semibold">Fiyat</h2>

      <input
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        type="range"
        className="w-full"
        min={0}
        max={1000}
      />

      <div className="flex justify-between font-open font-semibold">
        <span>${selected}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;
