import React from "react";
import '../B/styles/SingUp.css';

import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

export default function SignupPage() {
  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        {/* Left Section */}
        <div className="signup-left">
          <div className="signup-left-content">
            <div className="logo">
              <div className="icon">⚡</div>
              <h1>Dummy</h1>
            </div>

            <img
              src="https://via.placeholder.com/400x300" // Replace with actual image source
              alt="Dashboard"
              className="dashboard-image"
            />

            <h2>Easy to use Dashboard</h2>
            <p>
              Let’s see what we have new, check it out! So maybe write here
              something more hehe.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="signup-right">
          <h2>Create your account 👋</h2>
          <p>It’s free and easy</p>

          <form className="signup-form">
            <input placeholder="Enter your name" className="input" />
            <input placeholder="Type your e-mail or phone number" className="input" />
            <input placeholder="Type your password" type="password" className="input" />
            <p className="password-note">Must be 8 characters at least</p>

            <div className="switch-container">
              <span>Sign up as company</span>
              <input type="checkbox" className="switch" />
            </div>

            <div className="checkbox-container">
              <input type="checkbox" />
              <span>
                By creating an account means you agree to the
                <a href="#"> Terms and Conditions</a>,
                and our
                <a href="#"> Privacy Policy</a>.
              </span>
            </div>

            <button className="register-button">Register</button>
          </form>

          <div className="alternative-text">or do it via other accounts</div>

          <div className="social-buttons">
            <button className="social-button">
              <FaGoogle size={20} />
            </button>
            <button className="social-button">
              <FaApple size={20} />
            </button>
            <button className="social-button">
              <FaFacebook size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}