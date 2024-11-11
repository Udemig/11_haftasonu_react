import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="h-screen grid place-items-center bg-[rgb(24,24,24)] text-white">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl font-bold font-serif">404</h1>

        <h2 className="text-3xl">Aradığınız Sayfa Bulunamadı</h2>

        <p className="text-2xl">
          <Link className="text-blue-500" to={"/"}>
            Anasayfa
          </Link>
          'ya bir göz atabilirsiniz
        </p>
      </div>
    </div>
  );
};

export default Undefined;
