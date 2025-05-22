import React from 'react';
import { School, Calendar } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { education } from '../../data/resume';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <Container>
        <SectionHeading 
          title="Education" 
          subtitle="My academic background"
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="relative pl-8 border-l-2 border-indigo-200 pb-8"
              >
                {/* Circle indicator */}
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-600"></div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <School size={20} className="text-indigo-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                  </div>
                  
                  <div className="mb-2">
                    <h4 className="text-lg font-medium text-gray-800">{edu.degree} in {edu.fieldOfStudy}</h4>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  
                  {edu.description && (
                    <p className="text-gray-700">{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;