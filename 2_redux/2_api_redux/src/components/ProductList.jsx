import { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data));
  }, [id]);

  return <div>ProductList</div>;
};

export default ProductList;
