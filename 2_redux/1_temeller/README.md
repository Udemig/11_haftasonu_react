- State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özellikler.

# State Yönetme

- Prop Drilling: Bileşenlerde yukarıdan bir kaç alt kademedeki bileşene prop gönderme

- Context: Uygulamadaki state'i ve state'i değiştiren fonksiyonları bütün bileşenler tarafından erişilebilen merkezler tarafından yönettiğimiz state yönetim aracı

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak yönetilmesi gereken state'leri yönettiğimiz merkezi state yönetim aracı

# Neden Context yerine Redux

- Kod tekrarı contexte göre daha az.
- Performansı daha iyi
- Bileşen içerisindeki karışıklığı daha azaltır
- Hata ayıklama daha kolaydır (redux devtools)
- Orta veya büyük ölçekli projelerde state yönetimini daha kolay hale getiriyor.

# Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulamadki bütün bileşenler tarafından erişilebilen ve yönetilebilen state deposu

2. Reducer: Bir state tutar ve aksiyondan aldığı talimata göre tuttuğu state'in nasıl değişiceğine karar verir.

3. Action: Reducer'lardaki state'i güncellemek için gönderdiğimiz nesne / talimat / emir / eylem / haber

- - Action iki değere sahip bir nesnedir.
- - type (zorunlu): Eylemi tanımlayan string
- - payload (opsiyonel): Eylemin verisi

4. Dispatch (Sevketmek): Eylemin gerçekleştiğini reducer'a ileten method.

5. Subscribe (Abone Olmak): Bileşenlerin store'da tutulan veriye erişim sağlması

6. Provider (Sağlayıcı): Store'da tutulan veriyi uygulamay sağlar

# Gerçek hayattan benzetme

1. Store: Okul Binası

2. Reducer: Okulun Yönetim Ekibi (Müdür,Müdür Yard.)

3. Action: "Öğrencinin Sınac Geçmesi" | "Yeni Öğrencinin Kayıt Yapması" | "Öğrencinin Okuldan Atılması"

4. Dispatch: Öğrenci İşleri | Öğretmen

5. Subscribe: Rehberlik Servisi | E-Okul

6. Provider: MEB

# Redux Kurulum Aşamaları

1. `redux` ve `react-redux` paketlerini indir
2. reducer / reducer'ların kurulumunu yap
3. store'u oluştur
4. store'u projeye tanıt
