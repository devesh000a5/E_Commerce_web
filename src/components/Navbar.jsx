import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user_info");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_info");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
        <span>Univendor</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-btn">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-btn">
          About
        </NavLink>
        <NavLink to="/products" className="nav-btn">
          Products
        </NavLink>
        <NavLink to="/cart" className="nav-btn cart-wrapper">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cart.length}</span>
        </NavLink>
      </div>
      <div className="nav-buttons">
        {user ? (
          <>
            <span className="user-name">Hi, {user.name}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-btn">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-btn">
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
