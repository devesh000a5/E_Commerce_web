import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("guest_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("guest_cart", JSON.stringify(cart));
  }, [cart]);

  
  const addToCart = (item) => {
    setCart((prevCart) => {
      const exists = prevCart.some((i) => i.id === item.id);
      return exists ? prevCart : [...prevCart, item];
    });
  };


  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  
  const mergeCart = (userCart = []) => {
    const merged = [...cart];

    userCart.forEach((serverItem) => {
      if (!merged.some((item) => item.id === serverItem.id)) {
        merged.push(serverItem);
      }
    });

    setCart(merged);
    localStorage.setItem("guest_cart", JSON.stringify(merged));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, mergeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
