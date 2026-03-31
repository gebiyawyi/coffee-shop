import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import WeightSelector from "../components/product/WeightSelector";
import { products } from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(null);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  const currentWeight = selectedWeight || product.weightOptions?.[0] || null;

  const handleWeightChange = (option) => {
    setSelectedWeight(option);
  };

  const handleAddToCart = () => {
    if (!currentWeight) {
      alert("Please select a size");
      return;
    }

    addToCart(
      {
        ...product,
        selectedSize: currentWeight.size,
        price: currentWeight.price,
      },
      quantity,
    );
    navigate("/cart");
  };

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-details-grid">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="product-origin">🌍 {product.origin}</p>
            <div className="product-rating">
              ⭐ {product.rating} ({product.reviews} reviews)
            </div>

            {product.weightOptions && product.weightOptions.length > 0 && (
              <WeightSelector
                weightOptions={product.weightOptions}
                selectedWeight={currentWeight}
                onWeightChange={handleWeightChange}
              />
            )}

            <p className="product-price">
              $
              {currentWeight
                ? currentWeight.price.toFixed(2)
                : product.price.toFixed(2)}
            </p>
            <p className="product-description">{product.description}</p>

            <div className="product-actions">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
