import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";

const Products = () => {
  const [books, setBooks] = useState(null);

  // urldeki arama parametrelerine erişme ve değiştirmeye yarar
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // aratılan kelimeyi param olarak ekle
    const params = {
      q: searchParams.get("aramaTerimi"),
      _sort: "title",
      _order: searchParams.get("sırala") === "z-a" ? "desc" : "asc",
    };

    axios
      .get("http://localhost:3090/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log("veri gelmedi"));
  }, [searchParams]);

  return (
    <div className="container my-5">
      <h3>{books?.length} kitap bulundu</h3>

      <Filter />

      <div className="cards-container">
        {books?.map((book) => {
          return <Card key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Products;
