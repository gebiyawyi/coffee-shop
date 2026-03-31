import React from "react";
import Hero from "../components/common/Hero";
import ProductGrid from "../components/product/ProductGrid";
import { products } from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      <Hero />
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Coffees</h2>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </div>
  );
}

export default Home;
