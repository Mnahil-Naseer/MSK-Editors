import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Header.css';
import logo from '../assets/img/blue1.1 1.png'; 

const Header = () => {
  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/place-order">Place Order</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </header>
  );
}

export default Header;
