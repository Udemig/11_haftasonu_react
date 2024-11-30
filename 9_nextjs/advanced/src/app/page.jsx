import Image from "next/image";
import manzara from "./assets/manzara.jpg";

const Home = () => {
  const url =
    "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="text-2xl font-semibold p-10 flex flex-col gap-10">
      <h1>Anasayfa</h1>

      <div>
        <h1>Local Resim</h1>
        <Image
          src={manzara}
          alt="manzara"
          priority
          quality={99}
          placeholder="blur"
        />
      </div>

      <div>
        <h1>Remote Resim</h1>
        <Image src={url} alt="deniz" width={400} height={200} />
      </div>

      <div>
        <h1>Remote Resim (Full Genişlik)</h1>
        <div className="relative h-[300px]">
          <Image src={url} alt="deniz" fill />
        </div>
      </div>
    </div>
  );
};

export default Home;
