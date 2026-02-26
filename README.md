# Clement Phoshoko | Portfolio Website

> A modern, responsive portfolio showcasing my journey as a mathematician, full-stack developer, and lifelong learner.

## ✨ About This Project

This portfolio is more than just a website, it's a digital representation of my professional journey, built with the same attention to detail and technical excellence I bring to every project. From clean code to smooth animations, every element reflects my commitment to quality.

## 🚀 Live Demo

Visit the live site: [Clement's Portfolio Website](https://onclement.vercel.app/)

<img width="1870" height="886" alt="image" src="https://github.com/user-attachments/assets/f1944dde-8974-42c7-94d0-892a08f4fa4e" />

## 🎯 What's Inside

### **About Me**
- **My Journey**: From Mulima village to graduating cum laude in Honours Mathematics
- **Achievements**: Projects ranging from robot vision systems to mathematical research
- **Resume**: Comprehensive overview of skills, experience, and certifications

### **Blog World**
- **Personal Stories**: My path through mathematics, technology, and teaching
- **Technical Insights**: React development, web tools, and industry best practices
- **Tutorials**: Step-by-step guides (coming soon)

### **Technical Stack**
Full-stack expertise with modern technologies:
- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, MySQL, Firebase Firestore
- **Cloud**: Oracle Cloud, Huawei Cloud
- **Version Control**: Git & GitHub

### **Key Features**
- 🎨 **Modern UI/UX**: Clean, glassmorphism design with dark theme
- 📱 **Fully Responsive**: Optimized for all devices from mobile to 4K displays
- ✨ **Smooth Animations**: Staggered loading, fade transitions, and interactive elements
- 🔥 **Real-time Contact**: Firebase-powered contact form with email notifications
- 🎡 **Interactive Mobile Menu**: Blur background with animated menu items
- 📊 **GitHub Integration**: Live repository previews and statistics
- 🎓 **Certificate Gallery**: Showcasing Oracle Cloud, Powerlearn, and other certifications

## 🛠️ Tech Stack

### Frontend
```
React 19.1.0
React Router DOM 7.7.0
Vite 7.0.4
FontAwesome Icons
Material-UI (MUI)
EmailJS Browser
```

### Backend & Services
```
Firebase (Firestore, Hosting)
EmailJS (Contact form notifications)
```

### Styling
```
Custom CSS3 with modern features:
- Glassmorphism effects
- Backdrop filters
- CSS Grid & Flexbox
- Custom animations
- Responsive breakpoints
```

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/NdaedzoPhoshoko/Portfolio-for-Clement.git
   cd Portfolio-for-Clement
   ```

2. **Install dependencies**
   ```bash
   cd front-end
   npm install
   ```

3. **Set up environment variables** (if needed)
   - Configure Firebase credentials in `src/firebase.js`
   - Add EmailJS service details in Contact component

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

5. **Build for production**
   ```bash
   npm run build
   ```
   The optimized build will be in the `dist/` folder

## 🌐 Deployment

### Option 1: Firebase Hosting (Recommended)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Option 4: GitHub Pages
1. Update `vite.config.js` with base path
2. Build and deploy using GitHub Actions or manual push to `gh-pages` branch

## 📁 Project Structure

```
Portfolio-for-Clement/
├── front-end/
│   ├── src/
│   │   ├── assets/          # Images, icons, certificates
│   │   ├── components/      # Reusable components
│   │   │   ├── navbar/      # Navigation with mega menus
│   │   │   ├── footer/      # Social links footer
│   │   │   ├── subscribe/   # GitHub follow modal
│   │   │   ├── timeline/    # Career timeline
│   │   │   └── cursor/      # Custom cursor effect
│   │   ├── pages/
│   │   │   ├── home/        # Landing page
│   │   │   ├── about/       # Journey, Resume, Achievements
│   │   │   ├── blog/        # Blog posts & tutorials
│   │   │   └── contact/     # Contact form
│   │   ├── App.jsx          # Main app with routing
│   │   └── firebase.js      # Firebase configuration
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎨 Design Philosophy

The portfolio embraces a **dark, modern aesthetic** with:

**Color Palette:**
- Background: `#0d1117` (deep dark)
- Primary: `#161b22` (dark gray)
- Secondary: `#21262d` (medium gray)
- Tertiary: `#89929b` (light gray)
- Accents: Vibrant gradients (orange, teal, purple, pink)

**UI Principles:**
- Glassmorphism and blur effects
- Smooth, staggered animations
- Responsive typography
- Clean, minimal layouts
- High contrast for accessibility

## ✨ Highlights & Features

### Interactive Elements
- **Floating Profile Icon**: Animated glassmorphism circle on home page
- **Mega Menus**: Detailed dropdowns with icons and descriptions
- **Mobile Menu**: Smooth slide-in navigation with social links
- **Loading Transitions**: Progress bars before page navigation
- **Hover Effects**: Scales, rotations, and color transitions

### Performance Optimizations
- Lazy loading for images
- Code splitting with React Router
- Optimized animations with CSS transforms
- Efficient re-renders with React hooks
- Vite for fast builds and hot module replacement

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text
- Responsive font sizing

## 📱 Responsive Breakpoints

```css
/* 4K Displays */
@media (min-width: 2560px)

/* Large Desktops */
@media (min-width: 1920px)

/* Standard Desktops */
@media (min-width: 1440px)

/* Laptops */
@media (max-width: 1200px)

/* Tablets */
@media (max-width: 1024px)

/* Large Phones */
@media (max-width: 768px)

/* Small Phones */
@media (max-width: 480px)
```

## 🔗 Connect With Me

- **GitHub**: [NdaedzoPhoshoko](https://github.com/NdaedzoPhoshoko)
- **LinkedIn**: [Ndaedzo Phoshoko](https://www.linkedin.com/in/phoshokondaedzo/)
- **YouTube**: [@emkidncp](https://www.youtube.com/@emkidncp)

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

Built with passion and dedication. Special thanks to everyone who has supported my journey from Mulima village to becoming a developer.

---

**Made with ❤️ by Clement Phoshoko**  
*Mathematician | Full Stack Developer | Aspiring Data Scientist*
