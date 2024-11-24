import { Shoe } from "../../types";

const Price = ({ item }: { item: Shoe }) => {
  let price = item.price;

  if (item.discount) {
    price = (item.price * (100 - item.discount)) / 100;
  }

  return (
    <div className={item.discount ? "text-yellow" : "text-white"}>${item.price}</div>
  );
};

export default Price;
