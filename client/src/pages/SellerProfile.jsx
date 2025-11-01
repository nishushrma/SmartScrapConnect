import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./SellerDashboard.css";

const SellerProfile = () => {
  const user = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } catch {
      return {};
    }
  }, []);

  return (
    <>
      <div className="profile-page">
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
          <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="Profile" />
        </div>
      </nav>

      <main className="page-wrap">
        <h2 style={{ textAlign: "center", color: "#1b5e20", marginBottom: 12 }}>My Profile</h2>

        <section className="card" style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 16, alignItems: "center" }}>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "3px solid #2e7d32" }} />
            <div>
              <h3 style={{ marginBottom: 6 }}>{user?.name || "-"}</h3>
              <p><strong>Email:</strong> {user?.email || "-"}</p>
              <p><strong>Phone:</strong> {user?.phone || "-"}</p>
              <p><strong>Role:</strong> {user?.role || "-"}</p>
              <p><strong>Location:</strong> {user?.location || "-"}</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Smart Scrap Connect | All Rights Reserved</p>
      </footer>
      </div>
    </>
  );
};

export default SellerProfile;

