import React from 'react';

const Cart = ({ item, removeItem }) => {
    console.log(item);
    const { title, quantity } = item
    let count = 0;
    for (const quantity in item) {
        count = count + quantity.quantity
    }
    return (
        <div className='mb-4 '>
           
            <span>{title?.slice(0, 10)}<span className='bg-cyan-200 ml-2 p-1 rounded-full'>{quantity}</span></span>
            <button onClick={() =>removeItem(item) } className='p-4  border ml-2 border-sky-500 rounded-full'>🗑️</button>
        </div>
    );
};

export default Cart;