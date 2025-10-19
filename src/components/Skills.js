import React from 'react';
import './Skills.css';
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaPaintBrush, FaUsers } from 'react-icons/fa'; // More icons!

const skillsData = [
  {
    category: "Soft Skills",
    icon: <FaUsers />,
    items: ["Communication", "Leadership", "Problem-Solving", "Adaptability", "Time Management", "Project Coordination", "Agile & Scrum"]
  },
  {
    category: "Programming Languages",
    icon: <FaCode />,
    items: ["JavaScript", "Python", "PHP", ".NET", "Java"]
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaLaptopCode />,
    items: ["React.js", "Node.js", "Angular", "Laravel"]
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "Web Technologies",
    icon: <FaLaptopCode />, // Reusing icon, or find a specific one
    items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Tools & Platforms",
    icon: <FaTools />,
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Jira", "Trello"]
  },
  {
    category: "Design Tools",
    icon: <FaPaintBrush />,
    items: ["Figma", "Adobe Photoshop", "Canva"]
  }
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h3 className="component-title">Skills</h3>
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-header">
              <span className="skill-icon">{skillGroup.icon}</span>
              <h4>{skillGroup.category}</h4>
            </div>
            <div className="skill-items">
              {skillGroup.items.map((item, itemIndex) => (
                <span className="skill-item-tag" key={itemIndex}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;