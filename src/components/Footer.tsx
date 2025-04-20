
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Manish Kumar</h3>
            <p className="text-blue-200 mt-1">Data-Driven Innovator & Supply Chain Optimizer</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:manish@example.com" 
               className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Manish Kumar. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#about" className="text-blue-200 hover:text-white text-sm mb-2 md:mb-0">About</a>
            <a href="#projects" className="text-blue-200 hover:text-white text-sm mb-2 md:mb-0">Projects</a>
            <a href="#thought-leadership" className="text-blue-200 hover:text-white text-sm mb-2 md:mb-0">Articles</a>
            <a href="#contact" className="text-blue-200 hover:text-white text-sm mb-2 md:mb-0">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
