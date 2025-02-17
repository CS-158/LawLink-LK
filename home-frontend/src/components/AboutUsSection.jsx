import React from "react";
import "../styles/about.css";

const AboutUsSection = () => {
  return (
    <section id="about">
      <div className="about-title">About Us</div>
      <div className="about-box">
        <div className="about-details">
          <p>
            Welcome to <span className="highlight">LawLinkLK</span>, your trusted platform
            connecting clients with experienced legal professionals. We simplify legal access, ensuring
            everyone gets the right advice and representation with ease.
          </p>
        </div>
        <div className="about-image">
        <img src="../src/assets/image01.png" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
