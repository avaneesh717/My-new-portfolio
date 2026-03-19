import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-content glass-panel">
          <p>&copy; {new Date().getFullYear()} avaneesh.g. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
