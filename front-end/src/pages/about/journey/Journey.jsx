import React, { useEffect, useState } from 'react';
import TimeLine from '../../../components/timeline/TimeLine.jsx';
import './Journey.css';

const Journey = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Trigger title animation after component mounts
    const titleTimer = setTimeout(() => setTitleVisible(true), 500);

    return () => {
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <div className="journey-container">
      {/* Main Content */}
      <div className="journey-content">
        {/* Animated Title */}
        <div className="title-section">
          <h1 className={`journey-title ${titleVisible ? 'animate' : ''}`}>
            <span className="title-word title-word-1">My</span>
            <span className="title-word title-word-2">Cosmic</span>
            <span className="title-word title-word-3">Journey</span>
          </h1>
          <p className={`journey-subtitle ${titleVisible ? 'animate' : ''}`}>
            Exploring the universe of technology, one innovation at a time
          </p>
        </div>

        {/* Main Layout */}
        <div className="journey-layout">
          {/* Left Container - Timeline */}
          <div className="left-container">
            <div className="timeline-wrapper">
              <TimeLine />
            </div>
          </div>

          {/* Right Container - Additional Info */}
          <div className="right-container">
            <div className="info-wrapper">
              <div className="info-content">
                <h3>About My Journey</h3>
                <p>I am Ndaedzo "Clement" Phoshoko, a mathematician and technologist with a strong academic foundation and a growing professional journey. From Jan 2020 to Dec 2022, I completed my <b>BSc in Mathematics and Computer Science</b> at the University of Limpopo,
                  where I built my passion for problem-solving and technology.<br /><br />
                  In Jan 2024 to Dec 2024, I pursued my <b>BSc Honours in Mathematics</b> at the University of Limpopo, graduating Cum Laude as the top of my class with a 76% average. My research, titled <b>“Linear Codes and G-modules,”</b> used mathematical vectors to study encryption and decryption. Alongside my studies,
                  I spent three years tutoring Mathematics and Computer Science, an experience that strengthened both my analytical thinking and ability to mentor others effectively. <br /><br />
                  From Jan to Dec 2025, I worked as an <b>IT Intern</b> at REDM Professional Services, applying my technical skills to real-world projects. As part of the DevOps team, I developed and refined client application features, including full CRUD operations, and collaborated with fellow interns on front-end and back-end development for an applicant tracking system (ATS). I used programming languages including Java, C++, and SQL, and participated in Centre of Excellence (COE) standups focused on knowledge sharing and continuous learning. The experience strengthened my passion for mathematics, technology, and data, and my interest in building systems that solve real-world challenges. <br /><br />
                  From Jan 2026, I work as a <b>Junior Full Stack Developer</b>, contracted to Absa Group Limited through RedMPS (Pty Ltd). I contribute to the development, automation, testing, and maintenance of enterprise banking platforms and internal engineering solutions. My work spans backend services, data pipelines, APIs, and platform integrations, using Python, Shell Scripting, Azure DevOps, Apache NiFi, Kafka, and React.js to improve system reliability and scalability. I collaborate with cross-functional teams to optimize operational processes and support CI/CD workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
