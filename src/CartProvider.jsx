import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (product) => setItems([...items, product]);
  const updateItem = (index, product) => {
    const updated = [...items];
    updated[index] = product;
    setItems(updated);
  };
  const removeItem = (index) =>
    setItems(items.filter((_, i) => i !== index));

  return (
    <CartContext.Provider value={{ items, addItem, updateItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
