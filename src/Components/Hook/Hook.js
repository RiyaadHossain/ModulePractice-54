import { useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return [product, setProducts];
};

export default useProducts;
