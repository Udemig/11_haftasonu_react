import Image from "next/image";
import { models } from "../utils/contants";

const Hero = () => {
  return (
    <div
      className="h-[80vh] bg-center bg-cover grid place-items-center p-5 bg-black text-white bg-[linear-gradient(#00000084,#00000084),url('/bg.jpg')]
    "
    >
      <div className="text-center flex flex-col gap-8">
        <p>Yakınındaki kiralık araçları keşfet</p>

        <h1 className="text-4xl md:text-5xl font-bold">Kendin İçin Mükemmek Aracı Bul</h1>

        <p>Kendine uygun modeli belirle</p>

        <div className="flex gap-4 justify-center flex-wrap">
          {models.map((model, key) => (
            <button
              key={key}
              className="px-3 py-1 rounded-full bg-gray-100/25 transition hover:bg-gray-500/25 flex gap-3 items-center"
            >
              <Image src={model.icon} alt={model.name} />
              {model.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
