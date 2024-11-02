/*
 *  Default Param (Varsayılan Değer Sahip Parametre)
 
 * Bazen opsiyonel parametreyi gödermediğimiz zaman değerinin undefined olmasını istemeyiz bunun yerine varsayılan bir değere sahip olması istenebilir
 */
// Örnek
function selamVer(isim) {
    if (isim === void 0) { isim = "Dünya"; }
    console.log("Merhaba ".concat(isim));
}
selamVer("Ali");
selamVer();
// Örnek
var kdvHesapla = function (fiyat, kdv) {
    if (kdv === void 0) { kdv = 18; }
    return fiyat + (kdv / 100) * fiyat;
};
console.log("varsayılan kdv'li fiyat", kdvHesapla(200));
console.log("varsayılan kdv'li fiyat", kdvHesapla(200, 35));
