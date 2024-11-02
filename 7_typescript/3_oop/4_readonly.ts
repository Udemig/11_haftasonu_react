/*
 * Readonly - Salt Okunur
 * Typescript'de bir sınıfın veya nesnenin içerisindeki bir özelliğin sadece okunabilir olmasını sağlar.
  
 * Readonly ile tanımladığımız özellieğer değer ataması:
 * * Sınfılarda sadece constructor kod bloğunda yaapılabilir.
 * * Nesnelerde ise sadece özelliği tanımlarken yapılabilir.

*/

type Person = {
  name: string;
  surname: string;
  readonly tc_no: number;
};

const kisi: Person = {
  name: "Mahmut",
  surname: "Er",
  tc_no: 22144455667,
};

kisi.name = "Fırat";
kisi.surname = "Kaya";
// kisi.tc_no = 34645874563657; //! Readonly olduğu için değişmez

// Class'larda Readonly
class Kitap {
  public isim: string;
  protected sayfa: number;
  public readonly yazar: string;

  constructor(isim: string, sayfa: number, yazar: string) {
    this.isim = isim;
    this.sayfa = sayfa;
    this.yazar = yazar;
  }
}

const kitap = new Kitap("Hobbit", 500, "Tolkien");
console.log(kitap);

// kitap.yazar = "deneme"; //! Değiştirilemez

// * Soru:
// * Bir class tanımlayın ve class'tan bir örnek oluşturun.
// * En az 4 özelliğe sahip olsun.
// * En az 1 özelliği readonly olsun
// * Özellikleri tanımlarken erişim belirteçlerini efektif şekilde kullanın

// CEVAP
class Series {
  private _name: string;
  private _genre: string;
  private _numberOfEpisodes: number;
  private _mainCharacters: string[];

  constructor(
    name: string,
    genre: string,
    numberOfEpisodes: number,
    mainCharacters: string[]
  ) {
    this._name = name;
    this._genre = genre;
    this._numberOfEpisodes = numberOfEpisodes;
    this._mainCharacters = mainCharacters;
  }

  public getName(): string {
    return this._name;
  }

  public getGenre(): string {
    return this._genre;
  }

  public getNumberOfEpisodes(): number {
    return this._numberOfEpisodes;
  }

  public getMainCharacters(): string[] {
    return this._mainCharacters;
  }
}

// CEVAP
class Person1 {
  public personelIsmi: string;
  public personelDepartmani: string;
  protected readonly personelDogumTarihi: number;
  public personelUcreti: string = "5000 USD";

  constructor(
    personelIsmi: string,
    personelDepartmani: string,
    personelDogumTarihi: number,
    personelUcreti: string
  ) {
    this.personelIsmi = personelIsmi;
    this.personelDepartmani = personelDepartmani;
    this.personelDogumTarihi = personelDogumTarihi;
    this.personelUcreti = personelUcreti;
  }
}

const person = new Person1("Furkan", "BT", 1998, "10000 USD");

console.log(person);

// CEVAP
class Student {
  public name: string;
  public surname: string;
  public readonly dateOfBorn: number;
  protected readonly school_No: number;
  public isStudent: boolean;

  constructor(
    name: string,
    surname: string,
    dateOfBorn: number,
    school_No: number,
    isStudent: boolean
  ) {
    this.name = name;
    this.surname = surname;
    this.dateOfBorn = dateOfBorn;
    this.school_No = school_No;
    this.isStudent = isStudent;
  }

  getFullName(): string {
    const fullName = this.name + " " + this.surname;
    return fullName;
  }

  calculateAge(): number {
    const currentYear = new Date().getFullYear();
    const total = currentYear - this.dateOfBorn;
    return total;
  }

  isStillStudent(): boolean {
    const currentYear = new Date().getFullYear();
    const total = currentYear - this.dateOfBorn;

    if (total > 22) {
      this.isStudent = false;
    } else {
      this.isStudent = true;
    }

    return this.isStudent;
  }
}

const exampleStudent = new Student("Yasin", "Özboğa", 2008, 100, true);
console.log("Full Name: ", exampleStudent.getFullName());
console.log("Age : ", exampleStudent.calculateAge());
console.log("Is Student : ", exampleStudent.isStillStudent());

// CEVAP
class Computer {
  public isim: string;
  protected pil: number;
  private readonly model: string;

  constructor(isim: string, model: string, pil: number) {
    this.isim = isim;
    this.model = model;
    this.pil = pil;
  }
}

const mycomputer = new Computer("Macbook", "M2", 75);
