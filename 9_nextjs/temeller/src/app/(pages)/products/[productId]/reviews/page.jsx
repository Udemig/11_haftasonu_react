import Link from "next/link";

const Reviews = async ({ params }) => {
  const { productId } = await params;

  return (
    <div>
      <Link href=".">Geri Dön</Link>

      <h1 className="my-10">
        <span className="text-red-500">{productId} id'li </span>
        Ürünün Yorum Sayfası
      </h1>

      <div className="flex flex-col gap-5">
        <Link href="reviews/1">Yorum - 1</Link>
        <Link href="reviews/2">Yorum - 2</Link>
        <Link href="reviews/3">Yorum - 3</Link>
        <Link href="reviews/4">Yorum - 4</Link>
      </div>
    </div>
  );
};

export default Reviews;
