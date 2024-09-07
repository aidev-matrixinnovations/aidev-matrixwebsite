import React from 'react';
import './Services.css';
import technologyImage from './images/3_1.png';
import marketingImage from './images/2_1.png';
import editingImage from './images/1_1.png';
import { useEffect } from 'react';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-cards">
            <div className="services-card">
              <h3>Technology</h3>
              <ul>
                <li>Web and Mobile Development
                  <ul>
                    <li>Web Development
                      <ul>
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                      </ul>
                    </li>
                    <li>Mobile Development
                      <ul>
                        <li>iOS Development</li>
                        <li>Android Development</li>
                      </ul>
                    </li>
                    <li>Responsive Design
                      <ul>
                        <li>Mobile-First Design</li>
                        <li>Cross-Browser Compatibility</li>
                      </ul>
                    </li>
                    <li>Progressive Web Apps
                      <ul>
                        <li>PWA Development</li>
                        <li>PWA Optimization</li>
                      </ul>
                    </li>
                    <li>API Development
                      <ul>
                        <li>RESTful APIs</li>
                        <li>GraphQL APIs</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Cloud Computing
                  <ul>
                    <li>Cloud Migration
                      <ul>
                        <li>Data Migration</li>
                        <li>Application Migration</li>
                      </ul>
                    </li>
                    <li>Cloud Management
                      <ul>
                        <li>Resource Optimization</li>
                        <li>Cost Management</li>
                      </ul>
                    </li>
                    <li>Cloud Security
                      <ul>
                        <li>Identity Management</li>
                        <li>Data Encryption</li>
                      </ul>
                    </li>
                    <li>Cloud Automation
                      <ul>
                        <li>Automated Deployment</li>
                        <li>Continuous Integration</li>
                      </ul>
                    </li>
                    <li>Cloud Consulting
                      <ul>
                        <li>Strategy Development</li>
                        <li>Implementation Planning</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Data Pipeline
                  <ul>
                    <li>Data Ingestion
                      <ul>
                        <li>Batch Processing</li>
                        <li>Stream Processing</li>
                      </ul>
                    </li>
                    <li>Data Transformation
                      <ul>
                        <li>Data Cleaning</li>
                        <li>Data Enrichment</li>
                      </ul>
                    </li>
                    <li>Data Storage
                      <ul>
                        <li>Data Warehousing</li>
                        <li>Data Lakes</li>
                      </ul>
                    </li>
                    <li>Data Orchestration
                      <ul>
                        <li>Workflow Automation</li>
                        <li>Job Scheduling</li>
                      </ul>
                    </li>
                    <li>Data Monitoring
                      <ul>
                        <li>Performance Metrics</li>
                        <li>Error Tracking</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="services-card">
              <h3>Social Media Marketing</h3>
              <ul>
                <li>Content Creation
                  <ul>
                    <li>Blog Posts</li>
                    <li>Social Media Posts</li>
                    <li>Video Content</li>
                  </ul>
                </li>
                <li>Campaign Management
                  <ul>
                    <li>Ad Campaigns</li>
                    <li>Influencer Marketing</li>
                    <li>Brand Awareness</li>
                  </ul>
                </li>
                <li>Analytics and Reporting
                  <ul>
                    <li>Performance Metrics</li>
                    <li>Audience Insights</li>
                    <li>ROI Analysis</li>
                  </ul>
                </li>
                <li>Community Engagement
                  <ul>
                    <li>Customer Interaction</li>
                    <li>Feedback Management</li>
                    <li>Social Listening</li>
                  </ul>
                </li>
                <li>Social Media Strategy
                  <ul>
                    <li>Content Calendar</li>
                    <li>Platform Selection</li>
                  </ul>
                </li>
                <li>Paid Advertising
                  <ul>
                    <li>Facebook Ads</li>
                    <li>Instagram Ads</li>
                    <li>LinkedIn Ads</li>
                  </ul>
                </li>
                <li>SEO Optimization
                  <ul>
                    <li>Keyword Research</li>
                    <li>On-Page SEO</li>
                    <li>Off-Page SEO</li>
                  </ul>
                </li>
                <li>Graphic Design
                  <ul>
                    <li>Social Media Graphics</li>
                    <li>Infographics</li>
                    <li>Branding</li>
                  </ul>
                </li>
                <li>Video Production
                  <ul>
                    <li>Script Writing</li>
                    <li>Video Editing</li>
                    <li>Animation</li>
                  </ul>
                </li>
                <li>Influencer Collaboration
                  <ul>
                    <li>Partnership Management</li>
                    <li>Content Co-Creation</li>
                    <li>Campaign Tracking</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="services-card">
              <h3>Video Editing</h3>
              <ul>
                <li>Long Format
                  <ul>
                    <li>Documentaries</li>
                    <li>Feature Films</li>
                    <li>Web Series</li>
                  </ul>
                </li>
                <li>Short Format
                  <ul>
                    <li>Social Media Clips</li>
                    <li>Advertisements</li>
                    <li>Promotional Videos</li>
                  </ul>
                </li>
                <li>Post-Production Services
                  <ul>
                    <li>Color Correction</li>
                    <li>Sound Mixing</li>
                    <li>Visual Effects</li>
                  </ul>
                </li>
                <li>Animation
                  <ul>
                    <li>2D Animation</li>
                    <li>3D Animation</li>
                    <li>Motion Graphics</li>
                  </ul>
                </li>
                <li>Script Writing
                  <ul>
                    <li>Storyboarding</li>
                    <li>Screenwriting</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="strategy-section">
        <h3>How We Achieve These Services</h3>
        <div className="strategy">
          <h4>Technology Strategy</h4>
          <div className="strategy-content">
            <img src={technologyImage} alt="Technology Strategy" className="strategy-image" />
            <div className="strategy-text">
            <p>Our Technology Strategy outlines the best practices and tools to leverage technology for business growth and efficiency.</p>
<ul>
  <li>Adopting the Latest Technologies: Stay ahead by integrating cutting-edge technologies that drive innovation and efficiency.</li>
  <li>UI/UX Design: Create intuitive and user-friendly interfaces that enhance user experience and engagement.</li>
  <li>Architecting Robust Solutions: Design robust and scalable system architectures that support business objectives and future growth.</li>
  <li>Streamlining Development Processes: Utilize agile methodologies and DevOps practices to accelerate development cycles and improve collaboration.</li>
  <li>Implementing Automation: Automate repetitive tasks and processes to increase productivity and reduce human error.</li>
  <li>Seamless Deployment: Ensure smooth and efficient deployment of applications and services with minimal downtime.</li>
  <li>Continuous Support and Maintenance: Provide ongoing support and maintenance to ensure systems remain up-to-date and perform optimally.</li>
  <li>Fostering Continuous Innovation: Encourage a culture of continuous improvement and innovation to stay competitive in the market.</li>
  <li>Designing Scalable IT Infrastructure: Develop a scalable and flexible IT infrastructure that can grow with your business needs.</li>
  
</ul>
              <a href="/strategy/technology" target="_blank" className="view-button">View More</a>
            </div>
          </div>
        </div>

        <div className="strategy">
          <h4>Marketing Strategy</h4>
          <div className="strategy-content">
            <img src={marketingImage} alt="Marketing Strategy" className="strategy-image" />
            <div className="strategy-text">
            <p>Our Marketing Strategy provides a comprehensive plan to effectively promote your products and services to the target audience.</p>
<ul>
  <li>Market Research and Analysis: Conduct thorough market research to understand industry trends, competitor strategies, and customer needs.</li>
  <li>Defining Target Audience: Identify and segment the target audience to tailor marketing efforts for maximum impact.</li>
  <li>Creating a Unique Value Proposition: Develop a compelling value proposition that differentiates your products and services from competitors.</li>
  <li>Developing a Marketing Mix: Formulate a balanced marketing mix (product, price, place, promotion) to effectively reach and engage the target audience.</li>
  <li>Content Creation and Management: Produce high-quality content that resonates with the target audience and supports marketing objectives.</li>
  <li>Implementing Multi-Channel Campaigns: Execute integrated marketing campaigns across various channels (digital, social media, print, etc.) to maximize reach.</li>
  <li>Tracking and Measuring Results: Utilize analytics tools to monitor campaign performance, measure ROI, and make data-driven decisions for continuous improvement.</li>
  <li>Adjusting Strategies Based on Feedback: Continuously refine marketing strategies based on feedback and performance metrics to achieve optimal results.</li>
</ul>
              <a href="/strategy/marketing" target="_blank" className="view-button">View More</a>
            </div>
          </div>
        </div>

        <div className="strategy">
          <h4>Editing Strategy</h4>
          <div className="strategy-content">
            <img src={editingImage} alt="Editing Strategy" className="strategy-image" />
            <div className="strategy-text">
            <p>Our Editing Strategy ensures high-quality video content through meticulous editing processes and creative techniques.</p>
<ul>
  <li>Initial Footage Review: Carefully review all raw footage to identify the best takes and organize them for editing.</li>
  <li>Advanced Video Editing Techniques: Utilize advanced editing techniques to create a cohesive and engaging narrative.</li>
  <li>Color Correction and Grading: Adjust colors and tones to enhance the visual appeal and maintain consistency across scenes.</li>
  <li>Sound Design and Mixing: Integrate sound effects, music, and dialogue, ensuring clear and balanced audio throughout the video.</li>
  <li>Visual Effects and Animations: Add visual effects and animations to enhance storytelling and captivate the audience.</li>
  <li>Seamless Transitions: Implement smooth transitions between scenes to maintain the flow and continuity of the video.</li>
  <li>Final Review and Quality Assurance: Conduct a thorough review to ensure the video meets quality standards and client expectations.</li>
  <li>Exporting and Delivery: Export the final video in the required formats and deliver it to the client or platform.</li>
</ul>
              <a href="/strategy/editing" target="_blank" className="view-button">View More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h3>Get in Touch</h3>
        <p>If you have any questions or need further information, feel free to contact us:</p>
        <p>Email: aidevmatrixinnovations@gmail.com</p>
        <p>Phone: +91 8123482441 | 7016153673</p>
        <button className="contact-button" onClick={() => window.location.href = '/contact'}>Contact Us</button>
      </section>
    </div>
  );
}

export default Services;