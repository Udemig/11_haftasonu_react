# Routes

- Tarayıcıdaki url'i izler url her değişitiğinde yol tanımladığımız route'lardan birinin path değeri ile eşleşirse o route'un elementini ekrana bsr

# Link

- Proje içerisinde yönlendirme işlemlerinde a etiketi yerine kullanılır.
- Href yerrine to değeri ile yönlendirilicek sayfa tanımlanır

# Navlink

- Link etiketi ile aynı görevi yapar

- Kullanıcı eğerki nav link ile tanımlanan sayfya giderse o navlink a active class'ı alır

# Dynamic Routes

- Saya içeriğinin url'den alınan parametrelere göre değiştiği sayfalara veridğimiz isim.

- Örn:
- Youtube video sayfası
- netflix film sayfası
- sahibinden ilan sayfası
- amazon ürün sayfası

# useNavigate

- Link elementinin fonksiyon olarak karşılığı
- Kullanılabilmesi için bir kere çağrılması gerekli.
- - const navigate = useNavigate()

# useLocation

- Kullancının bulundıığı sayfa ile alakalı bilgileri edinmemezi sağlayan hook.

- state / path / hash / param

# Search Params (Arama Parametresi)

- Normalde state'de tutucağımız değerli arama parametesinde tutmak isteyebiliriz.

- State'de tutulan veriler sayfa yenilidiğinde kaybolur ama arama parametresinde kaybolma durumu söz konusu değildir.

- Değerlerin state yerine url'e arama paramtesi olarak kaydedilmesi sayesinde başkalarıyla da url kolyca paylaşılabilir.
