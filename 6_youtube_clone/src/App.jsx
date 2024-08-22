import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import { VideoProvider } from "./context/videoContext.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <VideoProvider>
              <Feed />
            </VideoProvider>
          }
        />
        <Route path="/watch" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
