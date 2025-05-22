import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { currentLearning, learnedSkills } from '../../data/resume';

const LearningSection: React.FC = () => {
  return (
    <section id="learning" className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Current Learning */}
          <div>
            <SectionHeading 
              title="Currently Learning" 
              subtitle="What I'm focusing on now"
            />
            
            <div className="space-y-6">
              {currentLearning.map((item, index) => (
                <div 
                  key={index}
                  className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-2">
                    <Clock size={18} className="text-indigo-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    Started: {new Date(item.startDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Learned Skills */}
          <div>
            <SectionHeading 
              title="Skills Acquired" 
              subtitle="What I've accomplished"
            />
            
            <div className="space-y-6">
              {learnedSkills.map((item, index) => (
                <div 
                  key={index}
                  className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-2">
                    <CheckCircle size={18} className="text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    {new Date(item.startDate).toLocaleDateString()} - {item.endDate ? new Date(item.endDate).toLocaleDateString() : 'Present'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LearningSection;