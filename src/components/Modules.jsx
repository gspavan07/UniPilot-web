import React from "react";
import "./Modules.css";
import {
  UserCheck,
  Scan,
  Upload,
  Shield,
  Building2,
  CreditCard,
  Check,
  Bus,
} from "lucide-react";

const Modules = () => {
  return (
    <section id="features" className="modules-section">
      <div className="container">
        <div className="modules-header animate-fade-up">
          <span className="section-badge">Comprehensive Suite</span>
          <h2 className="section-title">The Modules Powering Excellence</h2>
          <p className="section-desc">
            60+ enterprise features precision-engineered for universities.
          </p>
        </div>

        {/* Feature 1: Smart Exam Suite */}
        <div className="module-grid">
          <div className="module-content order-2">
            <div className="module-badge">Feature 01</div>
            <h3 className="module-title">Smart Exam Suite</h3>
            <p className="module-text">
              From exam scheduling to digital script viewing - handle the entire
              examination lifecycle in one place. Reduce result processing time
              from weeks to days.
            </p>
            <div className="feature-grid">
              <div className="feature-card">
                <UserCheck className="text-primary" size={24} />
                <span className="feature-label">Hall Ticket Generation</span>
              </div>
              <div className="feature-card">
                <Scan className="text-primary" size={24} />
                <span className="feature-label">Digital Script Viewing</span>
              </div>
              <div className="feature-card">
                <Upload className="text-primary" size={24} />
                <span className="feature-label">Result Publishing</span>
              </div>
              <div className="feature-card">
                <Shield className="text-primary" size={24} />
                <span className="feature-label">Reverification Workflow</span>
              </div>
            </div>
          </div>
          <div className="module-visual order-1">
            <div className="visual-card hover-lift">
              <div className="dash-mockup">
                <div className="dash-header">
                  <div className="dash-title">Result Dashboard</div>
                  <div className="dash-status">99.9% Audit Pass</div>
                </div>
                <div className="dash-grid">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="dash-item">
                      <div
                        className="dash-item-bar"
                        style={{
                          height: `${20 + i * 15}%`,
                          opacity: 0.5 + i * 0.1,
                        }}
                      ></div>
                      <div className="dash-item-label">Sem {i}</div>
                    </div>
                  ))}
                </div>
                <div className="dash-footer">
                  <span>Average GPA: 8.4</span>
                  <span>Processing: 1.2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Financial Ecosystem */}
        <div className="module-grid">
          <div className="module-visual">
            <div className="visual-card hover-lift">
              <div className="dash-mockup finance-mock">
                <div className="dash-header">
                  <div className="dash-title">Collections Hub</div>
                </div>
                <div className="finance-summary">
                  <div className="f-stat">
                    <span className="f-label">Total Fee</span>
                    <span className="f-val">₹8.4Cr</span>
                  </div>
                  <div className="f-stat">
                    <span className="f-label">Automated</span>
                    <span className="f-val text-primary">94%</span>
                  </div>
                </div>
                <div className="p-bar-container">
                  <div className="p-bar-fill" style={{ width: "94%" }}></div>
                </div>
                <ul className="f-list">
                  <li>PG Integration Active</li>
                  <li>Instalment Alerts Sent</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="module-content">
            <div className="module-badge">Feature 02</div>
            <h3 className="module-title">Financial Ecosystem</h3>
            <p className="module-text">
              Automated fee collection, payment gateway integration, and
              real-time financial reporting. Track every rupee with precision.
            </p>
            <div className="finance-list">
              <div className="finance-item highlight">
                <Building2 className="text-primary" size={32} />
                <div>
                  <div className="item-title">Unified Fee Ledgers</div>
                  <div className="item-desc">
                    Real-time reconciliation of all payments.
                  </div>
                </div>
              </div>
              <div className="finance-item">
                <CreditCard className="text-primary" size={32} />
                <div>
                  <div className="item-title">Waiver Management</div>
                  <div className="item-desc">
                    Semester-wise scholarship configurations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Integrated Campus Life */}
        <div className="module-grid">
          <div className="module-content order-2">
            <div className="module-badge">Feature 03</div>
            <h3 className="module-title">Integrated Campus Life</h3>
            <p className="module-text">
              Manage hostel allocations, transport logistic, and mess services.
              Complete campus digitalization.
            </p>
            <ul className="check-list">
              <li>
                <span className="check-icon">
                  <Check size={18} />
                </span>{" "}
                Hostel room allocation grid
              </li>
              <li>
                <span className="check-icon">
                  <Check size={18} />
                </span>{" "}
                Transport route map
              </li>
              <li>
                <span className="check-icon">
                  <Check size={18} />
                </span>{" "}
                Fee Management
              </li>
            </ul>
          </div>
          <div className="module-visual order-1">
            <div className="visual-card hover-lift">
              <div className="dash-mockup campus-mock">
                <div className="dash-header">
                  <div className="dash-title">Campus Live</div>
                  <div className="pulse-dot"></div>
                </div>
                <div className="campus-indicator">
                  <div className="c-box">
                    <span className="c-label">Hostel</span>
                    <span className="c-val">88%</span>
                  </div>
                  <div className="c-box">
                    <span className="c-label">Routes</span>
                    <span className="c-val">42</span>
                  </div>
                </div>
                <div className="alert-strip">
                  <Bus className="text-primary" size={18} />
                  Bus #42 at Campus Gate A
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Career Launchpad */}
        <div className="module-grid">
          <div className="module-visual">
            <div className="visual-card hover-lift">
              <div className="dash-mockup career-mock">
                <div className="dash-header">
                  <div className="dash-title">Placement Suite</div>
                  <span className="tag-live">Hiring Now</span>
                </div>
                <div className="placement-stats">
                  <div className="p-stat">
                    <span className="p-num">150+</span>
                    <span className="p-lab">Recruiters</span>
                  </div>
                  <div className="p-stat">
                    <span className="p-num">85%</span>
                    <span className="p-lab">Placed</span>
                  </div>
                </div>
                <div className="hiring-list">
                  <div className="h-item">Google • Drive Scheduled</div>
                  <div className="h-item">Microsoft • Shortlisting</div>
                </div>
              </div>
            </div>
          </div>
          <div className="module-content">
            <div className="module-badge">Feature 04</div>
            <h3 className="module-title">Career Launchpad</h3>
            <p className="module-text">
              Bridge the gap between students and careers. Maximize placement
              rates with automated drive management and eligibility filters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
