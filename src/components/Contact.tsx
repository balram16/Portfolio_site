'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ContactProps {
  theme: 'light' | 'dark';
}

const ContactSection = styled.section`
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

const ContactInfo = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconContainer = styled.div<{ $mode: 'light' | 'dark' }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3<{ $mode: 'light' | 'dark' }>`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  margin-bottom: 5px;
`;

const InfoText = styled.p<{ $mode: 'light' | 'dark' }>`
  font-size: 1rem;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  opacity: 0.8;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled(motion.a)<{ $mode: 'light' | 'dark' }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
`;

const ContactForm = styled(motion.form)<{ $mode: 'light' | 'dark' }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${props => props.$mode === 'light' 
    ? 'white' 
    : 'var(--secondary-dark)'};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label<{ $mode: 'light' | 'dark' }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
`;

const Input = styled(motion.input)<{ $mode: 'light' | 'dark' }>`
  padding: 12px 15px;
  border-radius: 8px;
  border: 2px solid ${props => props.$mode === 'light' 
    ? 'rgba(0, 0, 0, 0.1)' 
    : 'rgba(255, 255, 255, 0.1)'};
  background-color: ${props => props.$mode === 'light' 
    ? 'white' 
    : 'rgba(30, 30, 30, 0.5)'};
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$mode === 'light' 
      ? 'var(--primary-light)' 
      : 'var(--primary-dark)'};
  }
`;

const Textarea = styled(motion.textarea)<{ $mode: 'light' | 'dark' }>`
  padding: 12px 15px;
  border-radius: 8px;
  border: 2px solid ${props => props.$mode === 'light' 
    ? 'rgba(0, 0, 0, 0.1)' 
    : 'rgba(255, 255, 255, 0.1)'};
  background-color: ${props => props.$mode === 'light' 
    ? 'white' 
    : 'rgba(30, 30, 30, 0.5)'};
  color: ${props => props.$mode === 'light' 
    ? 'var(--text-light)' 
    : 'var(--text-dark)'};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$mode === 'light' 
      ? 'var(--primary-light)' 
      : 'var(--primary-dark)'};
  }
`;

const SubmitButton = styled(motion.button)<{ $mode: 'light' | 'dark' }>`
  padding: 12px 30px;
  border-radius: 50px;
  background-color: ${props => props.$mode === 'light' 
    ? 'var(--primary-light)' 
    : 'var(--primary-dark)'};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: none;
  }
`;

const SuccessMessage = styled(motion.div)<{ $mode: 'light' | 'dark' }>`
  padding: 15px;
  background-color: ${props => props.$mode === 'light' 
    ? 'rgba(56, 178, 172, 0.1)' 
    : 'rgba(3, 218, 198, 0.1)'};
  color: ${props => props.$mode === 'light' 
    ? 'var(--accent-light)' 
    : 'var(--accent-dark)'};
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
`;

// Social media icons
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a mailto link with the form data
    const mailtoLink = `mailto:panigrahibalram16@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
  
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const inputVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
    focus: {
      scale: 1.01,
      borderColor: theme === 'light' ? 'var(--primary-light)' : 'var(--primary-dark)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };
  
  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.1 * i
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };
  
  return (
    <ContactSection id="contact">
      <SectionTitle 
        $mode={theme}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        Get In Touch
      </SectionTitle>
      
      <SectionDescription 
        $mode={theme}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Feel free to reach out to me for any questions, project inquiries, or just to say hello. I'm always open to new opportunities and collaborations.
      </SectionDescription>
      
      <ContentContainer>
        <ContactInfo
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <InfoItem variants={itemVariants}>
            <IconContainer $mode={theme}>📧</IconContainer>
            <InfoContent>
              <InfoTitle $mode={theme}>Email</InfoTitle>
              <InfoText $mode={theme}>panigrahibalram16@gmail.com</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem variants={itemVariants}>
            <IconContainer $mode={theme}>📱</IconContainer>
            <InfoContent>
              <InfoTitle $mode={theme}>Phone</InfoTitle>
              <InfoText $mode={theme}>+91 8484965844</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem variants={itemVariants}>
            <IconContainer $mode={theme}>📍</IconContainer>
            <InfoContent>
              <InfoTitle $mode={theme}>Location</InfoTitle>
              <InfoText $mode={theme}>Mumbai, India</InfoText>
            </InfoContent>
          </InfoItem>
          
          <SocialLinks variants={containerVariants}>
            <SocialLink 
              href="https://github.com/balram16"
              target="_blank"
              rel="noopener noreferrer"
              $mode={theme}
              custom={0}
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/in/balramp16"
              target="_blank"
              rel="noopener noreferrer"
              $mode={theme}
              custom={1}
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialLink>
            <SocialLink 
              href="https://instagram.com/balram.panigrahi"
              target="_blank"
              rel="noopener noreferrer"
              $mode={theme}
              custom={2}
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm
          $mode={theme}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <FormGroup variants={itemVariants}>
            <Label $mode={theme}>Name</Label>
            <Input 
              type="text" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              $mode={theme}
              variants={inputVariants}
              whileFocus="focus"
            />
          </FormGroup>
          
          <FormGroup variants={itemVariants}>
            <Label $mode={theme}>Email</Label>
            <Input 
              type="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              $mode={theme}
              variants={inputVariants}
              whileFocus="focus"
            />
          </FormGroup>
          
          <FormGroup variants={itemVariants}>
            <Label $mode={theme}>Subject</Label>
            <Input 
              type="text" 
              name="subject" 
              required 
              value={formData.subject}
              onChange={handleChange}
              $mode={theme}
              variants={inputVariants}
              whileFocus="focus"
            />
          </FormGroup>
          
          <FormGroup variants={itemVariants}>
            <Label $mode={theme}>Message</Label>
            <Textarea 
              name="message" 
              required 
              value={formData.message}
              onChange={handleChange}
              $mode={theme}
              variants={inputVariants}
              whileFocus="focus"
            />
          </FormGroup>
          
          <SubmitButton 
            type="submit"
            $mode={theme}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send Message
          </SubmitButton>
          
          {isSubmitted && (
            <SuccessMessage 
              $mode={theme}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            >
              Email client opened! If nothing happened, please check your browser settings or email me directly at panigrahibalram16@gmail.com
            </SuccessMessage>
          )}
        </ContactForm>
      </ContentContainer>
    </ContactSection>
  );
};

export default Contact; 