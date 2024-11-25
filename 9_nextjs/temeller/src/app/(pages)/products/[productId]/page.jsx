import Link from "next/link";

// 1) statik metadata tanımı
// export const metadata = {
//   title: "Ürün Detay Sayfası",
// };

//2) dinamik metadata tanımı
export const generateMetadata = ({ params }) => {
  // api isteği atılıp ürün bilgieri alınıp title ona göre belirlenebilir
  return {
    title: params.productId + " id'li ürün",
  };
};

// dinamik sayfalarda parametreye erişmek için herhangi bir hooka ihtiyacımız yok doğrudan bileşen gelen params propu aracılığıyla urldeki parametrelere erişebiliyoruz

// paramterler promise dşekilde geldiğinden değerlere erişmek için await kullanılmalı

const Page = async ({ params }) => {
  const { productId } = await params;

  return (
    <div>
      <Link href=".">Geri Dön</Link>

      <h1 className="my-10">
        <span className="text-red-500">{productId} id'li </span>
        Ürünün Detay Sayfası
      </h1>

      <Link href={`${productId}/reviews`}>Yorumlara Git</Link>
    </div>
  );
};

export default Page;
