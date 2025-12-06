import React from 'react';
import { Github, Linkedin, Instagram, Globe } from 'lucide-react';

const IndoLink = () => {
  const links = [
    { name: "Portfolio Website", url: "https://adityar2811.github.io/my-portfolio/", icon: <Globe size={18}/>, color: "bg-blue-600" },
    { name: "GitHub Profile", url: "https://github.com/adityar2811", icon: <Github size={18}/>, color: "bg-slate-800" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aditya-ramadhana-4776b6391/", icon: <Linkedin size={18}/>, color: "bg-blue-700" },
    { name: "Instagram", url: "https://www.instagram.com/adityaramadhana67/", icon: <Instagram size={18}/>, color: "bg-pink-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        
        {/* Profile Section */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 border-4 border-indigo-500 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full object-cover"/> 
          </div>
          <h1 className="text-2xl font-bold text-white">Aditya Ramadhana</h1>
          <p className="text-indigo-200">Junior Frontend Developer</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              className={`flex items-center justify-center gap-3 w-full p-4 rounded-xl text-white font-semibold transition-transform hover:scale-105 hover:shadow-xl ${link.color}`}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        <footer className="mt-12 text-slate-500 text-sm">
          © 2025 IndoLink by Adit
        </footer>

      </div>
    </div>
  );
};

export default IndoLink;