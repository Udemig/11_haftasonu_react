import { fireEvent, render, screen } from "@testing-library/react";
import Counter from ".";

test("Arttırma ve Azaltma olayları çalışır", () => {
  //1) Test edilecek bileşeni renderla
  render(<Counter />);

  //2) gerekli elementler çağır
  const incBtn = screen.getByRole("button", { name: "Arttır" });
  const decBtn = screen.getByRole("button", { name: "Azalt" });
  const countP = screen.getByText("0");

  //3) azalt butonu disabled mı
  expect(decBtn).toBeDisabled();

  //4) arttır butonuna tıkla
  fireEvent.click(incBtn);

  //5) sayaç değeri "1" oldu mu
  expect(countP).toHaveTextContent(/^1$/);

  //6) arttır butonuna tıkla
  fireEvent.click(incBtn);

  //7) sayaç değeri "2" oldu mu
  expect(countP).toHaveTextContent(/^2$/);

  //8) azalt butonu aktif mi
  expect(decBtn).toBeEnabled();

  //9) azalt butonuna tıkla
  fireEvent.click(decBtn);

  //10) sayaç değeri "1" oldu mu
  expect(countP).toHaveTextContent(/^1$/);

  //11) azalt butonuna tıkla
  fireEvent.click(decBtn);

  //12) sayaç değeri "0" oldu mu
  expect(countP).toHaveTextContent(/^0$/);

  //13) azalt butonu disabled mı
  expect(decBtn).toBeDisabled();
});
