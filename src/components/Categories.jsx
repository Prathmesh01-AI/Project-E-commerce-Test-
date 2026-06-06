import React from "react";
import "../css/Categories.css";

function Categories() {

  const categories = [
    "Smartphones",
    "Laptops",
    "Headphones",
    "Smart Watches",
    "Gaming"
  ];

  return (
    <section>
      <h2>Shop By Category</h2>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;