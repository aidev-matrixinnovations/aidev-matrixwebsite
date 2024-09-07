import React from 'react';
import './ServiceCards.css';
import { FaServer, FaDev ,FaMobileAlt ,FaComments, FaSearch , FaCloud ,FaBullhorn ,FaChartLine ,FaLightbulb ,FaNetworkWired ,FaTools } from "react-icons/fa";

const ServiceCards = () => {
  return (
    <section className="services">
    <div className="container">
    <h2>Our Services Made For You?</h2>
    <div className="service-cards">
        <div className="service-card">
            <FaDev size={35}/>
            <h3>Website Development</h3>
            <p>Professional design tailored to your needs. We create visually stunning and highly functional websites that enhance your online presence, ensuring a seamless user experience.</p>                      
            
        </div>
        <div className="service-card">
            <FaServer size={35}/>
            <h3>Hosting</h3>
            <p>Fast and secure hosting for your website. Our hosting solutions ensure your site is always up, running, and protected with top-notch security measures.</p>           
            
        </div>

        <div className="service-card">
            <FaMobileAlt size={35} />
            <h3>Mobile App Development</h3>
            <p>Custom mobile solutions for your business. We develop intuitive and engaging mobile apps for iOS and Android platforms, tailored to meet your specific needs.</p>
            
        </div>
        <div className="service-card">
            <FaCloud size={35} />
            <h3>Cloud Services</h3>
            <p>Scalable and reliable cloud solutions. We offer comprehensive cloud services to help you scale your business efficiently and securely, with flexible and cost-effective options.</p>
            
        </div>
        


    </div>

    <div className="service-cards">

    <div className="service-card">
            <FaSearch size={35} />
            <h3>Domain and SEO Optimization</h3>
            <p>Boost your online presence with our SEO strategies. We also help you find and register the perfect domain to represent your brand online.</p>            
        </div>
        
        <div className="service-card">
            <FaBullhorn size={35} />
            <h3>Social Media Marketing</h3>
            <p>Enhance your brand’s presence on social media. We create and manage engaging content, run targeted ad campaigns, and interact with your audience to build a strong online community.</p>
            
        </div>
        <div className="service-card">
            <FaChartLine size={35} />
            <h3>Social Media Strategy</h3>
            <p>Develop a winning social media strategy. Our experts analyze your goals and audience to craft a tailored plan that maximizes your reach and engagement across all platforms.</p>
            
        </div>
    </div>

    <div className="service-cards">

    <div className="service-card">
            <FaLightbulb size={35} />
            <h3>Consulting Services</h3>
            <p>Expert advice to elevate your business. Our consulting services cover a range of areas including financial budgeting, audits, and strategic planning, helping you make informed decisions and achieve your goals.</p>
 
        </div>
        
        <div className="service-card">
            <FaNetworkWired size={35} />
            <h3>Cloud Architecture Design</h3>
            <p>Design and implement robust cloud architectures. We create scalable, secure, and high-performing cloud solutions tailored to your business needs, ensuring optimal resource utilization and cost efficiency.</p>
 
        </div>
        <div className="service-card">
        <FaTools size={35} />
            <h3>Data Pipeline Design and DevOps Stratergy </h3>
            <p>Build efficient data pipelines with seamless data flow. Our DevOps services include CI/CD setup, infrastructure as code, and continuous monitoring.</p>        
          </div>
          <div className="service-card">
            <FaComments size={35} />
            <h3>AI-Powered Chatbots</h3>
            <p>Improve customer service with AI-powered chatbots. Our chatbots provide instant, accurate responses to customer queries, enhancing user experience and reducing operational costs.</p>
        </div>
        
    </div>


</div>

    </section>
  );
}

export default ServiceCards;
