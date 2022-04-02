import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
          <div className="shop-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 container">
          {
              products.map(product => <Product key={product.id} product={product}/>)
          }
          </div>
    </div>
  );
};

export default Shop;
