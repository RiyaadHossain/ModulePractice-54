import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
    const {title, category, image, description, price, rating} = item
    console.log(item);
  return (
      <div className="border flex items-center rounded-md bg-cyan-100 p-8 py-32">
        <div className="mt-7 text-left w-1/2 mb-3">
          <h3 className="font-bold text-2xl">{title}</h3>
              <p className="text-xl font-mono mt-2">{category}</p>
          <p className="mt-3 text-xl">
            <strong>Price:</strong> ${price}
              </p>
              <p className="text-xl my-2"><strong>Ratting: </strong>
               {rating?.rate}⭐</p>
              <p className="font-sans text-xl">{description}</p>
        </div>
        
        <div className="w-1/2"><img
          className="w-520 rounded-md h-80 object-cover mx-auto"
          src={image}
          alt=""
        /></div>
      </div>
  );
};

export default ProductDetails;
