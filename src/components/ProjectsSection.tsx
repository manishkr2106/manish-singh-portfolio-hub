
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

type ProjectCategory = 'all' | 'business-analytics' | 'sustainability' | 'freelance' | 'academic';
type Project = {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory[];
  image: string;
  tools: string[];
  link?: string;
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Summit Maritime Supply Chain Optimization",
      description: "Developed a MILP model to optimize maritime transportation routes, reducing operational costs by 15% and carbon emissions by 22%.",
      category: ['business-analytics'],
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c1?auto=format&fit=crop&w=500&q=80",
      tools: ["Python", "Optimization", "Data Analysis"]
    },
    {
      id: 2,
      title: "ALDI Inventory Management System",
      description: "Redesigned inventory forecasting system using time-series analysis, improving stock accuracy by 18% across 25 store locations.",
      category: ['business-analytics'],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80",
      tools: ["Tableau", "Excel", "ARIMA"]
    },
    {
      id: 3,
      title: "Zara Supply Chain Efficiency Analysis",
      description: "Analyzed Zara's just-in-time supply chain model, identifying 3 critical bottlenecks and proposing solutions that reduced lead times by 20%.",
      category: ['business-analytics', 'sustainability'],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=80",
      tools: ["Process Mapping", "Statistical Analysis"]
    },
    {
      id: 4,
      title: "ChopValue Circular Economy Business Model",
      description: "Developed a scalable business model for ChopValue's circular economy approach to chopstick recycling, projecting 135% ROI over 5 years.",
      category: ['sustainability'],
      image: "https://images.unsplash.com/photo-1550096141-9a8c9868c7c4?auto=format&fit=crop&w=500&q=80",
      tools: ["Business Model Canvas", "Financial Modeling"]
    },
    {
      id: 5,
      title: "Zara CycleWorks Sustainability Initiative",
      description: "Created a closed-loop textile recycling program proposal for Zara, with implementation roadmap and potential for 40% material recovery.",
      category: ['sustainability', 'business-analytics'],
      image: "https://images.unsplash.com/photo-1523554888454-84137e72c3ce?auto=format&fit=crop&w=500&q=80",
      tools: ["Circular Design", "Stakeholder Analysis"]
    },
    {
      id: 6,
      title: "City of Boston Traffic Dashboard",
      description: "Freelance project designing interactive Tableau dashboard for city officials to monitor and optimize traffic patterns in real-time.",
      category: ['freelance'],
      image: "https://images.unsplash.com/photo-1484606067694-f2f9b209a216?auto=format&fit=crop&w=500&q=80",
      tools: ["Tableau", "SQL", "Data Visualization"]
    },
    {
      id: 7,
      title: "Water Resources Management System",
      description: "Academic research on optimizing water distribution networks using multi-objective optimization, balancing cost and resilience.",
      category: ['academic'],
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=500&q=80",
      tools: ["MATLAB", "Civil Engineering", "Optimization"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="section-padding bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through my diverse portfolio of work spanning business analytics, sustainability initiatives, 
            freelance projects, and academic research.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button 
            variant={activeFilter === 'all' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === 'business-analytics' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('business-analytics')}
          >
            Business Analytics
          </Button>
          <Button 
            variant={activeFilter === 'sustainability' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('sustainability')}
          >
            Sustainability
          </Button>
          <Button 
            variant={activeFilter === 'freelance' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('freelance')}
          >
            Freelance Work
          </Button>
          <Button 
            variant={activeFilter === 'academic' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('academic')}
          >
            Academic
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block mb-4">
              <Filter size={48} className="text-muted-foreground mx-auto" />
            </div>
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
