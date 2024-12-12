// components/Footer.js
import React from 'react';
import './Footer.css';
import {   FaInstagram,  FaWhatsapp } from 'react-icons/fa'; // Import icons
// import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Import icons


function Footer() {
  return (
    <footer id='contact' className="footer">
      <div className="footer-content">
        <p className="tagline">To know more updates and offers, join us:</p>
        <div className="social-icons">
          {/* <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
            Facebook Page
          </a> */}
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
            Instagram
          </a>
          {/* <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
            YouTube Channel
          </a> */}
          <a href="https://wa.me/+91 9442533967" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
            Join WhatsApp Group
          </a>
        </div>
        <p className="contact-info">Call us: +91 9442533967</p>
        <p>© 2024 Sonnet Bliss - Handcrafted Elegance</p>
      </div>
    </footer>
  );
}

export default Footer;
