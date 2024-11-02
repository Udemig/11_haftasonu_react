/*
 * OOP (Object Orianted Programming) - Nesne Yönelimli Programalama, yazılım geliştirme sürecinde kullanılan bir yaklaşımdır. Bu yaklaşım yazılımı nesneler ve bu nesneler arasındaki etkileşimler arasında yapmayı amaçlar.

 * OOP'nin temel kavramları şunlardır:

 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)

 * OOP'nin temel amacı, kodun daha anlaşılı, yönetilebilir ve yeniden kullanılabilir olmasını sağlamaktır. Bu yaklaşım büyük ve karmaşık projelerde faydalı olur.
*/

/*
 * Sınıf (Class): Sınıflar, nesnelerin şablonudur. 
 * Bir sınıf, belirli bir türdeki nesneler için veri ve fonksiyonları tanımlar.
 * Örneğin "Araba" sınıfı bir arabanın sahip olabileceği özellikler (renk marka model) ve davranışlar (hızlanma fren yap vb.) tanımlanabilir.

*/

class OldPhone {
  //* properties
  telefon_tipi: string = "entegre";
  tus_takimi: string = "döner";
  govde: string = "yatay";

  //* methods
  ahizeAc(): void {
    console.log("ahize açılıyor...");
  }

  numaraCevir(telNum: string): void {
    console.log(telNum + " çevriliyor....");
  }
}

/*
 * Class Kullanımı
 * Class'ı tanımlamak tek başına bir şey ifade etmez.
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımladaıktan sonra kullanmak için çağrırız Class'larda da durum aynıdır.
 
 * new Anahtar kelimesi aracılığı class'ın bir instance (örneği) 'ni oluştururuz.
 * Bu instance'a ise Nesne nedir
 */

const telefon_1 = new OldPhone();
const telefon_2 = new OldPhone();

telefon_2.tus_takimi = "tuşlu";
telefon_2.govde = "dikey";
telefon_2.telefon_tipi = "ayrılmış";

console.log(telefon_1);
console.log(telefon_2);

telefon_1.ahizeAc();
telefon_1.numaraCevir("5678889900");
