/*
 * Array Type:
 * Typescript dizilerin tipini tanımlarken sadece bu değişken bir dizi olucak demiyoruz.
 * Bu dizinin içerisnde bu tipte elemanlar olucak şeklinde tanım yapıyoruz.
 * Sonuç olarak dizideki elemaların veri tipini söylememiz gerek.
 */

// Örnek - 1
const users: string[] = ["Gül", "Fatma", "Ali"];

// bu değişkeni manipüle ederken tip kısıtlması karşımıza çıkıyor
users.push("Mahmut");
// users.push(66); // !HATA

// Örnek - 2
const ids: number[] = [34, 46, 89, 92];

// Örnek - 3
const licences: boolean[] = [true, false, false, true];

/*
 * Soru: Bir dizinin içerisinde birden fazla farklı tipte veri olur mu?
 * Cevap: Evet, olur.
 */

let teachers: (string | null)[] = ["Uğur", "Ahmet", null, "Yasin"];
