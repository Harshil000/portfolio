import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/resume';
import { Project } from '../../types';

type ProjectCategory = 'all' | 'academic' | 'personal' | 'professional';

const ProjectsSection: React.FC = () => {
  const [category, setCategory] = useState<ProjectCategory>('all');
  
  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);
  
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'academic', label: 'Academic' },
    { value: 'personal', label: 'Personal' },
    { value: 'professional', label: 'Professional' },
  ];
  
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <Container>
        <SectionHeading 
          title="My Projects" 
          subtitle="Showcasing my work and experience"
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;