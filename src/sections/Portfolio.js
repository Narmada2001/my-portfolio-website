import React from 'react';
import './Portfolio.css';
import ProjectCard from '../components/ProjectCard';

// Import your project images
import dengueGuardImage from '../assets/dengue-guard.jpg'; // Make sure filenames match
import sportCenterImage from '../assets/sport-center.jpeg';
import kaviFoodImage from '../assets/kavi-food.png';
import kolonnaStoretrackImage from '../assets/kolonna-storetrack.jpeg';

// Define your project data here
const projectData = [
  {
    title: "Dengue Guard Management System",
    role: "UI/UX Engineer, Frontend & Backend Developer, Scrum Master",
    status: "Capstone Project",
    description: "Web-based system for managing dengue patient records with secure authentication and ward management. Capstone project demonstrating full-stack capabilities.",
    technologies: ["React.js", "Node.js", "MongoDB Atlas", "Tailwind CSS"],
    githubLink: "https://github.com/mayuraabhayasinghe/dengue-patient-management-system-grp4.git",
    liveDemoLink: "https://www.linkedin.com/posts/narmada-gunathilaka-2818372a7_dengueguard-capstoneproject-healthtech-activity-7382262708949245952-3za4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEn788EBuEIa_f54UfiyzCRzgAOjZmoDgKQ",
    image: dengueGuardImage // Add the image property
  },
  {
    title: "Sport Center Inventory Management System",
    role: "UI/UX Engineer, Frontend & Backend Developer, Scrum Master",
    status: "Completed",
    description: "Comprehensive system for managing sports equipment inventory efficiently with real-time tracking and reporting features.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/your-username/sport-center-inventory",
    liveDemoLink: "#",
    image: sportCenterImage // Add the image property
  },
  {
    title: "Kavi FooD",
    role: "Full Stack Developer",
    status: "Individual Project",
    description: "Responsive food ordering platform featuring user account management, shopping cart functionality, and seamless ordering experience.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    githubLink: "https://github.com/your-username/kavifood-app",
    liveDemoLink: "#",
    image: kaviFoodImage // Add the image property
  },
  {
    title: "Kolonna StoreTrack",
    role: "UI/UX Engineer, Frontend & Backend Developer, Scrum Master",
    status: "Group Project",
    description: "Digital system to automate store and inventory operations for improved transparency, efficiency, and comprehensive reporting.",
    technologies: ["React.js", "Node.js", "MySQL"],
    githubLink: "https://github.com/your-username/kolonna-storetrack",
    liveDemoLink: "#",
    image: kolonnaStoretrackImage // Add the image property
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <h2>My Portfolio</h2>
        <p>A showcase of projects demonstrating technical expertise and multi-role capabilities</p>
      </div>

      <div className="portfolio-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;