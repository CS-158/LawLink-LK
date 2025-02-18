import React, { useState } from 'react';
import '../styles/faq.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = {
    leftColumn: [
      {
        question: "What is LawLink LK?",
        answer: "LawLink LK is a platform that connects clients with legal services..."
      },
      {
        question: "How do I post a case anonymously?",
        answer: "You can post your case without revealing your identity through our secure anonymous posting system..."
      },
      {
        question: "Is my information secure on LawLink LK?",
        answer: "Yes, we use state-of-the-art encryption and security measures to protect your data..."
      }
    ],
    rightColumn: [
      {
        question: "How does secure messaging work?",
        answer: "Our platform provides a private and encrypted chat system to communicate directly with lawyers..."
      },
      {
        question: "What features are available for lawyers?",
        answer: "Lawyers have access to case management, client communication tools, scheduling features..."
      },
      {
        question: "Can I book consultations online?",
        answer: "Yes, you can easily schedule consultations with lawyers through our online booking system..."
      }
    ]
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const FAQColumn = ({ faqs, startIndex }) => (
    <div className="faq-column">
      {faqs.map((faq, index) => (
        <div 
          key={startIndex + index} 
          className={`faq-item ${activeIndex === (startIndex + index) ? 'active' : ''}`}
        >
          <div 
            className="faq-question"
            onClick={() => toggleFAQ(startIndex + index)}
          >
            {faq.question}
            <span className="faq-icon">{activeIndex === (startIndex + index) ? '−' : '+'}</span>
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>Any Questions?</h2>
        <p>We got you</p>
      </div>
      
      <div className="faq-content">
        <FAQColumn faqs={faqData.leftColumn} startIndex={0} />
        <FAQColumn faqs={faqData.rightColumn} startIndex={faqData.leftColumn.length} />
      </div>
    </div>
  );
};

export default FAQSection;