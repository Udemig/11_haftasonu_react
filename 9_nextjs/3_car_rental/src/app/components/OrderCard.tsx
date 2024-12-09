import { OrderType } from "../utils/types";
import Image from "next/image";
import millify from "millify";

type Props = {
  order: OrderType;
};

const OrderCard = ({ order }: Props) => {
  return (
    <div className="border p-4 rounded-md gap-5 shadow items-center justify-between grid grid-cols-3 xl:grid-cols-5 hover:bg-zinc-100/10 transition cursor-pointer">
      <Image width={250} height={250} src={order.product.imageUrl} unoptimized alt="car" />

      <Info title={order.product.make} value={order.product.model} />

      <Info title={"Ödenen Tutar"} design="text-green-600" value={millify(order.money_spend) + " ₺"} />

      <Info
        title={"Alım Tarihi"}
        design="text-blue-600"
        value={new Date(order.createdAt).toLocaleDateString()}
      />
      <Info title={"Ödeme Tipi"} design="text-blue-600" value={order.type} />
    </div>
  );
};

type InfoProps = {
  title: string;
  value: string;
  design?: string;
};

const Info = ({ title, value, design }: InfoProps) => {
  return (
    <p className="flex max-md:flex-col gap-1">
      <span className="whitespace-nowrap">{title}</span>
      <span className={`font-bold ${design}`}>{value}</span>
    </p>
  );
};

export default OrderCard;
