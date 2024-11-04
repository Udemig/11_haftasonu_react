/*
 * Intersection Types - Kesişim Türler
 * Typescript'de kesişim türler iki veya daha fazla türü birleştirmek için kullanılır
 */

type typeA = { key1: string };
type typeB = { key2: number };

// 1) Intersection: Her iki tipin bütün özelliklerini miras alır
type typeAB = typeA & typeB;

let foo: typeAB = {
  key1: "merhaba",
  key2: 45,
};

// 2) Union: Belirlenen türlerin en az birinin bütün özelliklerinin tanımlanması yeterli olur
type typeAorB = typeA | typeB;

let bar: typeAorB = { key1: "naber" };
let baz: typeAorB = { key2: 56 };
let ban: typeAorB = { key1: "naber", key2: 56 };

// Intersection Types İçin Örnek

type BusinessPartner = {
  credit: number;
  name: string;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact;
type Customer = Identity & BusinessPartner;
type NewEmployee = Identity & Contact & BusinessPartner;

let e1: Employee = {
  id: 23342,
  name: "John",
  email: "john@gmail.com",
  phone: "905556667788",
};

let e2: Customer = {
  id: 23423,
  name: "Ali",
  credit: 456000,
};

let e3: NewEmployee = {
  id: 3466,
  name: "Ayşe",
  email: "ayşe@gmail.com",
  phone: "906665557788",
  credit: 6983424,
};
