import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link className='navItem' to={'/'}>Home</Link>
            <Link className='navItem' to={'/shop'}>Shop</Link>
            <Link className='navItem' to={'orderreview'}>Order Review</Link>
            <Link className='navItem' to={'/about'}>About</Link>
        </nav>
    );
};

export default Header;