import React from "react";
import "./ContactSection.css";
import { Mail, Headphones, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact-us" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="section-badge">Reach Out</span>
          <h2 className="contact-title">Get into Touch.</h2>
          <p className="contact-desc">
            Have questions about implementing Unipilot at your institution?
            We're here to help you transform your campus experience.
          </p>
        </div>

        <div className="contact-grid">
          {/* Email Card */}
          <div className="contact-card hover-lift">
            <div className="contact-icon-wrapper">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="contact-label">Email Us</h3>
            <p className="contact-sub">Direct access to our team</p>
            <a href="mailto:support@unipilot.in" className="contact-link">
              support@unipilot.in
            </a>
          </div>

          {/* Support Card */}
          <div className="contact-card hover-lift">
            <div className="contact-icon-wrapper">
              <Headphones className="text-primary" size={28} />
            </div>
            <h3 className="contact-label">Support</h3>
            <p className="contact-sub">Dedicated assistance</p>
            <span className="contact-text">24/7 Student & Staff Support</span>
          </div>

          {/* Location Card */}
          <div className="contact-card hover-lift">
            <div className="contact-icon-wrapper">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="contact-label">Headquarters</h3>
            <p className="contact-sub">Visit our main office</p>
            <span className="contact-text">OfZen, Kakinada, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
