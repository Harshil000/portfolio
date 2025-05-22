import React from 'react';
import { Award, Music, Piano, Code2 } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { achievements, hobbies } from '../../data/resume';

const AchievementsSection: React.FC = () => {
  // Function to get the appropriate icon component
  const getHobbyIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Music':
        return <Music size={24} className="text-indigo-600" />;
      case 'Piano':
        return <Piano size={24} className="text-indigo-600" />;
      case 'Code2':
        return <Code2 size={24} className="text-indigo-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <SectionHeading 
              title="Achievements" 
              subtitle="Recognition and awards"
            />
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Award size={20} className="text-yellow-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-700 mb-2">{achievement.description}</p>
                      <div className="text-sm text-gray-500">{achievement.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hobbies */}
          <div>
            <SectionHeading 
              title="Hobbies & Interests" 
              subtitle="What I enjoy in my free time"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow transition-all duration-300 hover:shadow-md flex items-center"
                >
                  <div className="flex-shrink-0">
                    {getHobbyIcon(hobby.icon)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {hobby.name}
                    </h3>
                    {hobby.description && (
                      <p className="text-gray-700 text-sm mt-1">{hobby.description}</p>
                    )}
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

export default AchievementsSection;