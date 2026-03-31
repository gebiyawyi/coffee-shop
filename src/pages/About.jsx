import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="section-title">About Coffee Haven</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, Coffee Haven started with a simple mission: to
              bring the finest roasted and grounded coffee to coffee lovers
              everywhere.
            </p>
            <p>
              We source our beans directly from sustainable farms around the
              world, ensuring fair trade practices and the highest quality
              standards.
            </p>

            <h2>Our Commitment</h2>
            <ul>
              <li> 100% Arabica beans</li>
              <li> Sustainably sourced</li>
              <li> Freshly roasted weekly</li>
              <li> Fast, free shipping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
