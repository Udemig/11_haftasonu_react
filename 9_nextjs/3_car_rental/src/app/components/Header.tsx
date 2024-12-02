import Link from "next/link";

const Header = () => {
  return (
    <div className={`absolute text-white w-full`}>
      <div className="container flex justify-between items-center w-full">
        <h1 className="font-bold text-2xl md:text-3xl">
          <Link href="/home">DRIVE</Link>
        </h1>

        <nav className="text-sm md:text-base flex gap-2 md:gap-4">
          <Link href="/">Keşfet</Link>
          <Link href="/orders">Sipairşlerim</Link>
          <Link href="/">Hakkımızda</Link>
          <Link href="/" className="max-md:hidden">
            Fiyatlandırma
          </Link>
        </nav>

        <div className="flex gap-5">
          <button className="max-md:hidden">İletişim</button>
          <button className="bg-white text-sm md:text-base text-black rounded-full px-4 py-1 text-nowrap transition hover:bg-gray-100">
            Kaydol
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
