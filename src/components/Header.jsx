// Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/img/blue1.1 1.png'; 

const Header = () => {
  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        {/* Change 'to="/services"' to href="#software-section" */}
        <li><a href="#software-section">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#place-order">Place Order</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
        <li><a href="about-us">About Us</a></li>
      </ul>
    </header>
  );
}

export default Header;
