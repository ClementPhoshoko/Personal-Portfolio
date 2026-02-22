import React, { useState, useEffect, useRef, useCallback } from "react"; // Import useState, useEffect, useRef, useCallback
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faTrophy,
  faFileAlt,
  faPenToSquare,
  faBook,
  faEnvelope,
  faBars,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

import './NavBar.css'

const Navbar = () => {
  const profileImage = "/assets/images/author-profile.jpg";
  const navigate = useNavigate();
  const location = useLocation();
  const [showBlogMegaMenu, setShowBlogMegaMenu] = useState(false); // State for blog mega menu visibility
  const [showAboutMegaMenu, setShowAboutMegaMenu] = useState(false); // State for about mega menu visibility
  const [showContactMegaMenu, setShowContactMegaMenu] = useState(false); // State for contact mega menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const [rotation, setRotation] = useState(0); // State for circular menu rotation
  const menuContainerRef = useRef(null); // Ref for circular menu container

  const getOptimizedImageSrc = (imagePath) => {
    if (!imagePath) return imagePath;
    const hasQuery = imagePath.includes('?');
    return `${imagePath}${hasQuery ? '&' : '?'}quality=60`;
  };

  const navigateAndCloseMegaMenus = (path) => {
    setShowBlogMegaMenu(false);
    setShowAboutMegaMenu(false);
    setShowContactMegaMenu(false);
    navigate(path);
  };

  // Check if current page is home
  const isHomePage = location.pathname === '/';

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Toggle body scroll
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Close mobile menu when navigating
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setRotation(0); // Reset rotation
    document.body.style.overflow = 'unset';
  };

  // Handle menu item click with loading animation
  const handleMenuItemClick = (path, event) => {
    const target = event.currentTarget;
    
    // Add loading class to trigger animation
    target.classList.add('loading');
    
    // Wait for loading animation to complete, then navigate
    setTimeout(() => {
      // Add closing class to overlay for fade-out animation
      const overlay = document.querySelector('.mobile-menu-overlay');
      if (overlay) {
        overlay.classList.add('closing');
      }
      
      // Navigate after a short delay for blur animation
      setTimeout(() => {
        navigate(path);
        closeMobileMenu();
      }, 300); // Match the fadeOutOverlay duration
    }, 800); // Match the loading animation duration
  };

  // Handle scroll wheel on circular menu
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    // Increase or decrease rotation based on scroll direction
    setRotation(prevRotation => prevRotation + (e.deltaY > 0 ? 15 : -15));
  }, []);

  // Rotate clockwise (forward)
  const rotateClockwise = () => {
    setRotation(prevRotation => prevRotation + 15);
  };

  // Rotate counter-clockwise (backward)
  const rotateCounterClockwise = () => {
    setRotation(prevRotation => prevRotation - 15);
  };

  // Add wheel event listener with passive: false to allow preventDefault
  useEffect(() => {
    const container = menuContainerRef.current;
    if (container && isMobileMenuOpen) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isMobileMenuOpen, handleWheel]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Show page icon only on home page */}
        {isHomePage && (
          <div className="page-icon">
            <img src={getOptimizedImageSrc(profileImage)} alt="Page Icon" className="page-icon-img" />
          </div>
        )}
      </div>
      
      {/* Mobile menu button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Menu with Blur Background */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-item item-1" onClick={(e) => handleMenuItemClick('/', e)}>
              <FontAwesomeIcon icon={faLightbulb} className="mobile-icon" />
              <span className="mobile-label">Home</span>
            </div>

            <div className="mobile-menu-item item-2" onClick={(e) => handleMenuItemClick('/journey', e)}>
              <FontAwesomeIcon icon={faLightbulb} className="mobile-icon" />
              <span className="mobile-label">My Journey</span>
            </div>

            <div className="mobile-menu-item item-3" onClick={(e) => handleMenuItemClick('/achievements', e)}>
              <FontAwesomeIcon icon={faTrophy} className="mobile-icon" />
              <span className="mobile-label">Achievements</span>
            </div>

            <div className="mobile-menu-item item-4" onClick={(e) => handleMenuItemClick('/resume', e)}>
              <FontAwesomeIcon icon={faFileAlt} className="mobile-icon" />
              <span className="mobile-label">Resume</span>
            </div>

            <div className="mobile-menu-item item-5" onClick={(e) => handleMenuItemClick('/blog', e)}>
              <FontAwesomeIcon icon={faPenToSquare} className="mobile-icon" />
              <span className="mobile-label">Blog</span>
            </div>

            <div className="mobile-menu-item item-6" onClick={(e) => handleMenuItemClick('/tutorials', e)}>
              <FontAwesomeIcon icon={faBook} className="mobile-icon" />
              <span className="mobile-label">Tutorials</span>
            </div>

            <div className="mobile-menu-item item-7" onClick={(e) => handleMenuItemClick('/contact', e)}>
              <FontAwesomeIcon icon={faEnvelope} className="mobile-icon" />
              <span className="mobile-label">Contact</span>
            </div>

            {/* Social Links at Bottom */}
            <div className="mobile-menu-socials">
              <a 
                href="https://github.com/NdaedzoPhoshoko" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a 
                href="https://www.linkedin.com/in/phoshokondaedzo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a 
                href="https://www.youtube.com/@emkidncp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      )}

      <ul className="navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          onMouseEnter={() => setShowAboutMegaMenu(true)} // Show on hover
          onMouseLeave={() => setShowAboutMegaMenu(false)} // Hide on mouse leave
          style={{ position: "relative" }} // Needed for positioning the mega menu
        >
        <Link to='/journey'>About Me</Link>
        {showAboutMegaMenu && (
          <div className="about-mega-menu-placeholder blog-mega-menu-placeholder">
            <div className="mega-menu-item" onClick={() => navigateAndCloseMegaMenus('/journey')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faLightbulb} className="icon-my-journey" /> {/* Icon for My Journey */}
              </div>
              <div className="mega-menu-text">
                <h4>My Journey</h4>
                <p>Discover my professional evolution from early beginnings to current expertise, including key career transitions and learning experiences that shaped my path in technology and development.</p>
              </div>
            </div>
            <div className="mega-menu-item" onClick={() => navigateAndCloseMegaMenus('/achievements')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faTrophy} className="icon-achievements" /> {/* Icon for Achievements */}
              </div>
              <div className="mega-menu-text">
                <h4>Achievements</h4>
                <p>Explore my notable accomplishments, certifications, project successes, and recognition received throughout my professional journey in software development and technology innovation.</p>
              </div>
            </div>
            <div className="mega-menu-item" onClick={() => navigateAndCloseMegaMenus('/resume')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faFileAlt} className="icon-my-resume" /> {/* Icon for My Resume */}
              </div>
              <div className="mega-menu-text">
                <h4>My Resume</h4>
                <p>Access my comprehensive professional resume showcasing technical skills, work experience, educational background, and project portfolio that demonstrates my expertise in full-stack development and software engineering.</p>
              </div>
            </div>
          </div>
        )}
      </li>

      {/* Blog World Mega Menu */}
      <li
        onMouseEnter={() => setShowBlogMegaMenu(true)}
        onMouseLeave={() => setShowBlogMegaMenu(false)}
        style={{ position: "relative" }}
      >
        <Link to='/blog'>Blog World</Link>
        {showBlogMegaMenu && (
          <div className="blog-mega-menu-placeholder">
            <div className="mega-menu-item" onClick={() => navigateAndCloseMegaMenus('/blog')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faPenToSquare} className="icon-latest-posts" /> {/* Icon for Latest Posts */}
              </div>
              <div className="mega-menu-text">
                <h4>Latest Posts</h4>
                <p>Browse through my most recent blog entries covering industry insights, technical tutorials, personal reflections, and thought-provoking discussions about current trends in software development.</p>
              </div>
            </div>
            <div className="mega-menu-item" onClick={() => navigateAndCloseMegaMenus('/tutorials')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faBook} className="icon-tutorials" /> {/* Icon for Tutorials */}
              </div>
              <div className="mega-menu-text">
                <h4>Tutorials</h4>
                <p>Access comprehensive step-by-step guides, code examples, and practical walkthroughs designed to help developers master new technologies, frameworks, and programming concepts.</p>
              </div>
            </div>
          </div>
        )}
      </li>

      {/* Contact Me Mega Menu */}
      <li
        onMouseEnter={() => setShowContactMegaMenu(true)}
        onMouseLeave={() => setShowContactMegaMenu(false)}
        style={{ position: "relative" }}
      >
        <Link to="/contact">Contact Me</Link>
        {showContactMegaMenu && (
          <div className="contact-mega-menu-placeholder blog-mega-menu-placeholder">
            <div className="mega-menu-item" onClick={() => navigateAndCloseMegaMenus('/contact')} style={{ cursor: 'pointer' }}>
              <div className="mega-menu-icon">
                <FontAwesomeIcon icon={faEnvelope} className="icon-email-me" /> {/* Icon for Email Me */}
              </div>
              <div className="mega-menu-text">
                <h4>Email Me</h4>
                <p>Reach out directly via email for collaboration opportunities, technical discussions, project inquiries, or any questions about my work and expertise in software development.</p>
              </div>
            </div>
          </div>
        )}
      </li>
    </ul>
  </nav>
)};

export default Navbar;
