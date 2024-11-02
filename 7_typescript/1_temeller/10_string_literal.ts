/*
 * String Literal
 * Bir metnin tipini string olarak tanımlamak yerine alabilceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip kısıtlaması yapabiliyoruz.
 
 * Örn: Spotify benzeri bir projede kullanıcı nesnesinin tipini tanımlamak istiyoruz.
 * Hesap türnün tipini tanımlrken string yazmak yerine sadece alabılcaüı 3-4 farklı değeri ifade edersek daha ksıtlayıcı bir tip tanımı yapmış oluruz 
*/

type User = {
  id: number;
  name: string;
  account_type: "admin" | "free" | "premium";
};

const newUser: User = {
  id: 345435,
  name: "Faruk",
  account_type: "admin",
};

// Örnek:
// Bir araba kiralama sitesi için api'dan gelen araba verilerinin tipini tanımla.
type Car = {
  make: string;
  model: string | number;
  gearbox: "otomatik" | "manuel";
  fuel: "benzin" | "dizel" | "elektrik" | "hibrit";
  year: number;
  owner: any;
};

const newCar: Car = {
  make: "BMW",
  model: "M850i",
  gearbox: "otomatik",
  fuel: "benzin",
  year: 2023,
  owner: null,
};
