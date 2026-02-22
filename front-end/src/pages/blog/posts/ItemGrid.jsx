import React, { useState, useEffect } from 'react';
import Item from './item/Item';
import './ItemGrid.css';
import blogData from '../data.json';

const ItemGrid = () => {
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [filterValue, setFilterValue] = useState('');
  const [isGridLoading, setIsGridLoading] = useState(true);

  useEffect(() => {
    // Transform the data to match the Item component props
    const transformedPosts = blogData.blogPosts.map(post => ({
      id: post.id,
      title: post.title,
      description: post.description,
      image: post.image,
      authorName: post.author.name,
      authorAvatar: post.author.avatar,
      date: post.publishDate,
      tags: post.tags || [],
      category: post.category || ''
    }));
    
    setAllBlogPosts(transformedPosts);
    setFilteredPosts(transformedPosts);
    setIsGridLoading(false);
  }, []);

  // Filter posts based on selected criteria
  useEffect(() => {
    if (filterType === 'all' || !filterValue) {
      setFilteredPosts(allBlogPosts);
    } else {
      const filtered = allBlogPosts.filter(post => {
        switch (filterType) {
          case 'title':
            return post.title.toLowerCase().includes(filterValue.toLowerCase());
          case 'date':
            return post.date.toLowerCase().includes(filterValue.toLowerCase());
          case 'tag':
            return post.tags.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
          case 'category':
            return post.category.toLowerCase().includes(filterValue.toLowerCase());
          default:
            return true;
        }
      });
      setFilteredPosts(filtered);
    }
  }, [allBlogPosts, filterType, filterValue]);

  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length));
      setIsLoading(false);
    }, 500);
  };

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  return (
    <div className="item-grid-container">
      {/* Filter Component */}
      <div className="filter-container">
        <div className="filter-controls">
          <select 
            className="filter-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Posts</option>
            <option value="title">Title</option>
            <option value="date">Date</option>
            <option value="tag">Tag</option>
            <option value="category">Category</option>
          </select>
          <input
            type="text"
            className="filter-input"
            placeholder={`Filter by ${filterType === 'all' ? 'anything' : filterType}...`}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            disabled={filterType === 'all'}
          />
        </div>
      </div>

      <div className="item-grid">
        {isGridLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="item-grid-skeleton-card shimmer">
                <div className="item-grid-skeleton-image" />
                <div className="item-grid-skeleton-content">
                  <div className="item-grid-skeleton-line title" />
                  <div className="item-grid-skeleton-line" />
                  <div className="item-grid-skeleton-line short" />
                </div>
              </div>
            ))
          : displayedPosts.map((post) => (
          <Item
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            authorName={post.authorName}
            authorAvatar={post.authorAvatar}
            date={post.date}
          />
        ))}
      </div>
      
      {/* Load More Button */}
      <div className="load-more-container">
        {hasMorePosts ? (
          <button 
            className="load-more-btn"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            <span className="load-more-text">
              {isLoading ? 'Loading...' : 'Load More Posts'}
            </span>
            <span className={`load-more-chevron ${isLoading ? 'rotated' : ''}`}>
              ▼
            </span>
          </button>
        ) : (
          <div className="no-more-posts">
            <span className="no-more-text">No more posts</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemGrid;
