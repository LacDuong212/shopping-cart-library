import React from "react";

export const Button = ({ label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "8px 16px",
      background: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    {label}
  </button>
);
