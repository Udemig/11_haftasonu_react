/*
 ! Type Casting - Tür Dönüşümü

 * Bir değişkenin tipinin tanımlanmasının ardından o değişkeni kullanırken farklı bir tipte olduğunu ifade edereke işlem yapmamız gerken durumlarda kullanırız

 * as
*/

type Product = {
  name: string;
  price: string | number;
};

let product1: Product = {
  name: "Laptop",
  price: 56000,
};

let product2: Product = {
  name: "Phone",
  price: "15000",
};

// product1'in fiyatı üzerinden bir işlem yapmaya çalışsırsak değeri number olsa bile tipi string | number olduğundan hata vericek. Bizde değişkenin kullanıldığı kod satırına özel typescripte'e o değişkeni number olarak algılamasını söyledik ve hatadan kurtulduk.
let newPrice = (product1.price as number) - 1000;

// Örnek - 2
let kisi: unknown = {
  name: "john",
  age: 56,
  adress: "123 main st.",
};

// kişi nesnenin tipi unknown olduğundan değerlerine eirşemeyiz
// kisi.name // !HATA

// nesnenin tipini tanımla
interface IPerson {
  name: string;
  age: number;
  adress: string;
}

// değerine erişirken anlık oalrak tipini kendi tanımladığımız itpe çevirirsek hata vermez
(kisi as IPerson).name;
