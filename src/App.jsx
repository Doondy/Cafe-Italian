import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import "./styles/Navbar.css";
import "./App.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Cart from "./pages/Cart";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCurrentPage("cart"); // optional: redirect to cart
  };

  return (
    <div className="app-root">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "menu" && (
          <Menu addToCart={addToCart} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "pricing" && <Pricing />}
        {currentPage === "order" && (
          <Order cartItems={cartItems} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "cart" && (
          <Cart cartItems={cartItems} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "about" && <About />}
        {currentPage === "contact" && <Contact />}
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}