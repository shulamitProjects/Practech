import React from 'react';
import './CreateCompanyForm.css';

const CreateCompanyForm = () => {
  return (
    <div className="form-container">
      <header className="form-header">
        <h1 className="app-title">Dummy</h1>
        <div className="user-info">
          <span className="user-name">James Ryan</span>
          <span className="user-email">company@email.com</span>
        </div>
      </header>

      <main className="form-main">
        <nav className="steps-navigation">
          <div className="step active">1 Create Company</div>
          <div className="step">2 Add Customers</div>
          <div className="step">3 Create Project</div>
        </nav>

        <section className="form-section">
          <h2>Create Company</h2>
          <p className="form-description">Lorem Ipsum is simply dummy text of the</p>

          <form className="company-form">
            <div className="form-group">
              <label htmlFor="companyPhoto">Company Photo</label>
              <div className="photo-options">
                <button className="photo-option"></button>
                <button className="photo-option"></button>
                <button className="photo-option"></button>
                <button className="photo-option"></button>
                <button className="photo-option"></button>
                <button className="photo-option upload">+</button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="companyName">Company Name*</label>
              <input id="companyName" type="text" placeholder="Enter company name" required />
            </div>

            <div className="form-group">
              <label htmlFor="companyEmail">Company Email*</label>
              <input id="companyEmail" type="email" placeholder="Enter company email" required />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number*</label>
              <div className="phone-input">
                <select className="country-code">
                  <option value="US">🇺🇸</option>
                </select>
                <input id="contactNumber" type="tel" placeholder="Phone" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="framework">Framework*</label>
              <select id="framework" required>
                <option value="SRA">SRA</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="numEmployees">Number of Employees*</label>
              <select id="numEmployees" required>
                <option value="5-10">5-10</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method*</label>
              <select id="paymentMethod" required>
                <option value="Direct Pay">Direct Pay</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="button" className="btn back">&larr; Go Back</button>
              <button type="submit" className="btn save">Save</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="chat-support">
        <button className="chat-button">💬</button>
      </footer>
    </div>
  );
};

export default CreateCompanyForm;
