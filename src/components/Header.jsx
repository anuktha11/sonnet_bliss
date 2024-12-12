// components/Header.js
import React from 'react';
import logo from '../logo1.jpeg';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-brand-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="brand-info">
          <h1 className="brand">Sonnet Bliss</h1>
          <p className="slogan">&nbsp;Handcrafted &nbsp; Elegance</p>
        </div>
      </div>
      <div className="contact-buttons">
        <a
          href="https://wa.me/+919442533967"
          className="icon-btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+919442533967"
          className="icon-btn call-btn"
          aria-label="Call"
        >
          <FaPhone />
        </a>
        <a href="#contact" className="contact-text">Contact Now</a>
      </div>
    </header>
  );
}

export default Header;
