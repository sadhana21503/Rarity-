import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section fast-links">
          <h3>Fast Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/faqs">FAQ's</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Care</h3>
          <ul>
            <li>Timings: 10 AM - 7 PM (Mon - Sat)</li>
            <li><a href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp: +91 XXXXXXXXXX</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram: @Bluorng.co.in</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-signup">
        <h3>SIGN UP AND ORDER NOW</h3>
        <p>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</p>
        <a href="/login" className="signup-button">Sign Up Now</a>
      </div>

      <div className="footer-social">
        <ul>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 BLUORNG | Developed by <a href="https://www.thewebsort.com/" target="_blank" rel="noopener noreferrer">Websort</a></p>
        <p>Made in India, for the World</p>
      </div>
    </footer>
  );
};

export default Footer;
