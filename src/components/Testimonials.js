import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What people are saying about us</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nisi ex.”</p>
            <h3>Kartik Bansal</h3>
            <p>Role, Reputation</p>
          </div>
          <div className="testimonial-card">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nisi ex.”</p>
            <h3>Asif Dawod</h3>
            <p>Role, Reputation</p>
          </div>
          <div className="testimonial-card">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nisi ex.”</p>
            <h3>Giriya Shanker</h3>
            <p>Role, Reputation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
