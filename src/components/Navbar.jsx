import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // Import your logo PNG

export default function Navbar({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-brand" onClick={() => handleClick("home")}>
          <img src={logo} alt="Cafe Italian" className="nav-logo" />
          <span>Cafe Italian</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button
            className={currentPage === "home" ? "active-link" : ""}
            onClick={() => handleClick("home")}
          >
            Home
          </button>
          <button
            className={currentPage === "menu" ? "active-link" : ""}
            onClick={() => handleClick("menu")}
          >
            Menu
          </button>
          <button
            className={currentPage === "pricing" ? "active-link" : ""}
            onClick={() => handleClick("pricing")}
          >
            Pricing
          </button>
          <button
            className={currentPage === "order" ? "active-link" : ""}
            onClick={() => handleClick("order")}
          >
            Order
          </button>
          <button
            className={currentPage === "cart" ? "active-link" : ""}
            onClick={() => handleClick("cart")}
          >
            Cart
          </button>
          <button
            className={currentPage === "about" ? "active-link" : ""}
            onClick={() => handleClick("about")}
          >
            About
          </button>
          <button
            className={currentPage === "contact" ? "active-link" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}