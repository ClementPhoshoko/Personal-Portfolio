import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faYoutube,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      {/* Top Footer Section */}
      <div className="footer-top">
        <div className="footer-content">
          {/* Left Column - Company Info & Social Media */}
          <div className="footer-column company-info">
            <div className="logo">
              <span className="logo-text">CLEMENT</span>
              <span className="logo-dot"></span>
            </div>
            <div className="social-media">
              {/* <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebookF} />
              </a> */}
              {/* make it open on new tab */}
              <a href="https://www.linkedin.com/in/phoshokondaedzo/" className="social-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/NdaedzoPhoshoko" className="social-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {/* <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a> */}
              {/* <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a> */}
              <a href="https://www.youtube.com/@emkidncp" className="social-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-column">
            <h3 className="footer-title">Solutions</h3>
            <ul className="footer-links">
              <li><span className="footer-link">Full Stack Dev</span></li>
              <li><span className="footer-link">DevOps</span></li>
              <li><span className="footer-link">Oracle Cloud</span></li>
              <li><span className="footer-link">API</span></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Platforms</h3>
            <ul className="footer-links">
              <li><span className="footer-link">AWS</span></li>
              <li><span className="footer-link">Docker</span></li>
              <li><span className="footer-link">Oracle</span></li>
              <li><span className="footer-link">Swagger Docs</span></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Tools</h3>
            <ul className="footer-links">
              <li><span className="footer-link">Jira</span></li>
              <li><span className="footer-link">Huawei Cloud</span></li>
              <li><span className="footer-link">GitHub</span></li>
              <li><span className="footer-link">Postman</span></li>
              <li><span className="footer-link">VS Code</span></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Me</h3>
            <ul className="footer-links">
              <li><span className="footer-link" onClick={() => handleNavigation('/journey')}>About Me</span></li>
              <li><span className="footer-link" onClick={() => handleNavigation('/contact')}>Contact Me</span></li>
              <li><span className="footer-link" onClick={() => handleNavigation('/resume')}>My Resume</span></li>
              <li><span className="footer-link" onClick={() => handleNavigation('/achievements')}>Developer Milestones</span></li>
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div className="footer-column newsletter">
            <h3 className="footer-title">SUBSCRIBE TO MY NEWSLETTER</h3>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Email*" 
                className="newsletter-input"
              />
              <button className="newsletter-button">SUBSCRIBE</button>
            </div>
            <p className="privacy-text">
              By subscribing to my newsletter you agreed with the conditions of Clement's Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            Copyright © {new Date().getFullYear()} Ndaedzo Clement Phoshoko
          </div>
          <div className="legal-links">
            <span className="legal-link">Privacy Policy</span>
            <span className="separator">|</span>
            <span className="legal-link">Terms & Conditions</span>
            <span className="separator">|</span>
            <span className="legal-link">FAQs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
