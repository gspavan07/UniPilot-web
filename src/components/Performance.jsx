// import React from 'react';
import "./Performance.css";
import { Lock, Infinity, Building2 } from "lucide-react";

const Performance = () => {
  return (
    <section id="security" className="performance-section">
      <div className="bg-radial"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="section-badge text-white opacity-60">
            Fail-Safe Infrastructure
          </span>
          <h2 className="perf-title text-white">
            The Security & Resilience Engine
          </h2>
          <p className="section-desc text-white opacity-70">
            UniPilot is built with a zero-trust architecture, ensuring that your
            institutional integrity is never compromised.
          </p>
        </div>

        <div className="security-grid">
          <div className="security-card animate-fade-up delay-100">
            <div className="s-icon">
              <Lock size={32} className="text-primary" />
            </div>
            <h3 className="s-title">End-to-End Encryption</h3>
            <p className="s-desc">
              All data—at rest and in transit—is encrypted with AES-256
              standards, meeting global banking security protocols.
            </p>
          </div>

          <div className="security-card animate-fade-up delay-200">
            <div className="s-icon">
              <Infinity size={32} className="text-primary" />
            </div>
            <h3 className="s-title">Disaster Recovery</h3>
            <p className="s-desc">
              Multi-zone redundancy ensures that even in the case of a major
              data center outage, your university stays online.
            </p>
          </div>

          <div className="security-card animate-fade-up delay-300">
            <div className="s-icon">
              <Building2 size={32} className="text-primary" />
            </div>
            <h3 className="s-title">Data Sovereignty</h3>
            <p className="s-desc">
              Choose between local on-premise hosting or secure sovereign cloud
              instances to comply with national regulations.
            </p>
          </div>
        </div>

        <div className="stats-strip mt-20">
          <div className="s-stat">
            <span className="s-val">15ms</span>
            <span className="s-lab">Average Latency</span>
          </div>
          <div className="s-stat highlight">
            <span className="s-val">Zero</span>
            <span className="s-lab">Security Breaches</span>
          </div>
          <div className="s-stat">
            <span className="s-val">24/7</span>
            <span className="s-lab">SOC Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
