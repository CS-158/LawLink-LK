import React, { useState } from "react";
import "../styles/faq.css";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="faq-card">
        <div className={`faq-item ${openQuestion === 0 ? 'open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => toggleQuestion(0)}
          >
            What is LawLinkLK?
          </button>
          {openQuestion === 0 && (
            <div className="faq-answer">
              LawLinkLK connects clients with lawyers for legal help.
            </div>
          )}
        </div>
        <div className={`faq-item ${openQuestion === 1 ? 'open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => toggleQuestion(1)}
          >
            How do I get started?
          </button>
          {openQuestion === 1 && (
            <div className="faq-answer">
              Sign up as a client or lawyer to start using the platform.
            </div>
          )}
        </div>
        {/* Add more FAQ items here */}
      </div>
    </section>
  );
};

export default FAQSection;
