// components/CartIcon.jsx
import React from 'react';

const CartIcon = ({ count }) => {
  return (
    <div className="cart-icon">
      <span style={{ fontSize: '1.5rem' }}>🛒</span>
      {count > 0 && (
        <span className="cart-count">{count}</span>
      )}
    </div>
  );
};

export default CartIcon;