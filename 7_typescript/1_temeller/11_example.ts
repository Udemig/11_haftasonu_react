/*
 * Herkes içerisinde en az 1
 * string
 * number
 * boolean
 * array
 * object
 * tuple
 * union type
 * string literal
 * any
 * tiplerinde veri barından bir nesne tipi oluşturun ve bu oluşturduğunuz tipi en az bir nesneyi tanımlarken kullanın
 */

type x = {};

// CEVAP - 1
type laptop = {
  model: string;
  ram: number;
  touchable: boolean;
  color: "black" | "silver";
  equipment: string[];
};

let hp: laptop = {
  model: "pavilion",
  ram: 16,
  touchable: false,
  color: "black",
  equipment: ["hdmi", "usb", "charger"],
};

// CEVAP - 2
type player = {
  name: string;
  age: number;
  gender: "male" | "kadın";
  gametype: any;
  city: [string, number];
};

const playerdata: player = {
  name: "Hasan",
  age: 25,
  gender: "male",
  gametype: "football",
  city: ["istanbul", 34],
};

// CEVAP - 3
let KisiKArti: {
  isim: string;
  yas: number;
  ogrenci: boolean;
  hobiler: string[];
  bilgi: [string, number];
  durum: "basarili" | "basarisiz";
  Sehir: number | string;
  hobi: any;
};

KisiKArti = {
  isim: "muhammed",
  yas: 30,
  ogrenci: true,
  hobiler: ["kitap okuma", "yuzme"],
  bilgi: ["muhammed", 30],
  durum: "basarili",
  Sehir: 34,
  hobi: "yüzme",
};

// CEVAP - 4
type userInfo = {
  name: "Yasin" | "Ali" | "Veli";
  surname: string;
  age: number;
  isStudent: boolean;
  boyKilo: [number, number];
  hobies: string[];
};

type userInfo2 = {
  email: string;
  phoneNumber: string;
  address: {
    country: string;
    city: string;
    street: any;
  };
};

let user: userInfo & userInfo2;

user = {
  name: "Yasin",
  surname: "Özboğa",
  age: 16,
  isStudent: true,
  boyKilo: [1.68, 60],
  hobies: ["Reading", "Coding"],
  email: "yasin.info@gmail.com",
  phoneNumber: "01234567890",
  address: {
    country: "Turkey",
    city: "Elazığ",
    street: null,
  },
};
console.log(user);

// CEVAP - 5
type FutbolTakimi = {
  isim: string;
  kurulus: number;
  teknikDirektor: string;
  futbolcular: {
    isim: string;
    pozisyon: string;
    numara: number;
  }[];
};

const galatasaray: FutbolTakimi = {
  isim: "Galatasaray",
  kurulus: 1905,
  teknikDirektor: "Okan Buruk",
  futbolcular: [
    { isim: "Fernando Muslera", pozisyon: "Kaleci", numara: 1 },
    { isim: "Mauro Icardi", pozisyon: "Orta Saha", numara: 9 },
    { isim: "Dries Mertens", pozisyon: "Forvet", numara: 30 },
  ],
};
