/*
 * Enum (Numaralandırma)
 * Belirli Değerler Kümesi
 
 * Benzer kategorideki değişkenleri bir arada tutmak için kullanılır.

 * Genelde az miktarda farklı değere sahip verilerin gruplandırılması için kullanılır.

 * İsimlendirme
 * İlk harfi büyük olur
 * Çoğul takısı kullanmayız
 * Months X | Month ✓
*/
// Örn: Tarfik ışığının aşamalarının verisini tutalım
// Klasik js ile
var color = {
    red: 0,
    yellow: 1,
    green: 2,
};
// Typescript kullanarak
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
console.log("Kırmızı", Color.red);
console.log("Sarı", Color.yellow);
console.log("Yeşil", Color.green);
// bu tarz aynı gruptaki değişkenleri enum ile tanumlamanın en büyük artısı enum'ı bir tip olarak kullanabiliyoruz
var speak = function (light) {
    switch (light) {
        case Color.red:
            return console.log("Lütfen durunuz");
        case Color.yellow:
            return console.log("Hazırlanın");
        case Color.green:
            return console.log("İlerleyebilirsiniz *KORNA*");
    }
};
// bu fonksiyonu kullanırken sadece light enumundaki değerleri parametre olarak gönderebiliriz
speak(Color.red);
speak(Color.yellow);
speak(Color.green);
// Örnek - 2
var Gun;
(function (Gun) {
    Gun[Gun["Pazartesi"] = 0] = "Pazartesi";
    Gun[Gun["Sali"] = 1] = "Sali";
    Gun[Gun["Carsamba"] = 2] = "Carsamba";
    Gun[Gun["Persembe"] = 3] = "Persembe";
    Gun[Gun["Cuma"] = 4] = "Cuma";
    Gun[Gun["Cumartesi"] = 5] = "Cumartesi";
    Gun[Gun["Pazar"] = 6] = "Pazar";
})(Gun || (Gun = {}));
var day1 = Gun.Carsamba;
var day2 = Gun[4];
var day3 = Gun[Gun.Pazar];
console.log(day1); // 2
console.log(day2); // Cuma
console.log(day3); // Pazar
// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kullanıcılara arayüzde sıklıkla kargo durumunu yazmamız gerekiyor.
// Bu durumda kargo durumlarını js'te bir nesneye atardık ts'de ise bunu enum ile tanımlarız
var Status;
(function (Status) {
    Status["set"] = "Haz\u0131rlan\u0131yor";
    Status["travel"] = "Da\u011F\u0131t\u0131ma \u00C7\u0131kt\u0131";
    Status["done"] = "Teslim Edildi";
})(Status || (Status = {}));
console.log(Status.set);
console.log(Status.travel);
console.log(Status.done);
