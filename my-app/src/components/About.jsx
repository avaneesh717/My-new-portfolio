import React from 'react';
import './About.css';
import aboutImg from '../assets/about-pic.webp';

const About = () => {
  return (
    <section id="about" className="about-section section-container">
      <div className="about-content">
        
        {/* Left: Image Box */}
        <div className="about-image-col">
          <div className="about-image-wrapper glass-panel">
            <img src={aboutImg} alt="About me workspace" className="about-img" />
          </div>
        </div>

        {/* Right: Text Box */}
        <div className="about-text-col">
          <div className="about-text-wrapper">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I’m a passionate developer skilled in programming and problem-solving, with a strong focus on building clean, user-friendly solutions. 
              Alongside my technical expertise, I bring experience in digital marketing and UI/UX design, ensuring every product is both visually engaging 
              and conversion-driven. I’m also proficient in data automation, helping streamline workflows and enhance productivity through smart, scalable solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
