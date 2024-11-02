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
function toplam(metin: string, ...sayilar: number[]) {
  console.log(sayilar);
  console.log(metin + sayilar.reduce((toplam, sayi) => toplam + sayi, 0));
}

toplam("Sonuç ", 4);
toplam("Sonuç ", 4, 7);
toplam("Sonuç ", 4, 7, 7, 4, 3, 7);
toplam("Sonuç ", 4, 7, 7, 4, 3, 7, 4, 2, 658, 80, 24);

// örnek
const yoklama = (teacher: string, ...students: string[]) => {
  console.log(teacher + " öğretmen yıklamaya başladı");
  console.log("-------------------------------------");
  students.forEach((student) => console.log(student + " burdaaaa!!!"));
  console.log(students.length + " öğrenci var");
};

yoklama("Ayşe", "Ali", "Fatma", "Ahmet", "Ersin", "Özgün");

/*
 * Challange:
 * İstenilidiği akadar sayı değerini param olarak alan bir fonksiyon yazınız.
 * Aldığı ilk 2 parametreyi çarpsın
 * İlk 2 parametresinden geriye kalan parametreleri toplasın
 * toplam ve çarpımı bir nesne içerisnde döndürsün
  
 * hesapla(2,3,5,6,7) 
 * {carpim:6,toplam:18}
 */

// Cevap
const hesapla = (sayi1: number, sayi2: number, ...sayilar: number[]) => {
  let carpim = sayi1 * sayi2;
  let toplam = sayilar.reduce((a, b) => a + b, 0);

  return { toplam, carpim };
};

// cevap-2
type resultType = { carpim: number; toplam: number };

type fn = (par1: number, par2: number, ...params: number[]) => resultType;

let calculate: fn;

calculate = (par1, par2, ...params) => {
  const toplam = params.reduce((a, b) => a + b, 0);
  return {
    carpim: par1 * par2,
    toplam,
  };
};

const resuslt = calculate(2, 3, 5, 6, 7);
console.log(resuslt);
