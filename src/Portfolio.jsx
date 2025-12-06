import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, 
  Terminal, Database, Cpu, Globe, Layout 
} from 'lucide-react';

const PORTFOLIO = {
  name: "Aditya Ramadhana",
  role: "Junior Frontend Developer",
  about: "I am a Computer Science fresh graduate based in Indonesia. I am currently focusing on mastering the fundamentals of React.js and modern CSS to build clean and responsive web applications.",
  skills: [
    { name: "React.js", icon: <Code2 size={20} /> },
    { name: "JavaScript", icon: <Terminal size={20} /> },
    { name: "Tailwind CSS", icon: <Layout size={20} /> },
    { name: "HTML5 & CSS3", icon: <Globe size={20} /> },
    { name: "Git Basics", icon: <Cpu size={20} /> },
  ],
  projects: [
    {
      title: "Simple Todo List",
      description: "A clean productivity app to manage daily tasks. Practice React State Management (CRUD).",
      tech: ["React", "useState", "Tailwind CSS"],
      demo: "/todo" 
    },
    {
      title: "Personal Budget Tracker",
      description: "An expense tracking application that calculates total balance dynamically.",
      tech: ["React", "JavaScript Logic", "Responsive UI"],
      demo: "/budget"
    },
    {
      title: "IndoLink (Linktree Clone)",
      description: "A fully responsive landing page acting as a central hub for social media profiles.",
      tech: ["React", "CSS Modules", "Framer Motion"],
      demo: "/indolink"
    }
  ]
};


const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100">
    <span className="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
      {children}
    </span>
  </h2>
);

const RevealOnScroll = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-primary-400">
            {PORTFOLIO.name}<span className="text-slate-100">.dev</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-300 hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute top-20 right-[-100px] w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[-100px] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary-400 font-medium mb-4 tracking-wide">HELLO</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
            I'm {PORTFOLIO.name} <br />
            <span className="text-slate-500"> I build interactive <br/>web applications.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10">
            {PORTFOLIO.role} Informatics Graduate based in Indonesia.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-primary-500 hover:bg-primary-400 text-slate-950 font-semibold rounded-lg transition-all transform hover:scale-105">
              View My Work
            </a>
            <a href="#" className="px-8 py-3 border border-slate-700 hover:border-primary-400 text-slate-300 hover:text-primary-400 font-semibold rounded-lg transition-all">
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          <SectionTitle>About Me</SectionTitle>
          <div className="flex flex-col md:flex-row items-center gap-10">            
            <div className="w-48 h-48 shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-emerald-500 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
              <div className="relative w-full h-full bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <img 
                  src="./profile.png"  
                  alt="Profile Picture"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>{PORTFOLIO.about}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <SectionTitle>Tech Stack</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {PORTFOLIO.skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-colors"
              >
                <div className="text-primary-400 mb-3">{skill.icon}</div>
                <span className="text-slate-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.projects.map((project, index) => (
              <div key={index} className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-primary-400 group-hover:text-white group-hover:bg-primary-500 transition-colors">
                    <Code2 size={24} />
                  </div>
                  <div className="flex gap-3">
                    <Link to={project.demo} className="text-slate-400 hover:text-primary-400 transition-colors">
                      <ExternalLink size={20} />
                    </Link>
                    
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-primary-400 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <RevealOnScroll>
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="text-slate-400 mb-10">
            I'm currently looking for new opportunities as a Junior Developer. 
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/adityar2811" className="text-slate-400 hover:text-primary-400 transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/aditya-ramadhana-4776b6391/" className="text-slate-400 hover:text-primary-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors"><Mail size={24} /></a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-6 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
      <p>Designed & Built by {PORTFOLIO.name} © 2024</p>
    </footer>
  );
};


export default function Portfolio() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-primary-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}