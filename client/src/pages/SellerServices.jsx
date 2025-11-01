import React from "react";
import { Link } from "react-router-dom";
import "./SellerDashboard.css";

const servicesList = [
  {
    title: "Scrap Pickup Scheduling",
    description:
      "Easily schedule a pickup for your scrap items at your preferred date and time. Our verified collectors will come to your doorstep to collect plastic, paper, metal, e-waste, and glass items safely and efficiently.",
    icon: "🚛",
  },
  {
    title: "Sell Scrap Online",
    description:
      "Sell your scrap instantly through our platform. Just upload the type and quantity, and our system connects you to the best local collectors offering competitive rates. Get paid directly to your linked account within minutes.",
    icon: "💰",
  },
  {
    title: "Price Estimation & Comparison",
    description:
      "Our smart algorithm provides real-time price estimation for your scrap materials based on market trends and demand. Compare multiple offers and choose the most profitable deal.",
    icon: "📊",
  },
  {
    title: "Monthly Recycling Reports",
    description:
      "Get detailed monthly reports that summarize your total sales, earnings, and environmental contributions — such as the amount of waste diverted from landfills or the CO₂ saved.",
    icon: "📝",
  },
  {
    title: "Rewards & Incentives",
    description:
      "Earn points for every kilogram of scrap sold and for completing eco-friendly milestones. Redeem them for cashback, vouchers, or partner offers. The more you recycle, the higher your membership tier!",
    icon: "🏆",
  },
  {
    title: "Recycling Education & Tips",
    description:
      "We regularly share recycling tips and educational resources to help you learn how to properly sort, clean, and store recyclable materials for maximum returns.",
    icon: "🌱",
  },
  {
    title: "Eco-Partnerships",
    description:
      "Join hands with certified recycling industries and organizations. We ensure that all collected materials are recycled responsibly to create a sustainable ecosystem.",
    icon: "🤝",
  },
];


const faqs = [
  {
    q: "Do I need to sort my scrap before pickup?",
    a: "Yes, sorting your scrap into categories like plastic, paper, or metal helps ensure quicker pickup and accurate pricing.",
  },
  {
    q: "How are the prices calculated?",
    a: "Prices are calculated dynamically based on market demand, material type, and collector rates near your location.",
  },
  {
    q: "What happens to my scrap after collection?",
    a: "Collected scrap is sent to authorized recycling plants or repurposing units where it is processed into reusable raw materials.",
  },
  {
    q: "Are there any membership benefits?",
    a: "Yes! Frequent sellers earn badges, higher-tier memberships, and exclusive rewards through our Green Loyalty Program.",
  },
  {
    q: "Can I cancel a scheduled pickup?",
    a: "Yes, you can cancel or reschedule your pickup through your dashboard up to 2 hours before the scheduled time.",
  },
];

const Services = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">♻️ Smart Scrap Connect</div>
        <ul className="nav-links">
          <li><Link to="/seller/dashboard">Home</Link></li>
          <li><Link to="/seller/activity">Activity</Link></li>
          <li><Link to="/seller/collectors">Collectors near me</Link></li>
          <li><Link to="/seller/services" className="active">Services</Link></li>
          <li><Link to="/seller/rewards">Rewards</Link></li>
          <li><Link to="/seller/help">Help</Link></li>
        </ul>
        <div className="profile">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
            alt="Profile"
          />
          <div className="dropdown">
            <Link to="/seller/profile">View Profile</Link>
            <Link to="#">Settings</Link>
            <Link to="#">Payment Methods</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="services-page">
        <section className="hero">
          <h1>Our Services for Sellers</h1>
          <p>
            At <strong>Smart Scrap Connect</strong>, we make recycling and scrap
            management smarter, easier, and more profitable. Explore the wide
            range of services designed to empower sellers, promote sustainability,
            and reward green actions.
          </p>
        </section>

        {/* Service Cards */}
        <section className="services-cards">
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </section>

 

        {/* Benefits Section */}
        <section className="benefits">
          <h2>Why Choose Smart Scrap Connect?</h2>
          <ul>
            <li>✅ Doorstep collection service for all major scrap categories.</li>
            <li>✅ Real-time market-based pricing for maximum profits.</li>
            <li>✅ Fast and secure digital payments directly to your wallet.</li>
            <li>✅ Eco-friendly recycling with verified recyclers.</li>
            <li>✅ 24×7 support and easy rescheduling options.</li>
            <li>✅ Earn rewards and recognition for sustainable actions.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </section>

        <footer>
          <p>© 2025 Smart Scrap Connect | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Services;
