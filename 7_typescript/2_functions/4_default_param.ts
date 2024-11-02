/*
 *  Default Param (Varsayılan Değer Sahip Parametre)
 
 * Bazen opsiyonel parametreyi gödermediğimiz zaman değerinin undefined olmasını istemeyiz bunun yerine varsayılan bir değere sahip olması istenebilir
 */

// Örnek
function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Ali");
selamVer();

// Örnek
const kdvHesapla = (fiyat: number, kdv: number = 18): number => {
  return fiyat + (kdv / 100) * fiyat;
};

console.log("varsayılan kdv'li fiyat", kdvHesapla(200));
console.log("varsayılan kdv'li fiyat", kdvHesapla(200, 35));
