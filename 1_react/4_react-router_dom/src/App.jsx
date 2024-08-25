import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./pages/Layout";
import axios from "axios";
import Error from "./components/Error";

// PROJE içerisindeki route'ları bu method aracılığı ile tanımlayalım
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // kullancığı sayfaya girmeden önce yapılacak api istekleri için kullanılır
    loader: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      return res.data;
    },
    // hata oluştuğunda sayfa yerine ekrana basılır
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ürünler", element: <Products /> },
      {
        path: "/detay/:id",
        element: <Detail />,
      },
      {
        path: "/kategori",
        element: <CategoryPage />,
        children: [
          { path: "hikaye", element: <h1>Hikaye</h1> },
          { path: "roman", element: <h1>ROMAN</h1> },
        ],
      },
      { path: "*", element: <Undefined /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
