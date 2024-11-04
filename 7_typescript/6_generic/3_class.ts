class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const numbers = new Sorter<number>([9, 3, 6, 1, 5]);

console.log(numbers.sortData());

// Generic Özellik
// Tipi generic olarak tanımladığımızda her türlü tipte değer atanabilir
// Bundan dolayı tanımlanın generic türün alıbaliceği türleri kısıtlayabiliyoruz.

class Containter<T extends string | number | boolean> {
  private value: T;

  constructor(newValue: T) {
    this.value = this.value;
  }

  getValue(): T {
    return this.value;
  }
}

new Containter<number>(435);
new Containter<string>("selam");
new Containter<boolean>(true);
// new Containter<object>({});
//

// SORU:
// En az 1 generic tip alan type / interface / class / function yazınız.
// Tanımladığınız yapıyı 1 kez kullanının

// CEVAP
type Car<R> = {
  name: R;
  year: number;
  rent: boolean;
};

const rentCar: Car<string> = {
  name: "audi A3",
  year: 2020,
  rent: true,
};

// CEVAP
interface hamurisi<T> {
  kolori: T;
  tuzlu: boolean;
  message: string;
}

const x: hamurisi<number> = {
  kolori: 20,
  tuzlu: true,
  message: "mesaj içeeriği",
};

// CEVAP
interface Ders<N, K> {
  name: N;
  kredi: K;
}

let dersBilgi: Ders<string, number> = { name: "algoritma", kredi: 4 };

// CEVAP
// function getFullName<T extends string | number>(name: T, surname: T): T {
//   const fullName = name + surname;

//   return fullName;
// }

// console.log(getFullName<string>("Yasin", "Özboğa"));

type Person<T, V> = {
  username: T;
  surname: T;
  age: V;
  getFullName: () => string;
};

const person: Person<string, number> = {
  username: "Yasin",
  surname: "Özboğa",
  age: 16,
  getFullName: () => {
    const fullName = this.username + this.surname;
    return fullName;
  },
};

interface IPay<T> {
  price: T;
  money: T;
  calculateThePrice: () => T;
}

const crediCard: IPay<number> = {
  price: 100,
  money: 200,
  calculateThePrice: () => {
    const total = this.money - this.price;
    return total;
  },
};

// cevap
type Football<T> = {
  name: string;
  position: string;
  no: number;
  country: T;
};

const player: Football<string> = {
  name: "Hasan",
  position: "Forvet",
  no: 9,
  country: "İstanbul",
};
