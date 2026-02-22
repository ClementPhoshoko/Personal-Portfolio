import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import SubscribeModal from '../../components/subscribe/SubscribeModal';

const programmingLanguages = [
  { name: 'JavaScript', icon: '/assets/language_icons/javascript-logo-svgrepo-com.svg' },
  { name: 'React', icon: '/assets/language_icons/react-svgrepo-com.svg' },
  { name: 'SQL', icon: '/assets/language_icons/sql-svgrepo-com.svg' },
  { name: 'Node.js', icon: '/assets/language_icons/node-svgrepo-com.svg' },
  { name: 'Python', icon: '/assets/language_icons/python-svgrepo-com.svg' },
  { name: 'HTML', icon: '/assets/language_icons/html5-svgrepo-com.svg' },
  { name: 'CSS', icon: '/assets/language_icons/css3-svgrepo-com.svg' },
  { name: 'C++', icon: '/assets/language_icons/cpp3-svgrepo-com.svg' },
  { name: 'Java', icon: '/assets/language_icons/java-svgrepo-com.svg' },
  { name: 'Swagger', icon: '/assets/language_icons/swagger-svgrepo-com.svg' },
  { name: 'Express.js', icon: '/assets/language_icons/express-svgrepo-com.svg' },
  { name: 'PostgreSQL', icon: '/assets/language_icons/postgresql-logo-svgrepo-com.svg' },
  { name: 'MySQL', icon: '/assets/language_icons/mysql-svgrepo-com.svg' },
  { name: 'Oracle', icon: '/assets/language_icons/oracle-svgrepo-com.svg' },
  { name: 'Assembly', icon: '/assets/language_icons/assembly-svgrepo-com.svg' },
  { name: 'Git', icon: '/assets/language_icons/git-svgrepo-com.svg' },
  { name: 'VS Code', icon: '/assets/language_icons/vs-code-svgrepo-com.svg' }
];

const Home = () => {
  const getOptimizedImageSrc = (imagePath) => {
    if (!imagePath) return imagePath;
    const hasQuery = imagePath.includes('?');
    return `${imagePath}${hasQuery ? '&' : '?'}quality=60`;
  };

  const scrollToMainContainer = () => {
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <SubscribeModal />
      <div className="top-container">
        <div className="top-left-container">
          {/* Default greeting for larger screens */}
          <p className="greeting-intro greeting-default">Hi, my name is</p>
          <h1 className="greeting-name greeting-default">Clement Phoshoko.</h1>
          <h2 className="greeting-tagline greeting-default">I build tech things.</h2>
          
          {/* Alternative greeting for small screens (768px and below) */}
          <p className="mobile-greeting-intro">Hi, my name is</p>
          <h1 className="mobile-greeting-name">Clement Phoshoko.</h1>
          <h2 className="mobile-greeting-tagline">I build tech things.</h2>
          
          <p className="greeting-description">
            I'm a full-stack developer who gets way too excited about clean code, efficient algorithms, and elegant data structures. Currently obsessing over building scalable applications with proper error handling, comprehensive testing, and documentation that actually makes sense.
          </p>
          <div className="scroll-indicator" onClick={scrollToMainContainer}>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-down" />
          </div>
        </div>
        <div className="top-right-container">
          <img 
            src={getOptimizedImageSrc('/assets/images/reactJscode.png')} 
            alt="ReactJS script preview image" 
            className="script-preview-image"
          />
        </div>
        <div className="languages-scroll-container">
          <div className="languages-scroll">
            {Array.from({ length: 50 }, (_, setIndex) => 
              programmingLanguages.map((lang, index) => (
                <div 
                  key={`${setIndex}-${index}`} 
                  className="language-item"
                  style={{ '--item-index': index }}
                >
                  <img src={lang.icon} alt={`${lang.name} icon`} className="language-icon" />
                  <span className="language-name">{lang.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
              <div className="main-container">
          <div className="services-section">
            <h2 className="services-title">Why, work with Clement?</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">Responsive Sites</h3>
                <p className="service-card-description">
                  Mobile-first websites that adapt seamlessly across all devices. 
                  Modern UI/UX design with clean interfaces and optimal performance. 
                  Every pixel crafted with attention to detail for brand differentiation.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="service-card-title">Readable Code</h3>
                <p className="service-card-description">
                  Clean, maintainable code following industry best practices and 
                  comprehensive documentation. Well-structured with proper naming 
                  conventions for effortless collaboration and scalability.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="service-card-title">Software Development</h3>
                <p className="service-card-description">
                  Robust, scalable software solutions using cutting-edge technologies. 
                  Full-stack applications and API development with high-performance 
                  solutions that handle complex business logic securely.
                </p>
              </div>
              
              <div className="service-card">
                <h3 className="service-card-title">Technical Excellence</h3>
                <p className="service-card-description">
                  Highest standards through rigorous testing and continuous integration. 
                  Performance optimization with security best practices and 
                  future-proof architecture for business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
