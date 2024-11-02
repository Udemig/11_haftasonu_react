/*
 * Typescripte'de bir fonksiyonun tipini doğrudan fonksiyonu tanımlarken ifade etmek yerine fonksiyondan bağımsız bir şekilde type anahtar kelimesinin kullanrak da tanımlayabiliriz.

*/

// 1.yol:
const func1 = (par1: string, par2: number): string => {
  return "Fonksiyon Çalıştı:" + par1 + par2;
};

const func2 = (par1: string, par2: number): string => {
  return "Fonksiyon Çalıştı:" + par1 + par2;
};

// 2.yol:
type FuncType = (par1: string, par2: number) => object;

const func3: FuncType = (par1, par2) => {
  return { par1, par2 };
};

const func4: FuncType = (par1, par2) => {
  return { par1, par2 };
};

// Yukarıdaki tipi ayrıca tanımladığımız 2.yolda olduğu gibi bir fonksiyon tipini ayrıca tanımlayın ve bu tipi fonksiyonda kullanın
// * kişinin bulunduğu konumu ve o konumdaki hava derecesini parametre olarak alsın
// * derece 30'dan fazlaysa ".... konumu oldukça sıcak"
// * derece 30'dan az ise ".... konumu oldukça soğuk"
// * şeklinde bir metin döndüren fonksiyon yazınız

// Cevap - 1
type fn = (location: string, decrees: number) => string;

const getDataOfUser: fn = (location, decrees) => {
  if (decrees > 30) {
    return location + " konumu oldukça sıcak";
  } else {
    return location + " konumu oldukça soğuk";
  }
};

const result = getDataOfUser("Ankara", 30.5);
console.log(result);

// Cevap - 2

type Weather = (konum: string, derece: number) => string;

const fn4: Weather = (konum, derece) => {
  if (derece > 30) {
    return "konum konumu oldukça sıcak derece";
  } else {
    return "konum konumu oldukça soğuk derece";
  }
};

// cevap - 3
type Mapp = (konum: String, derece: number) => Object;

const func5: Mapp = (konum, derece) => {
  return derece > 30 ? konum + "oldukça sıcak" : konum + "oldukça soğuk";
};

console.log(func1("istanbul", 30));
