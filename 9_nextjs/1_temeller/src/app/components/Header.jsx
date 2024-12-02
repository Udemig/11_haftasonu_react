import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between border-b p-5 text-lg">
      <Link href="/">Anasayfa</Link>
      <Link href="/products">Ürünler</Link>
      <Link href="/profile">Profil</Link>
      <Link href="/login">Giriş Yap</Link>
    </header>
  );
};

export default Header;
