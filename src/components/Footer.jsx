import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h3>TechZone</h3>
        <p>
          Premium electronics store with the latest
          technology products.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: support@techzone.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>

        <div className="social-icons">
          <span>📘</span>
          <span>📷</span>
          <span>🐦</span>
          <span>▶️</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;