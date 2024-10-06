/*
 * CEVAP - 1
 - 1 buton da göster yazıyor mu  
 - 2 butona tıkla  
 - 3 butonda gizle yazıyor mu  p etiketi var mı 
 - 4 tekrar butona tıkla 
 - 5 p elementi yok mu

 * CEVAP - 2
1.) Test dosyası oluştur
2.) Ekrana render et
3.) Button u al
5.) Butonun içindeki değer göster mi
6.) Text ekranda yok mu
7.) Butona tıkla
8.) Butonun içindeki değer gizle mi
4.) Text i al
9.) Text ekranda var mı
10.) Butona tıkla
11.) Butonun içindeki değer göster mi
12.) Text ekranda yok mu

 * CEVAP - 3
1. Bileşeni render et.
2. "Göster" butonunun sayfada olduğunu doğrula.
.. butona tıkla
3. Açıklama metninin sayfada  göründüğünü doğrula.
4. Butonun yazısının "Gizle" olduğunu doğrula.
.. butona tıkla
2. "Göster" butonunun sayfada olduğunu doğrula.
3. Açıklama metninin sayfada  olmadığını doğrula.



 * CEVAP - 4


 * CEVAP - 5

*/

import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";

test("accordion açılıp kapanır", () => {
  //1) Ekrana render et
  render(<Accordion />);

  //2) Button u al
  const btn = screen.getByRole("button");

  //3) Butonun içindeki değer göster mi
  expect(btn).toHaveTextContent("Göster");

  //4) Butona tıkla
  fireEvent.click(btn);

  //5) Butonun içindeki değer gizle mi
  expect(btn).toHaveTextContent("Gizle");

  //6) Text i al
  const text = screen.getByText(/Birim testi/);

  //7) Text ekranda var mı
  expect(text).toBeInTheDocument();

  //8) Butona tıkla
  fireEvent.click(btn);

  //9) Butonun içindeki değer göster mi
  expect(btn).toHaveTextContent("Göster");
});
