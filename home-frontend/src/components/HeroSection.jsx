import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import homeImage from "../assets/home.jpg";

const HeroSection = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const handleButtonClick = (userType) => {
    if (userType === "client") {
      navigate("/client-signin"); // Navigate to client sign-in page
    } else if (userType === "lawyer") {
      navigate("./lawyer-signin.jsx"); // Navigate to lawyer sign-in page
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 300;
      const scrollTop = window.scrollY;
      const opacity = Math.max(1 - scrollTop / maxScroll, 0.5);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      className="hero-section"
      style={{ opacity: scrollOpacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          LawLink<span className="highlight">LK</span>
        </h1>
        <motion.p
          className="hero-subtitle-large"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Connecting you to the right legal expertise!
        </motion.p>
        <motion.p
          className="hero-subtitle-small"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Access trusted lawyers for all your legal needs at your fingertips.
        </motion.p>
        <motion.p
          className="join-now"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Join Now
        </motion.p>
        <div className="hero-buttons">
          <motion.button
            className="client-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleButtonClick("client")}
          >
            Client
          </motion.button>
          <motion.button
            className="lawyer-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleButtonClick("lawyer")}
          >
            Lawyer
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
