import { useState } from "react";
import { DetailProps } from "../../types";
import { numbers } from "../../utils/constants";

const Size = ({ data }: DetailProps) => {
  const [selected, setSelected] = useState<string>("");

  // üzerrine tıklanan seçenek state'de yoksa ekle varsa kaldır
  const toggle = (size: string) => {
    // zaten seçili olana mı tıklandı?
    const isSame = selected === size;

    if (isSame) {
      // aynısına tıklandıysa state'den kaldır
      setSelected("");
    } else {
      // farklı renge tıklandıysa state'i güncelle
      setSelected(size);
    }
  };

  // mevcut numaralar
  const stockSize = data.size.split(",");

  return (
    <div>
      <h2 className="mb-4 font-semibold">Numara Seçiniz</h2>

      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num) => {
          // numara seçili mi?
          const found = selected === num;

          // ekrana basılan numara stock'ta var mı?
          const inStock = stockSize.includes(num);

          return (
            <button
              disabled={!inStock}
              type="button"
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] ${
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
