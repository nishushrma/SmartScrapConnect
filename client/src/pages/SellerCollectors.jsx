import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SellerDashboard.css";

const SellerCollectors = () => {
  const [collectors, setCollectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [activeChat, setActiveChat] = useState(null); // collector object
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const fetchCollectors = async (query = "") => {
    try {
      setLoading(true);
      setError("");
      const params = query ? { location: query } : {};
      const res = await axios.get("http://localhost:5000/api/collectors", { params });
      setCollectors(res.data?.data || []);
    } catch (err) {
      console.error("Fetch collectors error:", err);
      setError(err.response?.data?.message || "Failed to load collectors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollectors("");
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, activeChat]);

  const openChat = (collector) => {
    setActiveChat(collector);
    setChatMessages([
      { by: "system", text: `You are now chatting with ${collector.name}.` },
      { by: "collector", text: "Hi! Please share your pickup details. I will confirm availability soon." },
      { by: "system", text: "For safety, contact numbers are hidden. You can share your mobile number here when you're ready." },
    ]);
    setChatInput("");
  };

  const closeChat = () => {
    setActiveChat(null);
    setChatMessages([]);
    setChatInput("");
  };

  const sendChat = (text) => {
    const t = (text ?? chatInput).trim();
    if (!t) return;
    setChatMessages((prev) => [...prev, { by: "you", text: t }]);
    setChatInput("");
  };

  const shareMobile = () => {
    const mobile = prompt("Enter your mobile number (10 digits)") || "";
    const clean = mobile.replace(/\D/g, "");
    if (clean.length !== 10) {
      setChatMessages((prev) => [
        ...prev,
        { by: "system", text: "Please enter a valid 10-digit mobile number." },
      ]);
      return;
    }
    setChatMessages((prev) => [
      ...prev,
      { by: "you", text: `My mobile number is ${clean}. Please contact me via this chat.` },
      { by: "collector", text: "Thanks! I have noted your number. Please share pickup address and preferred time." },
    ]);
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelected = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setChatMessages((prev) => [...prev, { by: "system", text: "Please select an image file." }]);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setChatMessages((prev) => [
        ...prev,
        { by: "you", image: dataUrl, text: "" },
        { by: "collector", text: "Image received. Please share pickup address and preferred time." },
      ]);
    };
    reader.readAsDataURL(file);
    // clear input so same file selection triggers change next time
    e.target.value = "";
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">♻️ Smart Scrap Connect</div>
        <ul className="nav-links">
          <li><Link to="/seller/dashboard">Home</Link></li>
          <li><Link to="/seller/activity">Activity</Link></li>
          <li><Link to="/seller/collectors" className="active">Collectors near me</Link></li>
          <li><Link to="/seller/services">Services</Link></li>
          <li><Link to="/seller/rewards">Rewards</Link></li>
          <li><Link to="/seller/help">Help</Link></li>
        </ul>
        <div className="profile">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="Profile" />
          <div className="dropdown">
            <Link to="/seller/profile">View Profile</Link>
            <Link to="#">Settings</Link>
            <Link to="#">Payment Methods</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </nav>

      <main className="page-wrap">
        <h2 style={{ textAlign: "center", color: "#1b5e20", marginBottom: 6 }}>Collectors Near You</h2>

        <div className="toolbar" style={{ justifyContent: "center" }}>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by city, pincode or name"
            style={{ minWidth: 260 }}
          />
          <button className="btn" onClick={() => fetchCollectors(q)}>Search</button>
          <button className="btn secondary" onClick={() => { setQ(""); fetchCollectors(""); }}>Clear</button>
        </div>

        {error && <p className="error-msg" style={{ textAlign: "center" }}>{error}</p>}
        {loading && <p style={{ textAlign: "center" }}>Loading collectors...</p>}

        {!loading && !error && (
          <section className="services-cards">
            {collectors.length === 0 && (
              <p style={{ textAlign: "center", width: "100%" }}>No collectors found.</p>
            )}
            {collectors.map((c, idx) => (
              <div key={idx} className="service-card" aria-label={`Collector ${c.name}`}>
                <div className="service-icon">🧹</div>
                <h3>{c.name}</h3>
                <p><strong>Location:</strong> {c.location}</p>
                {/* Contact details are intentionally hidden; use chat to communicate */}
                <button className="btn" style={{ marginTop: 10 }} onClick={() => openChat(c)}>Request Pickup</button>
              </div>
            ))}
          </section>
        )}
      </main>

      {activeChat && (
        <div
          role="dialog"
          aria-label="Chat box"
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            width: 360,
            maxWidth: "95%",
            background: "#ffffff",
            borderRadius: 12,
            boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div style={{ background: "#2e7d32", color: "#fff", padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Chat with {activeChat.name}</div>
              <div style={{ fontSize: 12, opacity: 0.9 }}>Location: {activeChat.location}</div>
            </div>
            <button onClick={closeChat} aria-label="Close chat" style={{ background: "transparent", color: "#fff", border: 0, fontSize: 18, cursor: "pointer" }}>✕</button>
          </div>

          <div style={{ padding: 12, height: 320, overflowY: "auto", background: "#f7faf7" }}>
            {chatMessages.map((m, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: m.by === "you" ? "flex-end" : "flex-start",
                marginBottom: 8,
              }}>
                <div style={{
                  maxWidth: "75%",
                  padding: "8px 10px",
                  borderRadius: 10,
                  background: m.by === "you" ? "#d1f7c4" : m.by === "collector" ? "#fff" : "#e0f2f1",
                  border: "1px solid #e0e0e0",
                  fontSize: 14,
                }}>
                  <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 2 }}>{m.by}</div>
                  {m.image ? (
                    <img src={m.image} alt="uploaded" style={{ maxWidth: "100%", borderRadius: 8, display: "block" }} />
                  ) : (
                    <div>{m.text}</div>
                  )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div style={{ padding: 10, borderTop: "1px solid #e0e0e0", background: "#fff" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelected}
                style={{ display: "none" }}
              />
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
                style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: "1px solid #ccc" }}
                onKeyDown={(e) => { if (e.key === 'Enter') sendChat(); }}
              />
              <button className="btn secondary" onClick={handleAttachClick}>Attach</button>
              <button className="btn" onClick={() => sendChat()}>Send</button>
            </div>
            <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button className="btn secondary" onClick={shareMobile}>Share mobile number</button>
              <button className="btn secondary" onClick={() => sendChat("Pickup address: <your address>, Preferred time: <time>")}>Share pickup details</button>
            </div>
          </div>
        </div>
      )}

      <footer>
        <p>© 2025 Smart Scrap Connect | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default SellerCollectors;

