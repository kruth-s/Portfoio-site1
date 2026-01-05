
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initial theme setup
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-border py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
          Kruthik<span className="text-gray-900 dark:text-white">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-indigo-500 ${
                location.pathname === link.path 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <a 
              href="#" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-500/20"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600 dark:text-gray-300">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border py-6 px-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={handleLinkClick}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-indigo-500' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="#" className="bg-indigo-600 text-white px-5 py-3 rounded-xl text-center font-medium">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Kruthik<span className="text-indigo-500">S</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Building the future of software with clean code and AI.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/kruth-s" className="text-gray-400 hover:text-indigo-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@kruthik.dev" className="text-gray-400 hover:text-indigo-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Kruthik S. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 selection:bg-indigo-500/30">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
