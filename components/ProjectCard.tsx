
import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl text-indigo-600 dark:text-indigo-400">
          <Github className="w-6 h-6" />
        </div>
        <div className="flex space-x-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span 
            key={tag} 
            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={project.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-3 gap-2 transition-all"
      >
        View Source <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};
