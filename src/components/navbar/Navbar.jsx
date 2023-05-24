import React from "react";
import Logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

import './navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </div>

            <div className="navbar_links">
                <Link to="/"> shop </Link>
                <Link to="/cart"> <FaShoppingCart style={{ color: "black" }} size={16} /> </Link>
            </div>
        </div>

    )
}

export default Navbar;