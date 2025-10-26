import React from "react";
import "../styles/Footer.css"; // Make sure to create this CSS file

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          © 2025 Cafe Italian | By Chandolu Doondy Sai Krishna
        </div>
        <div className="footer-right">
          <div>📞 Mobile: +91-9854313567</div>
          <div>📸 Instagram: Cafe Italian</div>
          <div>🏠 Address: Sector-15, Italian Street, Coimbatore, India</div>
        </div>
      </div>
    </footer>
  );
}