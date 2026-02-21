import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-branding">
            <div className="dual-logos">
              <a href="https://unipilot.in">
                <img
                  src="/unipilot.png"
                  alt="UniPilot"
                  className="footer-logo unipilot-logo"
                />
              </a>
              <div className="logo-divider"></div>
              <a href="https://ofzen.in">
                <img
                  src={logo}
                  alt="OFZEN"
                  className="footer-logo ofzen-logo"
                />
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <a href="#">Home</a>
            <a href="#features">Features</a>
            <a href="#why-unipilot">Why UniPilot</a>
            <a href="#security">Security</a>
            <a href="#benefits">Benefits</a>
            <a href="#teams">Team</a>
            {/* <a href="#contact">Contact</a> */}
          </nav>
        </div>

        <div className="footer-separator"></div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2026 UniPilot. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a href="mailto:support@unipilot.in" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
