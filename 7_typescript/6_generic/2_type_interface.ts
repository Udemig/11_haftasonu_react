/*
 * Fonksiyonlarda olduğu gibi generic yapısının yeniden kullanılabilir olması için type ve interface'lerde de kullanaibliyoruz.
 */

type ArrayType<T> = {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
};

const arr: ArrayType<number | string> = {
  items: [4, "a", 7, "b"],

  addItem(item) {
    this.items.push(item);
  },

  getItem(index) {
    return this.items[index];
  },
};

// interface ile kullanım
interface IPerson<T, R> {
  name: T;
  age: R;
}

const foo: IPerson<string, number> = {
  name: "Ali",
  age: 12,
};

const bar: IPerson<object, string> = {
  name: { isim: "MAHMUT" },
  age: "elli",
};

// T, R, Z, V, E
