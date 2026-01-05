
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Terminal, Cloud, Cpu, Database } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS, SKILLS } from '../constants';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="relative mb-8 p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
            <img 
              src="https://avatars.githubusercontent.com/u/213943793?v=4" 
              alt="Kruthik S" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-dark-bg object-cover"
            />
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700">
              <span className="text-xl">👋</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Hi, I'm Kruthik S
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-8 flex flex-wrap justify-center gap-x-4">
            <span>Backend</span> • <span>Cloud</span> • <span>DevOps</span> • <span>AI</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl">
            Computer Science undergraduate passionate about building scalable backends, 
            intelligent AI pipelines, and seamless cloud deployments.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/projects" 
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold shadow-xl shadow-indigo-500/20 transition-all flex items-center gap-2 group"
            >
              View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/kruth-s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="/contact" 
                className="p-4 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const [counts, setCounts] = useState({ exp: 0, hours: 0, projects: 0 });

  useEffect(() => {
    const targets = { exp: 1, hours: 500, projects: 10 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        exp: Math.min(targets.exp, Math.floor((targets.exp / steps) * currentStep)),
        hours: Math.min(targets.hours, Math.floor((targets.hours / steps) * currentStep)),
        projects: Math.min(targets.projects, Math.floor((targets.projects / steps) * currentStep)),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const statItems = [
    { label: 'Years of Experience', value: `${counts.exp}+`, icon: <Terminal /> },
    { label: 'Hours of Building', value: `${counts.hours}+`, icon: <Cloud /> },
    { label: 'Projects Done', value: `${counts.projects}+`, icon: <Cpu /> },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-600">
                {item.value}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Who am I?" />
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              I'm a final-year CS student with a deep fascination for how complex systems interact. 
              Whether it's optimizing a database query, architecting a cloud-native microservice, 
              or implementing a cutting-edge AI model, I thrive on solving difficult technical problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              Currently seeking SDE internship roles where I can contribute to meaningful products and 
              learn from world-class engineering teams.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Backend APIs', desc: 'Robust and scalable REST/GraphQL services.' },
                { title: 'Cloud Deployments', desc: 'CI/CD and infrastructure orchestration.' },
                { title: 'AI Pipelines', desc: 'Practical implementation of Gen-AI models.' },
                { title: 'Web3 / Blockchain', desc: 'Decentralized solutions and smart contracts.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[3rem] rotate-3 opacity-10 absolute inset-0" />
            <div className="aspect-square bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-[3rem] p-8 shadow-2xl relative z-10 overflow-hidden flex items-center justify-center">
               <div className="text-center">
                  <div className="flex justify-center gap-4 mb-8">
                     <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center animate-bounce delay-75">
                        <Terminal className="text-indigo-500" />
                     </div>
                     <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center animate-bounce delay-150">
                        <Database className="text-indigo-500" />
                     </div>
                     <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center animate-bounce delay-300">
                        <Cloud className="text-indigo-500" />
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tech Focused</h3>
                  <p className="text-gray-500">I don't just write code; I design systems.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-slate-900/50 scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Arsenal" subtitle="Technologies and tools I use to bring ideas to life." centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium border border-gray-100 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading title="Featured Work" subtitle="A selection of my most impactful projects." />
          <Link to="/projects" className="mb-12 group flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
            View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
              Want to collaborate or hire me?
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:contact@kruthik.dev" 
                className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-3"
              >
                <Mail className="w-6 h-6" /> Say Hello
              </a>
              <a 
                href="#" 
                className="px-10 py-5 bg-indigo-700 text-white border border-indigo-400/30 rounded-full font-bold text-lg hover:bg-indigo-800 transition-colors flex items-center gap-3"
              >
                <Linkedin className="w-6 h-6" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
};
