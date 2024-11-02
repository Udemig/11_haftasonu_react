/*
 * Tuple Type
 * Typescipt ile birlikte hayatımıza giren bir veritipidir.
 * Uznuluğu ve elemanlarının sırası/tipi sabit olan dizilerde tip tanımı için kullanılılır.
 *
 * Bir dizi içersinde tipleri sıralarız.
 * Örn: [string,number]
 */

// Örnek 1
const ders1: [string, number] = ["edebiyat", 3];
const ders2: [string, number] = ["matematik", 3];
const ders3: [string, number] = ["ingilizce", 2];

// Örnek 2
const gradient: [string, number, number] = ["to right", 252525, 111111];

// Örnek 3
// bir css rgb/rgba renginin verisini dizi olarak tutalım
// rgb(123,56,78)
// rgba(123,56,78,0.7)

// bu durumda sondaki sayıyı opsiyonel yaparız
let color: [number, number, number, number?];

color = [123, 56, 78];
color = [123, 56, 78, 7];

// soru: biden fazla opsiyonel değer olabilir mi?
// cevap: evet, sadece bir kural var, opsiyonel değerden sonra zorunlu bir değer gelemez

let date: [number, string?, number?];

date = [10, "Ocak", 2024];
date = [10, "Ocak"];
date = [10];
date = [10, undefined, 2024];
