import React from "react";
import { Link } from "react-router-dom";
import {
  FaTelegramPlane,
  FaYoutube,
  FaWhatsapp,
  FaPhone, // ← Phone icon
  FaEnvelope, // ← Email icon
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  // Your social media links
  const socialLinks = {
    telegram: "https://t.me/gebiyawyigermal",
    youtube: "https://youtube.com/@GebiyawYigermal",
    whatsapp: "https://wa.me/251918939724", // Removed the + for correct format
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>M<sup>2</sup> COFFEE</h3>
            <p>Premium roasted and grounded coffee delivered to your door.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              {/* Phone with Icon */}
              <p className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+251910857444">+251 910 857 444</a>
              </p>

              <p className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:gebiyaw2004@gmail.com">gebiyaw2004@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
            
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon telegram"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>

              {/* YouTube Icon */}
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon youtube"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 M<sup>2</sup> Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
