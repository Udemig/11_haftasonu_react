import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Undefined from "./pages/Undefined";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Undefined />} />
    </Routes>
  );
};

export default App;
