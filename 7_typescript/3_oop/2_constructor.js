/*
 * Constructor: İnşa Methodu
 * Constructor methodu oluşturulan nesnenin özelliklerinin değerlini dışarıdan almaya yarar
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz.
 * Constructor new anahtar kelimesi ile class çağrıldığında ilk çalışan fonksiyondur.
 * Constructor ile class'a gelen parameterlere erişiriz

*/
var Person = /** @class */ (function () {
    // 2) constructor ile dışarıdan yukarıdaki tanımlanan özelliklere değer ataması yapabiliriz.
    function Person(yeni_ad, yeni_soyad, yeni_yas) {
        this.ad = yeni_ad;
        this.soyad = yeni_soyad;
        this.yas = yeni_yas;
    }
    Person.prototype.kendiniTanit = function () {
        console.log("Selam, ben ".concat(this.ad, " ").concat(this.soyad, " ve ").concat(this.yas, " ya\u015F\u0131nday\u0131m"));
    };
    return Person;
}());
// sınıftan örnek oluşturma
var kisi1 = new Person("Burak", "Musa", 56);
var kisi2 = new Person("Can", "Dost", 23);
kisi1.kendiniTanit();
kisi2.kendiniTanit();
//* Soru: Bir teknolojik/ev aleti için class yapısı oluşturun.
//* Bu class'tan oluşturduğunuz nesnenin değerlerini constructor yardımıymıyla dışarıdan alun.
//* Class en az 4 özellik ve bir methoda sahip olsun
//* Bu class'tan en az 1 örnek oluşturun
//* CEVAP
var Computer = /** @class */ (function () {
    function Computer(new_marka, new_type, new_year, new_color) {
        this.marka = new_marka;
        this.type = new_type;
        this.year = new_year;
        this.color = new_color;
    }
    Computer.prototype.open_computer = function () {
        console.log("".concat(this.marka, " marka ").concat(this.type, "  ").concat(this.year, " model ").concat(this.color, " renkli bilgisayar \u00E7al\u0131\u015Ft\u0131r\u0131ld\u0131."));
    };
    return Computer;
}());
var hp = new Computer("HP", "Laptop", 2023, "gri");
hp.open_computer();
// CEVAP - 2
var ElektronikAlet = /** @class */ (function () {
    function ElektronikAlet(marka, model, voltaj, fiyat) {
        this.marka = marka;
        this.model = model;
        this.voltaj = voltaj;
        this.fiyat = fiyat;
    }
    ElektronikAlet.prototype.bilgiGoster = function () {
        return "".concat(this.marka, " ").concat(this.model, " - ").concat(this.voltaj, "V, Fiyat: ").concat(this.fiyat, " TL");
    };
    return ElektronikAlet;
}());
var mikrodalga = new ElektronikAlet("Tefal", "abc", 220, 5500);
console.log(mikrodalga.bilgiGoster());
// CEVAP
var Computar = /** @class */ (function () {
    function Computar(name, price, desc, screenWidth) {
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.screenWidth = screenWidth;
    }
    Computar.prototype.showMessageToUser = function () {
        var message = this.name + " is " + this.desc;
        return message;
    };
    return Computar;
}());
var myComputar = new Computar("Monster", 100000, "Very usefull!", 30);
console.log("Message:", myComputar.showMessageToUser());
// CEVAP
var GamingConsole = /** @class */ (function () {
    function GamingConsole(name, company, modelnumber, serielnumber) {
        this.name = name;
        this.company = company;
        this.modelnumber = modelnumber;
        this.serielnumber = serielnumber;
    }
    return GamingConsole;
}());
var gaming = new GamingConsole("Xbox One", "Microsoft", "02384929", "1122");
console.log(gaming);
// cevap
var beyazesya = /** @class */ (function () {
    function beyazesya(marka, model, renk) {
        this.marka = marka;
        this.model = model;
        this.renk = renk;
    }
    beyazesya.prototype.islev = function () {
        console.log("ben ".concat(this.marka, " ").concat(this.model, " ").concat(this.renk, "  bir \u00E7ama\u015F\u0131r makinas\u0131y\u0131m"));
    };
    return beyazesya;
}());
var esya = new beyazesya("bosch", 121, "gri");
esya.islev();
// cevap
var RobotSupurge = /** @class */ (function () {
    function RobotSupurge(marka, pilOmru, supurgeGucu, hazneHacmi, sesSeviyesi) {
        this.marka = marka;
        this.pilOmru = pilOmru;
        this.supurgeGucu = supurgeGucu;
        this.hazneHacmi = hazneHacmi;
        this.sesSeviyesi = sesSeviyesi;
    }
    RobotSupurge.prototype.bilgiAl = function () {
        return "Yeni yard\u0131mc\u0131m\u0131zla tan\u0131\u015Fmaya haz\u0131r m\u0131s\u0131n\u0131z kar\u015F\u0131n\u0131zda: ".concat(this.marka, ", \u00F6zellikleri ise \u015F\u00F6yle: Pil \u00D6mr\u00FC: ").concat(this.pilOmru, " dakika, S\u00FCp\u00FCrme G\u00FCc\u00FC: ").concat(this.supurgeGucu, " Pa, Hazne Hacmi: ").concat(this.hazneHacmi, " L, Ses Seviyesi: ").concat(this.sesSeviyesi, " dB");
    };
    return RobotSupurge;
}());
var benimSupurgem = new RobotSupurge("iRobot", 90, 2000, 0.6, 65);
console.log(benimSupurgem.bilgiAl());
// cevap
var Otomobil = /** @class */ (function () {
    function Otomobil(yeni_marka, yeni_model, yeni_vites, yeni_turbo) {
        this.marka = yeni_marka;
        this.model = yeni_model;
        this.vites = yeni_vites;
        this.turbo = yeni_turbo;
    }
    Otomobil.prototype.arabaDegis = function () {
        console.log("yeni araba al");
    };
    return Otomobil;
}());
var otomobil1 = new Otomobil("OPEL", 1.2, "MANUEL", false);
var otomobil2 = new Otomobil("BMW", 3.2, "OTOMATİK", true);
console.log(otomobil1);
console.log(otomobil2);
