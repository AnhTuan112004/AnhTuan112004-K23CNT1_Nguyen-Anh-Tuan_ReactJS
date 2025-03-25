import React from "react";

// Helper function để format số tiền
const formatAmount = (amount) => {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

function NatAccountList({ accounts }) {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Account List</h2>
      {accounts.length === 0 ? (
        <p>No accounts available.</p>
      ) : (
        <div className="row">
          {accounts.map((acc) => (
            <div key={acc.nat_id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{acc.nat_name}</h5>
                  <p className="card-text">{acc.nat_email}</p>
                  <p className="card-text">
                    <strong>Amount:</strong> {formatAmount(acc.nat_amount)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NatAccountList;
