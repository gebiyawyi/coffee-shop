import React, { useState } from "react";
import ProductGrid from "../components/product/ProductGrid";
import ProductFilter from "../components/product/ProductFilter";
import { products } from "../data/products";

function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState("all");

  const filterProducts = (type) => {
    setActiveFilter(type);
    if (type === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.type === type));
    }
  };

  return (
    <div className="shop">
      <div className="container">
        <h1 className="section-title">Our Coffee Collection</h1>
        <ProductFilter
          activeFilter={activeFilter}
          onFilterChange={filterProducts}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

export default Shop;
