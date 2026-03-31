import React from "react";
import "./ProductFilter.css";

function ProductFilter({ activeFilter, onFilterChange }) {
  const filters = [
    { id: "all", label: "All Coffees" },
    { id: "roasted", label: "Roasted Beans" },
    { id: "grounded", label: "Grounded Coffee" },
  ];

  return (
    <div className="product-filter">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default ProductFilter;
