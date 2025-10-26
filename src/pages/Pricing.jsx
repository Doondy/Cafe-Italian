import React from "react";
import "../styles/Pricing.css";

export default function Pricing() {
  const plans = [
    { 
      name: "Coffee Lovers", 
      price: "₹1,200 / week", 
      features: ["5 Coffees", "1 Dessert", "Priority Seating"] 
    },
    { 
      name: "Gourmet Experience", 
      price: "₹3,200 / week", 
      features: ["10 Dishes", "5 Coffees", "Exclusive Menu"] 
    },
    { 
      name: "Ultimate Feast", 
      price: "₹5,600 / week", 
      features: ["All Dishes", "All Coffees", "VIP Treatment"] 
    },
  ];

  return (
    <section className="page-section fade-in pricing-section">
      <h2>Pricing Plans</h2>
      <p>Choose the plan that suits your appetite and style!</p>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.name}</h3>
            <span className="price">{plan.price}</span>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="btn btn-primary">Subscribe</button>
          </div>
        ))}
      </div>
    </section>
  );
}