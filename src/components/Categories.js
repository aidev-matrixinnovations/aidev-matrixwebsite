import React from 'react';
import './Categories.css';

const categories = [
  {
    image: 'technology.jpg',
    title: 'Technology Solutions',
    description: 'Software Development, IT Infrastructure, Cloud Services, Cybersecurity',
    location: 'Global',
  },
  {
    image: 'marketing.jpg',
    title: 'Marketing Services',
    description: 'Digital Marketing, Social Media Management, Content Creation, SEO Services',
    location: 'Global',
  },
  {
    image: 'creative.jpg',
    title: 'Creative Services',
    description: 'Graphic Design, Video Production, UI/UX Design, Branding',
    location: 'Global',
  },
  {
    image: 'consulting.jpg',
    title: 'Consulting Services',
    description: 'Business Strategy, Financial Consulting, HR Consulting, Legal Consulting',
    location: 'Global',
  },
  {
    image: 'training.jpg',
    title: 'Training and Workshops',
    description: 'Technical Training, Marketing Workshops, Creative Skills Training, Leadership Development',
    location: 'Global',
  },
  {
    image: 'ecommerce.jpg',
    title: 'E-commerce Solutions',
    description: 'Online Store Setup, Payment Gateway Integration, Inventory Management, CRM',
    location: 'Global',
  },
];

function Categories() {
  return (
    <div className="categories">
      <h1>Project</h1>
      <div className="category-list">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.title} />
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <p>{category.location}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;