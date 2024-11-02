/*
 * Type Annotations
 * Javascript'te değişkenin türünü belirleme gibi bir özellik söz konusu değil.
 * Fakat typescript'de tanımladığımız değişkenlerin tiplerinide belirleyebiliyoruz
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamasının dışarısına çıkamıyoruz. Bu sayedede kodda oluşabilcek hataların erkenden önüne geçmiş oluyoruz

*/

let foo: number;

// foo = true;    ! HATA
// foo = "selam"; ! HATA

foo = 45;

// Soru: Değişken tanımlarken type belirlemek zorunda mıyız?
// Cevap:
// Hayır, biz type tanımlamak bile ts oto. olarak değişkenin değerinin tipi neyse onu değişkenin tipi olarak tanımlar. Bu bizim için bir kolaylık gibi gözüksede bazı durumlarda beklenmedik sorunlar açabilir. Bundan dolayı en sağlıklı yöntem bütün değişkenlerin tipini tanımlamak.

let age = 35;
age = 66;

/*
 * Javascript'de bulunan veri tiplerini
 * string
 * number
 * object
 * array
 * function
 * undefined
 * null
 * symbol (pek kullanmıyoruz)
 * bigint (pek kullanmıyoruz)

*/

let project: string = "Udemig";

let person_age: number = 99;

let has_license: boolean = true;

let student: object = {
  id: 2,
  name: "Ali",
};

let value: null = null;

let value2: undefined = undefined;
