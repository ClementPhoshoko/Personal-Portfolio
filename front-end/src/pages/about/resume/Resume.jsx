import React, { useEffect, useState } from 'react';
import './Resume.css';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Resume = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('.resume-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="resume-container">
      <div className="resume-document">
        {/* Left Column - Light Grey Background */}
        <div className="resume-left-column">
          {/* Profile Image */}
          <div 
            id="profile-section" 
            className={`resume-section profile-image ${visibleSections.has('profile-section') ? 'animate-slide-in-left' : ''}`}
          >
            <img src="/assets/images/author-profile.jpg" alt="NDAEDZO CLEMENT PHOSHOKO" />
          </div>

          {/* Contact Section */}
          <div 
            id="contact-section" 
            className={`resume-section contact-section ${visibleSections.has('contact-section') ? 'animate-slide-in-left' : ''}`}
          >
            <h2 className="section-heading">CONTACT</h2>
            <div className="contact-item">
              <i className="icon-phone"></i>
              <span>+27 72 315 7290</span>
            </div>
            <div className="contact-item">
              <i className="icon-email"></i>
              <span>clement.phoshoko@outlook.com</span>
            </div>
            <div className="contact-item">
              <i className="icon-location"></i>
              <a href="https://clementphoshoko.co.za" target="_blank" rel="noopener noreferrer">clementphoshoko.co.za</a>
            </div>
            <div className="contact-item">
              <i className="icon-location"></i>
              <span>Johannesburg, South Africa</span>
              <span className="relocation-note">(open to relocation)</span>
            </div>
          </div>

          {/* Core Skills Section */}
          <div 
            id="skills-section" 
            className={`resume-section skills-section ${visibleSections.has('skills-section') ? 'animate-slide-in-left' : ''}`}
          >
            <h2 className="section-heading">CORE SKILLS</h2>
            <ul className="skills-list">
              <li><b>Languages:</b> Java, Python, JavaScript (ES6+), SQL, Shell Scripting, HTML5, CSS3</li>
              <li><b>Frameworks:</b> React.js, Node.js, Express.js, FastAPI</li>
              <li><b>Data:</b> MySQL, ClickHouse, MinIO, Apache NiFi, Kafka, Spark, REST APIs</li>
              <li><b>DevOps &amp; tools:</b> Git, Docker, VMware, Azure DevOps, CI/CD, Grafana, Jira, Huawei CodeArts</li>
              <li><b>Cloud &amp; concepts:</b> Oracle Cloud, Huawei Cloud, Vercel, OOP, system design, data structures &amp; algorithms</li>
            </ul>
          </div>

          {/* Qualities Section */}
          <div 
            id="qualities-section" 
            className={`resume-section qualities-section ${visibleSections.has('qualities-section') ? 'animate-slide-in-left' : ''}`}
          >
            <h2 className="section-heading">QUALITIES</h2>
            <ul className="qualities-list">
              <li>Excellent collaboration and interpersonal communication skills</li>
              <li>Resilient under pressure, with the ability to perform in high-demand environments</li>
              <li>Analytical thinker with a detail-oriented mindset</li>
              <li>Effective time management and task prioritization skills</li>
              <li>Committed to continuous learning and personal growth</li>
            </ul>
          </div>

          {/* Social Section */}
          <div 
            id="social-section" 
            className={`resume-section social-section ${visibleSections.has('social-section') ? 'animate-slide-in-left' : ''}`}
          >
            <h2 className="section-heading">SOCIAL</h2>
            <ul className="social-list">
              <li>
                <a href="https://linkedin.com/in/ndaedzophoshoko" target="_blank" rel="noopener noreferrer">
                  <LinkedIn className="social-icon" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/clementphoshoko" target="_blank" rel="noopener noreferrer">
                  <GitHub className="social-icon" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            id="additional-section"
            className={`resume-section qualities-section ${visibleSections.has('additional-section') ? 'animate-slide-in-left' : ''}`}
          >
            <h2 className="section-heading">INTERESTS</h2>
            <ul className="qualities-list">
              <li>Technology risk, IT controls and governance, cybersecurity, cloud computing, and DevOps.</li>
            </ul>
          </div>
        </div>

        {/* Right Column - White Background */}
        <div className="resume-right-column">
          {/* Name Section */}
          {/* <div className="name-section">
            <h1 className="first-name">NDAEDZO CLEMENT</h1>
            <h1 className="last-name">PHOSHOKO</h1>
          </div> */}

          {/* Job Title */}
          {/* <div className="job-title">
            <h2>SOFTWARE DEVELOPER INTERN</h2>
          </div> */}

          {/* Summary Section */}
          <div 
            id="summary-section" 
            className={`resume-section summary-section ${visibleSections.has('summary-section') ? 'animate-slide-in-right' : ''}`}
          >
            <h2 className="section-heading">SUMMARY</h2>
            <p>Cum Laude BSc (Honours) Mathematics graduate and Junior Full Stack Developer with experience developing enterprise banking platforms, cloud applications, backend services, data pipelines, and AI-powered systems. Skilled in React.js, Node.js, Python, SQL, CI/CD, and cloud technologies, with a strong foundation in software engineering and distributed systems.</p>
          </div>

          {/* Education Section */}
          <div 
            id="education-section" 
            className={`resume-section education-section ${visibleSections.has('education-section') ? 'animate-slide-in-right' : ''}`}
          >
            <h2 className="section-heading">EDUCATION</h2>
            <div className="education-item">
              <h3>Bachelor of Science Honours in Mathematics</h3>
              <p className="institution">University of Limpopo | Jan 2024 – Nov 2024</p>
              <p className="project-detail"><em>Research:</em> “Linear Codes and G-modules” — mathematical vectors and post-quantum cryptography, with a focus on encryption and decryption.</p>
            </div>
            <div className="education-item">
              <h3>Bachelor of Science in Mathematics and Computer Science</h3>
              <p className="institution">University of Limpopo | Jan 2020 – Dec 2022</p>
              <p className="project-detail"><em>Final Year project:</em> Developed a mobile tutorship app.</p>
            </div>
          </div>

          {/* Career Summary Section */}
          <div 
            id="career-section" 
            className={`resume-section career-section ${visibleSections.has('career-section') ? 'animate-slide-in-right' : ''}`}
          >
            <h2 className="section-heading">CAREER SUMMARY</h2>
            <div className="career-item">
              <h3>Junior Full Stack Developer — Contracted to Absa Group Limited</h3>
              <p className="duration">Jan 2026 – Present | 270 Republic Road, Randburg</p>
              <ul className="responsibilities">
                <li>Develop and maintain enterprise banking platforms and internal engineering solutions using Python, SQL, and Shell Scripting.</li>
                <li>Build backend services, REST APIs, and data pipelines integrating Apache NiFi, Kafka, Spark, MinIO, and ClickHouse.</li>
                <li>Build and maintain CI/CD pipelines and automate operational workflows, helping reduce manual support tasks by 99% and saving the team 15 hours weekly.</li>
                <li>Test, monitor, and optimize platforms for performance, scalability, security, and high availability, collaborating with product teams in Agile.</li>
              </ul>
            </div>
            <div className="career-item">
              <h3>Software Development Intern — REDM Professional Services (Pty) Ltd</h3>
              <p className="duration">Jan 2025 – Dec 2025 | Woodmead Business Park, Sandton, 2191</p>
              <ul className="responsibilities">
                <li>Developed three client-facing web applications using React and Node.js, improving load times and system reliability.</li>
                <li>Built an AI-powered applicant tracking system with Node.js to parse resumes and automate candidate data staging.</li>
                <li>Collaborated in a six-person Agile/Scrum team, using Jira to track work across two-week sprints.</li>
              </ul>
            </div>
            <div className="career-item">
              <h3>Tutor – Centre for Academic Excellence (CAE)</h3>
              <p className="duration">Jan 2021 – Jun 2022 | University of Limpopo, Mankweng, 0720</p>
              <ul className="responsibilities">
                <li>Mentored and tutored Math and Computer science students.</li>
                <li>Addressed academic challenges faced by first year students.</li>
              </ul>
            </div>
          </div>

          {/* References Section */}
          <div 
            id="references-section" 
            className={`resume-section references-section ${visibleSections.has('references-section') ? 'animate-slide-in-right' : ''}`}
          >
            <h2 className="section-heading">REFERENCES</h2>
            <div className="reference-item"><p>References available upon request.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
