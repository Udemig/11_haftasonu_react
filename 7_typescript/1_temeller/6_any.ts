/*
 * Any Type
 * Bir değişkene any type atadığımız zaman değişken herhangi bir türde değer alabilir ve bir tür ksııtlmasına maruz kalmaz.
  
 * Ts'de any type ile tanımlanmış olan bir  değişken gibi davranır.

 * Otomatik tamamlama devre dışı kalır.

 * Normal şartlarda any kullanılması ts mantığına aykırıdır. Çünkü ts'de amaç her değişkenin türünün farklı olmasıdır.

 * Any genelde "geçici/acil" durumlarda kullanırız. Örn api'dan gelen bir veri var ama verinin tipini belirtecek kadar zamanızmız yok hemen çalışır hale getirmeli ve githuba yüklemliyiz. Bu tarz "giçici" durumlarda any tipini kullanbilir.

 * mutlaka any tipleri bir noktada sonra kaldırılıp yerine doğru tipler tanımlanmalı
*/

let foo: any;

foo = "string";
foo = 56;
foo = true;
foo = function () {};

// dizilerde kullanımı
// dizideki elemanın tipi belirli değilse şu şekilde kullanılabilir
let bar: any[];

bar = ["ahmet", 35, true, {}, []];
