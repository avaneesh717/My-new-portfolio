import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, FileText, ArrowDown } from 'lucide-react';
import './Hero.css';
import profilePic from '../assets/profile-pic.webp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
  },
};

const Hero = () => {
  return (
    <section id="home" className="hero-section section-container">
      <div className="hero-content">
        {/* Left: Text Content */}
        <motion.div
          className="hero-text-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-greeting" variants={itemVariants}>
            Hello, I'm
          </motion.span>

          <motion.h1 className="hero-name" variants={itemVariants}>
            <span className="name-text">Avaneesh gaykar</span>
          </motion.h1>

          <motion.h2 className="hero-title" variants={itemVariants}>
            <span className="title-text">Software Developer</span>
          </motion.h2>

          <motion.div className="hero-actions" variants={itemVariants}>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/avaneesh-gaykar-667627292/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/avaneesh717" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <Github size={20} />
              </a>
              <a href="/src/assets/resume-newest.pdf" target="_blank" rel="noopener noreferrer" className="social-icon" title="Resume">
                <FileText size={20} />
              </a>
            </div>
            <a href="#skills" className="btn btn-primary hero-cta">
              Explore More <ArrowDown size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="hero-image-col"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="image-wrapper">
            <img src={profilePic} alt="Avaneesh Gaykar" className="profile-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
