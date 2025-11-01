import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SellerDashboard.css";

const initialRows = [
  { date: "2025-10-14", type: "Paper", what: "Newspapers", qty: "8 kg", buyer: "Green Recyclers", amount: "₹240", notes: "Monthly cleanup" },
  { date: "2025-10-07", type: "Plastic", what: "Bottles", qty: "3 kg", buyer: "EcoBuy Pvt Ltd", amount: "₹90", notes: "" },
  { date: "2025-09-24", type: "Metal", what: "Aluminum Cans", qty: "5 kg", buyer: "MetalMart", amount: "₹350", notes: "Fest season" },
];

function normalize(v) { return String(v || "").toLowerCase(); }

const SellerActivity = () => {
  const [rows, setRows] = useState(initialRows);

  // filters
  const [q, setQ] = useState("");
  const [fType, setFType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // add form
  const [aDate, setADate] = useState("");
  const [aType, setAType] = useState("Paper");
  const [aWhat, setAWhat] = useState("");
  const [aQty, setAQty] = useState("");
  const [aBuyer, setABuyer] = useState("");
  const [aAmount, setAAmount] = useState("");
  const [aNotes, setANotes] = useState("");

  useEffect(() => {
    if (!aDate) {
      const today = new Date().toISOString().slice(0, 10);
      setADate(today);
    }
  }, [aDate]);

  const filtered = useMemo(() => {
    return rows.filter(r => {
      if (q && normalize(`${r.what} ${r.buyer} ${r.notes}`).indexOf(normalize(q)) === -1) return false;
      if (fType && r.type !== fType) return false;
      if (from && r.date < from) return false;
      if (to && r.date > to) return false;
      return true;
    });
  }, [rows, q, fType, from, to]);

  const onAdd = () => {
    const today = new Date().toISOString().slice(0, 10);
    const next = {
      date: aDate || today,
      type: aType,
      what: aWhat || "-",
      qty: aQty || "-",
      buyer: aBuyer || "-",
      amount: aAmount || "-",
      notes: aNotes || "",
    };
    setRows(prev => [next, ...prev]);
    // clear inputs
    setAType("Paper");
    setAWhat("");
    setAQty("");
    setABuyer("");
    setAAmount("");
    setANotes("");
    if (!aDate) setADate(today);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">♻️ Smart Scrap Connect</div>
        <ul className="nav-links">
          <li><Link to="/seller/dashboard">Home</Link></li>
          <li><Link to="/seller/activity">Activity</Link></li>
          <li><a href="#">Collectors near me</a></li>
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
        <h2 style={{ textAlign: "center", color: "#1b5e20", marginBottom: 6 }}>Past Activity</h2>

        <div className="toolbar">
          <input value={q} onChange={e => setQ(e.target.value)} type="text" placeholder="Search by item, buyer, notes" />
          <select value={fType} onChange={e => setFType(e.target.value)}>
            <option value="">All Types</option>
            <option>Paper</option>
            <option>Plastic</option>
            <option>Metal</option>
            <option>E-waste</option>
            <option>Glass</option>
          </select>
          <input value={from} onChange={e => setFrom(e.target.value)} type="date" placeholder="dd/mm/yyyy" />
          <input value={to} onChange={e => setTo(e.target.value)} type="date" placeholder="dd/mm/yyyy" />
          <button className="btn" onClick={() => { /* filters apply automatically via state */ }}>Apply</button>
          <button className="btn secondary" onClick={() => { setQ(""); setFType(""); setFrom(""); setTo(""); }}>Clear</button>
        </div>

        <div className="card table-wrap">
          <table className="activity">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>What</th>
                <th>Quantity</th>
                <th>Sold To</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, idx) => (
                <tr key={idx}>
                  <td>{r.date}</td>
                  <td>{r.type}</td>
                  <td>{r.what}</td>
                  <td>{r.qty}</td>
                  <td>{r.buyer}</td>
                  <td>{r.amount}</td>
                  <td>{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ height: 18 }} />

        <section className="card" aria-labelledby="addHeading">
          <h3 id="addHeading" style={{ padding: "18px 18px 0", color: "#1b5e20", textAlign: "center" }}>Add Activity</h3>
          <div className="add-form">
            <input value={aDate} onChange={e => setADate(e.target.value)} type="date" className="full" />
            <select value={aType} onChange={e => setAType(e.target.value)}>
              <option>Paper</option>
              <option>Plastic</option>
              <option>Metal</option>
              <option>E-waste</option>
              <option>Glass</option>
            </select>
            <input value={aWhat} onChange={e => setAWhat(e.target.value)} type="text" placeholder="Item (e.g., Newspapers)" />
            <input value={aQty} onChange={e => setAQty(e.target.value)} type="text" placeholder="Quantity (e.g., 8 kg)" />
            <input value={aBuyer} onChange={e => setABuyer(e.target.value)} type="text" placeholder="Sold To (e.g., Green Recyclers)" className="full" />
            <input value={aAmount} onChange={e => setAAmount(e.target.value)} type="text" placeholder="Amount (e.g., ₹240)" />
            <input value={aNotes} onChange={e => setANotes(e.target.value)} type="text" placeholder="Notes" />
          </div>
          <div className="add-actions">
            <button className="btn" onClick={onAdd}>Add</button>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Smart Scrap Connect | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default SellerActivity;
