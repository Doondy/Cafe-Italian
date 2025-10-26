import React from "react";
import "../styles/Cart.css";

export default function Cart({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + parseInt(item.price.replace("₹","")), 0);

  return (
    <section className="page-section fade-in cart-section">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-placeholder">
          <p>Your cart is empty. Select items from Menu!</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}</span>
            </div>
          ))}
          <button className="cart-checkout">Checkout - ₹{total}</button>
        </div>
      )}
    </section>
  );
}