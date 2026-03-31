import React from "react";
import { useCart } from "../../context/CartContext";
import "./CartItem.css";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h4>{item.name}</h4>
        {/* Show selected size */}
        {item.selectedSize && (
          <p className="cart-item-size">Size: {item.selectedSize}</p>
        )}
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-actions">
          <div className="quantity-control">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="cart-item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartItem;
