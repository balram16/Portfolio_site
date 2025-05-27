import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: (e: React.MouseEvent) => void;
}

const ToggleButton = styled(motion.button)<{ $mode: 'light' | 'dark' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.$mode === 'light' 
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'rgba(30, 30, 30, 0.95)'};
  border: 2px solid ${props => props.$mode === 'light' 
    ? 'rgba(95, 108, 175, 0.5)' 
    : 'rgba(187, 134, 252, 0.5)'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15), 
    0 0 10px ${props => props.$mode === 'light' 
      ? 'rgba(95, 108, 175, 0.3)' 
      : 'rgba(187, 134, 252, 0.3)'};
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 44px;
    height: 44px;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2),
      0 0 15px ${props => props.$mode === 'light' 
        ? 'rgba(95, 108, 175, 0.5)' 
        : 'rgba(187, 134, 252, 0.5)'};
  }
  
  &:focus {
    outline: none;
  }
`;

const IconContainer = styled(motion.div)`
  width: 26px;
  height: 26px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SunIcon = styled(motion.svg)`
  width: 24px;
  height: 24px;
  color: #f39c12;
  filter: drop-shadow(0 0 2px rgba(243, 156, 18, 0.6));
`;

const MoonIcon = styled(motion.svg)`
  width: 22px;
  height: 22px;
  color: #c0c0ff;
  filter: drop-shadow(0 0 2px rgba(187, 134, 252, 0.6));
`;

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton 
      $mode={theme}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle theme"
    >
      <IconContainer 
        animate={{ rotate: theme === 'dark' ? 360 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {theme === 'light' ? (
          <SunIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </SunIcon>
        ) : (
          <MoonIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </MoonIcon>
        )}
      </IconContainer>
    </ToggleButton>
  );
};

export default ThemeToggle; 