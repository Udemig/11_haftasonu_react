/*
 * Sadece fonksiyonların return tipinde kullanılabilen iki yeni tip:
 * Void: Fonksiyon herhangi bir veri return etmiyorsa kullanılır
 * void varsa return satırı olmaz veya varsada veri döndürmez
 */

function selamla(): void {
  console.log("Selam Nasılsın?");

  return; // fonksiyonu durdurma amacıyla kullanılan return satırını kullabiliriz
}

/*
 * Never: Fonksiyon hata fırlatıyorsa kullanılır.
 * Örneğin bir fonksiyonun hata fırlatma durumu varsa return tipi olarak never kullanılır.
 * "Hiç bir zaman görevini tam olarak tamamlayamaz" durumunu ifade eder
 */

function hataFonksiyonu(message: string): never {
  // hata fırlat
  throw new Error(message);

  console.log("selam");
  console.log("naber");
}
