import React from "react";

export const Card = ({ title, children }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "12px",
      margin: "10px 0",
    }}
  >
    <div style={{ fontWeight: "bold", marginBottom: "6px" }}>{title}</div>
    <div>{children}</div>
  </div>
);
