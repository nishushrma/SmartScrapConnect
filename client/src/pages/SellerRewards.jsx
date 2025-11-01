import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SellerDashboard.css";

const initialRewards = [
  { date: "2025-10-20", description: "Sold 5 kg plastic bottles", points: 50 },
  { date: "2025-10-15", description: "Monthly cleanup bonus", points: 100 },
  { date: "2025-10-10", description: "Recycled 10 kg paper", points: 80 },
];

const redeemOptions = [
  { name: "Amazon Voucher ₹500", cost: 100 },
  { name: "Flipkart Voucher ₹500", cost: 100 },
  { name: "Mobile Recharge ₹200", cost: 50 },
];

const achievements = [
  { name: "First Sale", points: 20 },
  { name: "10 kg Paper Recycled", points: 50 },
  { name: "Monthly Cleanup Bonus", points: 100 },
];

const Rewards = () => {
  const [points, setPoints] = useState(500);
  const [rewardsHistory, setRewardsHistory] = useState(initialRewards);

  const onRedeem = (reward) => {
    if (points >= reward.cost) {
      const today = new Date();
      const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

      alert(`You redeemed ${reward.name}!`);
      setPoints(points - reward.cost);
      setRewardsHistory([
        { date: formattedDate, description: `Redeemed ${reward.name}`, points: -reward.cost },
        ...rewardsHistory,
      ]);
    } else {
      alert(`You need at least ${reward.cost} points to redeem this!`);
    }
  };

  const getTier = () => {
    if (points > 300) return "Gold";
    if (points > 150) return "Silver";
    return "Bronze";
  };

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
          <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="Profile" />
          <div className="dropdown">
            <Link to="/seller/profile">View Profile</Link>
            <Link to="/seller/settings">Settings</Link>
            <Link to="/seller/payments">Payment Methods</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </nav>

      <main className="rewards-page">
        <h1>Rewards & Loyalty Dashboard</h1>

        {/* Points Summary */}
        <section className="points-summary">
          <h2>Total Points</h2>
          <p className="points">{points}</p>
          <p className="tier">Tier: <span>{getTier()}</span></p>
          <div className="badges">
            <span className="badge gold">Gold Member</span>
            <span className="badge eco">Eco Warrior</span>
          </div>
        </section>

        {/* Redeemable Rewards */}
        <section className="redeem-section">
          <h2>Redeem Rewards</h2>
          <div className="redeem-cards">
            {redeemOptions.map((reward, idx) => (
              <div className="redeem-card" key={idx}>
                <h3>{reward.name}</h3>
                <p>Cost: {reward.cost} points</p>
                <button
                  onClick={() => onRedeem(reward)}
                  disabled={points < reward.cost}
                  aria-label={`Redeem ${reward.name}`}
                >
                  {points >= reward.cost ? "Redeem" : "Not enough points"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Rewards History */}
        <section className="rewards-history">
          <h2>Rewards History</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {rewardsHistory.map((reward, idx) => (
                <tr key={idx}>
                  <td>{reward.date}</td>
                  <td>{reward.description}</td>
                  <td className={reward.points > 0 ? "positive" : "negative"}>
                    {reward.points > 0 ? `+${reward.points}` : reward.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Achievements */}
        <section className="achievements-section">
          <h2>Achievements & Milestones</h2>
          <div className="achievement-cards">
            {achievements.map((ach, idx) => (
              <div className="achievement-card" key={idx}>
                <h4>{ach.name}</h4>
                <p>Points: {ach.points}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="tips-section">
          <h2>How to Earn More Points</h2>
          <ul>
            <li>Recycle more plastic, paper, and metal materials.</li>
            <li>Participate in monthly cleanup campaigns.</li>
            <li>Refer friends and get bonus points.</li>
            <li>Complete your profile to earn extra badges.</li>
            <li>Join seasonal challenges and community events.</li>
            <li>Maintain consistent recycling habits for bonus points.</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 Smart Scrap Connect | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Rewards;
