import React from 'react';
import logo from '../assests/logo.png';
import './header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" className='logo'>
                <img src={logo} alt="Logo appears here" />
                <span>Shopping Cart</span>
            </Link>
            <nav className='navigation'>
                <NavLink to="/" className="link"> Home</NavLink>
                <NavLink to="/cart" className="link"> Cart</NavLink>
            </nav>
            <Link to="/cart" className="items">
                <span>Cart: 2</span>
            </Link>
        </header>
    )
}

export default Header