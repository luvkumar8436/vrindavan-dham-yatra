import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/Vrindavan_Dham_Yatra_Logo_Cleaned-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"> <img className='logo' alt='website logo' src={logo} ></img> </Link>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
        <li className="dropdown">
          <span>Famous Temples</span>
          <ul className="dropdown-content">
            <li><Link to="/famous-temples/krishna-janmabhoomi" onClick={toggleMenu}>Krishna Janmabhoomi</Link></li>
            <li><Link to="/famous-temples/dwarkadhish-temple" onClick={toggleMenu}>Dwarkadhish Temple</Link></li>
            <li><Link to="/famous-temples/banke-bihari-temple" onClick={toggleMenu}>Banke Bihari Temple</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Tourist Packages</span>
          <ul className="dropdown-content">
            <li><Link to="/tourist-packages/weekend-trip" onClick={toggleMenu}>Weekend Trip</Link></li>
            <li><Link to="/tourist-packages/pilgrimage-tour" onClick={toggleMenu}>Pilgrimage Tour</Link></li>
            <li><Link to="/tourist-packages/heritage-tour" onClick={toggleMenu}>Heritage Tour</Link></li>
          </ul>
        </li>
        <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
