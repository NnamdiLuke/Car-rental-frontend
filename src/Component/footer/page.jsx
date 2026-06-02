import React from "react";
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Car Rent</h2>
          <p>Nigeria's premier luxury transport and logistics network.</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/fleet">Our Fleet</a>
          <a href="/services">Services</a>
          <a href="/reviews">Reviews</a>
          <a href="/blog">Blog</a>
          <a href="/faq">FAQ</a>
        </div>

        <div className="footer-column">
          <h3>Top Locations</h3>

          <div className="locations-grid">
            <a href="/">Lagos VIP Fleet</a>
            <a href="/">Abuja Diplomatic Fleet</a>
            <a href="/">Port Harcourt</a>
            <a href="/">Kaduna</a>
            <a href="/">Owerri</a>
            <a href="/">Ilorin</a>
            <a href="/">Asaba</a>
            <a href="/">Imo</a>
            <a href="/">Benin City</a>
            <a href="/" className="browse-all">
              Browse All Locations →
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="contact-item">📞 +2347042447680</div>

          <div className="contact-item">✉️ naijacarhire1313@gmail.com</div>

          <div className="contact-item">📍 Wuse II, Abuja</div>

          <div className="contact-item">📍 Victoria Island, Lagos</div>

          <div className="socials">
            <a href="/">F</a>
            <a href="/">T</a>
            <a href="/">I</a>
            <a href="/">T</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 carrent.com. All rights reserved.</p>

        <div className="footer-legal">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
