import { Shoe } from "../../types";

const Badge = ({ item }: { item: Shoe }) => {
  return (
    (item.discount || item.isNew) && (
      <span
        className={`absolute text-white rounded rounded-tl-[12px] rounded-br-[12px] lg:rounded-tl-[24px] lg:rounded-br-[24px] px-2 py-1 lg:px-4 lg:py-3 ${
          item.discount ? "bg-yellow" : "bg-blue"
        }`}
      >
        {item.discount ? `%${item.discount} indirim` : item.isNew && "Yeni"}
      </span>
    )
  );
};

export default Badge;
