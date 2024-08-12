import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  // LOADER methodu aracılığı return edilen veriler erişmek için useLoaderData hookunu kullanırız
  const data = useLoaderData();

  console.log("VERİİİİ", data);

  return (
    <div className="page">
      <Header />

      {/* alt route > projedki bütün sayflar bbu noktaya header footer arasına konmlasın  */}
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
