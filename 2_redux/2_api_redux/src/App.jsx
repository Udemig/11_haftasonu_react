import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "./redux/actions/restActions";
import Restaurant from "./pages/Restaurant";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
