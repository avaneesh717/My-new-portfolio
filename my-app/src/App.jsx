import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import ProjectsSlider from './components/ProjectsSlider';
import ExperienceSlider from './components/ExperienceSlider';
import Contact from './components/Contact';
import Background from './components/Background';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <About />
        <ProjectsSlider />
        <ExperienceSlider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
