import React from "react";
import "../styles/Order.css";

export default function Order({ cartItems, setCurrentPage }) {
  const total = cartItems.reduce(
    (acc, item) => acc + parseInt(item.price.replace("₹", "")),
    0
  );

  return (
    <section className="page-section fade-in order-section">
      <h2>Place Your Order</h2>
      {cartItems.length === 0 ? (
        <div className="order-placeholder">
          <p>Your cart is empty. Please select items from Menu!</p>
        </div>
      ) : (
        <div className="order-items">
          {cartItems.map((item, index) => (
            <div className="order-item" key={index}>
              <img src={item.img} alt={item.name} className="order-img" />
              <div className="order-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
            </div>
          ))}
          <div className="order-total">Total: ₹{total}</div>
          <button
            className="btn btn-primary"
            onClick={() => setCurrentPage("cart")}
          >
            Go to Cart / Checkout
          </button>
        </div>
      )}
    </section>
  );
}