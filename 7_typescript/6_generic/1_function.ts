/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın veya interface'in içerisindeki bazı tiplerin dinamik olarak değişmesini isteyebiliriz. 
 * Bu durumda generic özelliğini kullanarak dışarıdan parametre olarak tip alabiliyoruz
*/

// Generic tip olmadan rastegele değer döndüren bir fonksiyon yazalım
const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};
getRandomNumber([12, 56, 78, 90]);

// daha sonra aynı şekilde rastegele değeri döndüren ama bu sefer string elemanlar ile çalışan fonk yazalım
const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};
getRandomString(["a", "b", "c", "d"]);

//* generic yardımıyla aynı fonksiyonu yazallım
const getRandomEle = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

getRandomEle<string>(["a", "b", "c", "d"]);
getRandomEle<number>([1, 2, 3, 45, 6, 7]);
getRandomEle<boolean>([true, false, true, false]);

// generic olarak tip alan bir fonksiyona eğerki generic tip göndermezsek gönderdiğimiz parametrenin tipini alır ama yine bazı durumlarda doğru çalışmadığından bir her zaman generic olarak tip göndericez
getRandomEle(["a", "b", "c", "d"]);
