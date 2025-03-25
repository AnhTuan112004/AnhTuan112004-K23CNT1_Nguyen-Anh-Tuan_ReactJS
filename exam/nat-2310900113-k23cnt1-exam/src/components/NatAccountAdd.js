// src/components/NatAccountAdd.js

import React, { useState } from "react";

function NatAccountAdd({ onAdd }) {
  const [nat_name, setNat_Name] = useState("");  // Tên tài khoản
  const [nat_email, setNat_Email] = useState("");  // Email tài khoản
  const [nat_amount, setNat_Amount] = useState("");  // Số tiền trong tài khoản

  // Hàm này xử lý khi người dùng submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra các trường nhập liệu xem có bị trống không
    if (!nat_name || !nat_email || !nat_amount) {
      console.error("All fields are required!");  // In ra lỗi nếu có trường bị trống
      return;
    }

    // Tạo một đối tượng tài khoản mới từ các giá trị đã nhập
    const newAccount = {
      nat_id: Date.now(),  // Sử dụng thời gian hiện tại để tạo id duy nhất
      nat_name,
      nat_email,
      nat_amount: parseFloat(nat_amount),  // Chuyển đổi số tiền thành số thực
    };

    // Kiểm tra xem onAdd có phải là hàm hay không
    if (typeof onAdd === "function") {
      onAdd(newAccount);  // Gọi hàm onAdd để thêm tài khoản mới
    } else {
      console.error("onAdd is not a function");
    }

    // Reset lại form sau khi thêm tài khoản
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
          onChange={(e) => setNat_Name(e.target.value)}  // Cập nhật tên tài khoản
        />
        <input
          type="email"
          placeholder="Email"
          value={nat_email}
          onChange={(e) => setNat_Email(e.target.value)}  // Cập nhật email tài khoản
        />
        <input
          type="number"
          placeholder="Amount"
          value={nat_amount}
          onChange={(e) => setNat_Amount(e.target.value)}  // Cập nhật số tiền tài khoản
        />
        <button type="submit">Add Account</button>  {/* Nút submit form */}
      </form>
    </div>
  );
}

export default NatAccountAdd;
