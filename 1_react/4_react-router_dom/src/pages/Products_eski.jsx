import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Products = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const params = {
      q: query, // arayılan kelimeyi param olarak ekle
    };

    axios
      .get("http://localhost:3090/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log("veri gelmedi"));
  }, [query]);

  return (
    <div className="container my-5">
      <h3>{books?.length} kitap bulundu</h3>

      {/* aratma inputu */}
      <input onChange={(e) => setQuery(e.target.value)} type="text" />

      <div className="cards-container">
        {books?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
