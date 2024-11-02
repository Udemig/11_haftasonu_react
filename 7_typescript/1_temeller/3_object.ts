/*
 * Object Type:
 * Normal şartlarda ts'de bir object type'ı mevcut.
 * Object typeı ucu çok açık bir tip olduğu için kullanılmasını tercih etmeyiz.
  
 *  Biz genelde spesifk bir şekilde özellikleri belli olan nesneler ile çalışırız ve nesnein içerisindeki değişkenlerini tipini taınmlamalıyız.  
 */

let data: object;

data = {};
data = [];
data = function () {};
data = new Date();

// 1- tip tanımı
let student: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
  age: number;
};

// 2- değer ataması
student = {
  id: 45,
  firstname: "Ahmet",
  lastname: "Yıldırım",
  isGraduated: false,
  age: 35,
};

// Örn: API'dan alınan verinin tipini tanımla
let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string | number;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: 92998,
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
