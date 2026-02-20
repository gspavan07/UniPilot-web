import React from "react";
import "./ChallengeSection.css";
import { FileWarning, Unplug, Hourglass, ChevronsDown } from "lucide-react";

const ChallengeSection = () => {
  return (
    <section className="challenge-section">
      <div className="container">
        <div className="text-center animate-fade-up">
          <span className="section-badge">The Status Quo</span>
          <h2 className="section-title">
            The Problem with Traditional <br />
            <span className="text-primary">University Management.</span>
          </h2>
        </div>

        <div className="challenge-grid">
          <div className="challenge-card animate-fade-up delay-100">
            <div className="card-icon">
              <FileWarning size={48} className="text-red-500" />
            </div>
            <h3 className="card-title">Paper-Based Chaos</h3>
            <p className="card-desc">
              Manual processing of thousands of scripts leads to 15% error rates
              and result delays that frustrate students.
            </p>
            <span className="card-tag tag-red">High Risk</span>
          </div>

          <div className="challenge-card animate-fade-up delay-200">
            <div className="card-icon">
              <Unplug size={48} className="text-orange-500" />
            </div>
            <h3 className="card-title">Disconnected Tools</h3>
            <p className="card-desc">
              Fragmented systems for exams, finance, and campus ops create data
              silos that prevent real-time decision making.
            </p>
            <span className="card-tag tag-orange">Inefficient</span>
          </div>

          <div className="challenge-card animate-fade-up delay-300">
            <div className="card-icon">
              <Hourglass size={48} className="text-yellow-500" />
            </div>
            <h3 className="card-title">Delayed Results</h3>
            <p className="card-desc">
              Months of turn-around time for degree processing stalls student
              careers and impacts university reputation.
            </p>
            <span className="card-tag tag-yellow">Low Trust</span>
          </div>
        </div>

        <div className="solution-arrow">
          <ChevronsDown className="arrow-down" size={48} />
          <p className="solution-text">There is a better way.</p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
