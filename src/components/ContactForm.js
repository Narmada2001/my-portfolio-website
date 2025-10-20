import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // State to manage submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending'); // Set status to indicate sending

    const form = e.target;
    // Replace "YOUR_FORMSPREE_FORM_ID" with your actual Formspree form ID
    // You can find this on your Formspree form page (e.g., https://formspree.io/f/yourformid)
    const formUrl = "https://formspree.io/f/mqayjjwy";

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        const data = await response.json();
        alert(data.error || 'Oops! There was an error sending your message.');
      }
    } catch (error) {
      setStatus('error');
      alert('Network error! Please try again later.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="contact-form-container">
      <h3>Have a project in mind or want to collaborate? Feel free to reach out!</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className="success-message">Message sent successfully!</p>}
        {status === 'error' && <p className="error-message">Failed to send message. Please try again.</p>}
      </form>
    </div>
  );
};

export default ContactForm;