import React from 'react';
import './Contact.css'; // We'll create this CSS file next
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
      </div>

      <div className="contact-content">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;