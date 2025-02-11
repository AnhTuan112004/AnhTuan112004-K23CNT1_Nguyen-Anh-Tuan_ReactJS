import React from "react";
import HvtCompInfor from "./HvtCompInfor"; // Import component

function App() {
  // Dữ liệu cá nhân
  const personalInfo = {
    name: "Nguyễn Anh Tuấn",
    studentId: "2310900113",
    birthDate: "01/01/2004",
    phone: "0397568858",
    className: "K23CNT1"
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Chào mừng đến với ReactJS của Nguyễn Anh Tuấn K23CNT1 </h1>
      <HvtCompInfor {...personalInfo} /> {/* Truyền dữ liệu vào component */}
    </div>
  );
}

export default App;
