
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Github, Linkedin } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-indigo-600 flex items-center justify-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors mb-12">
          <ArrowLeft className="w-5 h-5" /> Back to Articles
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6">
             <span className="bg-indigo-600 text-white px-4 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-8 border-y border-gray-100 dark:border-slate-800">
             <div className="flex items-center gap-4">
                <img src="https://avatars.githubusercontent.com/u/213943793?v=4" className="w-12 h-12 rounded-full" alt="Author" />
                <div>
                   <p className="font-bold">Kruthik S</p>
                   <p className="text-sm text-gray-500">Developer & Author</p>
                </div>
             </div>
             <div className="flex gap-4">
                <button className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:text-indigo-600 transition-colors"><Share2 className="w-5 h-5"/></button>
                <button className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:text-indigo-600 transition-colors"><Linkedin className="w-5 h-5"/></button>
             </div>
          </div>
        </header>

        <div className="prose prose-lg prose-indigo dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 italic">
            This is a placeholder for the blog content. In a production environment, this would likely be rendered from MDX or a CMS.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-6">Section One: Introduction</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="my-12 p-8 bg-slate-900 text-slate-100 rounded-3xl font-mono text-sm overflow-x-auto">
            <pre><code>{`function example() {
  const tech = "Next.js + TypeScript";
  console.log(\`Building with \${tech} is amazing!\`);
}

example();`}</code></pre>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </article>
  );
};
