import React from "react";

export const InputText = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder || "Nhập dữ liệu..."}
    style={{
      padding: "6px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    }}
  />
);
