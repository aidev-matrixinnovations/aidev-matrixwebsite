import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Project.css';

const Project = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    userStory: '',
    domain: ''
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      alert('Please correct the errors in the form');
      return;
    }

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });

    setFormData({
      email: '',
      phoneNumber: '',
      userStory: '',
      domain: ''
    });
  };

  return (
    <div className="project-form-container">
      <h2>Start a Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Domain:</label>
          <select
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            required
          >
            <option value="">Select a domain</option>
            <option value="Technology">Technology</option>
            <option value="Marketing">Marketing</option>
            <option value="Video Editing">Video Editing</option>
          </select>
        </div>
        <div className="form-group">
          <label>Project Description:</label>
          <textarea
            name="userStory"
            value={formData.userStory}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Project;