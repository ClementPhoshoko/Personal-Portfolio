import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './RecentWork.css';
import { projects as defaultProjects } from './projectsData';

const RecentWork = ({ projects = defaultProjects, title = "Some of my work" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState(new Set([0])); // Track loaded media
  const videoRefs = useRef([]);
  const loadedProjects = useRef(new Set([0])); // Load first project initially

  const totalSlides = projects.length;

  useEffect(() => {
    // Mark nearby projects as loaded
    [currentIndex, 
     (currentIndex - 1 + totalSlides) % totalSlides,
     (currentIndex - 2 + totalSlides) % totalSlides,
     (currentIndex + 1) % totalSlides,
     (currentIndex + 2) % totalSlides
    ].forEach(idx => {
      loadedProjects.current.add(idx);
    });

    // Play active video, pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex, totalSlides]);

  const handleMediaLoad = (index) => {
    setMediaLoaded(prev => new Set([...prev, index]));
  };

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

  const isActive = (index) => index === currentIndex;
  const isVisible = (index) => {
    const offset = getOffset(index);
    return Math.abs(offset) <= 2;
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
              {loadedProjects.current.has(index) ? (
                <>
                  {/* Show skeleton while loading */}
                  {!mediaLoaded.has(index) && isVisible(index) && (
                    <div className="skeleton-loader"></div>
                  )}
                  
                  {/* Actual media */}
                  {project.type === 'video' ? (
                    <video 
                      ref={(el) => videoRefs.current[index] = el}
                      src={project.src} 
                      alt={project.title}
                      playsInline
                      loop
                      muted
                      preload="metadata"
                      draggable={false}
                      onLoadedData={() => handleMediaLoad(index)}
                      style={{ opacity: mediaLoaded.has(index) ? 1 : 0 }}
                    />
                  ) : (
                    <img 
                      src={project.src} 
                      alt={project.title} 
                      loading="lazy"
                      draggable={false}
                      onLoad={() => handleMediaLoad(index)}
                      style={{ 
                        opacity: mediaLoaded.has(index) ? 1 : 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  )}
                </>
              ) : (
                <div className="project-media-placeholder"></div>
              )}
              {isActive(index) && (project.description || project.techStack) && (
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-info-bottom">
                    {project.description && (
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
                    )}
                    {project.techStack && (
                      <div className="project-tech">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
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
