import Container from "../../components/container";
import { MdOutlineKeyboardArrowRight as Arrow } from "react-icons/md";

const Hero = () => {
  return (
    <div className="bg-blue-900 text-white">
      <Container designs="py-10 pb-16 md:pt-[100px] md:pb-[120px] grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-4xl">COVID-19 CANLI TAKİP</h1>

          <p className="text-gray-300">
            Koronavirüs hastalığı 2019 şiddetli akut solunum sendromu
            koronavirüsü 2'nin neden olduğu bulaşıcı bir hastalıktır. İlk
            vaka ile Çin'in Hubei eyaletinin Wuhan şehrinde Kasım 2019
            tarihinde karşılaşılmıştır.
          </p>

          <div className="flex gap-5">
            <button className="bg-pink-600 py-1 px-4 rounded-sm flex-1 flex items-center hover:bg-pink-500 transition">
              <span className="flex-1 whitespace-nowrap">
                Nasıl Korunulur
              </span>
              <Arrow className="text-2xl" />
            </button>

            <button className="border py-1 px-4 rounded-sm flex-1 flex items-center hover:bg-white hover:text-black transition whitespace-nowrap">
              <span className="flex-1">Doktor Bul</span>
              <Arrow className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/hero.png" className="w-[300px] md:h-[250px]" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
