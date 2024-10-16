import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/Statistics";
import api from "../api";
import millify from "millify";

// API mock dosyasını import et
jest.mock("../api");

// testler kesinlikle api isteklerine bağılmlı olmamalı api'dan gelicek cevap testin geçip geçmem durumunu etkilememli. api modülünü mocklayıp api' modülünün göndereceği cevapların sahte bir versitonunu göndericez bu sayede test ortamında gerçekten api isteği atıp cevap beklemek yerine bizim sahte cevaplarımıza göre test yapıcaz

describe("istatistik component testleri", () => {
  // her testten önce mockfonksiyonlarını resetledik
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("bileşen renderlandığında ekrana loader gelir", async () => {
    // api.get isteği bileşen içerisnde tetiklendiği zaman hangi cevabın gönderilmesi gerektiğini belirtir
    api.get.mockResolvedValueOnce({ data: [] });

    // bileşeni renderla
    render(<Statistics />);

    // elementi çağırma onun aynı zamanda ekranda'mı testini yapmaya eşdeğdir o yüzden ekstra olarak toBeIntheDocument yazmaya gerek yok
    screen.getByTestId("home-loader");
  });

  test("loader'ın ardından ekrana istatistikler gelir", async () => {
    const totals = {
      confirmed: 701166431,
      recovered: 590451974,
      critical: 2877,
      deaths: 7014639,
      lastChange: "2024-06-04T00:28:51+00:00",
      lastUpdate: "2024-08-09T09:13:41+00:00",
    };

    // api isteği atılınca olumlu cevap gitemsini söyledik ve gidicek cevabın içeriğini belirledik
    api.get.mockResolvedValueOnce({ data: [totals] });

    // bileşeni renderla
    render(<Statistics />);

    // waitfor ile loader ekrandan gidene kadar bekle diyoruz
    await waitFor(() =>
      expect(screen.queryByTestId("home-loader")).not.toBeInTheDocument()
    );

    // ekranda toplam vaka başlığı ve sayısı yazıyor mu?
    expect(screen.getByText(/toplam vaka/i));
    expect(screen.getByText(millify(totals.confirmed)));

    // ekranda toplam iyileşen başlığı ve sayısı yazıyor mu?
    expect(screen.getByText("Toplam İyileşen"));
    expect(screen.getByText(millify(totals.recovered)));

    // ekranda toplam vefat başlığı ve sayısı yazıyor mu?
    expect(screen.getByText(/toplam vefat/i));
    expect(screen.getByText(millify(totals.deaths)));
  });

  test("hata durumunda erkanda sadedce hata yazar", async () => {
    // api isteği atılıdğında olumsuz bir cevap gönderilmesi gerektiğini söyle
    api.get.mockRejectedValueOnce(new Error("Zaman aşımına uğradı"));

    // bileşeni renderla
    render(<Statistics />);

    // ekrandan loader gidene kadar bekle
    await waitFor(() =>
      expect(screen.queryByTestId("home-loader")).not.toBeInTheDocument()
    );

    // toplam vaka başlığı ekranda yoktur
    expect(screen.queryByText(/toplam vaka/i)).not.toBeInTheDocument();

    // erkanda istatistikler alınamıyor yazar
    screen.getByText("İstatistikler alınamıyor...");
  });
});
