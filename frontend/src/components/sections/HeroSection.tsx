import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import Container from '../ui/Container';
import { personalInfo } from '../../data/resume';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection: React.FC = () => {

  useGSAP(() => {
    gsap.from('.WordAnimation', {
      y: 100,
      x: -50,
      opacity: 0,
      duration:0.2,
      scale: 2,
      ease: 'power2.out',
      stagger: 0.1,
      delay: 2,
    });
  });

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            {/* {personalInfo.name} */}
            {personalInfo.name.split('').map((word, index) => (
              <span
                key={index}
                className='WordAnimation inline-block'
              >
                {word}
                
              </span>
            ))}
          </h1>
          <h2 className="text-xl sm:text-2xl text-indigo-600 font-medium mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-gray-700 max-w-2xl mb-8">
            {personalInfo.intro}
          </p>
          
          <div className="flex space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="logoLink p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="logoLink p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="logoLink p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;