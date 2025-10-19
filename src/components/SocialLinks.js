// src/components/SocialLinks.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // We'll install react-icons next
import './SocialLinks.css'; // Create this CSS file

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/narmada-gunathilaka/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:narmadagunathilaka9@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;