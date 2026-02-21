'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  transition: all 0.5s ease;
`;

const HomePage = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.body.className = `${theme}-theme`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const isDark = nextTheme === 'dark';
    const accent = isDark ? '#bb86fc' : '#5f6caf';
    const glow = isDark ? '#03dac6' : '#38b2ac';

    // Calculate max radius needed to cover entire screen from click point
    const maxX = Math.max(clientX, window.innerWidth - clientX);
    const maxY = Math.max(clientY, window.innerHeight - clientY);
    const maxRadius = Math.sqrt(maxX * maxX + maxY * maxY) + 50;

    // ── 1. THEME REVEAL OVERLAY — clip-path circle expanding from click ──
    const reveal = document.createElement('div');
    Object.assign(reveal.style, {
      position: 'fixed',
      inset: '0',
      zIndex: '9998',
      pointerEvents: 'none',
      background: isDark ? '#121212' : '#f8f9fa',
      clipPath: `circle(0px at ${clientX}px ${clientY}px)`,
    });
    document.body.appendChild(reveal);

    reveal.animate(
      [
        { clipPath: `circle(0px at ${clientX}px ${clientY}px)` },
        { clipPath: `circle(${maxRadius}px at ${clientX}px ${clientY}px)` },
      ],
      { duration: 700, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
    ).onfinish = () => {
      setTheme(nextTheme);
      // Small delay so React re-renders with new theme, then remove overlay
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          reveal.remove();
        });
      });
    };

    // ── 2. SHOCKWAVE RING — expands just ahead of the reveal ──
    const ring = document.createElement('div');
    Object.assign(ring.style, {
      position: 'fixed',
      left: `${clientX}px`,
      top: `${clientY}px`,
      width: '0px',
      height: '0px',
      borderRadius: '50%',
      border: `2.5px solid ${accent}`,
      boxShadow: `0 0 15px ${accent}, 0 0 30px ${glow}40`,
      pointerEvents: 'none',
      zIndex: '10001',
      transform: 'translate(-50%, -50%)',
    });
    document.body.appendChild(ring);
    const ringSize = maxRadius * 2 + 20;
    ring.animate(
      [
        { width: '0px', height: '0px', opacity: 1, borderWidth: '3px' },
        { width: `${ringSize}px`, height: `${ringSize}px`, opacity: 0, borderWidth: '1px' },
      ],
      { duration: 750, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
    ).onfinish = () => ring.remove();

    // ── 3. PARTICLE BURST ──
    requestAnimationFrame(() => {
      for (let i = 0; i < 14; i++) {
        const p = document.createElement('div');
        const angle = (360 / 14) * i + (Math.random() * 10 - 5);
        const dist = 40 + Math.random() * 100;
        const dx = Math.cos((angle * Math.PI) / 180) * dist;
        const dy = Math.sin((angle * Math.PI) / 180) * dist;
        const size = 2 + Math.random() * 6;
        Object.assign(p.style, {
          position: 'fixed',
          left: `${clientX}px`,
          top: `${clientY}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          background: i % 2 === 0 ? accent : glow,
          boxShadow: `0 0 ${4 + size}px ${i % 2 === 0 ? accent : glow}`,
          pointerEvents: 'none',
          zIndex: '10002',
        });
        document.body.appendChild(p);
        p.animate(
          [
            { opacity: 1, transform: 'translate(0,0) scale(1)' },
            { opacity: 0.6, transform: `translate(${dx * 0.5}px,${dy * 0.5}px) scale(1.3)`, offset: 0.4 },
            { opacity: 0, transform: `translate(${dx}px,${dy}px) scale(0)` },
          ],
          { duration: 400 + Math.random() * 350, easing: 'cubic-bezier(0.22,0.61,0.36,1)', fill: 'forwards' }
        ).onfinish = () => p.remove();
      }
    });
  };

  return (
    <AppContainer>
      <Header theme={theme} toggleTheme={handleThemeToggle} />

      <Home theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </AppContainer>
  );
};

export default HomePage;