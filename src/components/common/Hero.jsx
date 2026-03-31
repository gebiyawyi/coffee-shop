import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Premium Coffee</h1>
        <h2>Roasted & Grounded to Perfection</h2>
        <p>Discover the finest coffee beans from around the world</p>
        <Link to="/shop" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;
