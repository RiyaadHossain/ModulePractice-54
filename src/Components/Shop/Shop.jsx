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
          <div className="shop-container">
          {
              products.map(product => <Product key={product.id} product={product}/>)
          }
          </div>
    </div>
  );
};

export default Shop;
