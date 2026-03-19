import React from 'react';
import './Skills.css';

const skillsData = [
  { category: "LANGUAGES", items: ["HTML", "CSS", "JavaScript", "Java (basic)", "Python (basic)", "Appscript", "Mysql (basic)", "Typescript"] },
  { category: "FRONTEND", items: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS (basic)", "Next.js"] },
  { category: "BACKEND", items: ["Node.js", "Express.js", "FastAPI"] },
  { category: "DATABASES", items: ["MongoDB", "PostgreSQL (basic)", "MySQL (basic)", "Supabase"] },
  { category: "DEVOPS & TOOLS", items: ["Git", "VS Code", "Vite", "Npm", "Google Big Query", "Cloudflare", "Google Cloud Platforms"] }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-container glass-panel">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-column">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="skill-item">
                  <span className="skill-dot"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
