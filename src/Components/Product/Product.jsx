import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const Product = ({ product }) => {
    const {title, image, price, id} = product
    return (
        <div className='border rounded-md bg-cyan-100 p-8'>
            <img className='w-30 rounded-md h-40 object-cover mx-auto' src={image} alt="" />
            <div className='mt-7 mb-3'>
            <h3 className='text-2xl'>{title}</h3>
                <p className='mt-3 text-xl'><strong>Price:</strong> ${price}</p>
           </div>
               <div className='mx-auto w-full'> <Link className='bg-cyan-600 inline-block text-2xl p-2 text-white ' to={`/productdetails/${id}`}><FaCartPlus/></Link></div>
        </div>
    );
};

export default Product;