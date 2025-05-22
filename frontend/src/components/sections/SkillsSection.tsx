import React, { useEffect, useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import SkillBar from '../ui/SkillBar';
import { skills } from '../../data/resume';
import { Skill } from '../../types';

type Category = 'all' | 'frontend' | 'backend' | 'mobile' | 'language' | 'other';

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);
  
  // Filter skills when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'language', label: 'Languages' },
    { value: 'other', label: 'Other' },
  ];
  
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <Container>
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies I work with"
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;