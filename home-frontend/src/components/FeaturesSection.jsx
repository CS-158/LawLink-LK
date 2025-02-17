import React from 'react';
import "../styles/features.css"; 

const FeaturesSection = () => {
  return (
    <section id="features">
      {/* For Clients Section */}
      <div className="for-clients">
        <h2>For Clients</h2>
        <div className="features-cards">
          <div className="feature-card">
            <img src="/assets/images/feature1.jpg" alt="Feature 1" />
            <p>Feature 1 Description: Provides clients with easy access to legal documents and services.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/feature2.jpg" alt="Feature 2" />
            <p>Feature 2 Description: Enables clients to schedule consultations with top lawyers in minutes.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/feature3.jpg" alt="Feature 3" />
            <p>Feature 3 Description: Offers a secure platform to store and manage legal information.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/feature4.jpg" alt="Feature 4" />
            <p>Feature 4 Description: Allows clients to track case progress and receive notifications.</p>
          </div>
        </div>
      </div>

      {/* For Lawyers Section */}
      <div className="for-lawyers">
        <h2>For Lawyers</h2>
        <div className="features-cards">
          <div className="feature-card">
            <img src="/assets/images/feature5.jpg" alt="Feature 5" />
            <p>Feature 5 Description: Provides lawyers with tools to manage and organize cases effectively.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/feature6.jpg" alt="Feature 6" />
            <p>Feature 6 Description: Enables lawyers to connect with clients and schedule consultations.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/feature7.jpg" alt="Feature 7" />
            <p>Feature 7 Description: Secure document storage and sharing between lawyers and clients.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/feature8.jpg" alt="Feature 8" />
            <p>Feature 8 Description: Allows lawyers to manage their practice efficiently with case tracking tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
