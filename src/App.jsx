import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Experience from './components/Experience';
// import LearningPath from './components/LearningPath';
import SkillsProgress from './components/SkillsProgress';
import LinkedInFeed from './components/LinkedInFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Default to dark if no saved preference
  const getInitialDark = () => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    // no saved preference -> default dark
    return true;
  };

  const [darkMode, setDarkMode] = useState(getInitialDark);

  useEffect(() => {
    // Apply class immediately on mount
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        <SkillsProgress />
        {/* <LearningPath /> */}
        <LinkedInFeed />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;
