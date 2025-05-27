// components/ProductModal.jsx
import React, { useState } from 'react';


const ProductModal = ({ product, onClose, addToCart }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Image Section */}
        <div className="modal-image">
          <img
            src={hoveredImage || product.image}
            alt={product.name}
            className="zoomed-image"
          />
        </div>

        {/* Details Section */}
        <div className="modal-details">
          <h2>{product.name}</h2>

          <div className="modal-colors">
            <p>Colors:</p>
            <div className="color-swatches">
              {product.colors?.map((color, i) => (
                <span
                  key={i}
                  className="color-dot"
                  style={{ backgroundColor: color.hex }}
                  onMouseEnter={() => setHoveredImage(color.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                ></span>
              ))}
            </div>
          </div>

          <div className="modal-sizes">
            <p>Sizes:</p>
            <div className="size-options">
              {product.sizes?.map((size, i) => (
                <button key={i} className="size-btn">{size}</button>
              ))}
            </div>
          </div>

          <button className="add-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
