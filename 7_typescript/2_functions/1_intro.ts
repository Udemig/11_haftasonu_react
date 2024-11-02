/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlarken kastımız fonksiyonun aldığı parametrelerin ve return ettiği değerin tipini tanımlamaktan ibarettir.
 */

// normal fonk
function hesaplama(a: number, b: number): string {
  return "Hesaplama Sonucu:" + (a + b);
}

const x = hesaplama(45, 12);

// arrow fonk
const hesapla = (a: string, b: number): number => {
  return b;
};

const y = hesapla("text", 12);
