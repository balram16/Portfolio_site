'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ExperienceProps {
  theme: 'light' | 'dark';
}

const ExperienceSection = styled.section`
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

const SectionTitle = styled(motion.h2) <{ $mode: 'light' | 'dark' }>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.$mode === 'light' ? 'var(--text-light)' : 'var(--text-dark)'};
  position: relative;
  margin-bottom: 70px;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${props => props.$mode === 'light' ? 'var(--accent-light)' : 'var(--accent-dark)'};
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--primary-light) 10%,
      var(--primary-light) 90%,
      transparent
    );

    @media (max-width: 768px) {
      left: 20px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

const TimelineItem = styled(motion.div) <{ $side: 'left' | 'right' }>`
  display: flex;
  justify-content: ${props => props.$side === 'left' ? 'flex-end' : 'flex-start'};
  padding: ${props => props.$side === 'left' ? '0 60px 50px 0' : '0 0 50px 60px'};
  position: relative;
  width: 50%;
  margin-left: ${props => props.$side === 'right' ? '50%' : '0'};

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0 0 40px 20px;
    justify-content: flex-start;
  }
`;

const TimelineDot = styled.div<{ $mode: 'light' | 'dark' }>`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.$mode === 'light' ? 'var(--primary-light)' : 'var(--primary-dark)'};
  border: 3px solid ${props => props.$mode === 'light' ? 'var(--accent-light)' : 'var(--accent-dark)'};
  top: 24px;
  right: -8px;
  z-index: 2;
  box-shadow: 0 0 0 4px ${props => props.$mode === 'light' ? 'rgba(95,108,175,0.15)' : 'rgba(187,134,252,0.15)'};

  /* For right-side items */
  ${TimelineItem}:nth-child(even) & {
    right: auto;
    left: -8px;
  }

  @media (max-width: 768px) {
    right: auto;
    left: -28px;
    top: 20px;
  }
`;

const Card = styled(motion.div) <{ $mode: 'light' | 'dark' }>`
  background: ${props => props.$mode === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(30,30,30,0.85)'};
  border-radius: 16px;
  padding: 28px 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 380px;
  width: 100%;
  border: 1px solid ${props => props.$mode === 'light' ? 'rgba(95,108,175,0.12)' : 'rgba(187,134,252,0.12)'};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 16px 40px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RoleTitle = styled.h3<{ $mode: 'light' | 'dark' }>`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${props => props.$mode === 'light' ? 'var(--primary-light)' : 'var(--primary-dark)'};
  margin-bottom: 4px;
`;

const Company = styled.p<{ $mode: 'light' | 'dark' }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.$mode === 'light' ? 'var(--text-light)' : 'var(--text-dark)'};
  margin-bottom: 4px;
`;

const Duration = styled.span<{ $mode: 'light' | 'dark' }>`
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${props => props.$mode === 'light' ? 'var(--accent-light)' : 'var(--accent-dark)'};
  background: ${props => props.$mode === 'light' ? 'rgba(95,108,175,0.1)' : 'rgba(187,134,252,0.1)'};
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 14px;
`;

const Description = styled.p<{ $mode: 'light' | 'dark' }>`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${props => props.$mode === 'light' ? 'var(--text-light)' : 'var(--text-dark)'};
  opacity: 0.85;
  margin-bottom: 16px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span<{ $mode: 'light' | 'dark' }>`
  padding: 4px 11px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  background: ${props => props.$mode === 'light' ? 'rgba(95,108,175,0.1)' : 'rgba(187,134,252,0.1)'};
  color: ${props => props.$mode === 'light' ? 'var(--primary-light)' : 'var(--primary-dark)'};
`;

const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const experiences = [
    {
      role: 'Full Stack Intern',
      company: 'CheckExplore Technologies, Navi Mumbai (On-Site)',
      duration: 'Jun 2024 – Aug 2024',
      description:
        'Designed and developed 10+ dynamic app screens with responsive UI and reusable components, improving UX for ~1000 daily users. Built an Angular app managing 5+ complex workflows with API integrations. Collaborated with the AI team integrating machine learning features.',
      tags: ['React', 'Angular', 'Node.js', 'REST APIs', 'Machine Learning', 'Responsive UI'],
    },
    {
      role: 'React Intern',
      company: 'Digital Crown LLP Solutions, Navi Mumbai (Hybrid)',
      duration: 'July 2025 – Oct 2025',
      description:
        'Designed scalable React applications for enterprise projects. Built 15+ modular components with state management and API integration. Implemented performance improvements reducing load time by 25% and ensuring stable production.',
      tags: ['React', 'State Management', 'API Integration', 'Performance Optimization'],
    },
    {
      role: 'Data Analytics Internship',
      company: 'IBM SkillsBuild Summer Internship (Online)',
      duration: '',
      description:
        'Completed IBM\'s Data Analytics Summer Internship program, gaining hands-on experience with data analysis, visualization, and business intelligence tools. Worked on real-world datasets to derive actionable insights and applied statistical techniques to solve analytical problems.',
      tags: ['Data Analytics', 'IBM SkillsBuild', 'Data Visualization', 'Statistics', 'Business Intelligence'],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 14,
        delay: i * 0.15,
      },
    }),
  };

  return (
    <ExperienceSection id="experience">
      <SectionTitle
        $mode={theme}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        Experience
      </SectionTitle>

      <Timeline>
        {experiences.map((exp, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          return (
            <TimelineItem
              key={index}
              $side={side}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <TimelineDot $mode={theme} />
              <Card
                $mode={theme}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <RoleTitle $mode={theme}>{exp.role}</RoleTitle>
                <Company $mode={theme}>{exp.company}</Company>
                {exp.duration && <Duration $mode={theme}>{exp.duration}</Duration>}
                <Description $mode={theme}>{exp.description}</Description>
                <TagsContainer>
                  {exp.tags.map((tag, i) => (
                    <Tag key={i} $mode={theme}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </Card>
            </TimelineItem>
          );
        })}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
