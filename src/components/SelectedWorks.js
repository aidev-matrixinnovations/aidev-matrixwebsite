import React from 'react';
import './SelectedWorks.css';

const SelectedWorks = () => {
  return (
    <section className="selected-works">
      <div className="container">
        <h2>Selected Works</h2>
        <p>Take a look at some of my projects I have done.</p>
        <div className="work-cards">
          <div className="work-card">
            <h3>Sports Website Design</h3>
            <a href="#learn-more">Know More →</a>
          </div>
          <div className="work-card">
            <h3>NFT Web Development</h3>
            <a href="#learn-more">Know More →</a>
          </div>
          <div className="work-card">
            <h3>Dentist Web Development</h3>
            <a href="#learn-more">Know More →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorks;
