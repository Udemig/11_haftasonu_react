import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

test("Butona tıklanma olayında renk ve yazı değiştirir", () => {
  //1) test edilecek bileşen render edilir
  render(<Button />);

  //2) test edilecek elementi çağır
  const button = screen.getByRole("button");

  //3) butonun rengi "Kırmızı" dırr
  expect(button).toHaveStyle({ background: "red" });

  //4) butonun içinde "Maviye Çevir" yazar
  expect(button).toHaveTextContent("Maviye Çevir");

  //5) butona tıkla
  fireEvent.click(button);

  //6) butonun rengi "Aqua" dır
  expect(button).toHaveStyle({ background: "aqua" });

  //7) butonun içinde "Kırmızıya Çevir" yazar
  expect(button).toHaveTextContent("Kırmızıya Çevir");

  //8) butona tıkla
  fireEvent.click(button);

  //9) butonun rengi "Kırmızı" dırr
  expect(button).toHaveStyle({ background: "red" });

  //10) butonun içinde "Maviye Çevir" yazar
  expect(button).toHaveTextContent("Maviye Çevir");
});
