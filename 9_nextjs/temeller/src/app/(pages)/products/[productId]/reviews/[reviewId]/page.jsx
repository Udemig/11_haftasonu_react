const ReviewDetail = async ({ params }) => {
  const { productId, reviewId } = await params;

  return (
    <h1>
      <span className="text-red-500"> {productId} id'li</span> Ürünün
      <span className="text-red-500"> {reviewId} id'li</span> Yorumunun Detay Sayfası
    </h1>
  );
};

export default ReviewDetail;
