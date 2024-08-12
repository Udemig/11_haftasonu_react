import { NavLink, Outlet } from "react-router-dom";

const CategoryPage = () => {
  // İç içe yollarda alt kullanıcı url'e alt route'lardan birinini yazıp girerse rrd alt route'n elementini ekrana basmak yerine kapsayıcı elementi ekrana basar

  // biz ise Outlet bileşeni yardımıyla kapsayıcı route'içiersnde alt route elementinin hangi posizyonda ekrana geliceğini belirleriz

  // proje içerisinde  yetkilendirme yapmak istersek nested routes kullanımı işimizie yarar örneğin bu kapsayıcı route'un altındaki bütün route'ların sadece admin ler tarafondan erişilmesini isstersek basit bir koşul yazmamız yeterli olur
  const apiUser = { name: "ahmet", role: "admin" };
  if (apiUser.role !== "admin") return "Yetkiniz Yok";

  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink to={`/kategori/hikaye`}>Hikaye</NavLink>
        <NavLink to={`/kategori/roman`}>Roman</NavLink>
      </aside>

      <Outlet />
    </div>
  );
};

export default CategoryPage;
