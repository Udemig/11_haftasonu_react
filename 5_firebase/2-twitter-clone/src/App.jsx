import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/feed/index";
import { Children } from "react";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Oturumu açık olmayanlar bu route'lar erişememeli */}
        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/profil" element={<h1>Profil Sayfası</h1>} />
          <Route path="/ayar" element={<h1>Ayar Sayfası</h1>} />
          <Route path="/arkadaş" element={<h1>Arkadaş Sayfası</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
