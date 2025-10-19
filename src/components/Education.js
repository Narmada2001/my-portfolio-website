import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa'; // Install react-icons if not already: npm install react-icons

const educationData = [
  {
    icon: <FaGraduationCap />,
    title: "BSc (Hons) in Computing & Information Systems",
    institution: "Sabaragamuwa University of Sri Lanka",
    duration: "2023 - Present",
    details: "GPA 3.5"
  },
  {
    icon: <FaGraduationCap />,
    title: "Advanced Level Education",
    institution: "Kalutara Balika Vidyalaya",
    duration: "2021",
    details: "2 B's, 1 C"
  },
  {
    icon: <FaGraduationCap />,
    title: "Ordinary Level Education",
    institution: "Kalutara Balika Vidyalaya",
    duration: "2021", // Assuming same year as A/L completion
    details: "9 A's"
  }
];

const Education = () => {
  return (
    <div className="education-section">
      <h3 className="component-title">Education</h3>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="card-icon">{edu.icon}</div>
            <div className="card-content">
              <h4>{edu.title}</h4>
              <p className="institution">{edu.institution}</p>
              <p className="duration">{edu.duration}</p>
              <p className="details">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;