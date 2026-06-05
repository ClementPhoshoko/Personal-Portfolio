import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './SubscribeModal.css';

const SubscribeModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('hasSeenSubscribeModal');
    
    if (!hasSeenModal) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // 2 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenSubscribeModal', 'true');
  };

  const handleMaybeLater = () => {
    // Just close the modal without saving to localStorage
    // This allows the modal to show again on next visit
    setIsVisible(false);
  };

  const handleFollowGitHub = () => {
    // Open GitHub profile in new tab
    window.open('https://github.com/NdaedzoPhoshoko', '_blank', 'noopener,noreferrer');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="subscribe-modal-overlay">
      <div className="subscribe-modal">
        <button className="close-button" onClick={handleClose} aria-label="Close">
          ×
        </button>
        
        <div className="modal-content">
          <div className="text-content">
            <h3 className="modal-title">Follow Me on GitHub</h3>
            <p className="modal-description">
              Check out my latest projects, code samples, and open-source contributions. Stay updated with my development journey!
            </p>
          </div>
          
          <div className="button-group">
            <button onClick={handleFollowGitHub} className="subscribe-button">
              <FontAwesomeIcon icon={faGithub} />
              <span>Follow</span>
            </button>
            
            <button onClick={handleMaybeLater} className="maybe-later-button">
              <FontAwesomeIcon icon={faClock} />
              <span>Later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;

