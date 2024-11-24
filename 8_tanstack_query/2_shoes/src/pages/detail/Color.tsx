import { useState } from "react";
import { DetailProps } from "../../types";
import { colors } from "../../utils/constants";

const Color = ({ data }: DetailProps) => {
  const [selected, setSelected] = useState<string>("");

  // üzerrine tıklanan seçenek state'de yoksa ekle varsa kaldır
  const toggle = (id: string) => {
    // zaten seçili olana mı tıklandı?
    const isSame = selected === id;

    if (isSame) {
      // aynısına tıklandıysa state'den kaldır
      setSelected("");
    } else {
      // farklı renge tıklandıysa state'i güncelle
      setSelected(id);
    }
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Renk Seçiniz</h2>

      <div className="flex gap-5">
        {data.color.split(",").map((id) => {
          // ekrana basılan rengin kodunu bul
          const color = colors.find((i) => i.id === id);

          // ekrana basılan renk seçili mi?
          const isSelected = selected == id;

          return (
            <div className={isSelected ? " ring ring-blue rounded-full" : ""}>
              <div
                onClick={() => toggle(id)}
                className="m-1 size-9 rounded-full cursor-pointer"
                style={{ background: color?.code }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
