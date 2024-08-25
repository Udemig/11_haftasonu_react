import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Header from "./components/Header";
import { useEffect } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sepet" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
