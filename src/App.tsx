'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  transition: all 0.5s ease;
`;

const HomePage = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for user's preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    document.body.className = `${theme}-theme`;
  }, [theme]);
  
  useEffect(() => {
    document.body.className = `${theme}-theme`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setOverlayPosition({ x: clientX, y: clientY });
    setIsTransitioning(true);
    
    setTimeout(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 100);
  };

  return (
    <AppContainer>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            key="theme-overlay"
            ref={overlayRef}
            className={`theme-transition-overlay ${theme === 'light' ? 'dark' : 'light'} active`}
            style={{ 
              left: overlayPosition.x + 'px', 
              top: overlayPosition.y + 'px' 
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
      
      <Header theme={theme} toggleTheme={handleThemeToggle} />
      
      <Home theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </AppContainer>
  );
};

export default HomePage; 