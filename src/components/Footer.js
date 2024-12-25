// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2>AII DEV</h2>
          <p>Innovating Tomorrow, Today: Where Ideas Become Reality</p>
        </div>
        <div className="footer-section links">
          <h3>Services</h3>
          <ul>
          
            <li>Technology</li>
            <li>Social Media Marketing</li>
            <li>Editing</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Newsletters</li>
            <li>Our Partners</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Events</li>
            <li>Ebook & Guide</li>
          </ul>
        </div>
        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© AII DEV 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
