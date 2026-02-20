import React, { useState } from "react";
import "./InteractiveDemo.css";
import examImg from "../assets/examsection.png";
import FeeManagement from "../assets/FeeManagement.png";
import CampusOps from "../assets/Transport.png";
import CareerHub from "../assets/CareerHub.png";
import {
  FileText,
  CreditCard,
  Box,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState("exam");

  const tabs = [
    { id: "exam", label: "Exam Lifecycle", icon: FileText },
    { id: "finance", label: "Fee Management", icon: CreditCard },
    { id: "campus", label: "Campus Ops", icon: Box },
    { id: "career", label: "Career Hub", icon: Briefcase },
  ];

  const content = {
    exam: {
      title: "End-to-End Exam Management",
      desc: "Automate everything from paper setting to digital evaluation. Our 100% secure integrity engine ensures zero leaks and zero errors.",
      stats: [
        "99% Faster Results",
        "Audit-Ready Logs",
        "Exam Lifecycle Automation",
      ],
      image: examImg,
      overlayText: "Exam Dashboard Preview",
    },
    finance: {
      title: "Financial & Fee Ecosystem",
      desc: "Consolidate multiple fee heads, scholarships, and waivers into a single dashboard. Automated bank reconciliation for thousands of transactions.",
      stats: [
        "Multi-Category Fee Structure",
        "90% Less Manual Entry",
        "Real-time Ledgers",
      ],
      image: FeeManagement,
      overlayText: "Finance Center Preview",
    },
    campus: {
      title: "Unified Campus Experience",
      desc: "Smart hostel room allocation, real-time bus tracking, and digital gate pass management. One app for every campus need.",
      stats: ["Transport Management", "Student App", "Campus Management"],
      image: CampusOps,
      overlayText: "Campus Live Preview",
    },
    career: {
      title: "Strategic Placement Hub",
      desc: "Manage corporate relationships and student placements with precision. Smart eligibility filters ensure only qualified students apply.",
      stats: [
        "Placement Analysis",
        "Automated Filter",
        "Eligibility-Based Shortlisting",
      ],
      image: CareerHub,
      overlayText: "Career Hub Preview",
    },
  };

  return (
    <section className="interactive-demo">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="container">
        <div className="demo-wrapper glass-morphism">
          <div className="demo-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`demo-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="demo-content">
            <div className="demo-text">
              <h3 className="demo-title">{content[activeTab].title}</h3>
              <p className="demo-desc">{content[activeTab].desc}</p>
              <div className="demo-stats">
                {content[activeTab].stats.map((stat, i) => (
                  <div key={i} className="demo-stat-item">
                    <CheckCircle2 className="text-primary" size={18} />
                    {stat}
                  </div>
                ))}
              </div>
              {/* <button className="btn-primary mt-8">Explore Full Feature List</button> */}
            </div>
            <div className="demo-visual-main">
              <div className="visual-window">
                <div className="window-header">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="url-bar">unipilot.cloud/dashboard</div>
                </div>
                <div className="window-body">
                  <div className="image-container">
                    <img
                      src={content[activeTab].image}
                      alt={activeTab}
                      className="img-fluid demo-preview-img"
                    />
                    {content[activeTab].overlayText && (
                      <div className="image-overlay">
                        <span>{content[activeTab].overlayText}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
