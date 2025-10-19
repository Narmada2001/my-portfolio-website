import React from 'react';
import './WorkExperience.css';
import { FaBriefcase } from 'react-icons/fa'; // Ensure react-icons is installed

const workExperienceData = [
  {
    icon: <FaBriefcase />,
    title: "Lobby Manager, Teller, Internship Trainee",
    company: "Peoples Bank of Sri Lanka",
    duration: "2022 - 2023",
    description: "Assisted customers with banking transactions, managed lobby flow, and supported branch operations during internship."
  }
  // Add more work experiences as needed
];

const WorkExperience = () => {
  return (
    <div className="work-experience-section">
      <h3 className="component-title">Work Experience</h3>
      <div className="work-experience-grid">
        {workExperienceData.map((job, index) => (
          <div className="experience-card" key={index}>
            <div className="card-icon">{job.icon}</div>
            <div className="card-content">
              <h4>{job.title}</h4>
              <p className="company">{job.company}</p>
              <p className="duration">{job.duration}</p>
              <p className="description">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;