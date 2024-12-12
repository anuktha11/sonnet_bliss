// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartTotal(total);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity = Math.min(existingItem.quantity + 1, 10);
        if (existingItem.quantity === 10) alert("For more than 10, contact us directly.");
        return [...prevItems];
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, cartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
