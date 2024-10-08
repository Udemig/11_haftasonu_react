import { render, screen } from "@testing-library/react";
import Statistics from "../pages/home/Statistics";

test("bileşen renderlandığında ekrana loader gelir", () => {
  render(<Statistics />);

  // elementi çağırma onun aynı zamanda ekranda'mı testini yapmaya eşdeğdir o yüzden ekstra olarak toBeIntheDocument yazmaya gerek yok
  screen.getByTestId("loader");

  // TODO ELEMENTİ ASENKRON OLDUĞU İÇİN ALAMADIK
  screen.getByText("Toplam Vaka");
});
