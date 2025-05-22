import { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import LearningSection from './components/sections/LearningSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';

function App() {

  // const [CursorX, SetCursorX] = useState(0);
  // const [CursorY, SetCursorY] = useState(0);

  useEffect(() => {
    document.title = "Harshil Upadhyay | Portfolio";
  }, []);

  // useGSAP(() => {
  //   gsap.to('.cursor', {
  //     x: CursorX,
  //     y: CursorY,
  //     duration: 0.1,
  //   })
  // } , [CursorX, CursorY]);

  // window.addEventListener('mousemove', (e) => {
  //   SetCursorX(e.x);
  //   SetCursorY(e.y);
  // })

  return (
    <div className="min-h-screen bg-white">
      {/* <div className="cursor"></div> */}
      <Header/>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <LearningSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;