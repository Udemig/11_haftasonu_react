/*
 * Type Aliases | Custom Type
 * Şuana kadar tip atamsı yaparken js'de var olan temel tipler ve ekstra olarak bir iki ts tpini kullandık.
  
 * Gerçek projelerde o anki yaptığımız işe özel spesifik veri tiplerine ihtiyaç duyabiliyoruz.

 * Bunlaru tanımlamak için type anahtar kelimesini kullanırız.

 * Neden ihtiyacımız var?
 * Çünkü berlilediğimiz bir type'ı proje içerisinde bir çok alanda / sayfada kullanmamız gerekbilir. Bu noktada Type Aliases kullanığ kendi tipimi oluşturusak kod tekrarının önüne geçeriz

*/

// Örnek - 1
// kendi özel tipimi oluşturalım
type metin = string;

// kendi oluşturuğumuz tipi kullanalım
let isim: metin = "zeki";

// örnek - 2
// aynı union type'ı birden çok kullandığımız bir seneryo olsun
let foo: string | number | boolean = "merhaba";
let bar: string | number | boolean = 35;
let baz: string | number | boolean = true;

// yukarıdaki kod tekrarını önlemek için type aliases kullanalım
type SNBType = string | number | boolean;

let foo1: SNBType = "merhaba";
let bar1: SNBType = 35;
let baz1: SNBType = true;

// ÖRNEK - 3
// aynı tipte nesneyi proje içeirinde birden fazla kez kullandık

let user1: { name: string; age: number; mail: string } = {
  name: "Ali",
  age: 45,
  mail: "ali@gmail.com",
};

let user2: { name: string; age: number; mail: string } = {
  name: "Ayşe",
  age: 55,
  mail: "aysche@gmail.com",
};

let ornek = (user: { name: string; age: number; mail: string }) => {
  console.log("selamla", user.name);
};

const users: { name: string; age: number; mail: string }[] = [];

// yukarıdak kod tekrarını type aliases kullanrak çözelim
type UserType = { name: string; age: number; mail: string };

let user3: UserType = {
  name: "Ali",
  age: 45,
  mail: "ali@gmail.com",
};

let user4: UserType = {
  name: "Ayşe",
  age: 55,
  mail: "aysche@gmail.com",
};

let ornek2 = (user: UserType) => {
  console.log("selamla", user.name);
};

let users2: UserType[] = [user3, user4];

// Örnek - 4
// uçuş projsinde sıkça kullandığımız enlem ve boylam değerilerini içerien dizinin tipini tanımlayalım

type Geo = [number, number];

let xCoords: Geo = [45, 67];
let YCoords: Geo = [12, 78];

// api'da uçağın gittiği rota dizi olarak gelsin
const flightRoute: Geo[] = [
  [45, 67],
  [12, 78],
  [56, 89],
  [34, 78],
];
