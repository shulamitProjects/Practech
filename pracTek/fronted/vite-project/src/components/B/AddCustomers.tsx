import React from "react";
import '../B/styles/SingUp.css';

export default function AddCustomerForm() {
  return (
    <div className="form-container">
      <div className="progress-bar">
        <div className="step completed">✔ Create Company</div>
        <div className="step active">2 Add Customers</div>
        <div className="step">3 Create Project</div>
      </div>

      <div className="form-card">
        <h2 className="form-title">Add New Customer</h2>
        <p className="form-subtitle">
          Add agencies/individual clients to your list
        </p>

        <form className="form-content">
          <div className="upload-section">
            <div className="photo-placeholder">👤</div>
            <label className="upload-label">
              <input type="file" className="upload-input" />
              Click to upload or drag and drop <br />
              <span>(SVG, PNG, or GIF - max. 800×400px)</span>
            </label>
          </div>

          <div className="input-group">
            <label>
              First name*
              <input type="text" placeholder="Enter first name" required />
            </label>
            <label>
              Last name*
              <input type="text" placeholder="Enter last name" required />
            </label>
          </div>

          <label>
            Email*
            <input type="email" placeholder="Enter email" required />
          </label>

          <label>
            Contact number*
            <div className="phone-input">
              <select className="country-code">
                <option value="US">🇺🇸</option>
                <option value="IL">🇮🇱</option>
                <option value="GB">🇬🇧</option>
              </select>
              <input type="text" placeholder="Phone" required />
            </div>
          </label>

          <div className="button-group">
            <button type="button" className="back-button">
              ← Go Back
            </button>
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
