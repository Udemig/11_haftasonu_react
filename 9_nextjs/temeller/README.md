# Next JS Routing

- Bir next.js projesinde routing için 2 farklı yol izlenebilir.
- Pages Router (Eski Yöntem)
- App Router (Önerilen Yeni Yöntem)

## App Router

- Dosya dizinine göre / klasör tabanlı sayfalama yapar
- Bütün sayfalar src/app klasörü içinde tanımlanır
- App içerisinde tanımlanan ve içinde page.jsx dosyası olan her bir klasör bir sayfaya denk gelir

### Nested Routes - İç İçe Yollar

- örn:
- /profile > profili görünütüle
- /profile/friends > arkadaşlarını görüntüle
- /profile/edit > profili düzenle

- nested routes oluştururlen bir alt route oluşturmak için sadece bir sayfa klasörü içerisinde apge.js dosyası olan bir klasör daha oluşturmalıyız

### Dynamic Routes - Dinamik Yollar

- Bir, e-ticaret projesi yapıyorsak, yüzlerce ürün ve herbirine farklı sayfa oluşturumayacağımızdan dolayı url'deki parametreye göre değişen bir dinamik sayfa oluşturmalıyız.
- Youtube > Video Detay Sayfası > youtube.com/watch/4
- Amazon > Ürün Detay Sayfası > amazon.com/product/99

### Nested Dynamic Routes - İç İçe Dinamik Yollar

- /products/20/reviews > id'si 20 olan ürünün yorumlar sayfası

- /products/20/reviews/4 > id'si 20 olan ürünün yorumlarından 4 id'li yorumun detay sayfası

### Link

- Yönledirme için kullanırız a elementinin yerine geçer.
- href değeri yönlendirilecek url'i belirler

## Route-Group

- Proje içerisinde sayfa sayısı arttıkça daha oragnize olabilmek için sayfaları gruplandırmak isteyebiliriz

- Yazdığımız sayfaların daha kolay erişlebilir olması için sayfaları gruplandırırız

- url'e etki etmesini istemedğimiz klasörleri () içine alırız

## Metadata

- SEO açısından metadaları tanımlamak önemlidir.

- Sayfaların metada dediğimiz tarayıcıda öne çıkması için ihtiyacı olan başlık / açıklama / logo / yapımcı gibi değerleri react'da sabit bir şekilde bütün sayfalarda aynı olarak ifade ederken next.js'de her sayfaya özel metadata tanımı yapabiliyoruz

- staik ve dinamik şekilde tanımlanabilir

## Layout - Düzen Bileşeni

- Bir uygulamanın veya sayfa gurubunun gelnel sayfa düzenenini ve ortak bileşenlerinin tanımlamamızı sağlar

- Rootlayout'da yapılan değişikler projedeki bütün sayfaları etkiler ama bazı durumlarda sadece birkaç sayfanın ortak kullanıcığı bir düzen belirlemek isteyebiliriz bu durumda kendi layout bileşenimizi oluştururuz

## Template - Düzen Bileşeni

- layout ile aynı görevi yapar
- sayfa geçişlerinde template'de tutulan state sıfılanır layout'da tutulan state sabit kalır

## Özel Dosyalar

- nextjs'de ismi nextjs tarafından belirlenmiş ve özeil bir amaca hizmet eden dosylar vardır:

- `page`: bir sayfa tanımlamaya yarar
- `not-found`: 404 sayfasını tanımlamaya yarar
- `layout`: sayfaların düzenini oluşturmamızı sağlar
- `template`: sayfların düzenini oluşturmamızı sağlar
- `loading` : bir bileşen asyn await ile beklediği süre boyunca otomatik olarak ekrana basılır
- `error` : bir bileşenden hata fırlatılırsa otomatik olarak ekrana basılır
