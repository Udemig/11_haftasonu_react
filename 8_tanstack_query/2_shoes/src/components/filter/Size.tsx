import { FilterProps } from "../../types";
import { numbers } from "../../utils/constants";

const Size = ({ selected, setSelected }: FilterProps<string[]>) => {
  // üzerine tıklanan seçeği state'de yoksa ekle varsa kaldır
  const toggle = (num: string) => {
    const found = selected.includes(num);

    if (!found) {
      setSelected([...selected, num]);
    } else {
      setSelected(selected.filter((i) => i !== num));
    }
  };

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4 font-semibold">Numara</h2>

      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num) => {
          const found = selected.includes(num);

          return (
            <button
              type="button"
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 ${
                found ? "bg-black text-white" : "bg-white"
              } `}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
