import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';

import ProductModal from '../components/ProductModal';

const products = [
  { id: 1, name: 'T-shirt', image: '/assets/shirt1.png'},
   
  { id: 2, name: 'T-shirt', image: '/assets/shirt2.png' },
  { id: 3, name: 'T-shirt', image: '/assets/shirt3.jpg' },
  { id: 4, name: 'T-shirt', image: '/assets/shirt4.jpg' },
  { id: 5, name: 'T-shirt', image: '/assets/shirt5.png' },
  { id: 6, name: 'T-shirt', image: '/assets/shirt6.png' },
  { id: 7, name: 'T-shirt', image: '/assets/shirt7.jpg' },
  { id: 8, name: 'T-shirt', image: '/assets/shirt8.jpg' },
  
    { id: 9, name: 'Cap', image: '/assets/shirt9.jpeg' },
    { id: 10, name: 'Cap', image: '/assets/shirt10.jpeg' },
    { id: 11, name: 'Cap', image: '/assets/shirt11.jpg' },
    { id: 12, name: 'Cap', image: '/assets/shirt12.jpeg' },
    { id: 13, name: 'Cap', image: '/assets/shirt13.jpeg' },
    { id: 14, name: 'Cap', image: '/assets/shirt14.jpg' },

];

const HomePage = () => {
    const navigate = useNavigate();
   const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductModal = (product) => setSelectedProduct(product);
  const closeProductModal = () => setSelectedProduct(null);
  return (
    <section className="home-content">
    <div className="offer-marquee">
      <p>🔥 Limited Time Offer: Get up to 50% OFF on Exclusive Styles! 🛍️</p>
    </div>
      <div className="product-slider">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <button onClick={() => navigate(`/product/${product.id}`)}>Select</button>

          </div>
        ))}
      </div>
       {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProductModal}
          addToCart={addToCart}
        />
      )}
    </section>
  );
};

export default HomePage;
