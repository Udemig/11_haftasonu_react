//* Static kelimesi özelilğin veya methodun sınıfın örneği alınmdan kullanılmasınıs sağlar.
//* Static Method
var Matematik = /** @class */ (function () {
    function Matematik() {
    }
    Matematik.prototype.topla = function (x, y) {
        console.log(x + y);
    };
    Matematik.carp = function (a, b) {
        console.log(a * b);
    };
    return Matematik;
}());
// static olan methoda erişme
Matematik.carp(8, 12);
// static olmayan methoda erişme
var math = new Matematik();
math.topla(20, 35);
//* Static Property
var Ogrenci = /** @class */ (function () {
    function Ogrenci(isim) {
        this.isim = isim;
        Ogrenci.ogrenciSayisi++;
    }
    Ogrenci.ogrenciSayisi = 0;
    return Ogrenci;
}());
var o1 = new Ogrenci("ali");
var o2 = new Ogrenci("ayşe");
var o3 = new Ogrenci("ayla");
console.log(o1, o2, o3);
console.log(Ogrenci.ogrenciSayisi);
