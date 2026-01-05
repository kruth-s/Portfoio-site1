
import { Project, BlogPost, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'TextSummarizer',
    description: 'An advanced NLP-based tool for generating concise summaries of lengthy articles.',
    tags: ['Python', 'NLP', 'Transformers'],
    githubUrl: 'https://github.com/kruth-s/TextSummarizer',
    category: 'AI'
  },
  {
    id: '2',
    title: 'FinSmart',
    description: 'A personal finance management system with intelligent expense tracking and insights.',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/kruth-s/FinSmart',
    category: 'Backend'
  },
  {
    id: '3',
    title: 'Digital-Rights-AI',
    description: 'AI-powered framework for monitoring and protecting digital content rights online.',
    tags: ['Python', 'AI', 'Cloud'],
    githubUrl: 'https://github.com/kruth-s/Digital-Rights-AI',
    category: 'AI'
  },
  {
    id: '4',
    title: 'CrowdFunding-Dapp',
    description: 'Decentralized application for crowdfunding built on Ethereum blockchain.',
    tags: ['Solidity', 'Ethereum', 'React'],
    githubUrl: 'https://github.com/kruth-s/CrowdFunding-Dapp-solidity',
    category: 'Blockchain'
  },
  {
    id: '5',
    title: 'AI-Powered-Image-Tagging',
    description: 'Automated image tagging using generative vision-language models.',
    tags: ['Vision-AI', 'Python', 'API'],
    githubUrl: 'https://github.com/kruth-s/AI-Powered-Image-Tagging-using-Generative-Vision-Language-Models',
    category: 'AI'
  },
  {
    id: '6',
    title: 'NutriFit360',
    description: 'Comprehensive health and nutrition tracking platform for fitness enthusiasts.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    githubUrl: 'https://github.com/kruth-s/NutriFit360',
    category: 'Frontend'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Solidity']
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind']
  },
  {
    category: 'Cloud/DevOps',
    items: ['Docker', 'GitHub Actions', 'Vercel', 'Netlify', 'Linux', 'AWS']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Backend Engineering in 2024',
    excerpt: 'A deep dive into the essential stack for modern backend developers, from Go to Node.js.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Engineering',
    slug: 'backend-engineering-2024'
  },
  {
    id: '2',
    title: 'Deploying Scalable AI Models with Docker',
    excerpt: 'How to containerize your machine learning models for consistent deployment across environments.',
    date: 'February 28, 2024',
    readTime: '8 min read',
    category: 'DevOps',
    slug: 'ai-docker-deployment'
  },
  {
    id: '3',
    title: 'Understanding Smart Contracts on Ethereum',
    excerpt: 'An introduction to Solidity and building decentralized applications.',
    date: 'January 10, 2024',
    readTime: '12 min read',
    category: 'Web3',
    slug: 'solidity-basics'
  }
];
