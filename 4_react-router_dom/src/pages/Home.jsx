import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column gap-5 align-items-center">
      <h1>Hoş Geldiniz</h1>

      <img className="img-fluid rounded image" src="/welcome.webp" />

      <p>
        <Link to="/ürünler">Ürünler Sayfasında</Link> Yeni Çıkan bütün
        kitaplara ulaşabilirisniz
      </p>
    </div>
  );
};

export default Home;
