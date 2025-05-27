// pages/Cart.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [hoveredImage] = useState({});
  const [quantities, setQuantities] = useState({});
  const [price, setPrice] = useState(799);

  const updateTotalPrice = (newQuantities) => {
    let total = 0;
    cart.forEach((item) => {
      const qty = newQuantities[item.id] || 1;
      total += item.price * qty;
    });
    setPrice(total);
  };

  // Quantity change handler
  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => {
      const newQty = Math.max((prev[id] || 1) + change, 1);
      const updatedQuantities = { ...prev, [id]: newQty };

      // Update total price
      updateTotalPrice(updatedQuantities);

      return updatedQuantities;
    });
  };

  return (
    <div className="cart-container">
      
      <div className="left-container">
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Image and Quantity */}
              <div className="cart-image-container">
                <img
                  src={hoveredImage[item.id] || item.image}
                  alt={item.name}
                  className="cart-image"
                />
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>
                    -
                  </button>
                  <span>{quantities[item.id] || 1}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </button>
                </div>
              </div>

           
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Brand: {item.brand || "No brand"}</p>
                <p>Selected Size: {item.selectedSize}</p>
                <p>
                  Selected Color:{" "}
                  <span
                    className="color-box"
                    style={{ backgroundColor: item.selectedColor?.hex }}
                  ></span>
                </p>
                <h2>
                  Price: ₹{(item.price * (quantities[item.id] || 1)).toFixed(2)}
                </h2>

                <div className="action-buttons">
                  <button className="buy-btn">Save For Later</button>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

  

      <div className="right-container">
        <div className="price-details">
          <h3>Price Details</h3>
          <div>
            <span>Price (1 item)</span>
            <span>₹1,499</span>
          </div>
          <div>
            <span>Discount</span>
            <span className="green">− ₹1,193</span>
          </div>
          <div>
            <span>Platform Fee</span>
            <span>₹3</span>
          </div>
          <div>
            <span>Delivery Charges</span>
            <span className="green">Free</span>
          </div>
          <hr />
          <div className="total-amount">
            <span>Total Amount</span>

            <span>₹{price}</span>
          </div>
          <p className="saving-text">You will save ₹1,190 on this order</p>
        </div>

        <p className="safe-text">
          Safe and Secure Payments. Easy returns.100% Authentic products.
        </p>
        <button className="proceed-btn">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default Cart;
