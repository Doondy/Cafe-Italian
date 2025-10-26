import React from "react";
import "../styles/Menu.css";

import espressoImg from "../assets/espresso.jpg";
import cappuccinoImg from "../assets/cappuccino.jpg";
import margheritaPizzaImg from "../assets/margherita-pizza.jpg";
import pastaAlfredoImg from "../assets/pasta-alfredo.jpg";
import tiramisuImg from "../assets/tiramisu.jpg";

export default function Menu({ addToCart, setCurrentPage }) {
  const dishes = [
    { name: "Espresso", description: "Rich and strong Italian coffee", price: "₹120", img: espressoImg },
    { name: "Cappuccino", description: "Creamy coffee with froth", price: "₹150", img: cappuccinoImg },
    { name: "Margherita Pizza", description: "Classic pizza with basil & cheese", price: "₹550", img: margheritaPizzaImg },
    { name: "Pasta Alfredo", description: "Creamy pasta with parmesan", price: "₹650", img: pastaAlfredoImg },
    { name: "Tiramisu", description: "Classic Italian dessert", price: "₹300", img: tiramisuImg },
  ];

  return (
    <section className="page-section fade-in menu-section">
      <h2>Our Menu</h2>
      <p>Delightful dishes inspired by traditional Italian cuisine.</p>
      <div className="menu-grid">
        {dishes.map((dish, index) => (
          <div className="menu-item" key={index}>
            <img src={dish.img} alt={dish.name} className="menu-img" />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span className="price">{dish.price}</span>
            <button className="btn-add" onClick={() => addToCart(dish)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Proceed to Order */}
      <button
        className="btn btn-primary proceed-order"
        onClick={() => setCurrentPage("order")}
      >
        Proceed to Order
      </button>
    </section>
  );
}