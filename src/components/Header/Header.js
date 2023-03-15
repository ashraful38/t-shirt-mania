import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'> 
            <Link to='/'>Home</Link>
            <Link to='/order'>Order</Link>
            <Link to='/grandpa'>GrandPa</Link>
        </nav>
    );
};

export default Header;