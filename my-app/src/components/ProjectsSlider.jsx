import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjectsSlider.css';

import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';

const projects = [
  {
    title: "Urban Pulse",
    image: project4,
    desc: "Full-stack smart city platform enabling users to submit and geotag urban issues with images, supporting real-time data capture and visualisation.",
    github: "https://github.com/avaneesh717/smart-city-mapper"
  },
  {
    title: "QuickChat-Chat App",
    image: project1,
    desc: "A real-time MERN web application featuring end-to-end image sharing and chat functionality.",
    github: "https://github.com/avaneesh717/Quickchat"
  },
  {
    title: "SummarizeTube",
    image: project2,
    desc: "An AI powered summarizer of Youtube videos.",
    github: "https://github.com/avaneesh717/youtube-transcript-summarizer"
  },
  {
    title: "Webscraper",
    image: project3,
    desc: "A full stack web scraping application, built using React, styled with Tailwind CSS, and authenticated with Google OAuth. It allows users to log in and enter any URL to fetch clean, structured content from that page via the backend FastAPI service.",
    github: "https://github.com/avaneesh717/webscraper-frontend"
  }
];

const ProjectsSlider = () => {
  return (
    <section id="projects" className="projects-section section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className="slider-container glass-panel">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ 
            clickable: true,
            el: '.custom-pagination' 
          }}
          loop={false}
          initialSlide={0}
          centeredSlides={false}
          autoplay={false}
          mousewheel={false}
          keyboard={false}
          breakpoints={{
            768: { slidesPerView: 2 }
          }}
          className="mySwiper"
        >
          {projects.map((proj, idx) => (
            <SwiperSlide key={idx}>
              <div className="project-card glass-panel">
                <div className="project-img-wrapper">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                </div>
                <div className="project-info">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline github-link">
                    <Github size={18} /> View Code
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-pagination"></div>
    </section>
  );
};

export default ProjectsSlider;
