import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './RecentWork.css';
import { projects as defaultProjects } from './projectsData';

const RecentWork = ({ projects = defaultProjects, title = "Some of my work" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const totalSlides = projects.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX;
    const dragDistance = endX - dragStartX;
    const threshold = 100;
    
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const getOffset = (projectIndex) => {
    let offset = projectIndex - currentIndex;
    if (offset > totalSlides / 2) {
      offset -= totalSlides;
    } else if (offset < -totalSlides / 2) {
      offset += totalSlides;
    }
    return offset;
  };

  const getLayerClass = (projectIndex) => {
    const offset = getOffset(projectIndex);
    
    if (offset === 0) return 'project-slide-active';
    if (offset === -1) return 'project-slide-prev';
    if (offset === -2) return 'project-slide-prev-prev';
    if (offset === 1) return 'project-slide-next';
    if (offset === 2) return 'project-slide-next-next';
    return 'project-slide-hidden';
  };

  return (
    <div className="recent-work-section">
      <h2 className="recent-work-title">{title}</h2>
      <div 
        className="project-carousel-container"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-slide ${getLayerClass(index)}`}
          >
            <div className="project-media">
              {project.type === 'video' ? (
                <video 
                  src={project.src} 
                  alt={project.title}
                  controls
                  playsInline
                  loop
                  draggable={false}
                />
              ) : (
                <img 
                  src={project.src} 
                  alt={project.title} 
                  draggable={false}
                />
              )}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-info-bottom">
                  <div className="project-content-left">
                    <div className="project-descriptions">
                      {Array.isArray(project.description) 
                        ? project.description.map((paragraph, i) => (
                          <p key={i} className="project-description">{paragraph}</p>
                        ))
                        : <p className="project-description">{project.description}</p>
                      }
                    </div>
                  </div>
                  {project.techStack && (
                    <div className="project-tech">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-btn prev-btn" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="carousel-btn next-btn" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
