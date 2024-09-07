import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h2>Our Service Plans</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Technology</h3>
            <p>Our Technology services include:</p>
            <p>Cloud Migration, Data Ingestion, Web Development, Cloud Management, Data Transformation, Mobile Development, API Development, Cloud Security, Data Storage, Progressive Web Apps, Advanced API Development</p>
            <button>Contact Us</button>
          </div>
          <div className="pricing-card">
            <h3>Social Media Marketing</h3>
            <p>Our Social Media Marketing services include:</p>
            <p>Content Creation, Ad Campaigns, Performance Metrics, Influencer Marketing, Audience Insights, Customer Interaction, SEO Optimization, Brand Awareness, ROI Analysis, Social Listening, Advanced SEO Optimization</p>
            <button>Contact Us</button>
          </div>
          <div className="pricing-card">
            <h3>Video Editing</h3>
            <p>Our Video Editing services include:</p>
            <p>Social Media Clips, Advertisements, Color Correction, Documentaries, Feature Films, Sound Mixing, 2D Animation, Web Series, Promotional Videos, Visual Effects, 3D Animation</p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;