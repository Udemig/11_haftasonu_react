import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Create from "./pages/create";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/place/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
