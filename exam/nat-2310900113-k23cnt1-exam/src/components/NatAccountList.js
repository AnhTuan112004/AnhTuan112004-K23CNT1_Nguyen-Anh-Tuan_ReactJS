import React from "react";

function NatAccountList({ accounts }) {
  return (
    <div>
      <h2>Account List</h2>
      <ul className="account-list">
        {accounts.map((acc) => (
          <li key={acc.nat_id}>
            <strong>{acc.nat_name}</strong> <br />
            {acc.nat_email} <br />
            <span>${acc.nat_amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NatAccountList;