import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text relative selection:bg-primary/20 selection:text-white">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-background font-bold text-xs rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Subtle Pointer Custom Cursor */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
