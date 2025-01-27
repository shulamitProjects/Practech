import React from "react";

export default function AddedCustomers() {
  const customers = Array(10).fill({
    name: "James Ryan",
    email: "james@email.com",
    contact: "+1 234 567 890",
    date: "Jan 24, 2025",
    status: "Active",
  });

  return (
    <div className="added-customers-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="step completed">✔ Create Company</div>
        <div className="step active">2 Add Customers</div>
        <div className="step">3 Create Project</div>
      </div>

      {/* Customers Table */}
      <div className="customers-table">
        <div className="table-header">
          <h2>Customers</h2>
          <button className="add-customers-button">+ Add Customers</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Added Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>
                  <div className="customer-info">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Customer"
                      className="customer-avatar"
                    />
                    {customer.name}
                  </div>
                </td>
                <td>{customer.email}</td>
                <td>{customer.contact}</td>
                <td>{customer.date}</td>
                <td>
                  <span className="status-badge active">{customer.status}</span>
                </td>
                <td>
                  <button className="menu-button">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="go-back-button">← Go Back</button>
        <button className="next-button">Next →</button>
      </div>
    </div>
  );
}