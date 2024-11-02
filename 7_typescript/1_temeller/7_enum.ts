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
const color = {
  red: 0,
  yellow: 1,
  green: 2,
};

// Typescript kullanarak
enum Color {
  red,
  yellow,
  green,
}

console.log("Kırmızı", Color.red);
console.log("Sarı", Color.yellow);
console.log("Yeşil", Color.green);

// bu tarz aynı gruptaki değişkenleri enum ile tanumlamanın en büyük artısı enum'ı bir tip olarak kullanabiliyoruz
const speak = (light: Color) => {
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
enum Gun {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day1 = Gun.Carsamba;
let day2 = Gun[4];
let day3 = Gun[Gun.Pazar];

console.log(day1); // 2
console.log(day2); // Cuma
console.log(day3); // Pazar

// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kullanıcılara arayüzde sıklıkla kargo durumunu yazmamız gerekiyor.
// Bu durumda kargo durumlarını js'te bir nesneye atardık ts'de ise bunu enum ile tanımlarız

enum Status {
  set = "Hazırlanıyor",
  travel = "Dağıtıma Çıktı",
  done = "Teslim Edildi",
}

console.log(Status.set);
console.log(Status.travel);
console.log(Status.done);

const updateStatus = (value: Status) => {};

// Örnek - 4
enum Action {
  create = "CREATE",
  update = "UPDATE",
  delete = "DELETE",
}

const reducer = (action: Action) => {
  console.log(action + " çalıştırıldı...");
};

reducer(Action.create);
