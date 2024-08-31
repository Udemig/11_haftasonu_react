# Middleware Nedir ?

- MW, yazılım geliştirmede, iki olay arasıda çalışan koddur.
- Örneğin bir api istğeinin bir uçtan diğer uca iletilirken araya girip bu isteği işleyen bir mw yazılabilir.

# Thunk Mw Nedir ?

- Redux thunk , redux'ta kullanılan bir middleware'dir.

- Redux thunk, normalde sadece obje dönen aksiyonlar yerine fonksiyon dönen aksiyonlar yazmamıza olanak sağlar.

- Redux thunk akiyonların içierisnde döndürdüğümüz bu fonksiyonları çalıştırır bu fonksiyonlar içirisinde asenkrın işlemler yapılabilir ve işlemler sırasında dispatch kullanıalbilir

```js
// Klasik yöntem
useEffect(() => {
  dispatch(setLoading());

  api
    .get("/restaurants")
    .then((res) => dispatch(setRestaurants(res.data)))
    .catch((err) => dispatch(setError(err)));
}, []);

// Thunk ile
useEffect(() => {
  dispatch(getRestaurants());
}, []);
```
