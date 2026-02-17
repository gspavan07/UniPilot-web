
import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <p className="brand-desc">
                            The premium operating system for India's leading universities. Intelligent, modular, and built for the future.
                        </p>
                        <div className="brand-social-row">
                            <a href="https://ofzen.in/" target="_blank" rel="noopener noreferrer">
                                <img src={logo} alt="ofzen" className="footer-logo" />
                            </a>
                            <a href="mailto:unipilot.ent@gmail.com" className="social-icon">
                                <span className="material-icons">mail</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Modules</h4>
                        <ul>
                            <li><a href="#">Exam Suite</a></li>
                            <li><a href="#">Finance Hub</a></li>
                            <li><a href="#">Campus Logistics</a></li>
                            <li><a href="#">Career Launchpad</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Cloud Infrastructure</a></li>
                            <li><a href="#">Security Stack</a></li>
                            <li><a href="#">API Gateway</a></li>
                            <li><a href="#">Compliance</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Engineering Blog</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© 2026 Unipilot . An Ofzen Product . All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Architecture</a>
                        <a href="#">Governance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
