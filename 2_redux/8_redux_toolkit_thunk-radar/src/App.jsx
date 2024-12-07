import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import List from "./pages/List";
import Map from "./pages/Map";
import Buttons from "./components/Buttons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

const App = () => {
  const dispatch = useDispatch();

  // detayı gösterilecek uçuşun id'si
  const [detailId, setDetailId] = useState(null);

  // tr sınırları içerisindeki uçuşları al ve store'a aktar
  useEffect(() => {
    // ilk sayfaya girdiği andaki istek
    dispatch(getFlights());

    // ilk isteğin ardından her 10 saniyede bir istek at
    // const timer = setInterval(() => {
    //   dispatch(getFlights());
    // }, 10000);

    // kullanıcı sayfadan ayrılınca sayıcı temizle
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />

      <Buttons />

      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>

      {/* 
      TODO detay id stateinde eleman varsa ekrana modal bas
       */}
      {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
    </BrowserRouter>
  );
};

export default App;
