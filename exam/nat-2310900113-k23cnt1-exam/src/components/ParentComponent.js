import React, { useState } from "react";
import NatAccountAdd from "./NatAccountAdd";  // Nhớ import component con vào đây

function ParentComponent() {
  // Danh sách tài khoản
  const [accounts, setAccounts] = useState([]);

  // Hàm handleAdd nhận một tài khoản mới và thêm vào danh sách
  const handleAdd = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
  };

  return (
    <div>
      <h1>Account Management</h1>
      {/* Truyền hàm handleAdd vào component con dưới dạng prop onAdd */}
      <NatAccountAdd onAdd={handleAdd} />

      <div>
        <h3>Account List:</h3>
        <ul>
          {accounts.map((account) => (
            <li key={account.nat_id}>{account.nat_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ParentComponent;
