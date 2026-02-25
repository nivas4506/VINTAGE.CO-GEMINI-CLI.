import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>VINTAGE CO.</h3>
          <p>Authentic vintage clothing for the modern individual.</p>
        </div>
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>Outerwear</li>
            <li>Tops</li>
            <li>Pants</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Shipping Info</li>
            <li>Returns & Exchanges</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get special offers and first look at new arrivals.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email address" />
            <button className="btn btn-primary">Join</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Vintage Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
