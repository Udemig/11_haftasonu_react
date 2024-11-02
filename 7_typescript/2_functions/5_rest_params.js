/*
 * Rest Param
 * Parametre listesinin belirsiz veya sınırsınız olduğu durumlarda kullanılır
  
 * Özellikler
 * Bir paramtreyi rest param haline getirmek için "..." kullanrız.
 * Bir rest paramın ardından herahngi bir farklı parametre yazılamaz.
 * Sebebi rest paramın kaç tane değer alıcağının belli olmaması
  
 * Rest parametre gönderilen değerleri en son diziye çevirir
*/
// örnek
function toplam(metin) {
    var sayilar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sayilar[_i - 1] = arguments[_i];
    }
    console.log(sayilar);
    console.log(metin + sayilar.reduce(function (toplam, sayi) { return toplam + sayi; }, 0));
}
toplam("Sonuç ", 4);
toplam("Sonuç ", 4, 7);
toplam("Sonuç ", 4, 7, 7, 4, 3, 7);
toplam("Sonuç ", 4, 7, 7, 4, 3, 7, 4, 2, 658, 80, 24);
// örnek
var yoklama = function (teacher) {
    var students = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        students[_i - 1] = arguments[_i];
    }
    console.log(teacher + " öğretmen yıklamaya başladı");
    console.log("-------------------------------------");
    students.forEach(function (student) { return console.log(student + " burdaaaa!!!"); });
    console.log(students.length + " öğrenci var");
};
yoklama("Ayşe", "Ali", "Fatma", "Ahmet", "Ersin", "Özgün");
