'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import '../../public/images/chatty.jpg'
import '../../public/images/farmer.png'
import '../../public/images/crowd.png'

interface ProjectsProps {
  theme: 'light' | 'dark';
}

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const SectionTitle = styled(motion.h2)<{ $mode: 'light' | 'dark' }>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  position: relative;
  margin-bottom: 20px;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${props => props.$mode === 'light' 
      ? 'var(--accent-light)' 
      : 'var(--accent-dark)'};
  }
`;

const SectionDescription = styled(motion.p)<{ $mode: 'light' | 'dark' }>`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  opacity: 0.9;
  text-align: center;
  max-width: 700px;
  margin-bottom: 50px;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled(motion.button)<{ $isActive: boolean, $mode: 'light' | 'dark' }>`
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.$isActive 
    ? (props.$mode === 'light' ? 'var(--primary-light)' : 'var(--primary-dark)')
    : 'transparent'};
  color: ${props => props.$isActive 
    ? '#fff' 
    : (props.$mode === 'light' ? 'var(--text-light)' : 'var(--text-dark)')};
  border: 2px solid ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};

  &:hover {
    background-color: ${props => props.$mode === 'light' 
      ? 'var(--primary-light)' 
      : 'var(--primary-dark)'};
    color: #fff;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)<{ $mode: 'light' | 'dark' }>`
  border-radius: 15px;
  overflow: hidden;
  background-color: ${props => props.$mode === 'light' 
    ? '#fff' 
    : 'var(--secondary-dark)'};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const OverlayButton = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-light);
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
`;

const ProjectContent = styled.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3<{ $mode: 'light' | 'dark' }>`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
`;

const ProjectDescription = styled.p<{ $mode: 'light' | 'dark' }>`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  opacity: 0.9;
  margin-bottom: 20px;
  flex: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
`;

const Tag = styled.span<{ $mode: 'light' | 'dark' }>`
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${props => props.$mode === 'light' 
    ? 'rgba(95, 108, 175, 0.1)' 
    : 'rgba(187, 134, 252, 0.1)'};
  color: ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};
`;

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Farming Trading App',
      description: 'A decentralized marketplace for farmers to sell crops directly to buyers using smart contracts for escrow and payment.',
      image: '/images/farmer.png',
      category: 'Web App',
      tags: ['React', 'Solidity', 'Ethers.js', 'Node.js', 'Express', 'MongoDB'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Crowd Detector',
      description: 'Mobile app to monitor real-time crowd density, traffic, and emergency services using location tracking and AI.',
      image: '/images/crowd.png',
      category: 'Mobile App',
      tags: ['React Native', 'Expo', 'Express.js',' MongoDB','Google Maps API','WebSockets'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Chatty',
      description: 'A privacy-first messaging platform with end-to-end encryption, smart contract authentication, and IPFS-based media storage.',
      image: '/images/chatty.jpg',
      category: 'Web App',
      tags: ['React', 'Solidity', 'Web3.js','IPFS','Truffle','Node,js'],
      demoLink: 'https://chatty-phi-six.vercel.app/',
      codeLink: 'https://github.com/balram16/Chat_App.git'
    }
  ];

  const filters = ['All', 'Web App', 'Mobile App', 'UI/UX'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  const overlayVariants = {
    hover: {
      opacity: 1
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle 
        $mode={theme}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        My Projects
      </SectionTitle>
      
      <SectionDescription 
        $mode={theme}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
      >
        Here are some of my recent projects. Each project is a unique piece of development that showcases my skills and passion for building exceptional digital experiences.
      </SectionDescription>
      
      <FilterContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3 }}
      >
        {filters.map((filter, index) => (
          <FilterButton 
            key={index}
            $mode={theme}
            $isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterContainer>
      
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            $mode={theme}
            variants={cardVariants}
            whileHover="hover"
            layout
          >
            <ProjectImage>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ 
                  objectFit: project.title === 'Crowd Detector' ? 'contain' : 'cover',
                  padding: project.title === 'Crowd Detector' ? '10px' : '0',
                  backgroundColor: project.title === 'Crowd Detector' ? 'rgba(0,0,0,0.05)' : 'transparent'
                }}
                priority
              />
              <ProjectOverlay variants={overlayVariants}>
                <OverlayButton 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Demo
                </OverlayButton>
                <OverlayButton 
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Code
                </OverlayButton>
              </ProjectOverlay>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle $mode={theme}>{project.title}</ProjectTitle>
              <ProjectDescription $mode={theme}>{project.description}</ProjectDescription>
              <TagsContainer>
                {project.tags.map((tag, index) => (
                  <Tag key={index} $mode={theme}>{tag}</Tag>
                ))}
              </TagsContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 