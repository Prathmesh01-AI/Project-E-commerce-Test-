import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Latest Tech Products For Everyone</h1>

        <p>
          Discover premium smartphones, laptops, gaming accessories,
          smartwatches and more at unbeatable prices.
        </p>

        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          alt="product"
        />
      </div>
    </section>
  );
}

export default Hero;