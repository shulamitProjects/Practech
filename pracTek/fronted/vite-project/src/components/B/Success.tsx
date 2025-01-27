import React from "react";
import '../B/styles/Success.css';

export default function SuccessPage() {
  return (
    <div className="success-container">
      <div className="progress-bar">
        <div className="step completed">✔ Create Company</div>
        <div className="step completed">✔ Add Customers</div>
        <div className="step completed">✔ Create Project</div>
      </div>

      <div className="success-card">
        <div className="success-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="checkmark"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="9 12 12 15 16 10"></polyline>
          </svg>
        </div>

        <h2 className="success-title">Setup is Successful!</h2>
        <p className="success-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>

        <button className="dashboard-button">Go to Dashboard</button>
      </div>
    </div>
  );
}
