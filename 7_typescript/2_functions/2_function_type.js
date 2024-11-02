/*
 * Typescripte'de bir fonksiyonun tipini doğrudan fonksiyonu tanımlarken ifade etmek yerine fonksiyondan bağımsız bir şekilde type anahtar kelimesinin kullanrak da tanımlayabiliriz.

*/
// 1.yol:
var func1 = function (par1, par2) {
    return "Fonksiyon Çalıştı:" + par1 + par2;
};
var func2 = function (par1, par2) {
    return "Fonksiyon Çalıştı:" + par1 + par2;
};
var func3 = function (par1, par2) {
    return { par1: par1, par2: par2 };
};
var func4 = function (par1, par2) {
    return { par1: par1, par2: par2 };
};
var getDataOfUser = function (location, decrees) {
    if (decrees > 30) {
        return location + " konumu oldukça sıcak";
    }
    else {
        return location + " konumu oldukça soğuk";
    }
};
var result = getDataOfUser("Ankara", 30.5);
console.log(result);
// Cevap - 2
