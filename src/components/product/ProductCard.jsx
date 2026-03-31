import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import WeightSelector from "./WeightSelector";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(
    product.weightOptions?.[0] || null,
  );

  const handleWeightChange = (option) => {
    setSelectedWeight(option);
  };

  const handleAddToCart = () => {
    if (!selectedWeight) {
      alert("Please select a size");
      return;
    }

    addToCart({
      ...product,
      selectedSize: selectedWeight.size,
      price: selectedWeight.price,
    });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-badge">
            {product.type === "roasted" ? "☕ Roasted" : "⚡ Grounded"}
          </div>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-origin">{product.origin}</p>
        <div className="product-rating">
          ⭐ {product.rating} ({product.reviews} reviews)
        </div>
      </Link>

      {/* Weight Selector */}
      {product.weightOptions && product.weightOptions.length > 0 && (
        <WeightSelector
          weightOptions={product.weightOptions}
          selectedWeight={selectedWeight}
          onWeightChange={handleWeightChange}
        />
      )}

      <div className="product-price">
        $
        {selectedWeight
          ? selectedWeight.price.toFixed(2)
          : product.price.toFixed(2)}
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
