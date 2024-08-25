// Bileşen içerisnde kullanılan bir react hookudur. Belirlenen bir context yapısına abone olmamızı sağlar. Ve o context yapısındaki value olarak belirlenen verilere erişir.
import { useContext } from "react";

// abone olmak istediğimiz context yapısını çağır
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const Home = () => {
  // Product Context yapısına abone ol
  const { data, error, isLoading } = useContext(ProductContext);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        data && (
          <div className="wrapper">
            {data.products.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
