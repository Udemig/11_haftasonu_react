/*
 * Union Types (Birleşmiş Tipler)
 * Bir değişkenin tiplerinin alabileceği birden fazla farklı türde veri varsa kullanılır.
 
 * Örn: Bir şehir değişkeni var ama şehir ismi mi (string) yoksa plakası mı (number) mı olucak kesin belli değil. Bu tarz durumlarda değişkenin tipini hem string hemde number olabiliceğini söylemek isteriz. 

*/

let city: string | number;

city = "İstanbul";
city = 34;

// Örn: Bir telefon verisi tutucaz ama kullanıncın telefonu ios'mu android'mi belli değil.
// Bundan dolayı iki farklı tip oluştup değişkenin tipini uniontypes ile tanımlayacağız

type IOS = {
  ios_version: number;
  airdrop_version: number;
  device: string;
};

type Android = {
  android_version: string;
  google_play_version: number;
  device: string;
};

let phone: IOS | Android;

phone = {
  ios_version: 13.0,
  airdrop_version: 2.5,
  device: "Iphone 16",
};

phone = {
  android_version: "Marshmellow",
  google_play_version: 4.5,
  device: "Samsung Note",
};

// Union Types - Nesneler ile Kullanım
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// example dğeişkeni union type ile A veya B diyelim
let example: AType | BType;

// hata vermemesi için ya A tipini bütün değerlini almalı
example = { key1: "x", key2: "x" };

// ya B tipini bütün değerlini almalı
example = { key3: 35, key4: 68 };

// yada hema A hemde B tiplerinin bütün değerlerini alabilir
example = { key1: "x", key2: "x", key3: 35, key4: 68 };
