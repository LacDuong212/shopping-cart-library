import React from "react";
import { Button } from "./Button";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          margin: "100px auto",
          width: "300px",
          borderRadius: "8px",
        }}
      >
        {children}
        <Button label="Đóng" onClick={onClose} />
      </div>
    </div>
  );
};
