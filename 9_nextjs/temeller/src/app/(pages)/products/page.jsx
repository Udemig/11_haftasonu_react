import Link from "next/link";

export const metadata = {
  title: "Ürünlere Gözatın",
  description: "En iyi ürünler burada..",
};

// cevap vermesi belirli bir sn süren fonk yazalım
export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Products = async () => {
  // 5 saniye sonra cevap veren api isteği attık gibi düşünücez
  await delay(1000);

  return (
    <div>
      <h1>ÜRÜNLER SAYFASI</h1>

      <br />

      <div className="flex flex-col gap-5">
        <Link href="/products/1">Ürün - 1</Link>
        <Link href="/products/2">Ürün - 2</Link>
        <Link href="/products/3">Ürün - 3</Link>
        <Link href="/products/4">Ürün - 4</Link>
        <Link href="/products/5">Ürün - 5</Link>
        <Link href="/products/6">Ürün - 6</Link>
        <Link href="/products/7">Ürün - 7</Link>
      </div>
    </div>
  );
};

export default Products;
