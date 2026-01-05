
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'Frontend' | 'Backend' | 'AI' | 'DevOps' | 'Blockchain';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export interface Skill {
  category: string;
  items: string[];
}
