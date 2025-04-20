import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen pt-28 pb-16 px-4 flex flex-col justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Data-Driven <span className="text-primary">Innovator</span> & Supply Chain <span className="text-primary">Optimizer</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              MBA at Babson | Civil Engineer | Sustainability Enthusiast | Circular Economy Strategist
            </p>

            <div className="flex flex-wrap gap-4 py-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-6 bg-primary"></div>
                <p className="font-medium">5+ years of experience</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-6 bg-primary"></div>
                <p className="font-medium">10+ projects</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-6 bg-primary"></div>
                <p className="font-medium">2 sustainability ventures</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="font-medium" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToProjects}>
                View My Work
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-blue-200 rounded-full blur-3xl opacity-20 transform -translate-x-10"></div>
              <div className="bg-white p-2 rounded-full shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" 
                  alt="Manish Kumar Singh"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg px-4 py-2">
                <p className="font-medium text-sm">MBA @ Babson College</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <Button variant="ghost" size="icon" onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}>
            <ArrowDown />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
