/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın veya interface'in içerisindeki bazı tiplerin dinamik olarak değişmesini isteyebiliriz.
 * Bu durumda generic özelliğini kullanarak dışarıdan parametre olarak tip alabiliyoruz

*/
// Generic tip olmadan rastegele değer döndüren bir fonksiyon yazalım
var getRandomNumber = function (array) {
    var i = Math.round(Math.random() * array.length);
    return array[i];
};
console.log(getRandomNumber([12, 56, 78, 90]));
