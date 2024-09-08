# Kütüphaneler

- react-icons
- react-router-dom
- axios
- react-player (video oynatma)
- moment (zaman formatla)
- millify (sayı formatla) 200000000 > 2m
- tailwind (kurulum sitesinden)

# Search İçin 2. Çözüm

```js
let params = {
  query,
  type: "video",
};

useEffect(() => {
  setIsLoading(true);
  setPage(1);
  api
    .get("/search", { params })
    .then((res) => {
      setResults(res.data.data);
      setToken(res.data.continuation);
    })
    .catch((err) => console.log(err))
    .finally(() => setIsLoading(false));
}, [query]);

const handleClick = () => {
  setSpinnerLoading(true);
  setPage(page + 1);
  params = { ...params, token };
  api
    .get("/search", { params })
    .then((res) => {
      setResults([...results, ...res.data.data]);
      setToken(res.data.continuation);
    })
    .catch((err) => console.log(err))
    .finally(() => setSpinnerLoading(false));
};
```
