import React from "react";
import "../css/ProductCard.css";

function ProductCard({ image, name, price, rating }) {
  const handleAddToCart = () => {
    alert(`${name} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p className="price">${price}</p>

      <p className="rating">⭐ {rating}</p>

      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;