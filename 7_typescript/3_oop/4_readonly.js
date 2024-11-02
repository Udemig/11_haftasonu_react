/*
 * Readonly - Salt Okunur
 * Typescript'de bir sınıfın veya nesnenin içerisindeki bir özelliğin sadece okunabilir olmasını sağlar.
  
 * Readonly ile tanımladığımız özellieğer değer ataması:
 * * Sınfılarda sadece constructor kod bloğunda yaapılabilir.
 * * Nesnelerde ise sadece özelliği tanımlarken yapılabilir.

*/
var kisi = {
    name: "Mahmut",
    surname: "Er",
    tc_no: 22144455667,
};
kisi.name = "Fırat";
kisi.surname = "Kaya";
// kisi.tc_no = 34645874563657; //! Readonly olduğu için değişmez
// Class'larda Readonly
var Kitap = /** @class */ (function () {
    function Kitap(isim, sayfa, yazar) {
        this.isim = isim;
        this.sayfa = sayfa;
        this.yazar = yazar;
    }
    return Kitap;
}());
var kitap = new Kitap("Hobbit", 500, "Tolkien");
console.log(kitap);
// kitap.yazar = "deneme"; //! Değiştirilemez
// * Soru:
// * Bir class tanımlayın ve class'tan bir örnek oluşturun.
// * En az 4 özelliğe sahip olsun.
// * En az 1 özelliği readonly olsun
// * Özellikleri tanımlarken erişim belirteçlerini efektif şekilde kullanın
// CEVAP
var Series = /** @class */ (function () {
    function Series(name, genre, numberOfEpisodes, mainCharacters) {
        this._name = name;
        this._genre = genre;
        this._numberOfEpisodes = numberOfEpisodes;
        this._mainCharacters = mainCharacters;
    }
    Series.prototype.getName = function () {
        return this._name;
    };
    Series.prototype.getGenre = function () {
        return this._genre;
    };
    Series.prototype.getNumberOfEpisodes = function () {
        return this._numberOfEpisodes;
    };
    Series.prototype.getMainCharacters = function () {
        return this._mainCharacters;
    };
    return Series;
}());
// CEVAP
var Person1 = /** @class */ (function () {
    function Person1(personelIsmi, personelDepartmani, personelDogumTarihi, personelUcreti) {
        this.personelUcreti = "5000 USD";
        this.personelIsmi = personelIsmi;
        this.personelDepartmani = personelDepartmani;
        this.personelDogumTarihi = personelDogumTarihi;
        this.personelUcreti = personelUcreti;
    }
    return Person1;
}());
var person = new Person1("Furkan", "BT", 1998, "10000 USD");
console.log(person);
// CEVAP
var Student = /** @class */ (function () {
    function Student(name, surname, dateOfBorn, school_No, isStudent) {
        this.name = name;
        this.surname = surname;
        this.dateOfBorn = dateOfBorn;
        this.school_No = school_No;
        this.isStudent = isStudent;
    }
    Student.prototype.getFullName = function () {
        var fullName = this.name + " " + this.surname;
        return fullName;
    };
    Student.prototype.calculateAge = function () {
        var currentYear = new Date().getFullYear();
        var total = currentYear - this.dateOfBorn;
        return total;
    };
    Student.prototype.isStillStudent = function () {
        var currentYear = new Date().getFullYear();
        var total = currentYear - this.dateOfBorn;
        if (total > 22) {
            this.isStudent = false;
        }
        else {
            this.isStudent = true;
        }
        return this.isStudent;
    };
    return Student;
}());
var exampleStudent = new Student("Yasin", "Özboğa", 2008, 100, true);
console.log("Full Name: ", exampleStudent.getFullName());
console.log("Age : ", exampleStudent.calculateAge());
console.log("Is Student : ", exampleStudent.isStillStudent());
