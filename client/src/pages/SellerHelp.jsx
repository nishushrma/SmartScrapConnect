import React, { useState } from "react";
import "./SellerDashboard.css";

const faqs = [
  {
    question: "How can I register as a seller?",
    answer:
      "Go to the Register page, fill in your details, choose 'Scrap Seller', and submit the form.",
  },
  {
    question: "How do I add a new activity?",
    answer:
      "Navigate to your dashboard, go to 'Activity', fill in the details of your scrap collection or sale, and click 'Add'.",
  },
  {
    question: "How do I redeem my points?",
    answer:
      "Go to the 'Rewards' section, check your points, and select the reward you want to redeem.",
  },
  {
    question: "Can I contact collectors near me?",
    answer:
      "Yes! Go to 'Collectors Near Me' section and view nearby collectors with their contact info.",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "Use the 'Forgot Password' option on the login page to reset your password via email.",
  },
];

const Help = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("✅ Thank you! Your message has been sent to our support team.");
    setContactData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* 🔹 Navbar */}
      <nav className="navbar">
        <div className="logo">♻️ Smart Scrap Connect</div>
        <ul className="nav-links">
          <li><a href="/seller-dashboard">Home</a></li>
          <li><a href="/activity">Activity</a></li>
          <li><a href="/collectors">Collectors Near Me</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/rewards">Rewards</a></li>
          <li><a href="/help" className="active-link">Help</a></li>
        </ul>
        <div className="profile">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
          <div className="dropdown">
            <a href="#">My Profile</a>
            <a href="#">Settings</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </nav>

      {/* 🔹 Help Page */}
      <div className="help-page">

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        {/* Contact Support Form */}
        <section className="contact-section">
          <h2>Contact Support</h2>
          {success && <p className="success-msg">{success}</p>}
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={contactData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              value={contactData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              value={contactData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </section>

        {/* Tips & Guides */}
        <section className="tips-section">
          <h2>Tips & Guides</h2>
          <ul>
            <li>Always sort your recyclables into paper, plastic, metal, glass, and e-waste.</li>
            <li>Maintain records of your scrap sales for rewards and analytics.</li>
            <li>Regularly check the 'Rewards' section for new offers and points.</li>
            <li>Contact local collectors if you have large scrap quantities.</li>
            <li>Stay updated with monthly cleanup campaigns to earn bonus points.</li>
            <li>Make sure your account info is updated to receive notifications properly.</li>
            <li>Use the “Activity” section to track your transactions and earnings.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer>
          <p>© 2025 Smart Scrap Connect | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Help;
