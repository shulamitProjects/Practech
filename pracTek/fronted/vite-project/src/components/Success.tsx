import React from "react";
import "./style/Success.css"; // Import the CSS file

const Success: React.FC = () => {
  return (
    <div className="setup-success">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <span className="logo-text">Dummy</span>
        </div>
        <div className="user-info">
          <div className="user-avatar">JR</div>
          <div className="user-details">
            <span className="user-name">James Ryan</span>
            <span className="user-email">company@email.com</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="card">
          <div className="icon-container">
            <img src="/success-icon.png" alt="Success" className="success-icon" />
          </div>
          <h2 className="title">Setup is Successful!</h2>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
          <button className="dashboard-button">Go to Dashboard</button>
        </div>
      </main>

      {/* Floating Chat Icon */}
      <div className="chat-icon">
        <img src="/chat-icon.png" alt="Chat Icon" />
      </div>
    </div>
  );
};

export default Success;
