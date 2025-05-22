import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/resume';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <Container>
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me a little better"
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            {personalInfo.about}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;