import React, { useState } from "react";

function NatAccountAdd({ onAdd }) {
  const [nat_name, setNat_Name] = useState("");
  const [nat_email, setNat_Email] = useState("");
  const [nat_amount, setNat_Amount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nat_name || !nat_email || !nat_amount) return;

    const newAccount = {
      nat_id: Date.now(),
      nat_name,
      nat_email,
      nat_amount: parseFloat(nat_amount),
    };

    onAdd(newAccount);
    setNat_Name("");
    setNat_Email("");
    setNat_Amount("");
  };

  return (
    <div>
      <h2>Add New Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={nat_name}
          onChange={(e) => setNat_Name(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={nat_email}
          onChange={(e) => setNat_Email(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={nat_amount}
          onChange={(e) => setNat_Amount(e.target.value)}
        />
        <button type="submit">Add Account</button>
      </form>
    </div>
  );
}

export default NatAccountAdd;