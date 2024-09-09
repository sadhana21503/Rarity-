import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navbar.scss';
import logo from '../../assets/images/logo.png';
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo-img">
        <img src={logo} alt="BluOrng Logo" className="navbar__logo-img" />
        </div>
     
      <div 
        className="navbar__hamburger" 
        onClick={toggleMobileMenu} 
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        <FaBars />
      </div>
      </div>

      <ul className={`navbar__menu navbar__menu--mobile ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMobileMenu}>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMobileMenu}>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMobileMenu}>
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={toggleMobileMenu}>
            <span>Login</span>
          </Link>
        </li>
      </ul>

      <div className="navbar__right">
        <div className="navbar__search">
          <FaSearch className="navbar__search-icon" />
          <input type="text" placeholder="Search..." aria-label="Search" />
        </div>
       <Link to={'/cart'} ><FaShoppingCart className="navbar__cart-icon" aria-label="View cart" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
