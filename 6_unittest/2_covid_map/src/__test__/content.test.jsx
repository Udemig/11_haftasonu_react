import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Content from "../pages/detail/Content";
import { data } from "../constants";

const mockStore = configureStore([thunk]);

test("store yüklenme durumundayken ekrana loader gelir", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // ekrana en az bir card loader'ı geldi mi?
  screen.getAllByTestId("card-loader");
});

test("store hata durumundayken ekrana error gelir", () => {
  // store'un hata durumundaki halini simüle et
  const store = mockStore({
    isLoading: false,
    error: "Bağlantı zaman aşıma uğradı",
    data: null,
  });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // hata bileşeni ekrana geldi mi?
  screen.getByTestId("error");
});

test("store'a veri geldiği durumda ekrana nesnedeki her bir değer için kart basılır", () => {
  // store'un hata durumundaki halini simüle et
  const store = mockStore({
    isLoading: false,
    error: null,
    data: data,
  });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // data nesnesini key ve value'lardan oluşan diziye çevir
  const arr = Object.entries(data);

  // dizideki herbir elemen için ekrana kartlar basılır
  arr.forEach((item) => {
    // ekrana item'ın key değeri geldi mi?
    screen.getByText(item[0]);

    // ekrana item'ın value değeri null ise Bilinmiyor null değilse valur değerinin kendisi geldi mi?
    screen.getAllByText(!item[1] ? "Bilinmiyor" : item[1]);
  });
});
