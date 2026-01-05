
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Bookmark } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { BLOG_POSTS } from '../constants';

export const BlogPage: React.FC = () => {
  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionHeading title="The Dev Blog" subtitle="Thoughts, tutorials and insights from my journey in tech." centered />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col space-y-8">
          {BLOG_POSTS.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold group-hover:gap-4 transition-all">
                Read Full Article <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
