"use client";
import { getRecipes } from "@/app/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
  // tarifler sayfasında yağtığımız api isteği sonucunda elde ettiğimiz tarif verisine bu bileşende de ihtiyacımız oldu bu noktada bu bileşende de api isteği attık
  // api isteklerinden sadece biri gerçekten api'a giidecek diğeri ilk istekten gelen cevabı kullanıcak
  // const data = await getRecipes();
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const id = searchParams.get("id");

  console.log(name);
  console.log(id);

  return (
    <header className="px-10 py-5 border-b flex justify-between">
      <h1>NEXT</h1>

      <nav className="flex gap-5">
        <Link href="/">Anasayfa</Link>
        <Link href="/recipes">
          Tarifler
          {/* ({data.recipes.length}) */}
        </Link>
        <Link href="/gallery">7 Harika</Link>
        <Link href="/iletisim">İletişim</Link>
      </nav>
    </header>
  );
};

export default Header;
