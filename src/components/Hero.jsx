import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="gradient-blob-1"></div>
      <div className="gradient-blob-2"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge animate-blur-focus">
              <span className="ping-wrapper">
                <span className="ping"></span>
                <span className="dot"></span>
              </span>
              University ERP
            </div>

            <h1 className="hero-title animate-blur-focus delay-100">
              Transform University <br />
              Management.{" "}
              <span className="gradient-text">Empower Excellence.</span>
            </h1>

            <p className="hero-desc animate-blur-focus delay-200">
              One Platform. Complete Control. 137+ Features. <br />
              Powering Many Universities Across India with Enterprise
              Resilience.
            </p>

            <div className="hero-buttons animate-blur-focus delay-300">
              <button className="btn-explore group">
                Schedule Your Demo
                <span className="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </button>
              {/* <button className="btn-specs">
                                View Case Studies
                            </button> */}
            </div>

            {/* Trust Bar */}
            {/* <div className="trust-bar animate-blur-focus delay-400">
                            <p className="trust-label">TRUSTED BY INSTITUTIONS LIKE</p>
                            <div className="logos-scroller">
                                <div className="logo-item">JNTU</div>
                                <div className="logo-item">AU</div>
                                <div className="logo-item">SRM</div>
                                <div className="logo-item">VIT</div>
                                <div className="logo-item">KL</div>
                            </div>
                        </div> */}
          </div>

          <div className="hero-visual">
            <div className="hero-stack">
              {/* Exam Suite Mockup */}
              <div
                className="stack-item stack-item-1"
                aria-label="Exam Controller Dashboard"
              >
                <div className="card-header">
                  <span className="mock-title">Exam Controller</span>
                  <span className="status-badge">Live</span>
                </div>
                <div className="mock-stats">
                  <div className="stat-box">
                    <div className="stat-num">98%</div>
                    <div className="stat-label">Scripts Digitalized</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">48h</div>
                    <div className="stat-label">Result TAT</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">12k</div>
                    <div className="stat-label">Students</div>
                  </div>
                </div>
                <div className="progress-pill">
                  <div className="progress-fill" style={{ width: "85%" }}></div>
                </div>
              </div>

              {/* Financial Mockup */}
              <div
                className="stack-item stack-item-2"
                aria-label="Finance Center Dashboard"
              >
                <div className="card-header">
                  <span className="mock-title">Finance Center</span>
                </div>
                <div className="chart-bars">
                  <div className="bar" style={{ height: "40%" }}></div>
                  <div className="bar" style={{ height: "70%" }}></div>
                  <div className="bar" style={{ height: "100%" }}></div>
                  <div className="bar" style={{ height: "60%" }}></div>
                  <div className="bar" style={{ height: "85%" }}></div>
                </div>
                <div className="mock-stats" style={{ marginTop: "1.5rem" }}>
                  <div className="stat-box">
                    <div className="stat-num">₹4.2Cr</div>
                    <div className="stat-label">Collected</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">92%</div>
                    <div className="stat-label">Efficiency</div>
                  </div>
                </div>
              </div>

              {/* Campus Life Mockup */}
              <div
                className="stack-item stack-item-3"
                aria-label="Campus Operations Dashboard"
              >
                <div className="card-header">
                  <span className="mock-title">Campus Operations</span>
                </div>
                <div className="mock-stats" style={{ marginTop: "0" }}>
                  <div className="stat-box">
                    <div className="stat-num">45</div>
                    <div className="stat-label">Active Routes</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">1.2k</div>
                    <div className="stat-label">Beds Filled</div>
                  </div>
                </div>
              </div>

              {/* Placement Mockup */}
              <div
                className="stack-item stack-item-4"
                aria-label="Career Hub Dashboard"
              >
                <div className="card-header">
                  <span className="mock-title">Career Hub</span>
                </div>
                <div className="stat-box">
                  <div className="stat-num">150+</div>
                  <div className="stat-label">Recruiters Onboarded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
