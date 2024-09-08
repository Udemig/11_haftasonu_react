import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Header from "./components/header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFavorites, getGenres } from "./redux/actions";
import Detail from "./pages/detail";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getFavorites());
  }, []);

  return (
    <BrowserRouter>
      <div className="p-5 md:p-10 lg:px-15 xl:px-20">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/watch-list" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
