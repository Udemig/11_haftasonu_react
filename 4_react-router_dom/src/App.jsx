import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";

const App = () => {
  return (
    // tarayıcadaki url'e göre sayfalama yapmamızı sağlar
    <BrowserRouter>
      <div className="page">
        {/* bütün sayfalarda ortak olarak gözükücek bileşen */}
        <Header />

        {/* url'deki yola göre doğru elementi ekrana basar */}
        <Routes>
          {/* projedeki her bir sayfa için tanımlanır */}
          <Route path="/" element={<Home />} />
          <Route path="/ürünler" element={<Products />} />

          {/* dinamik route tanımlama */}
          <Route path="/detay/:id" element={<Detail />} />

          {/* tanımsız bir route'a yönlenirse */}
          <Route path="*" element={<Undefined />} />
        </Routes>

        {/* bütün sayfalarda ortak olarak gözükücek bileşen */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
