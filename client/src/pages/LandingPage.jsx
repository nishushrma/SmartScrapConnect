import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <div className="logo">♻️ Smart Scrap Connect</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register" className="btn">Register</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Turning Waste into Worth ♻️</h1>
          <p>
            A digital platform connecting households, offices, and scrap collectors for smarter recycling.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-outline">Get Started</Link>
            <a href="#about" className="btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          Smart Scrap Connect simplifies waste management by linking users with verified scrap collectors.
          We promote fair pricing, easy scheduling, and sustainable recycling for a cleaner environment.
        </p>

        <div className="features">
          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
              alt="pickup"
            />
            <h3>Easy Pickup</h3>
            <p>Schedule waste collection at your convenience.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/814/814513.png"
              alt="pricing"
            />
            <h3>Fair Pricing</h3>
            <p>Get transparent and standardized scrap rates.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="eco"
            />
            <h3>Eco-Friendly</h3>
            <p>Contribute to sustainability and reduce landfills.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <p className="services-intro">Find nearby collectors, chat & schedule pickup</p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>1. Find Local Scrap Collectors</h3>
            <p>
              Easily connect with verified scrap collectors near your location. 
              No need to search far or waste time—our platform shows you the closest collectors ready to pick up your scrap.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📅</div>
            <h3>2. Schedule Pickups</h3>
            <p>
              Plan a convenient time for scrap collection. Our system allows you to schedule pickups without any hassle.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💬</div>
            <h3>3. Real-Time Chat</h3>
            <p>
              Communicate directly with collectors through our in-app chat feature. 
              Ask questions, confirm details, or negotiate rates—all in real-time.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🌱</div>
            <h3>4. Eco-Friendly Waste Management</h3>
            <p>
              Contribute to a greener planet! Our platform encourages proper recycling and disposal of waste.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h3>5. Secure and Transparent Transactions</h3>
            <p>
              Track payments and rewards for scrap materials. SmartScrap Connect ensures all transactions are safe and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>We'd love to hear from you!</h3>
            <p>
              Whether you have questions, suggestions, or need support, feel free to reach out to us.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>Email: support@smartscrapconnect.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>Phone: +91 98765 43210</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🏢</span>
                <span>Address: 123 Green Street, Eco City, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Smart Scrap Connect | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
