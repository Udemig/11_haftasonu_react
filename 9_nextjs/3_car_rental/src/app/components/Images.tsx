import Image from "next/image";
import Car1 from "@/app/assets/images/car1.png";
import Car2 from "@/app/assets/images/car2.png";
import Car3 from "@/app/assets/images/car3.png";
import Car4 from "@/app/assets/images/car4.png";
type Props = {
  url: string;
};

const Images = ({ url }: Props) => {
  const arr = [Car1, Car2, Car3, Car4];

  return (
    <div>
      <div className="relative max-md:h-[300px]">
        <Image
          src={url}
          fill
          alt={"vehicle"}
          unoptimized
          className="object-contain"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        {arr.map((src, key) => (
          <Image key={key} src={src} alt="car" className="rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default Images;
