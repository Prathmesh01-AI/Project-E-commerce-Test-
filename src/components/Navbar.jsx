import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TechZone</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>

      <input
        type="text"
        placeholder="Search Products..."
        className="search-box"
      />

      <div className="nav-right">
        <span className="cart">🛒</span>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;