import React, { useRef, useState } from 'react';
import './Achievements.css';
// import CustomIframe from '../../../components/custom_iframe/CustomIframe';

const achievements = [
  {
    id: 1,
    title: "Robot with One-Eye",
    category: "Personal Project",
    description: "Captures webcam video, detects motion in real-time, and identifies direction using OpenCV and Java Swing.",
    technologies: ["OpenCV", "Java", "Java Swing"],
    image: "/assets/images/robot_with_one_eye.png",
    year: "2024",
    link: "https://github.com/NdaedzoPhoshoko/Robot-With-One-Eye"
  },
  {
    id: 2,
    title: "Linear Codes and G-Modules",
    category: "Academic Project", 
    description: "G-modules enhance linear codes for error correction through algebraic optimization of encoding/decoding.",
    technologies: ["Groups", "Gap", "Linear Algebra", "Matlab"],
    image: "/assets/images/research_screenshot.png",
    year: "2024",
    link: "https://www.overleaf.com/read/kqfssdgrbwzh#c4639a"
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "IT Project",
    description: "A responsive portfolio website using React.js, Node.js, and Express.js with modern UI/UX design.",
    technologies: ["React.js", "Node.js", "Express.js", "CSS3"],
    image: "/assets/images/langs_screenshot.png",
    year: "2025",
    link: "https://github.com/NdaedzoPhoshoko/Portfolio-for-Clement"
  },
  {
    id: 4,
    title: "Dragon44x Indicator",
    category: "Market Analysis",
    description: "Inverse Head and Shoulders, Descending Triangle, Bull Flag, and etc. indicators in MT4.",
    technologies: ["MQL", "MQL4", "Statistics"],
    image: "/assets/images/market.png",
    year: "2025"
  },
  {
    id: 5,
    title: "C++ Projects[Batch]",
    category: "Learning",
    description: "Exploring C++ from IO streams, functions, classes, and etc.",
    technologies: ["C++", "IO streams", "Functions", "Classes"],
    image: "/assets/images/cpp_screenshot.png",
    year: "2022",
    link: "https://github.com/NdaedzoPhoshoko/CPP-Projects"
  },
  {
    id: 6,
    title: "Java Projects[Batch]",
    category: "Learning",
    description: "Exploring Java from Data Structures to Threads. Also covers different topics in OOP.",
    technologies: ["Java", "Data Structures", "OOP", "Threads"],
    image: "/assets/images/java_screenshot.png",
    year: "2023",
    link: "https://github.com/NdaedzoPhoshoko/Java-Projects"
  }
];

const certificates = [
  {
    id: 1,
    title: "OCI Certified Foundations Associate",
    date: "Feb 2025",
    place: "Oracle",
    icon: "/assets/certs_icons/OCI2024FNDCFAcloud.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CDBE48D66A465AF2321BE00C44E4F5FCADAB24CAFF32BF3C7D9DF5DEEFB9A203"
  },
  {
    id: 2,
    title: "OCI Certified Data Foundations Associate",
    date: "Mar 2025",
    place: "Oracle",
    icon: "/assets/certs_icons/OCI2024DCFAdata.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CDBE48D66A465AF2321BE00C44E4F5FC3C1803EF205A7D1B53B170D130106E5F"
  },
  {
    id: 3,
    title: "OCI Certified AI Foundations Associate",
    date: "Feb 2025",
    place: "Oracle",
    icon: "/assets/certs_icons/OCI24AICFAai.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=73C102EA909F226C8F85B0A63FAA86767484EF7259C2156B63FD5E5C0F1A5CD7"
  },
  {
    id: 4,
    title: "Oracle Database Administration I (1z0-082)",
    date: "Oct 2025",
    place: "Oracle",
    icon: "/assets/certs_icons/Learning-Path_badge_default.png",
    link: "https://education.oracle.com/oracle-database-administration-i/pexam_1Z0-082"
  },
  {
    id: 5,
    title: "16 Weeks Sofware development Program",
    date: "Nov 2023",
    place: "Power Learn Project",
    icon: "/assets/certs_icons/powerlearn.png",
    link: "https://academy.powerlearnprojectafrica.org/verify-cert/f69d838a-e768-4d1e-85d5-b8520953d348"
  },
  {
    id: 6,
    title: "Agile and Scrum Course",
    date: "Sep 2024",
    place: "Udemy",
    icon: "/assets/certs_icons/udemy.png",
    link: "https://www.udemy.com/certificate/UC-cc6a8354-38f8-4bb6-a7de-ca1240070ba1/"
  },
  {
    id: 7,
    title: "Java Data Structures and Algorithms",
    date: "Sep 2024",
    place: "Udemy",
    icon: "/assets/certs_icons/udemy.png",
    link: "https://www.udemy.com/certificate/UC-507b8d92-27c1-42ee-9600-3c4db86a71a5/"
  },
  {
    id: 8,
    title: "MS Power BI Desktop for Business Intelligence",
    date: "In-Progress",
    place: "Udemy",
    icon: "/assets/certs_icons/udemy.png",
    link: "https://www.udemy.com/course/microsoft-power-bi-up-running-with-power-bi-desktop/"
  },
  {
    id: 9,
    title: "Complete Java Course",
    date: "Sept 2024",
    place: "Udemy",
    icon: "/assets/certs_icons/udemy.png",
    link: "https://www.udemy.com/certificate/UC-97954066-1887-4b6e-bd87-ee81b4e3d7cb/"
  },
  {
    id: 10,
    title: "Android Development Course with Java",
    date: "In-Progress",
    place: "Udemy",
    icon: "/assets/certs_icons/udemy.png",
    link: "https://www.udemy.com/course/the-complete-android-10-developer-course-mastering-android/"
  }
];

const Achievements = () => {
  const leetcodesRef = useRef(null);
  const [showLeftEdge, setShowLeftEdge] = useState(false);
  const [showRightEdge, setShowRightEdge] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [loadedAchievementImages, setLoadedAchievementImages] = useState({});
  // const [isIframeOpen, setIsIframeOpen] = useState(false);
  // const [iframeUrl, setIframeUrl] = useState('');
  // const [iframeTitle, setIframeTitle] = useState('');

  const leetcodeItems = [
    {
      id: 1,
      title: 'Tree Constructor',
      description: 'Checks if pairs of child-parent nodes form a valid binary tree with unique nodes and at most two children per parent.',
      languages: ['Java', 'Python'],
      leetcodeUrl: '',
      githubUrl: 'https://github.com/NdaedzoPhoshoko/Tree-Constructor-leetcode'
    },
    {
      id: 2,
      title: 'Cominatorics Problem',
      description: 'Checks if a string of parentheses is valid using a combinatorial formula.',
      languages: ['Java', 'Mathematics'],
      leetcodeUrl: '',
      githubUrl: 'https://github.com/NdaedzoPhoshoko/Combinatorics-problems-leetcode'
    },
    {
      id: 3,
      title: 'Dynamic Memory Allocation',
      description: 'Uses user-defined package Pseudo.h; creates a Pseudo object, adds integers, prints elements, size, emptiness, and accesses an element by index.',
      languages: ['C++'],
      leetcodeUrl: '',
      githubUrl: 'https://github.com/NdaedzoPhoshoko/CPP-Projects/tree/master/Dynamic%20memory%20allocation(increasing%20size%20of%20data%20structure%20dynamically)'
    },
    {
      id: 4,
      title: 'Pascal Triangle Problem',
      description: 'The encryption sums adjacent digits, keeps only last digit, repeats until two digits remain. T=O(n^2)',
      languages: ['Java'],
      leetcodeUrl: '',
      githubUrl: 'https://github.com/NdaedzoPhoshoko/Pascal-Triangle-Leetcode'
    },
    {
      id: 5,
      title: 'Self Sufficient Proper Substring',
      description: 'Find the longest substring where no character appears outside it and the substring is not the entire string.',
      languages: ['Java'],
      leetcodeUrl: '',
      githubUrl: 'https://github.com/NdaedzoPhoshoko/Self-sufficient-proper-substring'
    },
    {
      id: 6,
      title: 'Count Duplicates from .txt file',
      description: 'Read a text file and count occurrences of each word, returning a dictionary of word counts.',
      languages: ['Java'],
      leetcodeUrl: '',
      githubUrl: 'https://github.com/NdaedzoPhoshoko/Count-duplicates-from-txt-file'
    }
  ];

  const atLeftEdge = () => {
    const el = leetcodesRef.current;
    if (!el) return true;
    return el.scrollLeft <= 0;
  };

  const atRightEdge = () => {
    const el = leetcodesRef.current;
    if (!el) return true;
    return Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
  };

  const flashEdge = (side) => {
    if (side === 'left') {
      setShowLeftEdge(true);
      setTimeout(() => setShowLeftEdge(false), 700);
    } else {
      setShowRightEdge(true);
      setTimeout(() => setShowRightEdge(false), 700);
    }
  };

  const scrollByPage = (direction) => {
    if (!leetcodesRef.current) return;
    const container = leetcodesRef.current;
    if (direction === 'next' && atRightEdge()) {
      flashEdge('right');
      return;
    }
    if (direction === 'prev' && atLeftEdge()) {
      flashEdge('left');
      return;
    }
    const amount = container.clientWidth * (direction === 'next' ? 1 : -1);
    container.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // const openIframeModal = (url, title) => {
  //   setIframeUrl(url);
  //   setIframeTitle(title);
  //   setIsIframeOpen(true);
  // };

  // const closeIframeModal = () => {
  //   setIsIframeOpen(false);
  //   setIframeUrl('');
  //   setIframeTitle('');
  // };

  const toggleShowAllCerts = () => {
    setShowAllCerts(!showAllCerts);
  };

  const getOptimizedImageSrc = (imagePath) => {
    if (!imagePath) return imagePath;
    const hasQuery = imagePath.includes('?');
    return `${imagePath}${hasQuery ? '&' : '?'}quality=60`;
  };

  const handleAchievementImageLoaded = (achievementId) => {
    setLoadedAchievementImages((prev) => ({
      ...prev,
      [achievementId]: true
    }));
  };

  return (
    <div className="achievements-container">
      {/* Projects Section */}
      <div className="section-header">
        <h1 className="section-title">Projects</h1>
        <div className="section-underline"></div>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`achievement-card ${loadedAchievementImages[achievement.id] ? 'is-loaded' : 'is-loading'}`}
          >
            <div className="achievement-image-container">
              {!loadedAchievementImages[achievement.id] && (
                <div className="achievement-image-skeleton shimmer" />
              )}

              <img 
                src={getOptimizedImageSrc(achievement.image)}
                alt={achievement.title}
                className={`achievement-image ${loadedAchievementImages[achievement.id] ? 'show' : 'hide'}`}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                onLoad={() => handleAchievementImageLoaded(achievement.id)}
                onError={(e) => {
                  e.target.src = '/assets/images/placeholder-project.jpg';
                  handleAchievementImageLoaded(achievement.id);
                }}
              />

              {loadedAchievementImages[achievement.id] && achievement.link && (
                <div 
                  className="github-icon-overlay"
                  onClick={() => window.open(achievement.link, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <svg 
                    className="github-icon" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              )}
            </div>
            
            <div className="achievement-content">
              {loadedAchievementImages[achievement.id] ? (
                <>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-category">{achievement.category}</p>
                  <p className="achievement-description">{achievement.description}</p>

                  <div className="achievement-technologies">
                    {achievement.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </>
              ) : (
                <div className="achievement-content-skeleton">
                  <div className="skeleton-line skeleton-title shimmer" />
                  <div className="skeleton-line skeleton-category shimmer" />
                  <div className="skeleton-line skeleton-description shimmer" />
                  <div className="skeleton-line skeleton-description short shimmer" />
                  <div className="achievement-tech-skeleton-row">
                    <span className="skeleton-chip shimmer" />
                    <span className="skeleton-chip shimmer" />
                    <span className="skeleton-chip shimmer" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="section-header">
        <h1 className="section-title">Certificates & Badges</h1>
        <div className="section-underline"></div>
      </div>
      
      <div className="certificates-grid">
        {(showAllCerts ? certificates : certificates.slice(0, 3)).map((cert) => (
          <div 
            key={cert.id} 
            className="certificate-item"
            onClick={() => window.open(cert.link, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <div className="certificate-icon">
              <img 
                src={cert.icon} 
                alt={cert.title}
                className="cert-icon"
                onError={(e) => {
                  e.target.src = '/assets/certs_icons/Learning-Path_badge_default.png';
                }}
              />
            </div>
            <div className="certificate-details">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-date">{cert.date}</p>
              <p className="certificate-place">{cert.place}</p>
            </div>
          </div>
        ))}
      </div>

      {certificates.length > 3 && (
        <div className="show-more-container">
          <button 
            className="show-more-btn"
            onClick={toggleShowAllCerts}
          >
            <span className="show-more-text">
              {showAllCerts ? 'Show less certs' : 'Show more certs'}
            </span>
            <span className={`show-more-chevron ${showAllCerts ? 'rotated' : ''}`}>
              ▼
            </span>
          </button>
        </div>
      )}

      {/* Leetcodes Section */}
      <div className="section-header">
        <h1 className="section-title">Leetcodes</h1>
        <div className="section-underline"></div>
      </div>

      <div className="leetcodes-wrapper">
        {showLeftEdge && <div className="leetcode-edge-shadow left" />}
        {showRightEdge && <div className="leetcode-edge-shadow right" />}
        <button className="leetcode-chevron leetcode-chevron-left" onClick={() => scrollByPage('prev')} aria-label="Previous">
          ‹
        </button>
        <div className="leetcodes-scroller" ref={leetcodesRef}>
          {leetcodeItems.map((item) => (
            <div 
              key={item.id} 
              className="leetcode-item"
              onClick={() => window.open(item.githubUrl, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="leetcode-github-icon">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.githubUrl, '_blank');
                  }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="leetcode-title">{item.title}</h3>
              <p className="leetcode-description">{item.description}</p>
              <div className="leetcode-tags">
                {item.languages.map((lang, idx) => (
                  <span key={idx} className="lang-tag">{lang}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="leetcode-chevron leetcode-chevron-right" onClick={() => scrollByPage('next')} aria-label="Next">
          ›
        </button>
      </div>

      {/* Custom Iframe Modal */}
      {/*<CustomIframe
        isOpen={isIframeOpen}
        onClose={closeIframeModal}
        url={iframeUrl}
        title={iframeTitle}
      />*/}
    </div>
  );
};

export default Achievements;
