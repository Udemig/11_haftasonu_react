/*
 * Access Modifiers - Erişim Belirteçleri

 * Class elemanları ile hassas bilgiler tutucağımız zaman bu bilgilerin class'ın dışarısından erişilip eirşlmeyeceğini belirtmek isteriz
 
 * 3 adet erişim belirteci vardır.
 
 * public: hem class dışarısında hem de class'ı miras alan diğer class'lardan erişelebilir.
 * protected: class'ında dışarısından erişilemez ama class'ı miras alan diğer classlarda erililir.
 * private: hem class'ın dışarısından hem de class'ı miras alan diğer classlardan erişilemez

*/

class Arac {
  public marka: string = "BMW";

  tanit() {
    // propertye class içerisinde erişim sağlanıyo ✔︎
    console.log(this.marka + " motoru çalıştı");
  }
}

class Motor extends Arac {
  calistir() {
    // propertye class'ı miras alan farklı bir class içerisinde erişim sağlanıyo ✔︎
    console.log(this.marka + " motor çalıştı");
  }
}

// propertye class'ın dışarısından erişim sağlanıyo ✔︎
const bmw = new Arac();
console.log(bmw.marka);

/*
 * Not: Erişim belirteçleri aynı bütün ts'r özel olan kodlarda olduğu gibi kodu js'e derlediğimizde ortadan kalkar. Yani belirteçler sadece geliştirme aşamasını daha güvenli hale getirmek için kullanılur.

 ERİŞİM         DIŞARIDAN           MİRAS ALAN CLASS              TANIMLANDIĞI CLASS
 
 PUBLIC            💥                       💥                               💥

 PROTECTED                                  💥                               💥

 PRIVATE                                                                     💥
 
 */
