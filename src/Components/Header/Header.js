import React from 'react';
import logo from '../../images/Logo.svg';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
        
        <img src={logo} alt="" />

        <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
        </div>

        </nav>
    );
};

export default Header;