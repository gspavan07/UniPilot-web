import React from "react";
import "./MobileSection.css";

const MobileSection = () => {
  return (
    <section className="mobile-section">
      <div className="bg-blob-center"></div>
      <div className="container">
        <div className="mobile-grid">
          <div className="mobile-visual">
            <div className="blob-pulse"></div>

            <div className="phone-frame">
              <div className="notch">
                <div className="notch-bar"></div>
              </div>

              <div className="phone-screen">
                <div className="screen-header">
                  <div className="user-avatar">AD</div>
                  <span className="material-symbols-outlined text-white-70">
                    notifications_active
                  </span>
                </div>

                <div className="screen-content">
                  <div className="gpa-card">
                    <div className="gpa-label">Cumulative GPA</div>
                    <div className="gpa-value">9.42</div>
                    <div className="gpa-trend">↑ 0.4 from last sem</div>
                  </div>

                  <div className="app-grid">
                    <div className="app-icon bg-primary">
                      <span className="material-symbols-outlined text-3xl mb-3">
                        event_available
                      </span>
                      <div className="icon-label">Attendance</div>
                    </div>
                    <div className="app-icon bg-slate-800">
                      <span className="material-symbols-outlined text-3xl mb-3">
                        account_balance_wallet
                      </span>
                      <div className="icon-label">Fee Central</div>
                    </div>
                  </div>

                  <div className="admit-card">
                    <div className="file-icon">
                      <span className="material-symbols-outlined">badge</span>
                    </div>
                    <div>
                      <div className="admit-title">Digital Identity</div>
                      <div className="admit-sub">Verified & Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notifications */}
            <div className="floating-notif notif-1 floating">
              <div className="notif-icon bg-green-100 text-green-600">
                <span className="material-symbols-outlined text-3xl">
                  check
                </span>
              </div>
              <div>
                <div className="notif-title">Fee Paid</div>
                <div className="notif-sub">Receipt #OK-1928</div>
              </div>
            </div>

            <div className="floating-notif notif-2 floating-delayed">
              <div className="notif-icon bg-primary-10 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  mark_as_unread
                </span>
              </div>
              <div>
                <div className="notif-title">Result Out</div>
                <div className="notif-sub">Semester V results are live</div>
              </div>
            </div>

            <div className="floating-notif notif-3 floating-reverse">
              <div className="notif-icon bg-blue-100 text-blue-600">
                <span className="material-symbols-outlined text-3xl">
                  directions_bus
                </span>
              </div>
              <div>
                <div className="notif-title">Bus Alert</div>
                <div className="notif-sub">Bus #42 at your stop</div>
              </div>
            </div>
          </div>

          <div className="mobile-content">
            <span className="section-badge">Student Centric Experience</span>
            <h2 className="mobile-title">
              Education, <br />
              <span className="text-primary">In Their Pocket.</span>
            </h2>
            <p className="mobile-desc">
              UniPilot's mobile ecosystem bridges the gap between the university
              and the student. Instant alerts, digital IDs, and transparent fee
              portals reduce administrative inquiries by 85%.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <h4 className="feature-head">Instant Push Ecosystem</h4>
                  <p className="feature-sub">
                    Zero-latency notifications for results, fee deadlines, and
                    campus alerts.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">fingerprint</span>
                </div>
                <div>
                  <h4 className="feature-head">Biometric Student ID</h4>
                  <p className="feature-sub">
                    Secure digital credentials for library access, hostel entry,
                    and exam halls.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="store-buttons">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="store-badge" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" />
                        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
