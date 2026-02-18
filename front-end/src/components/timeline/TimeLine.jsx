import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography, Box, Chip } from '@mui/material';
import { CheckCircle, School, Work } from '@mui/icons-material';
import './TimeLine.css';

const TimeLine = () => {
  const timelineData = [
    {
      date: 'Jan 2020 - Dec 2022',
      title: 'Bachelor of Science in Mathematics (Computer Science)',
      location: 'University of Limpopo',
      achievement: 'Math and CS Tutor',
      status: 'completed',
      icon: <School />
    },
    {
      date: 'Jan 2024 - Dec 2024',
      title: 'Bachelor of Science Honors in Mathematics',
      location: 'University of Limpopo',
      achievement: 'Cum Laude Student',
      status: 'completed',
      icon: <CheckCircle />
    },
    {
      date: 'Jan 2025 - Dec 2025',
      title: 'Information Technology Internship',
      location: 'REDM Professional Services (Pty) Ltd',
      achievement: 'React, Node, Oracle',
      // status: 'current',
      status: 'completed',
      icon: <Work />
    }
  ];

  return (
    <>
      {/* Desktop Timeline - Hidden on mobile (768px and below) */}
      <div className="timeline-container desktop-timeline">
        <Typography variant="h5" className="career-title">
          Career Summary
        </Typography>
        <Timeline position="alternate" className="material-timeline">
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent className="timeline-date">
                <Typography variant="body2" color="textSecondary">
                  {item.date}
                </Typography>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <TimelineDot 
                  color={item.status === 'completed' ? 'success' : 'primary'}
                  className={item.status === 'current' ? 'current-dot' : ''}
                >
                  {item.icon}
                </TimelineDot>
                {index < timelineData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              
              <TimelineContent className="timeline-content">
                <Box className="content-box">
                  <Typography variant="h6" component="span" className="timeline-title">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="timeline-location">
                    {item.location}
                  </Typography>
                  {item.achievement && (
                    <Chip 
                      label={item.achievement} 
                      size="small" 
                      className="achievement-chip"
                      color="warning"
                    />
                  )}
                  {item.status === 'current' && (
                    <Chip 
                      label="Currently Active" 
                      size="small" 
                      className="status-chip"
                      color="success"
                    />
                  )}
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      {/* Mobile Timeline - Visible only on 768px and below */}
      <div className="timeline-container mobile-timeline">
        <h5 className="career-title-mobile">Career Summary</h5>
        <div className="mobile-timeline-wrapper">
          {timelineData.map((item, index) => (
            <div key={index} className="mobile-timeline-item">
              <div className="mobile-timeline-line">
                <div className={`mobile-timeline-dot ${item.status === 'current' ? 'current' : 'completed'}`}>
                  {item.icon}
                </div>
                {index < timelineData.length - 1 && <div className="mobile-connector"></div>}
              </div>
              
              <div className="mobile-timeline-content">
                <div className="mobile-date">{item.date}</div>
                <div className="mobile-content-box">
                  <h6 className="mobile-timeline-title">{item.title}</h6>
                  <p className="mobile-timeline-location">{item.location}</p>
                  {item.achievement && (
                    <span className="mobile-achievement-chip">{item.achievement}</span>
                  )}
                  {item.status === 'current' && (
                    <span className="mobile-status-chip">Currently Active</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeLine;
