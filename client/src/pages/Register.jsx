import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Add this import
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate(); // ✅ For redirect after register

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: "",
    userType: "seller"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    try {
      // ✅ Send POST request to backend
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.userType,
        password: formData.password,
        location: formData.location
      });

      console.log(res.data.message);
      alert("Registered successfully! You can now login.");

      // Redirect to login page after successful register
      navigate("/login");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        password: "",
        confirmPassword: "",
        userType: "seller"
      });
    } catch (err) {
      console.error("Register error:", err);
      const serverMsg = err.response?.data?.message;
      setError(serverMsg || err.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">♻️ Smart Scrap Connect</div>
          <h2>Create Account</h2>
          <p>Join us and start recycling smartly</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Form fields same as before */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location (City or Pincode)</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your city or pincode"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType">I am a:</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="seller">Scrap Seller</option>
              <option value="collector">Scrap Collector</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          {error && <p className="error-msg">{error}</p>}

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              I agree to the{" "}
              <Link to="/terms" className="terms-link">
                Terms & Conditions
              </Link>
            </label>
          </div>

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
