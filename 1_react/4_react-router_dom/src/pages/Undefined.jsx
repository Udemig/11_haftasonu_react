import { useNavigate, useLocation } from "react-router-dom";

const Undefined = () => {
  // useNavigate hook'unu çağırığımızıda geriye yönlendirme işlerini yapmamızı sağlayan bir tane method döndürür
  const navigate = useNavigate();

  // useLocation hooku sayesinde kullanıcının bulunduğu route hakkındaki bilgileri alabiliyoruz
  const loc = useLocation();

  return (
    <div className="container py-6">
      <img src="/404.gif" className="img-fluid rounded" />

      <p className="text-center fs-3 my-4">
        Üzgünüz, aradığınız sayfa bulunamadı
      </p>

      <div className="d-flex justify-content-center">
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white p-2 rounded"
        >
          Anasayfa
        </button>
      </div>

      {loc.state && (
        <p className="fs-3 text-center my-4">
          Hata kodunuz
          <span className="badge bg-warning mx-4">{loc.state}</span>
        </p>
      )}
    </div>
  );
};

export default Undefined;
