# Image Component

- Nextjs'de optiimize edilmiş görüntü yönetimi için kullanılan bir resim bileşeni vardır.

- Resimleri optimize ederek daha hızlı yüklenmeler, performans artışı ve daha iyi bir kullanıcı deneyimi sağar

## Özellikler

1. Resimleri otomatik olarak sıkıiştırır ve optimize eder
2. Lazy loading özelliği sayesinde görünrüler sayfadaa kullanıcının görüşüne geldiği zaman ekran basılır
3. Resimlerin daha düşük dosya boyutunda yüksek kaliteli gözükmesi için jpeg/png ve diğer bütün formatları webp formatına çevir

# Intercepted Parallel Routes Images

- Örnek Yaptık

# CSR vs SSR

- Client Side Rendering
- Server Side Rendering

- Client Component kullanırsak render yöntemi CSR olur
- Server Component kullanırsak render yöntemi SSR olur

- Client side rendering yöntemi uygulanan bir sayfaya girdiğimizde `js` kodu ve `boş html dosyası` indiririz. İndirilen js kodu `kullanıcının bilgisayarında` çalışır ve html dosyasını doldurur.

- Server side rendering yöntemi uygulanan bir sayfaya girdiğimizde, js kodu `sunucuda` çalışır ve `html` sunucuda oluşturulur. Client ise sadece sunucudan html'i indirip ekrana basar.

- Bu noktada js'in bizim bilgisayarımdan çok daha hızlı olan sunucuda çalışması sayfa yüklenme süresini hızlandırır

- SEO açısından dolu html indirmek önemlidir aksi takdirde google'ın robotları site içeriğini tanıyamaz ve üst sıralarda olmasının önüne geçer

# Not

- Nextjs biz aksini belirtmedikçe componentları otomatik olarak server component olarak tanımlar. Next.js bizden her zaman olabildiğinice fazla server component kullanmamızı ister.

- Her component'ı server component yapamıyoruz. Kullanıcı etkileşimi gerektiren veya hooks kullanılan componenetlar client component olamlı

# Data Fetching

- Nextjs api isteklerini `Server Component`'larda yapmamızı ister

- Nextjs çejklien veriyi belirli bir süre cache'de tutar ve veriyi çeken api isteğini belirli bir süre içerisinde tekrar çağırdığımızda api'dan veriyi tekrar almak yerine önceki istekden gelen ve cache'de tutulan cevabı getirir

- - Bu sayede:
- - api'dan cevap beklemek gerekmez > daha hızlı
- - api'a gereksiz yere istek gitmez > daha az maliyet

- Cache özelliği sayesinde api'dan gelen veriyi birden çok component'da kullanıcaksak redux vb. yapılara gerek duymadan bütün componentlarda api isteğini atarız bunlardan sadece biri gerçekten api'a gidereken diğer componentlar ilk giden istekten gelen önbelleğe alınan cevabı kullanılır

- Varsayılan olarak bütün api isteklerinden gelen cevaplar cache'de tutulur. Ama çektiğimiz veriye göre bunu değiştirmek isteyebilirirz. Örn: Bir sosyal medya uygulmasının anasayfasında bu cache özelliğini kullanırsak her sayfaya yenilendiğinde aynı içeriği görürüz. Bundan dolayı api isteğini atarken veri cache tutulmalı mı kararını verebiliyoruz.

# Font

- Nextjs, içerisinde fontlar ile alakalı bazı optimizasyonlara sahiptir. Projede kullanılmayan font varyantlarını (kalınlık / italik) oto. olarak algılar ve import etmez

- Font'ları daha seo dostu hale getirir.

- Yerel fontları yönetmek daha kolaydır.

# Nextjs Fonksiyonları

## useRouter

- Client component'larda fonksiyon içerersinde yönlendirme yapmayaya yarar.

- back() | forward() | refresh() | push() methodlarına sahiptir

## redirect

- server component'larda yönlendirme yapmak için kullanılır.
- kullanıcının yetkisine bağlı olarak girmemesi / erişmemesi gereken bir sayfa varsa, o sayfadan dışarıya yönlendirme yapmak için kullanılur

## notFound

- sadece server componentlarda kullanılabilir.
- 404 sayfasına yönlendirir

## usePathname

- sadece client componentlarda kullanılabilir.

- kullanıcnın bulunduğu yolu alır

## useSearchParams

- sadece client componentlarda kullanılabilir.
- urldeki arama parametrelerini almak için kullanılır
