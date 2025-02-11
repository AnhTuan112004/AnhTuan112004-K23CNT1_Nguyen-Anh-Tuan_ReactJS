import React from "react";

function HvtCompInfor({ name, studentId, birthDate, phone, className }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px", border: "2px solid #333", borderRadius: "10px", width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <h2>Thông Tin Cá Nhân</h2>
      <p><strong>Họ và tên:</strong> {name}</p>
      <p><strong>Mã sinh viên:</strong> {studentId}</p>
      <p><strong>Ngày sinh:</strong> {birthDate}</p>
      <p><strong>Điện thoại:</strong> {phone}</p>
      <p><strong>Tên lớp:</strong> {className}</p>
    </div>
  );
}

export default HvtCompInfor;
