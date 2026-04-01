import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartIcon from "../cart/CartIcon";
import logo from "../../assets/images/logo.png"; // ← ADD THIS LINE
import "./Header.css";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo"> 
            <img src={logo} alt="MULUR COFFEE" className="logo-image" />
            <span className="logo-text">M<sup>2</sup> COFFEE</span>
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <CartIcon count={getCartCount()} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
