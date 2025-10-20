import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Reuse social icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-name">Narmada Gunathilaka</p>
          <p className="footer-role">Full Stack Developer & UI/UX Designer</p>
        </div>
        <div className="footer-social-links">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:narmadagunathilaka9@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Narmada Gunathilaka. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;