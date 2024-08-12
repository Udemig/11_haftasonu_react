import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import RefExample from "./components/RefExample";

const App = () => {
  // api'dan gelen verileri depoladığımız state
  const [data, setData] = useState(null);

  // aratılan metnin depolandığı state
  const [searchTerm, setSearchTerm] = useState(null);

  // bileşen ekrana basıldığı anda api'dan verileri al
  // searchTerm state'i her değiştiğinde çalışsın
  useEffect(() => {
    // api isteğinin atılacağı url
    const url = searchTerm
      ? `https://dummyjson.com/recipes/search?q=${searchTerm}`
      : `https://dummyjson.com/recipes`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [searchTerm]);

  return (
    <div className="bg-dark min-vh-100 text-light p-3 ">
      <div className="container">
        <RefExample />

        <h1 className="py-4 text-center">UseEffect Örnek</h1>

        <Form setSearchTerm={setSearchTerm} />

        {data === null ? (
          <p>Yükleniyor...</p>
        ) : data.recipes.length === 0 ? (
          <p>Aratılan metine uygun tarif bulunamadı....</p>
        ) : (
          data.recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
