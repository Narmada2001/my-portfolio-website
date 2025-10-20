import React from 'react';
import './ServiceCard.css'; // We'll create this CSS file next

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="card-icon-wrapper">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;