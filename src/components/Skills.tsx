'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SkillsProps {
  theme: 'light' | 'dark';
}

const SkillsSection = styled.section`
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
  margin-bottom: 60px;
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

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 1;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)<{ $mode: 'light' | 'dark' }>`
  background-color: ${props => props.$mode === 'light' 
    ? 'rgba(255, 255, 255, 0.8)' 
    : 'rgba(30, 30, 30, 0.8)'};
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
`;

const CategoryTitle = styled.h3<{ $mode: 'light' | 'dark' }>`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};
  margin-bottom: 10px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${props => props.$mode === 'light' 
      ? 'var(--accent-light)' 
      : 'var(--accent-dark)'};
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.h4<{ $mode: 'light' | 'dark' }>`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
`;

const SkillPercentage = styled.span<{ $mode: 'light' | 'dark' }>`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};
`;

const SkillBarContainer = styled.div<{ $mode: 'light' | 'dark' }>`
  width: 100%;
  height: 8px;
  background-color: ${props => props.$mode === 'light' 
    ? 'rgba(0, 0, 0, 0.1)' 
    : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 10px;
  overflow: hidden;
`;

const SkillBar = styled(motion.div)<{ $mode: 'light' | 'dark' }>`
  height: 100%;
  background: ${props => props.$mode === 'light' 
    ? 'linear-gradient(90deg, var(--primary-light), var(--accent-light))' 
    : 'linear-gradient(90deg, var(--primary-dark), var(--accent-dark))'};
  border-radius: 10px;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const TechItem = styled(motion.div)<{ $mode: 'light' | 'dark' }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: ${props => props.$mode === 'light' 
    ? 'rgba(95, 108, 175, 0.1)' 
    : 'rgba(187, 134, 252, 0.1)'};
`;

const TechIcon = styled.span<{ $mode: 'light' | 'dark' }>`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};
`;

const TechName = styled.span<{ $mode: 'light' | 'dark' }>`
  font-size: 0.9rem;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
`;

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const skillsByCategory = {
    Frontend: [
      { name: 'React', percentage: 90 },
      { name: 'Next', percentage: 95 },
      { name: 'Tailwind', percentage: 85 },
      { name: 'Angular', percentage: 85 },
    ],
    Backend: [
      { name: 'Node.js', percentage: 85 },
      { name: 'Express', percentage: 80 },
      { name: 'MongoDB', percentage: 85 },
      { name: 'SQL', percentage: 90 },
    ],
    'Blockchain & AI': [
      { name: 'Solidity', percentage: 85 },
      { name: 'Web3.js', percentage: 85 },
      { name: 'TensorFlow', percentage: 65 },
      { name: 'PyTorch', percentage: 65 },
    ],
    Tools: [
      { name: 'Git/GitHub', percentage: 90 },
      { name: 'Docker', percentage: 75 },
      { name: 'AWS', percentage: 70 },
      { name: 'Linux', percentage: 80 },
    ],
    Languages: [
      { name: 'Java', percentage: 95 },
      { name: 'C', percentage: 90 },
      { name: 'Python', percentage: 85 },
      { name: 'Javascript', percentage: 95 },
    ],
    'Core Concepts': [
      { name: 'Data Structures & Algorithm', percentage: 90 },
      { name: 'DBMS', percentage: 85 },
      { name: 'Computer Network', percentage: 80 },
      { name: 'OS', percentage: 85 },
    ]
  };

  const techsByCategory = {
    Frontend: [
      { name: 'React', icon: 'R' },
      { name: 'Angular', icon: 'AN' },
      { name: 'Next.js', icon: 'N' },
      { name: 'Redux', icon: 'RX' },
      { name: 'Tailwind', icon: 'TW' },
      { name: 'SASS', icon: 'S' },
    ],
    Backend: [
      { name: 'Node.js', icon: 'N' },
      { name: 'Express', icon: 'EX' },
      { name: 'MongoDB', icon: 'M' },
      { name: 'PostgreSQL', icon: 'PG' },
      { name: 'GraphQL', icon: 'GQL' },
      { name: 'REST API', icon: 'API' },
    ],
    'Blockchain & AI': [
      { name: 'Solidity', icon: 'SOL' },
      { name: 'Web3.js', icon: 'W3' },
      { name: 'Ganache', icon: 'G' },
      { name: 'ChainLink', icon: 'CL' },
      { name: 'Solana', icon: 'SL' },
      { name: 'Ethereum', icon: 'ETH' },
      { name: 'TensorFlow', icon: 'TF' },
      { name: 'Python', icon: 'PY' },
      { name: 'ML', icon: 'ML' },
    ],
    Tools: [
      { name: 'Git', icon: 'GIT' },
      { name: 'GitHub', icon: 'GH' },
      { name: 'Linux', icon: 'LX' },
      { name: 'Postman', icon: 'PM' },
      { name: 'Docker', icon: 'D' },
      { name: 'AWS', icon: 'AWS' },
      { name: 'CI/CD', icon: 'CI' },
      { name: 'Jest', icon: 'J' },
    ],
    Languages: [
      { name: 'JavaScript', icon: 'JS' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Python', icon: 'PY' },
      { name: 'Java', icon: 'JV' },
      { name: 'Rust', icon: 'RS' },
      { name: 'C', icon: 'C' },
    ],
    'Core Concepts': [
      { name: 'Data Structures & Algorithm', icon: 'DSA' },
      { name: 'DBMS', icon: 'DB' },
      { name: 'Computer Network', icon: 'CN' },
      { name: 'OS', icon: 'OS' },
      { name: 'OOP', icon: 'OOP' },
      { name: 'FP', icon: 'FP' },
      { name: 'Design Patterns', icon: 'DP' },
      { name: 'System Design', icon: 'SD' },
    ]
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: i * 0.1
      }
    })
  };

  const skillItemVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05
      }
    })
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  const techItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.3 + (i * 0.05)
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  const categories = Object.keys(skillsByCategory);

  return (
    <SkillsSection id="skills">
      <SectionTitle 
        $mode={theme}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        My Skills
      </SectionTitle>

      <ContentContainer>
        <SkillsGrid>
          {categories.map((category, categoryIndex) => (
            <SkillCard 
              key={category}
              $mode={theme}
              variants={cardVariants}
              custom={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <CategoryTitle $mode={theme}>{category}</CategoryTitle>
              
              <SkillsContainer>
                {skillsByCategory[category as keyof typeof skillsByCategory].map((skill, skillIndex) => (
                  <SkillItem 
                    key={skillIndex} 
                    variants={skillItemVariants}
                    custom={skillIndex}
                    initial="hidden"
                    animate="visible"
                  >
                    <SkillHeader>
                      <SkillName $mode={theme}>{skill.name}</SkillName>
                      <SkillPercentage $mode={theme}>{skill.percentage}%</SkillPercentage>
                    </SkillHeader>
                    <SkillBarContainer $mode={theme}>
                      <SkillBar 
                        $mode={theme}
                        initial="hidden"
                        animate="visible"
                        variants={barVariants}
                        custom={skill.percentage}
                      />
                    </SkillBarContainer>
                  </SkillItem>
                ))}
              </SkillsContainer>
              
              <TechContainer>
                {techsByCategory[category as keyof typeof techsByCategory].map((tech, techIndex) => (
                  <TechItem 
                    key={techIndex}
                    $mode={theme}
                    variants={techItemVariants}
                    custom={techIndex}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <TechIcon $mode={theme}>{tech.icon}</TechIcon>
                    <TechName $mode={theme}>{tech.name}</TechName>
                  </TechItem>
                ))}
              </TechContainer>
            </SkillCard>
          ))}
        </SkillsGrid>
      </ContentContainer>
    </SkillsSection>
  );
};

export default Skills; 