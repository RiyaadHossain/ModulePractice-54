import { useState } from "react";
import Cart from "../Cart/Cart";
import useProducts from "../Hook/Hook";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts();
  const [items, setItems] = useState([]);

  const addToCart = (singleItem) => {
    let newCart = []
     const exist = items.find((item) => item.id === singleItem.id);
    if (exist) {
      const rest = items.filter((item) => item.id !== singleItem.id);
      const quantity = exist.quantity;
      quantity ? (exist.quantity = quantity + 1) : (exist.quantity = 1);
      newCart = [...rest, exist];
    } else {
      singleItem.quantity = 1;
      newCart = [...items, singleItem];
    }
    setItems(newCart);
  };
  const removeItem = singleItem => {
    const rest = items.filter(item => item.id !== singleItem.id)
    setItems([...rest]);
  }
  return (
    <div className="shop-contaner">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 container">
        {products.map((product) => (
          <Product key={product.id} addToCart={addToCart} product={product} />
        ))}
      </div>
      <div className="sticky top-0">
        
        {items.length > 0 &&
          items?.map((item) => <Cart key={item.id} removeItem={removeItem} item={item} />)}
      </div>
    </div>
  );
};

export default Shop;
