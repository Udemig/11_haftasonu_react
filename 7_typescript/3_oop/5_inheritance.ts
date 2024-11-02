/*
 * Inheritance (Kalıtım | Miras)

 * Bir OOP Kavaramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.

 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirrir.
 * Miras her zaman "ana sınıf" tan üretilmiş olan "alt sınıf" lar arasında gerçekleşir
 
 * Alt sınıf (Derived Class | Child Class), bir üst sınıftan (Parent Class) miras olarak özelliklerini ve davranışlarını alabilir 
*/

// Parent Class
class GeometrikSekil {
  public ad: string;

  constructor(ad: string) {
    this.ad = ad;
  }

  tanim() {
    console.log(`Bu bir ${this.ad} şeklidir`);
  }
}

// Derived Class - Constructor Yok
class Dikdortgen extends GeometrikSekil {
  private uzunluk = 40;
  private genislik = 80;
}

new Dikdortgen("Dikdörtgen");

// Derived Class - Constructor Var
class Daire extends GeometrikSekil {
  private yaricap: number;

  constructor(name: string, yaricap: number) {
    // super: parent class'ın constructor'ına değer göndermeye yarar
    super(name);

    this.yaricap = yaricap;
  }
}

new Daire("Daire", 9);

//* Not: Parent class'ın constructor'ı varsa ve chlid class'ta da constructor tanımlandıysa super methodu ile parent classs'ın constructor'ına değer göndermek zorundayız

// Parent
class Arac {
  public marka: string;
  public model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor");
  }
}

// Child
class Araba extends Arac {
  // miras alınan class'a yeni özellik ekle
  private yakit: string;

  constructor(marka: string, model: string, yakit: string) {
    // parent class'ın constructor'ına istediği değeri gönderdik
    super(marka, model);

    this.yakit = yakit;
  }

  // yeni method ekleme
  x() {
    console.log("selam");
  }

  // miras olarak alınan methodu değiştirme >! Method Overriding
  calistir(): void {
    // calistir methodunun parent class versiyonunuu çağır
    super.calistir();
    // ardından farklı işlemler yaparız
    console.log("Kontak Çevriliyor...");
  }
}

const mer = new Araba("Mercedes", "cla45s", "benzin");

mer.calistir();
mer.x();
