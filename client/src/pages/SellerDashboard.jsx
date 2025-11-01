import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const categories = {
    Paper: [
      { name: "Office Paper", price: 10 },
      { name: "Text Books or Magazine", price: 8 },
      { name: "Cartons/ Cardboard", price: 7 },
      { name: "Notebooks", price: 8 },
      { name: "NewsPaper", price: 10 },
    ],
    Plastics: [
      { name: "PET Bottles", price: 12 },
      { name: "HDPE", price: 20 },
      { name: "Mixed Plastic", price: 6 },
    ],
    Metal: [
      { name: "Aluminium Cans", price: 60 },
      { name: "Iron Scrap", price: 25 },
      { name: "Copper", price: 500 },
    ],
    Electronics: [
      { name: "Mobile Phones (dead)", price: 150 },
      { name: "Keyboards/Mouse", price: 20 },
      { name: "Cables/Wires", price: 50 },
    ],
    Vehicle: [
      { name: "Car Battery", price: 800 },
      { name: "Bike Battery", price: 300 },
    ],
    Furniture: [
      { name: "Wooden Furniture", price: 6 },
      { name: "Steel Furniture", price: 18 },
    ],
    "E-Waste / Solar Panels": [
      { name: "E-waste Mixed", price: 40 },
      { name: "Solar Panel (damaged)", price: 120 },
    ],
  };

  const tabs = Object.keys(categories);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">♻️ Smart Scrap Connect</div>
        <ul className="nav-links">
          <li><Link to="/seller/dashboard">Home</Link></li>
          <li><Link to="/seller/activity">Activity</Link></li>
          <li><Link to="/seller/collectors">Collectors near me</Link></li>
          <li><Link to="/seller/services">Services</Link></li>
          <li><Link to="/seller/rewards">Rewards</Link></li>
          <li><Link to="/seller/help">Help</Link></li>
        </ul>
        <div className="profile">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
            alt="Profile"
          />
          {/* Optional Dropdown */}
          <div className="dropdown">
            <Link to="/seller/profile">View Profile</Link>
            <Link to="#">Settings</Link>
            <Link to="#">Payment Methods</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <h1>Turn Your Trash into Cash! 💸♻️</h1>
          <p>Sell your scrap easily, earn rewards, and help the environment. Ready to start?</p>
          <div className="hero-buttons">
            <a href="#home" className="btn">Sell Scrap Now</a>
            <Link to="/seller/collectors" className="btn">Find Collectors Near Me</Link>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="price-section">
        <div className="price-tabs">
          {tabs.map((t) => (
            <button
              key={t}
              className={`price-tab ${activeTab === t ? "active" : ""}`}
              onClick={() => setActiveTab(t)}
              aria-pressed={activeTab === t}
            >
              {t}
            </button>
          ))}
        </div>
        <hr className="price-divider" />
        <div className="price-grid">
          {categories[activeTab].map((item, idx) => (
            <div key={idx} className="price-card">
              <div className="price-card-icon">📄</div>
              <div className="price-card-title">{item.name}</div>
              <div className="price-card-price">₹ {item.price} <span>/KG</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Sell Scrap in 6 Steps */}
      <section id="home">
        <h2>Sell Your Scrap in 6 Easy Steps</h2>
        <p>Follow these fun and simple steps to earn rewards while recycling:</p>
        <div className="steps-container">

          <div className="step-card">
            <h3>1. Pick Your Scrap 📦</h3>
            <p>Choose from Paper, Plastic, Metal, or E-waste.</p>
          </div>

          <div className="step-card">
            <h3>2. Snap & Share 📸</h3>
            <p>Upload photos and details of your scrap (optional but helpful!).</p>
          </div>

          <div className="step-card">
            <h3>3. Check Rates 💰</h3>
            <p>Get the best price instantly for your scrap.</p>
          </div>

          <div className="step-card">
            <h3>4. Schedule Pickup 🕒</h3>
            <p>Choose a date/time or request immediate pickup from nearby collectors.</p>
          </div>

          <div className="step-card">
            <h3>5. Confirm & Track 🚚</h3>
            <p>See the collector’s profile, ETA, and track your pickup in real-time.</p>
          </div>

          <div className="step-card">
            <h3>6. Earn Rewards 🎉</h3>
            <p>Pay via UPI/Wallet/Bank Transfer and collect points for future perks!</p>
          </div>

        </div>
      </section>

      {/* Quick Actions Section */}
      <section id="quick-actions">
        <h2>Fast Actions, More Rewards! ⚡</h2>
        <div className="actions-container">
          <a href="#" className="action-card">🚀 Request Pickup Now</a>
          <a href="#" className="action-card">📍 Find Nearby Collectors</a>
          <a href="#" className="action-card">💰 Check Scrap Rates</a>
          <a href="#" className="action-card">🏆 My Rewards</a>
          <a href="#" className="action-card">➕ Add Scrap</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Smart Scrap Connect | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default SellerDashboard;
