import { getRecipes } from "../utils";

// tarifler sayfası static bir sayfa olduğunda dolayı build anında olulturulur api isteğini build anında atar ve kullanıcı her sayfaya girdiğinde build anında oluşturulan htmli görür ama sayfaya bağlı olarak belirli aralıklara sayfanın güncel kalmasını sağlamak için revalidate özelliğini kullanırız burada verdiğimiz süre sonunda bu sayfaya girildiğinde build anında oluşturulan içerğii görüntülemek yerine tekrardan sayfa oluşturulur tekrardan api isteği atılır
export const revalidate = 3600;

// API isteğini atıcağımız bileşen async olmalı
const Recipes = async () => {
  // api isteğini at
  const data = await getRecipes();

  return (
    <div className="px-10 py-10 text-xl">
      <h1>Tarifler</h1>

      {data.recipes.map((item) => (
        <div className="border p-2 rounded-md my-5">
          <h1 className="font-bold">{item.name}</h1>
          <h1>{item.cuisine}</h1>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
