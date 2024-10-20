import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-red-700 text-white  py-[30px] 2xl:py-[50px] px-[5%]">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
