import React, { useState } from "react";
import NatAccountAdd from "./components/NatAccountAdd";
import NatAccountList from "./components/NatAccountList";
import "./styles.css"; // Import file CSS vào ứng dụng
import ParentComponent from "./components/ParentComponent";

function NatApp() {
  const [nat_Accounts, setNat_Accounts] = useState([
    { nat_id: 1, nat_name: "Nguyen Anh Tuấn", nat_email: "a@example.com", nat_amount: 1000 },
    { nat_id: 2, nat_name: "Tran Thi Ngân", nat_email: "b@example.com", nat_amount: 2000 },
    { nat_id: 3, nat_name: "Le Van Sơn", nat_email: "c@example.com", nat_amount: 3000 },
  ]);

  const addAccount = (newAccount) => {
    setNat_Accounts([...nat_Accounts, newAccount]);
  };

  return (
    <div>
      <h1>Nat Account Management</h1>
      <NatAccountAdd addAccount={addAccount}/>
      <NatAccountList accounts={nat_Accounts} />
      <ParentComponent/>
    </div>
  );
}

export default NatApp;