import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ExperienceSlider.css';

import company1 from '../assets/mystic_panels_logo.jpeg';
import company2 from '../assets/stealth_design_logo.jpeg';
import company3 from '../assets/1720340023670.jpeg';
import company4 from '../assets/1755946100632.jpeg';

const experiences = [
  {
    logo: company3,
    role: "Founding Software Developer",
    company: "The Artonaut",
    dates: "Dec 2025 - Mar 2026",
    points: [
      "Sole full-stack developer for the flagship AI platform, extending an existing Supabase + Cloudflare stack by designing and building major product features, workflows, and database updates.",
      "Integrated 21+ AI model APIs by creating a unified payload abstraction layer and adapter logic, enabling seamless multi-model image generation in a single interface.",
      "Developed a full image editing suite (expand, crop, upscale, visual edit) while maintaining token tracking, image history, and request-based processing pipelines.",
      "Expanded core product areas, including image generation and workflow tabs, implementing responsive UI and mobile optimization."
    ]
  },
  {
    logo: company1,
    role: "Data Engineer",
    company: "Mystic Panels and Planks",
    dates: "Apr 2025 - July 2025",
    points: [
      "Created internal web dashboards using HTML, CSS and JavaScript improving data visibility and enabling 30% faster team reporting.",
      "Transformed the lead qualification process by automating data enrichment with Google Apps Script, leading to an 10% increase in qualified leads passed to sales.",
      "Built custom internal tools to solve organisation specific problems, applying software engineering principles such as modular design, code reusability and maintainability.",
      "Developed small scale data integration pipelines connecting Tally Prime with Google Sheets using SQL and GCP services, gaining hands on experience with cloud based data processing and ETL concepts."
    ]
  },
  {
    logo: company2,
    role: "Digital Marketing Intern",
    company: "Stealth",
    dates: "July 2024 - Dec 2024",
    points: [
      "Managed and updated content across 5 production websites, ensuring high availability, consistent UI/UX and smooth deployment workflows.",
      "Led SEO optimisation, layout design and content strategy, applying front end development principles to deliver cohesive, user centered experiences.",
      "Made front-end improvements and component updates using WordPress (Elementor), Umbraco and Figma, enhancing maintainability and design consistency.",
      "Contributed to large-scale web development projects, integrating marketing, design, and engineering workflows to deliver scalable and performant website features."
    ]
  },
  {
    logo: company4,
    role: "IEEE Techithon Asst. Publicity Head",
    company: "IEEE Techithon",
    dates: "Aug 2023 - Oct 2023",
    points: [
      "Updated and maintained the company-wide database of contacts and resources for improved distribution.",
      "Developed and coordinated after-school programs and activities to enhance participant engagement.",
      "Designed and published social media content (posts/reels) to increase reach and managed publicity campaigns to grow online presence."
    ]
  }
];

const ExperienceSlider = () => {
  return (
    <section id="experience" className="experience-section section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className="slider-container glass-panel">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={false}
          initialSlide={0}
          centeredSlides={false}
          autoplay={false}
          mousewheel={false}
          keyboard={false}
          className="mySwiper"
        >
          {experiences.map((exp, idx) => (
            <SwiperSlide key={idx}>
              <div className="experience-card glass-panel">
                <div className="company-logo-wrapper">
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                </div>
                <div className="experience-info">
                  <h3>{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-dates">{exp.dates}</p>
                  <ul className="experience-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExperienceSlider;
