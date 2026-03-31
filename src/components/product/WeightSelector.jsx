import React from "react";
import "./WeightSelector.css";

function WeightSelector({ weightOptions, selectedWeight, onWeightChange }) {
  return (
    <div className="weight-selector">
      <label className="weight-label">Select Size:</label>
      <div className="weight-options">
        {weightOptions.map((option) => (
          <button
            key={option.size}
            className={`weight-btn ${selectedWeight?.size === option.size ? "active" : ""}`}
            onClick={() => onWeightChange(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WeightSelector;
