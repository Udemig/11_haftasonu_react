// API isteğini atan fonksiyonu burda tanımlarız
export const getRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    // cache özelliğini tamamen devre dışı bırakır
    // cache: "no-store",
    // tarifler sayfası static bir sayfa bundan dolayı buil anında olulturulu api istğeini build anında atar ve kullanıcı her sayfaya giridğinde buil anında oluşturulan htmli görür ama sayfay bağlı olarak belirli aralıkları sayfanın güncel kalmasını sağlamak için revalidate özelliğini kullanırızı burada verdiğimiz süre sonunda bu sayfaya girlidğinde build anında oluşturulan içerği görüntülemek yerine tekrardan sayfa oluşturulu tekrardan api isteği atılır
    next: {
      revalidate: 3600,
    },
  });

  return res.json();
};
