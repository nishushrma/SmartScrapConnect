import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await axios.post(`${API}/api/auth/login`, formData);
    console.log("Login response:", res.data);
    // Save token, role and user in localStorage
    localStorage.setItem("token", res.data.token);
    const role = res.data?.user?.role;
    if (res.data?.user) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    if (role) {
      localStorage.setItem("role", role);

      // Redirect based on role
      if (role === "seller" || role === "seller&collector") {
        navigate("/seller/dashboard");
      } else if (role === "collector") {
        navigate("/collector/dashboard");
      } else if (role === "admin") {
        navigate("/admin/dashboard");
      }
    } else {
      setError("Login response missing role");
    }

  } catch (err) {
    console.error("Axios error:", err);
    console.error("Response data:", err.response?.data);
    setError(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">♻️ Smart Scrap Connect</div>
          <h2>Welcome Back!</h2>
          <p>Sign in to your account</p>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit} className="auth-form">
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="auth-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

