import React, { useLayoutEffect, useRef, useState } from 'react';
import './Achievements.css';
// import CustomIframe from '../../../components/custom_iframe/CustomIframe';

const achievements = [
  {
    id: 9,
    title: "AkovoLabs Speedtest",
    category: "Network Analytics",
    filterGroup: "AI & Data",
    description: "Built a network analytics dashboard measuring speed, latency, and jitter for 50+ users, with ISP insights, security recommendations, port risk analysis, and anomaly detection.",
    technologies: ["React", "Node.js", "Express", "Network Analytics"],
    image: "/assets/images/project-covers/network.svg",
    year: "2026",
    featured: true,
    link: "https://speedtest.akovolabs.co.za"
  },
  {
    id: 10,
    title: "AkovoLabs Burner",
    category: "AI Subtitle Burner",
    filterGroup: "AI & Data",
    description: "Built a public video-captioning platform that has processed more than 100 videos. Integrated Gemini transcription, FFmpeg processing, and an asynchronous worker with Supabase storage and job retries.",
    technologies: ["React", "Vite", "Node.js", "Gemini", "FFmpeg", "Supabase"],
    image: "/assets/images/project-covers/burner.svg",
    year: "2026",
    link: "https://burner.akovolabs.co.za"
  },
  {
    id: 11,
    title: "Hand Sign Recognition Meeting Assistant",
    category: "Accessibility & Computer Vision",
    filterGroup: "AI & Data",
    description: "Built a real-time hand-sign recognition tool that turns webcam gestures into readable sentences, using a React frontend, Node.js/Express gateway, and Python FastAPI vision service with MediaPipe.",
    technologies: ["React", "Node.js", "FastAPI", "Python", "MediaPipe"],
    image: "/assets/images/project-covers/meeting.svg",
    year: "2026",
    link: "https://github.com/ClementPhoshoko/Hand-Sign-Recognition-Web-System"
  },
  {
    id: 12,
    title: "AkovoLabs Snap",
    category: "Chrome Extension",
    filterGroup: "Tools",
    description: "Built a Manifest V3 extension with React and Vite that captures full-page scrolling screenshots, stitches viewports with the Canvas API, detects repeated floating navigation, and exports PNG, JPEG, or WebP images.",
    technologies: ["Chrome Extension", "Manifest V3", "React", "Vite", "Canvas API"],
    image: "/assets/images/project-covers/snap.svg",
    year: "2026",
    link: "https://snap.akovolabs.co.za"
  },
  {
    id: 8,
    title: "AI-Powered ATS",
    category: "Applicant Tracking System for RedMPS",
    filterGroup: "Web Apps",
    description: "Built an AI-driven recruitment system that parses resumes into structured candidate data. The React and Node.js application supports CRUD workflows for jobs and candidates, is containerized with Docker, deployed through CI/CD, and used by RedMPS for external recruitment.",
    technologies: ["React", "Node.js", "AI/NLP", "Docker", "CI/CD"],
    image: "/assets/images/project-covers/ats.svg",
    year: "2025",
    link: "https://onboared.com"
  },
  {
    id: 1,
    title: "Clementine Store e-commerce",
    category: "E-commerce Freelancing",
    filterGroup: "Web Apps",
    description: "Built and deployed a full-stack e-commerce with responsive UX, image hosting integration, and APIs.",
    technologies: ["React", "Node", "Git", "Supabase"],
    image: "/assets/images/homepage_cover.png",
    year: "2026",
    link: "https://clementine-store.vercel.app/"
  },
  {
    id: 2,
    title: "Robot with One-Eye",
    category: "Personal Project",
    filterGroup: "Tools",
    description: "Captures webcam video, detects motion in real-time, and identifies direction using OpenCV and Java Swing.",
    technologies: ["OpenCV", "Java", "Java Swing"],
    image: "/assets/images/robot_with_one_eye.png",
    year: "2024",
    link: "https://github.com/NdaedzoPhoshoko/Robot-With-One-Eye"
  },
  {
    id: 3,
    title: "Linear Codes and G-Modules",
    category: "Academic Project", 
    filterGroup: "AI & Data",
    description: "G-modules enhance linear codes for error correction through algebraic optimization of encoding/decoding.",
    technologies: ["Groups", "Gap", "Linear Algebra", "Matlab"],
    image: "/assets/images/research_screenshot.png",
    year: "2024",
    link: "https://www.overleaf.com/read/kqfssdgrbwzh#c4639a"
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "IT Project",
    filterGroup: "Web Apps",
    description: "A responsive portfolio website using React.js, Node.js, and Express.js with modern UI/UX design.",
    technologies: ["React.js", "Node.js", "Express.js", "CSS3"],
    image: "/assets/images/langs_screenshot.png",
    year: "2025",
    link: "https://github.com/NdaedzoPhoshoko/Portfolio-for-Clement"
  },
  {
    id: 5,
    title: "Dragon44x Indicator",
    category: "Market Analysis",
    filterGroup: "Tools",
    description: "Inverse Head and Shoulders, Descending Triangle, Bull Flag, and etc. indicators in MT4.",
    technologies: ["MQL", "MQL4", "Statistics"],
    image: "/assets/images/market.png",
    year: "2025"
  },
  {
    id: 6,
    title: "C++ Projects[Batch]",
    category: "Learning",
    filterGroup: "Tools",
    description: "Exploring C++ from IO streams, functions, classes, and etc.",
    technologies: ["C++", "IO streams", "Functions", "Classes"],
    image: "/assets/images/cpp_screenshot.png",
    year: "2022",
    link: "https://github.com/NdaedzoPhoshoko/CPP-Projects"
  },
  {
    id: 7,
    title: "Java Projects[Batch]",
    category: "Learning",
    filterGroup: "Tools",
    description: "Exploring Java from Data Structures to Threads. Also covers different topics in OOP.",
    technologies: ["Java", "Data Structures", "OOP", "Threads"],
    image: "/assets/images/java_screenshot.png",
    year: "2023",
    link: "https://github.com/NdaedzoPhoshoko/Java-Projects"
  },
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

const ExpandedAchievement = ({ achievement, imageSrc, sourceRect, onClose }) => {
  const cardRef = useRef(null);
  const closeButtonRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const [isClosing, setIsClosing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  onCloseRef.current = onClose;

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const targetRect = card.getBoundingClientRect();
    const dx = sourceRect.left - targetRect.left;
    const dy = sourceRect.top - targetRect.top;
    const sx = sourceRect.width / targetRect.width;
    const sy = sourceRect.height / targetRect.height;
    const from = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    const animation = card.animate(
      isClosing
        ? [{ transform: 'translate(0, 0) scale(1, 1)' }, { transform: from }]
        : [{ transform: from }, { transform: 'translate(0, 0) scale(1, 1)' }],
      {
        duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 520,
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        fill: 'both'
      }
    );

    if (isClosing) {
      animation.onfinish = () => onCloseRef.current();
    } else {
      animation.onfinish = () => {
        animation.cancel();
        setIsReady(true);
        closeButtonRef.current?.focus({ preventScroll: true });
      };
    }

    return () => animation.cancel();
  }, [isClosing, sourceRect]);

  useLayoutEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const beginClose = () => {
    if (!isClosing) setIsClosing(true);
  };

  return (
    <div className={`achievement-maximize-layer ${isClosing ? 'is-closing' : ''}`}>
      <button
        type="button"
        className="achievement-maximize-backdrop"
        aria-label="Close expanded project"
        onClick={beginClose}
      />
      <article
        ref={cardRef}
        className="achievement-maximize-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="expanded-achievement-title"
        onClick={(event) => event.stopPropagation()}
        onPointerLeave={() => {
          if (isReady) beginClose();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') beginClose();
          if (event.key === 'Tab') {
            const focusable = event.currentTarget.querySelectorAll('a[href], button:not(:disabled)');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }
        }}
      >
        <img className="achievement-maximize-image" src={imageSrc} alt="" />
        <div className="achievement-maximize-content">
          <div className="achievement-meta">
            <p className="achievement-category">{achievement.category}</p>
            <span className="achievement-year">{achievement.year}</span>
            {achievement.featured && <span className="achievement-featured-label">Featured</span>}
          </div>
          <h2 id="expanded-achievement-title">{achievement.title}</h2>
          <p className="achievement-description">{achievement.description}</p>
          <div className="achievement-technologies">
            {achievement.technologies.map((technology) => (
              <span key={technology} className="tech-tag">{technology}</span>
            ))}
          </div>
          <div className="achievement-maximize-actions">
            {achievement.link && (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="achievement-project-link">
                View project
              </a>
            )}
            <button ref={closeButtonRef} type="button" className="achievement-close-button" onClick={beginClose}>
              Close
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

const Achievements = () => {
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');
  const leetcodesRef = useRef(null);
  const [showLeftEdge, setShowLeftEdge] = useState(false);
  const [showRightEdge, setShowRightEdge] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [loadedAchievementImages, setLoadedAchievementImages] = useState({});
  const [expandedAchievement, setExpandedAchievement] = useState(null);
  const expandedTriggerRef = useRef(null);
  const projectFilters = ['All', 'Web Apps', 'AI & Data', 'Tools'];
  const filteredAchievements = activeProjectFilter === 'All'
    ? achievements
    : achievements.filter((achievement) => achievement.filterGroup === activeProjectFilter);
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

  const openInNewBlackPage = (url) => {
    if (!url) return;

    const newTab = window.open('', '_blank');

    if (newTab) {
      newTab.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Opening...</title>
            <style>
              html, body {
                margin: 0;
                width: 100%;
                height: 100%;
                background: #000;
              }
            </style>
          </head>
          <body></body>
        </html>
      `);
      newTab.document.close();
      newTab.location.href = url;
      return;
    }

    window.open(url, '_blank');
  };

  return (
    <div className="achievements-container">
      {/* Projects Section */}
      <div className="section-header">
        <h1 className="section-title">Developer Milestones</h1>
        <div className="section-underline"></div>
      </div>
      
      <div className="project-filter-bar" role="group" aria-label="Filter developer milestones">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`project-filter-button ${activeProjectFilter === filter ? 'active' : ''}`}
            aria-pressed={activeProjectFilter === filter}
            onClick={() => setActiveProjectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="achievements-grid" aria-hidden={expandedAchievement ? 'true' : undefined} inert={Boolean(expandedAchievement)}>
        {filteredAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`achievement-card ${achievement.featured ? 'achievement-card-featured' : ''} ${loadedAchievementImages[achievement.id] ? 'is-loaded' : 'is-loading'} ${expandedAchievement?.id === achievement.id ? 'achievement-card-undocked' : ''}`}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
                expandedTriggerRef.current = event.currentTarget.querySelector('.achievement-title');
                setExpandedAchievement({
                  item: achievement,
                  sourceRect: event.currentTarget.getBoundingClientRect()
                });
              }
            }}
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
                <a
                  className="github-icon-overlay"
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${achievement.title}`}
                >
                  <svg 
                    className="github-icon" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 5h6v6M19 5l-9 9"/><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>
                  </svg>
                </a>
              )}
            </div>
            
            <div className="achievement-content">
              {loadedAchievementImages[achievement.id] ? (
                <>
                  <button
                    type="button"
                    className={`achievement-title ${achievement.link ? 'achievement-title-link' : ''}`}
                    onClick={() => openInNewBlackPage(achievement.link)}
                    disabled={!achievement.link}
                  >
                    {achievement.title}
                  </button>
                  <div className="achievement-meta">
                    <p className="achievement-category">{achievement.category}</p>
                    <span className="achievement-year">{achievement.year}</span>
                    {achievement.featured && <span className="achievement-featured-label">Featured</span>}
                  </div>
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

      {expandedAchievement && (
        <ExpandedAchievement
          achievement={expandedAchievement.item}
          imageSrc={getOptimizedImageSrc(expandedAchievement.item.image)}
          sourceRect={expandedAchievement.sourceRect}
          onClose={() => {
            setExpandedAchievement(null);
            requestAnimationFrame(() => expandedTriggerRef.current?.focus({ preventScroll: true }));
          }}
        />
      )}

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
