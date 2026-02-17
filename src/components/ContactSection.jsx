import React from 'react';
import './ContactSection.css';

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
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <h3 className="contact-label">Email Us</h3>
                        <p className="contact-sub">Direct access to our team</p>
                        <a href="mailto:unipilot.ent@gmail.com" className="contact-link">
                            unipilot.ent@gmail.com
                        </a>
                    </div>

                    {/* Support Card */}
                    <div className="contact-card hover-lift">
                        <div className="contact-icon-wrapper">
                            <span className="material-symbols-outlined">headset_mic</span>
                        </div>
                        <h3 className="contact-label">Support</h3>
                        <p className="contact-sub">Dedicated assistance</p>
                        <span className="contact-text">
                            24/7 Student & Staff Support
                        </span>
                    </div>

                    {/* Location Card */}
                    <div className="contact-card hover-lift">
                        <div className="contact-icon-wrapper">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <h3 className="contact-label">Headquarters</h3>
                        <p className="contact-sub">Visit our main office</p>
                        <span className="contact-text">
                            OfZen, Kakinada, India
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
