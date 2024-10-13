import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:code" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
