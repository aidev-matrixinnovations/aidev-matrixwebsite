import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailError) {
      alert('Please enter a valid email address');
      return;
    }
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have any questions or need further information, feel free to contact us:</p>
          <p>Email: aidevmatrixinnovations@gmail.com</p>
          <p>Phone: +91 8123482441 | 7016153673</p>
        </section>
        <section className="social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </section>
      </div>
      <div className="subscribe-container">
        <section className="subscribe">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with our latest offers and services. Subscribe to our newsletter:</p>
          <form onSubmit={handleSubscribe}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              {emailError && <span className="error">{emailError}</span>}
            </div>
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;