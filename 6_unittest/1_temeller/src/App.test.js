// App bileşeninin testlerinin yazıldığı dosya
// Bir dosyanın test dosyasını olduğunu .test.js/jsx uzantsından anlarız.

/*
 ! Unit Test
 * Yazdığımız dinamik olan bütün react bileşenlerinin testini yazarız

 * Unit test yazmamız sayesinde kod değişikliği yapıldığında, yaptığımız değişikliklerin githuba gönderilmeden önce testlerini çalıştırığı her şeyin doğru çalıştığından emin olabiliriz. Bütün projelerde her işlevi el ile çok fazla zaman alır ve gözden bir şey kaçırma ihtimali yüskektir. Bu yüzden unit test ile bileşenlerde görevlerini yerine getiriyor mu diye tek tek  her bileşenin testlerini yazarız

 * Kod değişikliği yapıldığında yeni kodlar githuba pushlanamdan önce tstler çalıştırılır ve her şeyin doğru çalıştığından emin olunur. Unit testler sayesinde yapılan her değişiklikte bütün projeyi ele ile tek tek kontrol etmeye gerek kalmaz, sadece testler çalıştırılır.
*/

import { render, screen } from "@testing-library/react";
import App from "./App";

// Bir fonksiyonun veya bileşenin unit testini yazmak için "test" veya "it" methodu kullanılır
// Test methodları 2 parametre alır:
// 1) string   : testin açıklaması
// 2) fonsiyon : testin yapıldığı nokta

test("react öğren linki ekrana basılır", () => {
  // test edilecek olan bileşen Virtual (Sanal) Ortamda "ekrana basılır".
  render(<App />);

  // test edilecek element çağrılır (eğer elementi tarayıcıda ekrana basıyo olsaydık document.querySelector("a") vb. methodları kullanarak elementi çağırırdık. Render methodu tarayıcıda değil sanala ortamda renderladığı için document yerine screen ve querySelector yerine farklı methodları kullanıcaz)
  const linkElement = screen.getByText("React Öğren");

  // çağrılan elementten beklentimizi söyleriz
  expect(linkElement).toBeInTheDocument();
});
