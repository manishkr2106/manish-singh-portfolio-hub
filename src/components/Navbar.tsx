import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-poppins font-bold text-primary">
          Manish <span className="text-foreground">Kumar</span>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('resume')} className="text-foreground hover:text-primary transition-colors">
            Resume & Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('thought-leadership')} className="text-foreground hover:text-primary transition-colors">
            Thought Leadership
          </button>
          <button onClick={() => scrollToSection('startup')} className="text-foreground hover:text-primary transition-colors">
            Startup Lab
          </button>
          <button onClick={() => scrollToSection('skill-journal')} className="text-foreground hover:text-primary transition-colors">
            Skill Journal
          </button>
          <Button onClick={() => scrollToSection('contact')} className="ml-2">
            Contact Me
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="py-2 text-left text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('resume')} className="py-2 text-left text-foreground hover:text-primary transition-colors">
              Resume & Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="py-2 text-left text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('thought-leadership')} className="py-2 text-left text-foreground hover:text-primary transition-colors">
              Thought Leadership
            </button>
            <button onClick={() => scrollToSection('startup')} className="py-2 text-left text-foreground hover:text-primary transition-colors">
              Startup Lab
            </button>
            <button onClick={() => scrollToSection('skill-journal')} className="py-2 text-left text-foreground hover:text-primary transition-colors">
              Skill Journal
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full mt-4">
              Contact Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
