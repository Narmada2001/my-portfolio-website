import React from 'react';
import './About.css';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>A passionate developer with a strong foundation in software development and a commitment to continuous learning</p>
      </div>

      <div className="about-content">
        <Education />
        <WorkExperience />
        <Skills />
      </div>
    </section>
  );
};

export default About;