import icon1 from "@/app/assets/images/icon-1.webp";
import icon2 from "@/app/assets/images/icon-2.webp";
import icon3 from "@/app/assets/images/icon-3.webp";
import icon4 from "@/app/assets/images/icon-4.png";
import InfoCard from "./InfoCard";
import { StaticImageData } from "next/image";
import SalesGraphic from "./SalesGraphic";

export type InfoItem = {
  icon: StaticImageData;
  label: string;
  value: number | string;
};

const Page = () => {
  // ekrana basılacak olan kartların dizisi
  const cards: InfoItem[] = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: 327,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: 504,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: (142707).toLocaleString() + "$",
    },
    {
      icon: icon4,
      label: "Ürün Sayısı",
      value: 1428,
    },
  ];

  return (
    <div>
      <h1 className="title">Dashboard</h1>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {cards.map((item, key) => (
          <InfoCard item={item} key={key} />
        ))}
      </section>

      <section>
        <SalesGraphic />
      </section>
    </div>
  );
};

export default Page;
