import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleStartProjectClick = () => {
    navigate('/project');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <Link to="/">Aii DEV</Link>
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/categories">Projects</Link></li>
              
              {/* <li><Link to="/project">Start a Project</Link></li> */}
              <li><Link to="/contact">Contact Us</Link></li>
              {/* {<li><a href="#projects">Projects</a></li>} */}
              {/* <li><a href="#login">Log in/Sign in</a></li> */}
              <li>
                <button className="start-project-btn" onClick={handleStartProjectClick}>
                  Start a Project
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;