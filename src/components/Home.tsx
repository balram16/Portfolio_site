'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface HomeProps {
  theme: 'light' | 'dark';
}

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    text-align: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  z-index: 1;
`;

const Greeting = styled(motion.h3) <{ $mode: 'light' | 'dark' }>`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.$mode === 'light'
    ? 'var(--accent-light)'
    : 'var(--accent-dark)'};
`;

const Name = styled(motion.h1) <{ $mode: 'light' | 'dark' }>`
  font-size: 4rem;
  font-weight: 700;
  background: ${props => props.$mode === 'light'
    ? 'linear-gradient(135deg, var(--primary-light), var(--accent-light))'
    : 'linear-gradient(135deg, var(--primary-dark), var(--accent-dark))'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h2) <{ $mode: 'light' | 'dark' }>`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => props.$mode === 'light'
    ? 'var(--text-light)'
    : 'var(--text-dark)'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p) <{ $mode: 'light' | 'dark' }>`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: ${props => props.$mode === 'light'
    ? 'var(--text-light)'
    : 'var(--text-dark)'};
  opacity: 0.9;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(motion.a)`
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const PrimaryButton = styled(Button) <{ $mode: 'light' | 'dark' }>`
  background: ${props => props.$mode === 'light'
    ? 'var(--primary-light)'
    : 'var(--primary-dark)'};
  color: ${props => props.$mode === 'light'
    ? '#fff'
    : 'var(--background-dark)'};
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const SecondaryButton = styled(Button) <{ $mode: 'light' | 'dark' }>`
  background: transparent;
  color: ${props => props.$mode === 'light'
    ? 'var(--primary-light)'
    : 'var(--primary-dark)'};
  border: 2px solid ${props => props.$mode === 'light'
    ? 'var(--primary-light)'
    : 'var(--primary-dark)'};
`;

const BackgroundShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Shape = styled(motion.div) <{ $mode: 'light' | 'dark' }>`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.$mode === 'light'
    ? 'linear-gradient(135deg, var(--primary-light), var(--accent-light))'
    : 'linear-gradient(135deg, var(--primary-dark), var(--accent-dark))'};
  opacity: 0.1;
`;

const Home: React.FC<HomeProps> = ({ theme }) => {
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

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const shapeVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 15, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse' as const
      }
    }
  };

  return (
    <HomeSection id="home">
      <BackgroundShapes>
        <Shape
          $mode={theme}
          style={{ top: '10%', left: '10%', width: '300px', height: '300px' }}
          variants={shapeVariants}
          animate="animate"
        />
        <Shape
          $mode={theme}
          style={{ bottom: '20%', right: '15%', width: '250px', height: '250px' }}
          variants={{
            animate: {
              y: [0, 30, 0],
              x: [0, -20, 0],
              transition: {
                duration: 12,
                repeat: Infinity,
                repeatType: 'reverse' as const
              }
            }
          }}
          animate="animate"
        />
        <Shape
          $mode={theme}
          style={{ top: '40%', right: '30%', width: '150px', height: '150px' }}
          variants={{
            animate: {
              y: [0, -15, 0],
              x: [0, -10, 0],
              transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse' as const
              }
            }
          }}
          animate="animate"
        />
      </BackgroundShapes>

      <ContentContainer as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <Greeting $mode={theme} variants={itemVariants}>Hello, I'm</Greeting>
        <Name $mode={theme} variants={itemVariants}>Balram Panigrahi</Name>
        <Title $mode={theme} variants={itemVariants}>Software Engineer</Title>
        <Description $mode={theme} variants={itemVariants}>
          I build exceptional digital experiences with a focus on performance, accessibility, and beautiful design.
        </Description>
        <ButtonContainer variants={containerVariants}>
          <PrimaryButton
            $mode={theme}
            href="/Balram Resume2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Resume <span style={{ marginLeft: '5px', fontSize: '14px' }}>↓</span>
          </PrimaryButton>
          <SecondaryButton
            $mode={theme}
            href="#contact"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Contact Me
          </SecondaryButton>
        </ButtonContainer>
      </ContentContainer>
    </HomeSection>
  );
};

export default Home; 
