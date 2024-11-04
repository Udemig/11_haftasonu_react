/*
 ! Type Guards

 * Type guardsın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılan bir tekniktir.

 * 2 farklı typeGuards yöntemi bulunur (typeOf, instanceOf)

*/
// 1) typeOf operatörü ile typeGuard tekniği uygulayalım
function log(input) {
    if (typeof input === "string") {
        console.log("Değişken stringdir: ", input.toUpperCase());
    }
    else {
        console.log("Değişken sayıdır: ", input.toFixed(1));
    }
}
log("Merhaba");
log(67.56);
// instanceOf nedir?
// bir nesnenin hangi class'dan meydana geldiğini kontrol etmemizi sağlar
var Bird = /** @class */ (function () {
    function Bird() {
    }
    return Bird;
}());
var Rabbit = /** @class */ (function () {
    function Rabbit() {
    }
    return Rabbit;
}());
var tavsan = new Rabbit();
console.log("Tavşan nesnesi Rabbit class'ının örneği midir?", tavsan instanceof Rabbit);
console.log("Tavşan nesnesi Bird class'ının örneği midir?", tavsan instanceof Bird);
// 2) instanceOf operatörü ile typeGuard tekniği uygulayalım
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("🐈🐈🐈 miyav miyav");
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("🐶🐶🐶 hav hav");
    };
    return Dog;
}());
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
var kedi = new Cat();
var kopek = new Dog();
makeSound(kedi);
makeSound(kopek);
