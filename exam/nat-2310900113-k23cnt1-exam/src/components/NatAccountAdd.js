import React, { useState } from "react";

function NatAccountAdd({ onAdd }) {
  const [nat_name, setNat_Name] = useState("");  // Name
  const [nat_email, setNat_Email] = useState("");  // Email
  const [nat_amount, setNat_Amount] = useState("");  // Amount
  const [error, setError] = useState("");  // Error message

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Validate required fields
    if (!nat_name || !nat_email || !nat_amount) {
      setError("All fields are required!");  // Display error message
      return;
    }

    // Check if amount is a valid number
    if (isNaN(nat_amount) || parseFloat(nat_amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    // Create new account object
    const newAccount = {
      nat_id: Date.now(),
      nat_name,
      nat_email,
      nat_amount: parseFloat(nat_amount),  // Convert amount to float
    };

    // Call onAdd function if provided
    if (typeof onAdd === "function") {
      onAdd(newAccount);
    } else {
      console.error("onAdd is not a function");
    }

    // Reset form fields after submission
    setNat_Name("");
    setNat_Email("");
    setNat_Amount("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Account</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}  {/* Display error message */}
        
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter Name"
            value={nat_name}
            onChange={(e) => setNat_Name(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter Email"
            value={nat_email}
            onChange={(e) => setNat_Email(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            placeholder="Enter Amount"
            value={nat_amount}
            onChange={(e) => setNat_Amount(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Add Account</button>
      </form>
    </div>
  );
}

export default NatAccountAdd;
