// src/components/ContactInfo.js
import React from 'react';
import './ContactInfo.css'; // Make sure this CSS file exists in the same directory!
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Contact Information</h3>
      <div className="info-item">
        <FaEnvelope className="info-icon" />
        <div>
          <p className="info-label">Email</p>
          <a href="mailto:narmadagunathilaka9@gmail.com" className="info-value">narmadagunathilaka9@gmail.com</a>
        </div>
      </div>
      <div className="info-item">
        <FaPhone className="info-icon" />
        <div>
          <p className="info-label">Phone</p>
          <a href="tel:+94765420582" className="info-value">0765420582</a>
        </div>
      </div>
      <div className="info-item">
        <FaMapMarkerAlt className="info-icon" />
        <div>
          <p className="info-label">Location</p>
          <p className="info-value">Colombo, Sri Lanka</p>
        </div>
      </div>

      <h3 className="connect-title">Connect With Me</h3>
      <div className="social-links-contact">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        {/* Add more social links as per your demo */}
        {/* <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a> */}
        {/* <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
      </div>
    </div>
  );
};

export default ContactInfo;