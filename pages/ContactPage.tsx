
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionHeading title="Get in Touch" subtitle="Have a question or want to work together? Let's connect." centered />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I'm usually responsive within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-bold">contact@kruthik.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-bold">Bengaluru, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Socials</h3>
              <div className="flex gap-4">
                <a href="#" className="p-4 bg-gray-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-2xl transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/kruth-s" className="p-4 bg-gray-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-2xl transition-all">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-8 md:p-12 rounded-[3rem] shadow-xl shadow-indigo-500/5">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-8">Thank you for reaching out. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-indigo-600 font-bold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold ml-1">Full Name</label>
                      <input 
                        required
                        id="name"
                        type="text" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold ml-1">Email Address</label>
                      <input 
                        required
                        id="email"
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold ml-1">Your Message</label>
                    <textarea 
                      required
                      id="message"
                      rows={6}
                      placeholder="Hi Kruthik, I'd like to talk about..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
