import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ 
  id,
  title = "Thusa, I am a blog post title",
  description = "There is no description provided for this blog post.",
  image = "/assets/blogs/mainteachingstudents.jpeg",
  authorName = "No Author provided",
  authorAvatar = "/assets/images/author-profile.jpg",
  date = "No date either"
}) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const getOptimizedImageSrc = (imagePath) => {
    if (!imagePath) return imagePath;
    const hasQuery = imagePath.includes('?');
    return `${imagePath}${hasQuery ? '&' : '?'}quality=60`;
  };

  const handleClick = () => {
    if (id) {
      // Navigate to the view item page with the post ID
      navigate(`/blog/view/${id}`);
    }
  };

  return (
    <div className="blog-item-card" onClick={handleClick}>
      {/* Featured Image */}
      <div className="card-image-container">
        {!imageLoaded && <div className="card-image-skeleton shimmer" />}
        <img 
          src={getOptimizedImageSrc(image)} 
          alt={title}
          className={`card-image ${imageLoaded ? 'show' : 'hide'}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = '/assets/images/placeholder-project.jpg';
            setImageLoaded(true);
          }}
        />
      </div>

      {/* Content Section */}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>

      {/* Footer with Author and Date */}
      <div className="card-footer">
        <div className="author-info">
          <img 
            src={authorAvatar} 
            alt={authorName}
            className="author-avatar"
          />
          <div className="author-details">
            <span className="author-name">{authorName}</span>
            <span className="post-date">{date}</span>
          </div>
        </div>
        <div className="action-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path 
              d="M4 12L12 4M12 4H6M12 4V8" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Item;
