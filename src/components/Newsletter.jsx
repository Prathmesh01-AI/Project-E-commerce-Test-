import React, { useState } from "react";
import "../css/Newsletter.css";

function Newsletter() {

  const [email, setEmail] = useState("");

  const subscribe = () => {
    if (email.trim() !== "") {
      alert("Subscribed Successfully!");
      setEmail("");
    } else {
      alert("Please enter your email");
    }
  };

  return (
    <section className="newsletter">
      <h2>Subscribe To Our Newsletter</h2>

      <p>
        Get the latest updates, offers and discounts.
      </p>

      <div className="newsletter-box">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={subscribe}>
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Newsletter;