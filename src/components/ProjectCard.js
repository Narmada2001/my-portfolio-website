import React from 'react';
import './ProjectCard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, role, status, description, technologies, githubLink, liveDemoLink, image } = project; // Destructure 'image'

  return (
    <div className="project-card">
      {/* Project Image - New addition */}
      {image && ( // Only render image if it exists
        <div className="project-image-container">
          <img src={image} alt={`${title} Project`} className="project-image" />
        </div>
      )}

      {/* Centered title with status directly below */}
      <h3 className="project-title">{title}</h3>
      {status && <span className="project-status">{status}</span>}
      <p className="project-role">{role}</p>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub /> View Code
          </a>
        )}
        {liveDemoLink && (
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;