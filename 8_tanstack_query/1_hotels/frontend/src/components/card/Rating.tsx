const Rating = ({ point, expand }: { point: number; expand?: boolean }) => {
  // renk belirle
  const color =
    point >= 4.7
      ? "bg-blue-500"
      : point >= 4
      ? "bg-green-500"
      : point >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  // renk belirle
  const text =
    point >= 4.7
      ? "Olağanüstü"
      : point >= 4
      ? "Güzel"
      : point >= 3
      ? "İyi"
      : point >= 2
      ? "Kötü"
      : "Çok Kötü";

  return (
    <div>
      <span className={`${color} p-2 rounded-lg text-white font-bold w-fit`}>
        {point}
      </span>

      {expand && <span className="font-semibold text-lg ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
