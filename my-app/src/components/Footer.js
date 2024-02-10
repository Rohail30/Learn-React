import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Your Company Name. All rights reserved.</p>
        <div className="social-links">
          <Link to="/">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-github"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
