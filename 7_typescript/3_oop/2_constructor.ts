/*
 * Constructor: İnşa Methodu
 * Constructor methodu oluşturulan nesnenin özelliklerinin değerlini dışarıdan almaya yarar
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz.
 * Constructor new anahtar kelimesi ile class çağrıldığında ilk çalışan fonksiyondur.
 * Constructor ile class'a gelen parameterlere erişiriz

*/

class Person {
  // 1) sınıfın özelliklerini belirle
  ad: string;
  soyad: string;
  yas: number;

  // 2) constructor ile dışarıdan yukarıdaki tanımlanan özelliklere değer ataması yapabiliriz.
  constructor(yeni_ad: string, yeni_soyad: string, yeni_yas: number) {
    this.ad = yeni_ad;
    this.soyad = yeni_soyad;
    this.yas = yeni_yas;
  }

  kendiniTanit() {
    console.log(
      `Selam, ben ${this.ad} ${this.soyad} ve ${this.yas} yaşındayım`
    );
  }
}

// sınıftan örnek oluşturma
const kisi1 = new Person("Burak", "Musa", 56);
const kisi2 = new Person("Can", "Dost", 23);
kisi1.kendiniTanit();
kisi2.kendiniTanit();

//* Soru: Bir teknolojik/ev aleti için class yapısı oluşturun.
//* Bu class'tan oluşturduğunuz nesnenin değerlerini constructor yardımıymıyla dışarıdan alun.
//* Class en az 4 özellik ve bir methoda sahip olsun
//* Bu class'tan en az 1 örnek oluşturun

//* CEVAP
class Computer {
  marka: string;
  type: string;
  year: number;
  color: string;

  constructor(
    new_marka: string,
    new_type: string,
    new_year: number,
    new_color: string
  ) {
    this.marka = new_marka;
    this.type = new_type;
    this.year = new_year;
    this.color = new_color;
  }

  open_computer() {
    console.log(
      `${this.marka} marka ${this.type}  ${this.year} model ${this.color} renkli bilgisayar çalıştırıldı.`
    );
  }
}

const hp = new Computer("HP", "Laptop", 2023, "gri");

hp.open_computer();

// CEVAP - 2
class ElektronikAlet {
  marka: string;
  model: string;
  voltaj: number;
  fiyat: number;

  constructor(
    marka: string,
    model: string,
    voltaj: number,
    fiyat: number
  ) {
    this.marka = marka;
    this.model = model;
    this.voltaj = voltaj;
    this.fiyat = fiyat;
  }

  bilgiGoster(): string {
    return `${this.marka} ${this.model} - ${this.voltaj}V, Fiyat: ${this.fiyat} TL`;
  }
}

const mikrodalga = new ElektronikAlet("Tefal", "abc", 220, 5500);
console.log(mikrodalga.bilgiGoster());

// CEVAP
class Computar {
  readonly name: string;
  readonly price: number;
  readonly desc: string;
  readonly screenWidth: number;

  constructor(
    name: string,
    price: number,
    desc: string,
    screenWidth: number
  ) {
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.screenWidth = screenWidth;
  }

  showMessageToUser(): string {
    const message = this.name + " is " + this.desc;
    return message;
  }
}

const myComputar = new Computar("Monster", 100000, "Very usefull!", 30);

console.log("Message:", myComputar.showMessageToUser());

// CEVAP
class GamingConsole {
  name: string;
  company: string;
  modelnumber: string;
  serielnumber: string;

  constructor(
    name: string,
    company: string,
    modelnumber: string,
    serielnumber: string
  ) {
    this.name = name;
    this.company = company;
    this.modelnumber = modelnumber;
    this.serielnumber = serielnumber;
  }
}

const gaming = new GamingConsole(
  "Xbox One",
  "Microsoft",
  "02384929",
  "1122"
);

console.log(gaming);

// cevap
class beyazesya {
  marka: string;
  model: number;
  renk: string;

  constructor(marka: string, model: number, renk: string) {
    this.marka = marka;
    this.model = model;
    this.renk = renk;
  }

  islev() {
    console.log(
      `ben ${this.marka} ${this.model} ${this.renk}  bir çamaşır makinasıyım`
    );
  }
}

const esya = new beyazesya("bosch", 121, "gri");

esya.islev();

// cevap
class RobotSupurge {
  marka: string;
  pilOmru: number;
  supurgeGucu: number;
  hazneHacmi: number;
  sesSeviyesi: number;

  constructor(
    marka: string,
    pilOmru: number,
    supurgeGucu: number,
    hazneHacmi: number,
    sesSeviyesi: number
  ) {
    this.marka = marka;
    this.pilOmru = pilOmru;
    this.supurgeGucu = supurgeGucu;
    this.hazneHacmi = hazneHacmi;
    this.sesSeviyesi = sesSeviyesi;
  }

  public bilgiAl(): string {
    return `Yeni yardımcımızla tanışmaya hazır mısınız karşınızda: ${this.marka}, özellikleri ise şöyle: Pil Ömrü: ${this.pilOmru} dakika, Süpürme Gücü: ${this.supurgeGucu} Pa, Hazne Hacmi: ${this.hazneHacmi} L, Ses Seviyesi: ${this.sesSeviyesi} dB`;
  }
}
const benimSupurgem = new RobotSupurge("iRobot", 90, 2000, 0.6, 65);
console.log(benimSupurgem.bilgiAl());

// cevap
class Otomobil {
  marka: string;
  model: number;
  vites: string;
  turbo: boolean;

  constructor(
    yeni_marka: string,
    yeni_model: number,
    yeni_vites: string,
    yeni_turbo: boolean
  ) {
    this.marka = yeni_marka;
    this.model = yeni_model;
    this.vites = yeni_vites;
    this.turbo = yeni_turbo;
  }

  arabaDegis() {
    console.log("yeni araba al");
  }
}

const otomobil1 = new Otomobil("OPEL", 1.2, "MANUEL", false);
const otomobil2 = new Otomobil("BMW", 3.2, "OTOMATİK", true);

console.log(otomobil1);
console.log(otomobil2);
