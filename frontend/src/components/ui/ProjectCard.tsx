import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Button from './Button';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <div className={`bg-white shadow rounded-lg overflow-hidden ${className}`}>
      {project.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
          <ul className="list-disc pl-5 text-gray-600 text-sm">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <Github size={16} className="mr-1" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;