//* Static kelimesi özelilğin veya methodun sınıfın örneği alınmdan kullanılmasınıs sağlar.

//* Static Method
class Matematik {
  topla(x: number, y: number): void {
    console.log(x + y);
  }

  static carp(a: number, b: number): void {
    console.log(a * b);
  }
}

// static olan methoda erişme
Matematik.carp(8, 12);

// static olmayan methoda erişme
const math = new Matematik();
math.topla(20, 35);

//* Static Property
class Ogrenci {
  static ogrenciSayisi: number = 0;
  public isim: string;

  constructor(isim: string) {
    this.isim = isim;

    Ogrenci.ogrenciSayisi++;
  }
}

const o1 = new Ogrenci("ali");
const o2 = new Ogrenci("ayşe");
const o3 = new Ogrenci("ayla");

console.log(o1, o2, o3);
console.log(Ogrenci.ogrenciSayisi);
