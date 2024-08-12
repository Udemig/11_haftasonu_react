# Vite Projesi Adımları

- `npm create vite klasör_ismi` > belirttiğimiz klasörü oluştuurp içersine react projesini kurar

- `npm create vite .` > terminalin bulunduğu mevcut dizine react projesi kurar

- `npm i / npm install` > node_modules'ü yani bağımlılıkları indiririz

- `npm run dev` > react projesini ayağa kaldırmaya yarar

# Vite Artıları

- Proje oluşturma / Ayağa kaldırma gibi işlemler VİTE ile CRA'ya göre daha hızlı

- Gereksiz kodlar/dosyalardan arındırılmış bir react projesi oluşturur.

- Build işlemi çok daha hızlı

# Değişenler

- `App.js` ve `index.js` dosyalarının yerini `App.jsx` ve `main.jsx` aldı.

- Projeyi ayağa kaldırırken `npm start`yerine `npm run dev` komutu kullanılıcak

# JSON-SERVER

- Kendi bilgisayarımızda çalışan fake API oluşturmaya yarar.

- Kendimizi geliştirmek için yazdığımız basit uygulumaların backend ihtiyacını karşılar

- Gerçek bir projeder Backend dev'in api'ı oluşturmasını beklerkenki süreçte frontend'i ilerletebilmek için json-server ile sahte bir api oluşturuluğu geçici süreyle onun üzerinden projenin temel hatları tasarlanabilir

- Json-server ile oluşturğumuz api'a bütün http methodları ile istek atabiliriz (get,post,put,patch,delete)

- Yaptığımız istek sonucun verilerde bir dğeişim olursa db.json dosyasıda buna göre değişir.

# Axios

- Http istekleri atmak için modern çözüm
- Yerleşik değil kütüphanesinin indirilmesi gerekiyor.
- isteklerde fetche göre daha az kod yazarız
- hataları ve gelene cevabı daha detaylı bir şekilde gösterir
- alınan veriler için .json methodu ile yaptığımız formatlama işlemini otomatik olarak kendisi yapar.
- isteğin body bölümünde gönderilen js verilerini otomatik olarak json verisine çevirirr.
- özelliştirelebilir

## GET

### FETCH

```js
fetch("http://localhost:4040/todos?_sort=-date&_page=1")
  .then((res) => res.json())
  .then((data) => console.log("FETCH", data));
```

### AXIOS

```js
const params = { _sort: "-date", page: 1 };

api
  .get("/todos", { params })
  .then((res) => console.log("AXİOS", res.data));
```

## POST

### FETCH

```js
fetch("http://localhost:4040/todos", {
  method: "POST",
  body: JSON.stringify(newTodo),
});
```

### AXIOS

```js
api.post("/todos", newTodo);
```

## PATCH

### FETCH

```js

```

### AXIOS

```js

```

## DELETE

### FETCH

```js
fetch(`http://localhost:4040/todos/${todo.id}`, { method: "delete" });
```

### AXIOS

```js
api.delete(`/todos/${todo.id}`);
```

## Not

- Eğerki api'da yaptığımız güncellemenin ekranada yanasımasını istiyorsak yani api'a göncerilen todo'nun arayüze eklenemsini istiyorsak isteğin başarılı oma durumunu .then() aracılığı ile izlemelei ve istek başırılı olduğu zaman arayüz güncellenemsi için state'ide güncellemeleyiz

## DİZİ GÜNCELLEME

// İLK HALİ
const dizi = [
{ id: 1, name: "Mahmut" },
{ id: 2, name: "Ali" },
{ id: 3, name: "Ayşe" },
];

// güncel değer
const güncelKisi = { id: 2, name: "Ayla" };

// diziyi güncelle id'si 2 olan elemanın ismini Ayla yap
const yeniDizi = dizi.map((kisi) =>
kisi.id == güncelKisi.id ? güncelKisi : kisi
);

// SON HALİ
[
{ id: 1, name: "Mahmut" },
{ id: 2, name: "Ayla" },
{ id: 3, name: "Ayşe" },
];
