import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col text-center gap-5">
      <h1 className="text-yellow-500">404</h1>

      <h1>Aradığınız Sayfa Bulunamadı</h1>

      <p>
        <Link className="text-blue-500" href="/">
          Anasayfa'ya
        </Link>{" "}
        göz atın
      </p>
    </div>
  );
};

export default NotFound;
