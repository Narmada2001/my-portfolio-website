// src/sections/Hero.js
import React from 'react';
import SocialLinks from '../components/SocialLinks'; // Import the social links
import ProfilePic from '../assets/profile.jpg'; // Make sure the path and filename match your image
import './Hero.css'; // Create this CSS file next
import CV from '../assets/Narmada_Gunathilaka_CV.pdf'; // Import your CV file

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="welcome-text">Welcome to my portfolio</p>
        <h1 className="hero-title">
          Hello, I'm <br />
          <span className="name-highlight">Narmada Gunathilaka</span>
        </h1>
        <p className="hero-description">
          Motivated and detail-oriented Information Systems undergraduate skilled in software design, web development, UI/UX, and agile teamwork.
        </p>
        <div className="hero-buttons">
<a href={CV} download="Narmada_Gunathilaka_CV.pdf" className="btn primary-btn">Download CV</a>
<a href="#contact" className="btn secondary-btn">Contact Me</a>        </div>
        <SocialLinks /> {/* Integrate the social links component */}
      </div>
      <div className="hero-image-container">
        <img src={ProfilePic} alt="Narmada Gunathilaka" className="hero-profile-pic" />
      </div>
    </section>
  );
};

export default Hero;