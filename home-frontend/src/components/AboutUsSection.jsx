import React from "react";
import "../styles/about.css";

const AboutUsSection = () => {
  return (
    <section id="about">
      <div className="about-title">About Us</div>
      <div className="about-box">
        <div className="about-details">
          <p>
            Welcome to <span className="highlight">LawLinkLK</span>, your trusted platform connecting clients
            with experienced legal professionals. We simplify legal access, enabling clients to easily find the right
            lawyer for their needs and communicate with them directly.
          </p>
          <ul>
            <li><strong>Find Lawyers Easily:</strong> Search for lawyers based on their expertise and location.</li>
            <li><strong>Direct Messaging:</strong> Connect and message lawyers instantly through the platform.</li>
            <li><strong>Accessible & Affordable:</strong> Get professional legal help without the hassle.</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="../src/assets/aboutus.jpg" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
