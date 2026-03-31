import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/images/cart-icon.jfif"; // ← YOUR CART IMAGE
import "./CartIcon.css";

function CartIcon({ count }) {
  return (
    <Link to="/cart" className="cart-icon">
      {/* Replace emoji with image */}
      <img src={cartIcon} alt="Cart" className="cart-icon-image" />
      {count > 0 && <span className="cart-badge">{count}</span>}
    </Link>
  );
}

export default CartIcon;
