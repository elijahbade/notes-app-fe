import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css"; 

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Mega Notes</h4>
          <p>Mega Notes is a powerful note-taking app that helps you organize, prioritize, and secure your notes. Stay productive with our dashboard features and access your notes anytime, anywhere.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:contact@meganotes.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Mega Notes App | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
