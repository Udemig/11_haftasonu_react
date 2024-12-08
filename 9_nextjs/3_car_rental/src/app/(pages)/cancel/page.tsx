import Image from "next/image";
import Link from "next/link";
import cancel from "@/app/assets/icons/close.png";

const Cancel = () => {
  return (
    <div className="h-screen">
      <div className="h-[50%] bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <Image src={cancel} alt="cancel" width={80} height={80} />

          <p className="text-center text-4xl font-semibold">
            Malesef, Ödeme başarısız oldu
          </p>
        </div>
      </div>

      <div className="p-10 mt-10 text-center">
        <p className="text-lg mb-10">
          Anasayfaya dönüp tekrardan deneyebilirsiniz.
        </p>

        <Link
          href="/"
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
        >
          Anasayfa
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
