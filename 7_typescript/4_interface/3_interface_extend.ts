/*
 * Interface type'larda olduğu gibi farklı bir/birkaç interface'in özelliklerini miras alabiliri.
 * Bunu extends anahtar kelimesi ile yapar.
 * Sınıfılardan farklı olarak istersek birden fazla interface'i tek seferde miras alabiliyoruz.
 */

interface IEvEsyasi {
  isim: string;
  fiyat: number;
}

interface IMobilya extends IEvEsyasi {
  renk: string;
}

const masa: IMobilya = {
  isim: "Yemek Masası",
  fiyat: 20000,
  renk: "Siyah",
};

// farklı bir interface tanımlayalım
interface IElektronik {
  marka: string;
  garantiSuresi: number;
  sarj?: number;
}

//birden fazla interface'i miras alma
interface IUrun extends IMobilya, IElektronik {
  id: string;
}

// interface'i kullanalım
const tv: IUrun = {
  marka: "LG",
  isim: "Smart TV",
  garantiSuresi: 2,
  renk: "Beyaz",
  fiyat: 89000,
  sarj: 100,
  id: "32423fds",
};

// Soru:
// İlk olarak 2 farklı interface oluşturun.
// Ardından 3. bir interface oluşturup ilk 2 interface miras olarak alıp genişletin.
// Son olarak bu interface'i 1 nesnenin tipini tanımlarken kullanın

// CEVAP
interface pasta {
  kalori: number;
}

interface kurabiye {
  fiyat: number;
}

interface hamurisi extends pasta, kurabiye {
  isim: string;
}

const hi: hamurisi = {
  isim: "simit",
  fiyat: 10,
  kalori: 25,
};

//CEVAP
interface ISystem {
  HDD: string;
  RAM: string;
  CPU: string;
  GPU: string;
  openSystem(): void;
}

interface IDesign {
  color: string;
  screenSize: number;
  usb: boolean;
  openLaptop(): void;
}

interface ILaptop extends ISystem, IDesign {
  id: string;
}

const HP: ILaptop = {
  HDD: "500GB",
  RAM: "8GB",
  CPU: "Intel Core i7",
  GPU: "Nvidia GeForce GTX 1660",
  color: "Beyaz",
  screenSize: 15.6,
  usb: true,
  id: "HP-12345",
  openSystem: function () {
    console.log("Sistem açıldı");
  },
  openLaptop: function () {
    console.log("Laptop açıldı");
  },
};

// CEVAP
interface IToaster {
  brand: string;
  power: string; // in watts
  capacity: number; // number of slices
  color: string;
  toast(): void;
}

interface IDesign1 {
  material: string; // e.g., stainless steel, plastic
  size: string; // e.g., compact, standard
}

interface IToasterModel extends IToaster, IDesign1 {
  id: string;
}

const PhilipsToaster: IToasterModel = {
  brand: "Philips",
  power: "800W",
  capacity: 2,
  color: "Black",
  material: "Stainless Steel",
  size: "Standard",
  id: "Philips-001",
  toast: function () {
    console.log("Toasting started...");
  },
};

PhilipsToaster.toast();

// CEVAP
interface IComputar {
  model: string;
  price: number;
  screenSize: number;
  description: string;
}

interface IComputarMethods {
  getModel: (model1: string, desc1: string) => string;
  calculateThePrice: () => number;
}

interface IUser extends IComputar, IComputarMethods {
  money: number;
}

const user: IUser = {
  model: "Monster",
  price: 100000,
  screenSize: 30,
  description: " is very useful!",
  money: 300000,

  getModel: (model: string, desc: string): string => {
    return model + desc;
  },

  calculateThePrice: () => {
    const total = this.money - this.price;
    return total;
  },
};
