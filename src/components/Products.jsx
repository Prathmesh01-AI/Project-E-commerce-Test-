import React from "react";
import ProductCard from "./ProductCard";
import "../css/Products.css";

function Products() {

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 1199,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: 1499,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 299,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
  ];

  const bestSellers = [
    {
      id: 4,
      name: "Smart Watch",
      price: 249,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 149,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    }
  ];

  return (
    <>
      <section>
        <h2>Featured Products</h2>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Best Sellers</h2>

        <div className="products-grid">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;