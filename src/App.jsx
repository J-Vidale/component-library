import React, { useState } from 'react';
import './App.css';                          // ← Import CSS
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';

const demoUser = { /* … */ };
const demoProduct = { /* … */ };

export default function App() {
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = id => {
    setCart([...cart, id]);
    setShowAlert(true);
  };

  return (
    <div className="app-container">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* User Profile Card */}
        <section className="card">
          <h2 className="card-title">User Profile</h2>
          <UserProfileCard
            user={demoUser}
            showEmail
            showRole
            onEdit={id => alert(`Editing user ${id}`)}
          >
            <p className="text-sm text-gray-500">Member since 2022</p>
          </UserProfileCard>
        </section>

        {/* Product Card */}
        <section className="card">
          <h2 className="card-title">Featured Product</h2>
          <ProductDisplay
            product={demoProduct}
            showDescription
            showStockStatus
            onAddToCart={handleAddToCart}
          />
        </section>
      </div>
    </div>
  );
}




