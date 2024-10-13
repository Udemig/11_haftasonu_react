import { render, screen } from "@testing-library/react";
import Heading from "../pages/detail/Heading";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { data } from "../constants";

// redux kullanılan bileşenleri test ederken test ediceğimiz senaryodaki store'un datasına göre  store'un sahte bir versiyonunu oluşturmalıyız
const mockStore = configureStore([thunk]);

it("store yüklenme durumdayken ekrana loader basılır", () => {
  // store'un yüklenme durumundaki state'inin kopyasını oluştur
  const store = mockStore({ isLoading: true, error: null, data: null });

  // bileşni render ederken bağımlı olduğu bütün sağlaycılar ile sarmalamalıyız
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ekrana loader geliyor mu?
  screen.getByTestId("header-loader");
});

it("store'da yüklenme bittiğinde ekranda loader yoktur ", () => {
  // store'un yüklenme bittiği durumu
  const store = mockStore({ isLoading: false, error: null, data: null });

  // bileşni render ederken bağımlı olduğu bütün sağlaycılar ile sarmalamalıyız
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ekranda header-loader elementini olmadığını test ediceğiz

  // elementin ekranda olmamasını beklediğimiz için query ile aldık
  const ele = screen.queryByTestId("header-loader");

  // element null mu?
  expect(ele).toBeNull();
});

it("store'a veri geldiğinde ekrana veriler basılır", () => {
  // store'un veri geldiği seneryodaki halinin sahtesini oluştur
  const store = mockStore({
    isLoading: false,
    error: null,
    data,
  });

  // test edilecek bileşenşi renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ülke ismi ekrana geldi mi?
  screen.getByRole("heading", { name: data.country });

  // bayrak ekrana geldi mi?
  const flagImg = screen.getByAltText("flag");

  // bayrağın kaynağı doğru mu?
  expect(flagImg).toHaveAttribute(
    "src",
    `https://flagsapi.com/${data.code}/flat/64.png`
  );
});
