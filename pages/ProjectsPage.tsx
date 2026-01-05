
import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'AI', 'DevOps', 'Blockchain'] as const;

export const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionHeading title="All Projects" subtitle="A collection of technical challenges I've tackled across various domains." centered />
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by tech or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
            />
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-slate-900 rounded-[3rem]">
            <div className="mb-6 inline-flex p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg">
              <Filter className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};
