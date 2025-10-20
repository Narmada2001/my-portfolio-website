import React from 'react';
import './Services.css'; // We'll create this CSS file next
import ServiceCard from '../components/ServiceCard';
import { FaLaptopCode, FaCogs, FaPaintBrush } from 'react-icons/fa'; // Icons for services

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2>My Services</h2>
        <p>Offering comprehensive solutions from design to deployment</p>
      </div>

      <div className="services-grid">
        <ServiceCard
          icon={<FaLaptopCode />}
          title="Front-end Development"
          description="Building responsive and interactive user interfaces using modern frameworks like React.js, Angular, and Vue.js with attention to performance and accessibility."
        />
        <ServiceCard
          icon={<FaCogs />}
          title="Full Stack Development"
          description="End-to-end web application development combining frontend excellence with robust backend solutions using Node.js, Laravel, and MongoDB/MySQL databases."
        />
        <ServiceCard
          icon={<FaPaintBrush />}
          title="UI/UX Design"
          description="Creating intuitive and visually appealing user experiences with tools like Figma and Adobe Photoshop, focusing on user-centered design principles."
        />
      </div>
    </section>
  );
};

export default Services;