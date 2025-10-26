import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="page-section fade-in contact-section">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Send us a message or your feedback.</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}