'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme?: (e: React.MouseEvent) => void;
}

const HeaderContainer = styled(motion.header)<{ $mode: 'light' | 'dark' }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: ${props => props.$mode === 'light' 
    ? 'rgba(248, 249, 250, 0.8)' 
    : 'rgba(18, 18, 18, 0.8)'};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled(motion.div)<{ $mode: 'light' | 'dark' }>`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)<{ $mode: 'light' | 'dark' }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: ${props => props.$mode === 'light' 
    ? 'var(--background-light)' 
    : 'var(--background-dark)'};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(motion.a)<{ $mode: 'light' | 'dark' }>`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.$mode === 'light' 
      ? 'var(--accent-light)' 
      : 'var(--accent-dark)'};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.$mode === 'light' 
      ? 'var(--accent-light)' 
      : 'var(--accent-dark)'};
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.5rem;
  margin: 15px 0;
`;

const Hamburger = styled.div<{ $mode: 'light' | 'dark' }>`
  width: 30px;
  height: 3px;
  background: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background: ${props => props.$mode === 'light' 
      ? 'var(--text-light)' 
      : 'var(--text-dark)'};
    transition: all 0.3s ease;
  }

  &::before {
    transform: translateY(-10px);
  }

  &::after {
    transform: translateY(10px);
  }
`;

const ThemeToggleButton = styled(motion.button)<{ $mode: 'light' | 'dark' }>`
  background: ${props => props.$mode === 'light' 
    ? 'rgba(255, 255, 255, 0.7)' 
    : 'rgba(30, 30, 30, 0.7)'};
  border: 2px solid ${props => props.$mode === 'light' 
    ? 'rgba(95, 108, 175, 0.3)' 
    : 'rgba(187, 134, 252, 0.3)'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1),
    0 0 5px ${props => props.$mode === 'light' 
      ? 'rgba(95, 108, 175, 0.2)' 
      : 'rgba(187, 134, 252, 0.2)'};
  
  &:hover {
    background: ${props => props.$mode === 'light' 
      ? 'rgba(255, 255, 255, 0.9)' 
      : 'rgba(40, 40, 40, 0.9)'};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15),
      0 0 8px ${props => props.$mode === 'light' 
        ? 'rgba(95, 108, 175, 0.4)' 
        : 'rgba(187, 134, 252, 0.4)'};
  }
`;

const IconContainer = styled(motion.div)`
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SunIcon = styled(motion.svg)`
  width: 22px;
  height: 22px;
  color: #f39c12;
  filter: drop-shadow(0 0 2px rgba(243, 156, 18, 0.6));
`;

const MoonIcon = styled(motion.svg)`
  width: 20px;
  height: 20px;
  color: #c0c0ff;
  filter: drop-shadow(0 0 2px rgba(187, 134, 252, 0.6));
`;

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const mobileMenuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <HeaderContainer 
      $mode={theme}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 20 
      }}
    >
      <Logo 
        $mode={theme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        BP
      </Logo>

      <Nav as={motion.nav} variants={navVariants} initial="hidden" animate="visible">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <NavLink 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            $mode={theme}
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </NavLink>
        ))}
        
        {toggleTheme && (
          <ThemeToggleButton
            $mode={theme}
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
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
          </ThemeToggleButton>
        )}
      </Nav>

      <MobileMenuButton 
        onClick={toggleMobileMenu}
        whileTap={{ scale: 0.9 }}
      >
        <Hamburger $mode={theme} />
      </MobileMenuButton>

      {mobileMenuOpen && (
        <MobileMenu 
          $mode={theme}
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <MobileNavLink 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              $mode={theme}
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </MobileNavLink>
          ))}
          
          {toggleTheme && (
            <ThemeToggleButton
              $mode={theme}
              onClick={(e) => {
                toggleTheme(e);
                setMobileMenuOpen(false);
              }}
              whileTap={{ scale: 0.9 }}
              style={{ marginTop: '20px' }}
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
            </ThemeToggleButton>
          )}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header; 