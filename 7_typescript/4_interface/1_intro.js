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
var kisi1 = {
    name: "Ali",
};
var kisi2 = {
    name: "Ayşe",
};
// yukarıdaki interface yardımıyla bir nesnenin tipini tanımlayalım
var square = {
    width: 200,
    height: 200,
    corner: 4,
    calculateArea: function () {
        return this.width * this.height;
    },
};
console.log(square.calculateArea());
// interface yardımıyla farklı bir nesne daha tanımlayalım
var circle = {
    width: 40,
    height: 1,
    radius: 20,
    calculateArea: function () {
        return Math.PI * this.radius * this.radius;
    },
};
console.log(circle.calculateArea());
