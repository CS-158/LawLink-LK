import React from 'react';
import "../styles/features.css"; 

const FeaturesSection = () => {
  return (
    <section id="features">
      {/* Main Title */}
      <h1>Our Features</h1>
      
      {/* For Clients Section */}
      <div className="for-clients">
        <h2>For Clients</h2>
        <div className="features-cards">
          <div className="feature-card">
            <span className="icon material-icons">folder_open</span>
            <div>
              <h3>Post Case Anonymously</h3>
              <p>Share your legal issues while protecting your identity.</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon material-icons">schedule</span>
            <div>
              <h3>Schedule Consultations</h3>
              <p>Book consultations with top lawyers in minutes.</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon material-icons">lock</span>
            <div>
              <h3>Secure Document Storage</h3>
              <p>Store and manage your legal documents securely.</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon material-icons">notifications</span>
            <div>
              <h3>Track Your Case Progress</h3>
              <p>Get updates and notifications about your case status.</p>
            </div>
          </div>
        </div>
      </div>

      {/* For Lawyers Section */}
      <div className="for-lawyers">
        <h2>For Lawyers</h2>
        <div className="features-cards">
          <div className="feature-card">
            <span className="icon material-icons">assignment</span>
            <div>
              <h3>Case Management Tools</h3>
              <p>Manage and organize client cases efficiently.</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon material-icons">people</span>
            <div>
              <h3>Client Connections</h3>
              <p>Easily connect with clients and schedule consultations.</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon material-icons">cloud_upload</span>
            <div>
              <h3>Secure Document Sharing</h3>
              <p>Share and store legal documents securely with clients.</p>
            </div>
          </div>
          <div className="feature-card">
            <span className="icon material-icons">track_changes</span>
            <div>
              <h3>Case Tracking</h3>
              <p>Track the progress of your cases and stay updated.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
