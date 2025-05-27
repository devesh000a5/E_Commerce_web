import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt1.png",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt1.png" },
      { color: 0.2, code: "#000000", image: "/assets/shirt1-p(1).png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt1-p(2).png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt1-p(3).png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt1-p(4).png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 2,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt2.png",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt2.png" },
      { color: 0.2, code: "#000000", image: "/assets/shirt2-p(1).png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt2-p(2).png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt2-p(3).png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt2-p(4).png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 3,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt3.jpg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt3.jpg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt3-p(1).jpg" },
      { color: 0.3, code: "#000000", image: "/assets/shirt3-p(2).jpg" },
      { color: 0.4, code: "#000000", image: "/assets/shirt3-p(3).jpg" },
      { color: 0.5, code: "#000000", image: "/assets/shirt3-p(4).jpg" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 4,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt4.jpg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt4.jpg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt1_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 5,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt5.png",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt5.png" },
      { color: 0.2, code: "#000000", image: "/assets/shirt5-p(1).png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt5-p(2).png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt5-p(3).png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt5-p(4).png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 6,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt6.png",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt6.png" },
      { color: 0.2, code: "#000000", image: "/assets/shirt6_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt6_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt6_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt6_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 7,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt7.jpg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt7.jpg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt1_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 8,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt8.jpg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt8.jpg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt1_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 9,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt9.jpeg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt9.jpeg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt9_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt9_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt9_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt9_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 10,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt10.jeg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt10.jpeg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt10_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt10_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt10_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt10_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 11,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt11.jpg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt11.jpg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt11_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt11_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt11_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt11_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 12,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt12.jpeg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt12.jpeg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt12_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt12_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt12_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt12_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 13,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt13.jpeg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt13.jpeg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt1_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt1_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },
  {
    id: 14,
    name: "Maroon T-shirtMen Regular Fit Checkered Spread Collar Casual Shirt",
    image: "/assets/shirt14.jpg",
    Brand: "Univendor",
    colors: [
      { color: 0.1, code: "#800000", image: "/assets/shirt14.jpg" },
      { color: 0.2, code: "#000000", image: "/assets/shirt14_black.png" },
      { color: 0.3, code: "#000000", image: "/assets/shirt14_black.png" },
      { color: 0.4, code: "#000000", image: "/assets/shirt14_black.png" },
      { color: 0.5, code: "#000000", image: "/assets/shirt14_black.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
    price: 799,
  },

];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { cart, addToCart } = useCart();  
  
  const [preview, setPreview] = useState(product?.image || "");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isInCart, setIsInCart] = useState(false);

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);



  useEffect(() => {
    if (!product) return;
    const inCart = cart.some(item => item.id === product.id);
    setIsInCart(inCart);
  }, [cart, product]);

const handleAddToCart = () => {
  if (selectedColor === null || selectedSize === null) {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); 
    return;
  }

  addToCart({
    ...product,
    selectedColor: product.colors[selectedColor],
    selectedSize,
  });

  setIsInCart(true);
  navigate('/cart');
};



  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <div className="image-section">
          <div className="thumbnail-column">
            <img src="/assets/thumb1.jpg" alt="thumb1" />
            <img src="/assets/thumb2.jpg" alt="thumb2" />
            <img src="/assets/thumb3.jpg" alt="thumb3" />
            <img src="/assets/thumb4.jpg" alt="thumb4" />
            <img src="/assets/thumb5.jpg" alt="thumb5" />
            <img src="/assets/thumb6.jpg" alt="thumb6" />
            <img src="/assets/thumb7.jpg" alt="thumb7" />
          </div>

          <img className="main-image" src={preview} alt={product.name} />
        </div>

        <div className="product-btn">
          {isInCart ? (
            <button className="add-btn" onClick={() => navigate('/cart')}>
              Go to Cart
            </button>
          ) : (
            <button className="add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}

          <button className="add-btn" onClick={() => {/* Buy Now logic here */}}>
            Buy Now
          </button>
        </div>
      </div>
      {showPopup && (
  <div className="popup-message">
    Please select color and size to add product into cart.
  </div>
)}


      <div className="product-info">
        <h4>{product.Brand}</h4>
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>

        <div className="color-options">
          <p>Colors:</p>
          <div className="color-dots">
            {product.colors.map((color, idx) => (
              <img
                key={idx}
                src={color.image}
                alt={`Color ${idx + 1}`}
                className={`color-thumbnail ${selectedColor === idx ? 'active' : ''}`}
                onMouseEnter={() => setPreview(color.image)}
                onClick={() => setSelectedColor(idx)}
              />
            ))}
          </div>
        </div>

        <div className="size-options">
          <p>Size:</p>
          <div className="size-buttons">
            {product.sizes.map((size, i) => (
              <button
                key={i}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="offers-section">
          <p className="offers-heading">Available offers</p>
          <ul className="offers-list">
            <li>
              <strong>Bank Offer</strong> 5% Unlimited Cashback on Flipkart Axis
              Bank Credit Card <span className="tnc">T&C</span>
            </li>
            <li>
              <strong>Bank Offer</strong> 10% instant discount on SBI Credit
              Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above{" "}
              <span className="tnc">T&C</span>
            </li>
            <li>
              <strong>Bank Offer</strong> 10% off up to ₹1,500 on all Axis Bank
              Credit Card (incl. migrated ones) EMI Txns of ₹5,000 and above{" "}
              <span className="tnc">T&C</span>
            </li>
            <li>
              <strong>Special Price</strong> Get extra 56% off (price inclusive
              of cashback/coupon) <span className="tnc">T&C</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
