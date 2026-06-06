import React from "react";
import "../css/Testimonials.css";

function Testimonials() {

  const reviews = [
    {
      name: "John Smith",
      review:
        "Amazing products and excellent customer service."
    },
    {
      name: "Sarah Johnson",
      review:
        "Fast delivery and great prices on electronics."
    },
    {
      name: "David Wilson",
      review:
        "My favorite online store for tech gadgets."
    }
  ];

  return (
    <section className="testimonial-section">
      <h2>Customer Reviews</h2>

      <div className="testimonial-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{item.review}"</p>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;