/*
 ! Interface
 * Bir nesnenin yapısını yani nesnenin hangi tipte özellik ve methodlara sahip olucağını ifade eder.

 ! Custom Type | Abstract Class | Interface
 * Birbirine benzer görev yapmaktadırlar.
 * 3'ünün ortak noktası bir nesnenin tipini tanımlamak için kullanılabilir olmaları.
  
 ? Abstract Class vs Interface
 * Abstract class'lar aynı anda sadece bir class'ı miras alabilir.
 * Interface'ler tek seferde birden fazla interface'i miras alabilir.

 ? Interface vs Type
 * Type ile birlikte sadece nesne değil dizi, string literal, tuple vb. tipler de tanımlanabilir.
 * Interface ile sadece nesne tipini tanımlanabilir
 */

//* Type ile bir nesne tipi tanımla
type PersonType = {
  name: string;
};

const kisi1: PersonType = {
  name: "Ali",
};

//* Interface ile nesne tipi tanımla
interface IPerson {
  name: string;
}

const kisi2: IPerson = {
  name: "Ayşe",
};

// type ile interface'den farklı olarak nesne dışında tipler tanımlayabiliyoruz
type alphanumeric = string | number;

type arrayType = string[];

type gasType = "electric" | "diesel" | "benzin";

type fnType = (a: number) => void;

// interface ile yukarıidaki tipleri sadce nesne içerisinde tanımlayabiliriz.

// Örn: İleride oluşturucağumuz bir geometrik şekil nesnenin hangi özellik ve methodlarını tanımladığımız bir interface yazalım
interface IShape {
  width: number;
  height: number;
  corner?: number;
  radius?: number;
  calculateArea: () => number | string;
}

// yukarıdaki interface yardımıyla bir nesnenin tipini tanımlayalım
const square: IShape = {
  width: 200,
  height: 200,
  corner: 4,
  calculateArea() {
    return this.width * this.height;
  },
};

console.log(square.calculateArea());

// interface yardımıyla farklı bir nesne daha tanımlayalım
const circle: IShape = {
  width: 40,
  height: 1,
  radius: 20,
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.calculateArea());
