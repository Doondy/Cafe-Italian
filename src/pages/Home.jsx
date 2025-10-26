import React from "react";
import "../styles/Home.css";

export default function Home({ setCurrentPage }) {
  return (
    <section className="home-section fade-in">
      <div className="home-content">
        <h1>Welcome to Cafe Italian</h1>
        <p>
          Experience authentic Italian flavors, artisan coffee, and cozy ambience.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPage("menu")}
        >
          Explore Menu
        </button>
      </div>
    </section>
  );
}