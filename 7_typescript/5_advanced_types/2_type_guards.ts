/*
 ! Type Guards

 * Type guardsın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılan bir tekniktir.

 * 2 farklı typeGuards yöntemi bulunur (typeOf, instanceOf)

*/

// 1) typeOf operatörü ile typeGuard tekniği uygulayalım

function log(input: string | number): void {
  if (typeof input === "string") {
    console.log("Değişken stringdir: ", input.toUpperCase());
  } else {
    console.log("Değişken sayıdır: ", input.toFixed(1));
  }
}

log("Merhaba");
log(67.56);

// instanceOf nedir?
// bir nesnenin hangi class'dan meydana geldiğini kontrol etmemizi sağlar
class Bird {}
class Rabbit {}

const tavsan = new Rabbit();

console.log(
  "Tavşan nesnesi Rabbit class'ının örneği midir?",
  tavsan instanceof Rabbit
);

console.log(
  "Tavşan nesnesi Bird class'ının örneği midir?",
  tavsan instanceof Bird
);

// 2) instanceOf operatörü ile typeGuard tekniği uygulayalım
class Cat {
  meow(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Dog {
  bark(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const kedi = new Cat();
const kopek = new Dog();

makeSound(kedi);
makeSound(kopek);
