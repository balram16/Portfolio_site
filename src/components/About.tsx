'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AboutProps {
  theme: 'light' | 'dark';
}

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 100px 20px;
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ImageBackground = styled(motion.div) <{ $mode: 'light' | 'dark' }>`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background: ${props => props.$mode === 'light'
    ? 'var(--primary-light)'
    : 'var(--primary-dark)'};
  top: 20px;
  left: 20px;
  z-index: 0;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled(motion.h2) <{ $mode: 'light' | 'dark' }>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.$mode === 'light'
    ? 'var(--text-light)'
    : 'var(--text-dark)'};
  position: relative;
  margin-bottom: 20px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${props => props.$mode === 'light'
    ? 'var(--accent-light)'
    : 'var(--accent-dark)'};
  }
`;

const Paragraph = styled(motion.p) <{ $mode: 'light' | 'dark' }>`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.$mode === 'light'
    ? 'var(--text-light)'
    : 'var(--text-dark)'};
  opacity: 0.9;
  margin-bottom: 15px;
`;

const InfoContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoLabel = styled.span<{ $mode: 'light' | 'dark' }>`
  font-weight: 600;
  color: ${props => props.$mode === 'light'
    ? 'var(--primary-light)'
    : 'var(--primary-dark)'};
`;

const InfoValue = styled.span<{ $mode: 'light' | 'dark' }>`
  color: ${props => props.$mode === 'light'
    ? 'var(--text-light)'
    : 'var(--text-dark)'};
`;

const About: React.FC<AboutProps> = ({ theme }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.2
      }
    }
  };

  return (
    <AboutSection id="about">
      <ContentContainer>
        <ImageContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProfileImage
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/images/me.jpeg"
              alt="Balram Panigrahi"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </ProfileImage>
          <ImageBackground
            $mode={theme}
            variants={backgroundVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </ImageContainer>

        <TextContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >          <SectionTitle $mode={theme} variants={itemVariants}>
            About Me
          </SectionTitle>

          <Paragraph $mode={theme} variants={itemVariants}>
            Hello! I'm Balram Panigrahi, a passionate full stack and blockchain developer specializing in creating secure, scalable, and innovative web applications.
          </Paragraph>

          <Paragraph $mode={theme} variants={itemVariants}>
            With a strong foundation in software development and a keen eye for detail, I strive to write clean, efficient, and maintainable code. I'm constantly learning and exploring new technologies to stay at the forefront of the industry.
          </Paragraph>

          <InfoContainer variants={containerVariants}>
            <InfoItem variants={itemVariants}>
              <InfoLabel $mode={theme}>Name:</InfoLabel>
              <InfoValue $mode={theme}>Balram Panigrahi</InfoValue>
            </InfoItem>

            <InfoItem variants={itemVariants}>
              <InfoLabel $mode={theme}>Email:</InfoLabel>
              <InfoValue $mode={theme}>panigrahibalram16@gmail.com</InfoValue>
            </InfoItem>

            <InfoItem variants={itemVariants}>
              <InfoLabel $mode={theme}>Location:</InfoLabel>
              <InfoValue $mode={theme}>India</InfoValue>
            </InfoItem>

            <InfoItem variants={itemVariants}>
              <InfoLabel $mode={theme}>Experience:</InfoLabel>
              <InfoValue $mode={theme}>6 Month</InfoValue>
            </InfoItem>
          </InfoContainer>
        </TextContainer>
      </ContentContainer>
    </AboutSection>
  );
};

export default About; 
