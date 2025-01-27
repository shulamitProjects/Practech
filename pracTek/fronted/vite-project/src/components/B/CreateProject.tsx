import React from "react";
import '../styles/CreateProject.css';

export default function CreateProjectForm() {
  return (
    <div className="form-container">
      <div className="progress-bar">
        <div className="step completed">✔ Create Company</div>
        <div className="step completed">✔ Add Customers</div>
        <div className="step active">3 Create Project</div>
      </div>

      <div className="form-card">
        <h2 className="form-title">Create a new project</h2>
        <p className="form-subtitle">
          Lorem Ipsum is simply dummy text of the
        </p>

        <form className="form-content">
          <label className="photo-section">
            <span>Project Photo*</span>
            <div className="photo-list">
              <div className="photo-item active"></div>
              <div className="photo-item"></div>
              <div className="photo-item"></div>
              <div className="photo-item"></div>
              <div className="photo-item add-icon">+</div>
            </div>
          </label>

          <label>
            Framework*
            <select required>
              <option value="SRA">SRA</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
            </select>
          </label>

          <label>
            Project name*
            <input type="text" placeholder="Enter project name" required />
          </label>

          <label>
            Select project type*
            <select required>
              <option value="">Select</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
            </select>
          </label>

          <label>
            Project Duration*
            <input type="text" placeholder="1/24/2025 - 1/24/2025" readOnly />
          </label>

          <div className="button-group">
            <button type="button" className="back-button">
              ← Go Back
            </button>
            <button type="submit" className="next-button">
              Next →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}